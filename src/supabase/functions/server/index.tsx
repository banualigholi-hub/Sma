import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2";
import * as kv from './kv_store.tsx';

const app = new Hono();

// Enable CORS for all routes
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

// Enable logging
app.use('*', logger(console.log));

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Get all messages from Chatloop
app.get('/make-server-2d22d872/messages', async (c) => {
  try {
    const messages = await kv.getByPrefix('message_');
    
    // Sort messages by timestamp
    const sortedMessages = messages
      .sort((a, b) => a.timestamp - b.timestamp)
      .slice(-100); // Return last 100 messages
    
    return c.json({ success: true, messages: sortedMessages });
  } catch (error) {
    console.log('Error fetching messages:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to fetch messages',
      details: String(error)
    }, 500);
  }
});

// Post a new message to Chatloop
app.post('/make-server-2d22d872/messages', async (c) => {
  try {
    const body = await c.req.json();
    const { username, text } = body;
    
    if (!username || !text) {
      return c.json({ 
        success: false, 
        error: 'Username and text are required' 
      }, 400);
    }
    
    const timestamp = Date.now();
    const messageId = `message_${timestamp}_${Math.random().toString(36).substr(2, 9)}`;
    
    const message = {
      id: messageId,
      username: username.trim(),
      text: text.trim(),
      timestamp
    };
    
    await kv.set(messageId, message);
    
    return c.json({ 
      success: true, 
      message 
    });
  } catch (error) {
    console.log('Error posting message:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to post message',
      details: String(error)
    }, 500);
  }
});

// Health check endpoint
app.get('/make-server-2d22d872/health', (c) => {
  return c.json({ status: 'ok', timestamp: Date.now() });
});

Deno.serve(app.fetch);
