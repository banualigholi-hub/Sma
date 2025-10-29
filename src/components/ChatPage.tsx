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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#49aaff] via-[#e3f2fb] to-white p-6">
        <div className="w-full max-w-md bg-white rounded-[27.755px] p-[40px] shadow-[0px_8.163px_81.632px_0px_rgba(0,0,0,0.1)] backdrop-blur-[32.653px]">
          <div className="text-center mb-[32px]">
            <h2 className="font-['Helvetica_Neue:Medium',sans-serif] text-[28px] text-[#111d25] mb-[12px]">
              به Chatloop خوش آمدید
            </h2>
            <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[18px] text-[#061f35] opacity-70">
              لطفا نام کاربری خود را وارد کنید
            </p>
          </div>
          
          <form onSubmit={handleUsernameSubmit} className="flex flex-col gap-[20px]">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="نام کاربری"
              className="px-[24px] py-[18px] border-[2px] border-[#188bef]/20 rounded-[16px] outline-none focus:border-[#188bef] font-['Helvetica_Neue:Regular',sans-serif] text-[18px] transition-colors"
              maxLength={20}
              required
              autoFocus
            />
            <button
              type="submit"
              className="px-[32px] py-[18px] bg-gradient-to-b from-[#49aaff] to-[#188bef] text-white rounded-[16px] font-['Helvetica_Neue:Medium',sans-serif] text-[18px] hover:shadow-lg active:scale-95 transition-all"
            >
              ورود به چت
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[rgba(24,139,239,0.1)] to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-[24px] py-[16px] shadow-sm">
        <div className="flex items-center gap-[16px] max-w-[636px] mx-auto">
          <button 
            onClick={onBack} 
            className="p-[8px] hover:bg-gray-100 rounded-full transition-colors active:scale-95"
          >
            <ArrowLeft size={24} className="text-[#111d25]" />
          </button>
          
          <div className="flex items-center gap-[12px] flex-1">
            <div className="bg-gradient-to-b from-[#49aaff] to-[#188bef] rounded-full size-[48px] flex items-center justify-center">
              <span className="font-['Helvetica_Neue:Medium',sans-serif] text-[20px] text-white">C</span>
            </div>
            <div>
              <h3 className="font-['Helvetica_Neue:Medium',sans-serif] text-[18px] text-[#111d25]">Chatloop</h3>
              <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[14px] text-[#061f35] opacity-50">گروه عمومی</p>
            </div>
          </div>

          <div className="flex gap-[8px]">
            <button className="p-[8px] hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="6" r="1.5" fill="#111d25" />
                <circle cx="12" cy="12" r="1.5" fill="#111d25" />
                <circle cx="12" cy="18" r="1.5" fill="#111d25" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-[24px] py-[20px] max-w-[636px] mx-auto w-full">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full opacity-40">
            <svg className="w-[80px] h-[80px] mb-[20px]" fill="none" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="38" stroke="#188bef" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M40 25v30M25 40h30" stroke="#188bef" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[20px] text-[#111d25] mb-[8px]">هنوز پیامی ارسال نشده است</p>
            <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-[#061f35] opacity-70">اولین پیام را ارسال کنید!</p>
          </div>
        ) : (
          <div className="space-y-[16px]">
            {messages.map((msg) => {
              const isOwnMessage = msg.username === username;
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isOwnMessage ? 'items-end' : 'items-start'}`}
                >
                  {!isOwnMessage && (
                    <span className="font-['Helvetica_Neue:Regular',sans-serif] text-[13px] text-[#061f35] opacity-50 mb-[6px] px-[8px]">
                      {msg.username}
                    </span>
                  )}
                  <div
                    className={`max-w-[75%] px-[18px] py-[12px] ${
                      isOwnMessage
                        ? 'bg-gradient-to-b from-[#49aaff] to-[#188bef] text-white rounded-[20px] rounded-br-[6px]'
                        : 'bg-white text-[#111d25] rounded-[20px] rounded-bl-[6px] shadow-sm border border-gray-100'
                    }`}
                  >
                    <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] break-words leading-[1.5]">
                      {msg.text}
                    </p>
                    <span 
                      className={`font-['Helvetica_Neue:Regular',sans-serif] text-[12px] mt-[6px] block ${
                        isOwnMessage ? 'opacity-80' : 'opacity-50'
                      }`}
                    >
                      {new Date(msg.timestamp).toLocaleTimeString('fa-IR', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-100 px-[24px] py-[20px] shadow-[0px_-8px_32px_rgba(0,0,0,0.04)]">
        <div className="max-w-[636px] mx-auto">
          <form onSubmit={handleSendMessage} className="flex gap-[12px] items-end">
            <div className="flex-1 bg-gray-50 rounded-[24px] px-[20px] py-[12px] border border-gray-200 focus-within:border-[#188bef] transition-colors">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                placeholder="پیام خود را بنویسید..."
                className="w-full bg-transparent outline-none font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-[#111d25] placeholder:text-[#061f35] placeholder:opacity-40 resize-none max-h-[120px]"
                rows={1}
                disabled={isSending}
                style={{ 
                  minHeight: '24px',
                  height: 'auto'
                }}
              />
            </div>
            
            <button
              type="submit"
              disabled={!newMessage.trim() || isSending}
              className="bg-gradient-to-b from-[#49aaff] to-[#188bef] size-[48px] rounded-full flex items-center justify-center hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all shrink-0"
            >
              <Send size={20} className="text-white" />
            </button>
          </form>
          
          <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[13px] text-[#061f35] opacity-40 text-center mt-[12px]">
            شما به عنوان <span className="font-['Helvetica_Neue:Medium',sans-serif] text-[#188bef]">{username}</span> وارد شده‌اید
          </p>
        </div>
      </div>
    </div>
  );
}
