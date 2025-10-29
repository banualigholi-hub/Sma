import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Message {
  id: string;
  username: string;
  text: string;
  timestamp: number;
}

interface ChatPageProps {
  onBack: () => void;
}

export function ChatPage({ onBack }: ChatPageProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');
  const [showUsernamePrompt, setShowUsernamePrompt] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isSending, setIsSending] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check for existing username in localStorage
  useEffect(() => {
    const savedUsername = localStorage.getItem('chatloop_username');
    if (savedUsername) {
      setUsername(savedUsername);
      setShowUsernamePrompt(false);
    }
  }, []);

  // Fetch messages
  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-2d22d872/messages`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      
      const data = await response.json();
      if (data.success) {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Fetch messages on mount and poll every 2 seconds
  useEffect(() => {
    if (!showUsernamePrompt) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 2000);
      return () => clearInterval(interval);
    }
  }, [showUsernamePrompt]);

  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('chatloop_username', username.trim());
      setShowUsernamePrompt(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim() || isSending) return;
    
    setIsSending(true);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-2d22d872/messages`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            text: newMessage.trim(),
          }),
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      const data = await response.json();
      if (data.success) {
        setNewMessage('');
        // Immediately fetch new messages
        await fetchMessages();
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('خطا در ارسال پیام. لطفا دوباره تلاش کنید.');
    } finally {
      setIsSending(false);
    }
  };

  if (showUsernamePrompt) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
        <div className="w-full max-w-sm">
          <h2 className="mb-2 text-center">به Chatloop خوش آمدید</h2>
          <p className="mb-6 text-center opacity-70">لطفا نام کاربری خود را وارد کنید</p>
          
          <form onSubmit={handleUsernameSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="نام کاربری"
              className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
              maxLength={20}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              ورود به چت
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <span className="text-white">C</span>
          </div>
          <div>
            <h3 className="text-[14px]">Chatloop</h3>
            <p className="text-[11px] opacity-50">گروه عمومی</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full opacity-50">
            <p>هنوز پیامی ارسال نشده است</p>
            <p className="text-[12px] mt-2">اولین پیام را ارسال کنید!</p>
          </div>
        ) : (
          messages.map((msg) => {
            const isOwnMessage = msg.username === username;
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isOwnMessage ? 'items-end' : 'items-start'}`}
              >
                {!isOwnMessage && (
                  <span className="text-[11px] opacity-50 mb-1 px-1">{msg.username}</span>
                )}
                <div
                  className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                    isOwnMessage
                      ? 'bg-blue-500 text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                  }`}
                >
                  <p className="text-[13px] break-words">{msg.text}</p>
                  <span className={`text-[10px] mt-1 block ${isOwnMessage ? 'opacity-70' : 'opacity-50'}`}>
                    {new Date(msg.timestamp).toLocaleTimeString('fa-IR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="پیام خود را بنویسید..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full outline-none focus:border-blue-500"
            disabled={isSending}
          />
          <button
            type="submit"
            disabled={!newMessage.trim() || isSending}
            className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
        <p className="text-[10px] opacity-50 text-center mt-2">
          شما به عنوان <span className="font-medium">{username}</span> وارد شده‌اید
        </p>
      </div>
    </div>
  );
}
