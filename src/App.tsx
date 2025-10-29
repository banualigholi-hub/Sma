import { useState } from 'react';
import { ChatPage } from './components/ChatPage';
import svgPaths from "./imports/svg-5r536lm6l4";
import imgRectangle4754 from "figma:asset/99c6102753794bd20bc60e70342f09da7c686472.png";
import imgRectangle4755 from "figma:asset/f421e424c0527e19d4f4d361a859aefc6759768e.png";
import imgRectangle4756 from "figma:asset/930219206669c7ba4be3796fa74e3efd0b064c7d.png";
import imgRectangle4757 from "figma:asset/9773b14ce326d64b9f58908994fe6bea967c45cb.png";

export default function App() {
  const [showChat, setShowChat] = useState(false);

  if (showChat) {
    return <ChatPage onBack={() => setShowChat(false)} />;
  }

  return (
    <div className="relative w-[312px] min-h-screen mx-auto bg-white">
      {/* Status Bar */}
      <div className="absolute left-0 right-0 top-0 h-[44px] flex items-center justify-between px-[28px]">
        <p className="font-['Helvetica:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.95)]">12:33</p>
        <div className="flex gap-2">
          <svg className="w-[20px] h-[10px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10">
            <path d={svgPaths.p13eaf580} fill="black" fillOpacity="0.95" />
            <path d={svgPaths.p364aae80} fill="black" fillOpacity="0.95" />
            <path d={svgPaths.p3c34ae00} fill="black" fillOpacity="0.95" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="pt-[60px] px-[16px]">
        <h1 className="text-[28px] mb-2">پیام‌ها</h1>
      </div>

      {/* Stories Section (Decorative) */}
      <div className="px-[16px] py-[16px]">
        <div className="flex gap-[12px] overflow-x-auto pb-2">
          {/* Story 1 */}
          <div className="flex flex-col items-center gap-[6px] shrink-0">
            <div className="w-[56px] h-[56px] rounded-full p-[2px] bg-gradient-to-tr from-purple-500 to-pink-500">
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                <img src={imgRectangle4754} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-[10px] opacity-70">علی</span>
          </div>

          {/* Story 2 */}
          <div className="flex flex-col items-center gap-[6px] shrink-0">
            <div className="w-[56px] h-[56px] rounded-full p-[2px] bg-gradient-to-tr from-purple-500 to-pink-500">
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                <img src={imgRectangle4755} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-[10px] opacity-70">سارا</span>
          </div>

          {/* Story 3 */}
          <div className="flex flex-col items-center gap-[6px] shrink-0">
            <div className="w-[56px] h-[56px] rounded-full p-[2px] bg-gradient-to-tr from-purple-500 to-pink-500">
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                <img src={imgRectangle4756} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-[10px] opacity-70">رضا</span>
          </div>

          {/* Story 4 */}
          <div className="flex flex-col items-center gap-[6px] shrink-0">
            <div className="w-[56px] h-[56px] rounded-full p-[2px] bg-gradient-to-tr from-purple-500 to-pink-500">
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                <img src={imgRectangle4757} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-[10px] opacity-70">مینا</span>
          </div>
        </div>
      </div>

      {/* All Chats Header */}
      <div className="px-[16px] py-[8px] flex items-center justify-between">
        <p className="text-[12px] text-[#111d25]">همه چت‌ها</p>
        <div className="bg-[#114a7b] rounded-full w-[14.4px] h-[11.2px] flex items-center justify-center">
          <span className="text-white text-[7px]">1</span>
        </div>
      </div>

      {/* Chat List - Only Chatloop */}
      <div className="px-[16px]">
        <div
          onClick={() => setShowChat(true)}
          className="flex items-center gap-[14px] py-[12px] cursor-pointer hover:bg-gray-50 active:bg-gray-100 transition-colors rounded-lg px-2 -mx-2"
        >
          {/* Avatar */}
          <div className="w-[40px] h-[40px] bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shrink-0">
            <span className="text-white text-[18px]">C</span>
          </div>

          {/* Chat Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-[4px]">
              <p className="text-[10.4px] text-[#061f35]">Chatloop</p>
              <p className="text-[9.6px] text-[#061f35] opacity-50">الان</p>
            </div>
            <p className="text-[9.6px] text-[#061f35] opacity-70 truncate">
              به گروه عمومی Chatloop خوش آمدید...
            </p>
          </div>

          {/* Unread indicator */}
          <div className="w-[12.8px] h-[12.8px] shrink-0">
            <svg className="w-full h-full" fill="none" viewBox="0 0 13 13">
              <path d={svgPaths.pe1df687} stroke="#188BEF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.96" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Decorative) */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[312px] mx-auto bg-white border-t border-gray-200 px-[16px] py-[12px]">
        <div className="flex items-center justify-around">
          {/* Home */}
          <div className="flex flex-col items-center gap-[4px] opacity-100">
            <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#188BEF" opacity="0.2" />
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#188BEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[10px] text-[#188BEF]">خانه</span>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-center gap-[4px] opacity-40">
            <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="#111D25" strokeWidth="2" />
              <path d="M12 16v-4m0-4h.01" stroke="#111D25" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] text-[#111D25]">کاوش</span>
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center gap-[4px] opacity-40">
            <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#111D25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="7" r="4" stroke="#111D25" strokeWidth="2" />
            </svg>
            <span className="text-[10px] text-[#111D25]">پروفایل</span>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-[80px]" />
    </div>
  );
}
