import BottomMenu from "./components/BottomMenu";
import { useState } from 'react';
import { ChatPage } from './components/ChatPage';
import svgPaths from "./imports/svg-uac8dmdq1g";
import imgRectangle4754 from "figma:asset/99c6102753794bd20bc60e70342f09da7c686472.png";
import imgRectangle4755 from "figma:asset/f421e424c0527e19d4f4d361a859aefc6759768e.png";
import imgRectangle4756 from "figma:asset/930219206669c7ba4be3796fa74e3efd0b064c7d.png";
import imgRectangle4757 from "figma:asset/9773b14ce326d64b9f58908994fe6bea967c45cb.png";
import imgRectangle4785 from "figma:asset/16ac26ae159fd01e3a35628de761e1c1c88cbbde.png";
import imgRectangle4786 from "figma:asset/bef6699183c006cfd799dea63217c721daadd922.png";
import imgRectangle4787 from "figma:asset/d5630bfd810bad42bb0743b701e6cffa7aa5f184.png";
import imgRectangle4788 from "figma:asset/cdea2025c0ae617d17a8d767519d94a45aeb86ca.png";
import { imgFrame24740 } from "./imports/svg-arbkt";

export default function App() {
  const [showChat, setShowChat] = useState(false);

  if (showChat) {
    return <ChatPage onBack={() => setShowChat(false)} />;
  }

  return (
    <div className="relative w-full min-h-screen mx-auto bg-gradient-to-b from-[rgba(24,139,239,0.3)] via-[rgba(227,242,251,0.3)] to-[rgba(255,255,255,0.3)]">
      <div className="max-w-[636px] mx-auto h-screen overflow-hidden relative bg-white/30">
        
        {/* Header */}
        <div className="absolute left-[32.65px] top-[114.28px] z-10">
          <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[35.918px] text-black">
            Chatloop<span className="text-[#188bef]">.</span>
          </p>
        </div>

        {/* Stories Section - Static */}
        <div className="absolute left-[32.65px] right-[32.65px] top-[213.88px] z-10">
          {/* Stories Background */}
          <div className="backdrop-blur-[16.326px] backdrop-filter bg-[rgba(22,161,251,0.16)] h-[89.795px] rounded-[32.653px]" />
          
          {/* Stories Header */}
          <div className="absolute top-[16px] left-[32.65px] right-[32.65px] flex items-center justify-between">
            <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[22.857px] text-white">All Story</p>
            <div className="rotate-[270deg]">
              <svg className="w-[39.183px] h-[39.183px]" fill="none" viewBox="0 0 40 40">
                <path d={svgPaths.p3017f000} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.44896" />
                <path d={svgPaths.p1d7b5c00} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.44896" />
                <path d={svgPaths.p28fd9680} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.44896" />
              </svg>
            </div>
          </div>

          {/* Stories Carousel */}
          <div className="absolute top-[50px] left-[26px] flex gap-[16.519px] overflow-x-auto scrollbar-hide" style={{ maskImage: `url('${imgFrame24740}')`, maskSize: '571.423px 225.304px', maskPosition: '-26.124px -50.609px', maskRepeat: 'no-repeat' }}>
            {/* Add Story */}
            <div className="flex flex-col items-center gap-[6px] shrink-0">
              <div className="bg-[rgba(255,255,255,0.08)] border-[2.065px] border-dashed border-white rounded-full size-[102.676px] flex items-center justify-center">
                <svg className="w-[33.039px] h-[33.039px]" fill="none" viewBox="0 0 34 34">
                  <path d={svgPaths.p14946b80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06492" />
                </svg>
              </div>
              <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[17.896px] text-white opacity-95 text-center">Add Story</p>
            </div>

            {/* Story Items */}
            {[
              { img: imgRectangle4785, name: 'Henry', verified: true },
              { img: imgRectangle4786, name: 'Albert Flores' },
              { img: imgRectangle4787, name: 'Floyd' },
              { img: imgRectangle4788, name: 'Kathryn' }
            ].map((story, index) => (
              <div key={index} className="flex flex-col items-center gap-[6px] shrink-0">
                <div className="rotate-180">
                  <div className="bg-[rgba(2,95,178,0.7)] rounded-full size-[102.676px] p-[6.519px]">
                    <div className="rounded-full size-[89.795px] border-[2.449px] border-white overflow-hidden shadow-[0px_0px_48.979px_0px_rgba(0,0,0,0.08)]">
                      <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[17.896px] text-white opacity-95">{story.name}</p>
                  {story.verified && (
                    <svg className="w-[20.649px] h-[20.649px]" fill="none" viewBox="0 0 22 22">
                      <path d={svgPaths.p8544200} fill="white" />
                      <path d={svgPaths.p2be37df0} fill="#329AF5" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="absolute top-[248px] left-[26px] right-[26px]">
            <div className="bg-white h-[75.101px] rounded-[19.592px] shadow-[0px_8.163px_81.632px_0px_rgba(0,0,0,0.06)] flex items-center px-[20px] gap-[16px]">
              <svg className="w-[35.918px] h-[35.918px] opacity-70" fill="none" viewBox="0 0 36 36">
                <path d={svgPaths.p311dae80} stroke="#111D25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.44896" />
                <path d={svgPaths.p3de944e0} stroke="#111D25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.44896" />
              </svg>
              <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[19.592px] text-black opacity-40 flex-1">Select or search for recent chats...</p>
              <div className="bg-[rgba(24,139,239,0.12)] rounded-[11.428px] size-[58.775px] flex items-center justify-center">
                <svg className="w-[26.122px] h-[26.122px]" fill="none" viewBox="0 0 27 27">
                  <path d={svgPaths.p30e51e80} stroke="#16A1FB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.12243" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs - Static */}
        <div className="absolute left-[32.72px] top-[590.12px] flex gap-[14.459px] overflow-x-auto scrollbar-hide z-10">
          <div className="bg-[#114a7b] opacity-[0.88] px-[19.881px] py-[15.278px] rounded-[13.061px] flex items-center gap-[5.422px] shrink-0">
            <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[18.334px] text-white">All</p>
            <svg className="w-[21.688px] h-[21.688px]" fill="none" viewBox="0 0 22 22">
              <path d={svgPaths.p19c79a00} fill="white" />
              <path d={svgPaths.p30ce780} stroke="#2E608B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1688" />
            </svg>
          </div>
          
          {['Unread Chats', 'Favourite Chats', 'Group Chats'].map((label) => (
            <div key={label} className="bg-[rgba(17,74,123,0.08)] px-[21.688px] py-[15.278px] rounded-[13.061px] shrink-0">
              <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[18.334px] text-[#061f35] opacity-95">{label}</p>
            </div>
          ))}
        </div>

        {/* Scrollable Chat List */}
        <div className="absolute left-0 right-0 top-[675.92px] bottom-[120px] overflow-y-auto scrollbar-hide">
          {/* Pinned Chats */}
          <div className="px-[32.65px] mb-[29.387px]">
            <div className="flex items-center gap-[6.531px] mb-[29.387px]">
              <svg className="w-[32.653px] h-[32.653px] opacity-40" fill="none" viewBox="0 0 33 33">
                <path d={svgPaths.p1bbd1000} fill="#111D25" />
                <path d={svgPaths.p220d1e00} fill="#111D25" />
                <path d={svgPaths.p14108700} stroke="#111D25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63264" />
              </svg>
              <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[24.49px] text-[#111d25]">Pinned Chats</p>
              <div className="bg-[#114a7b] h-[22.857px] rounded-[28.917px] px-[6.242px] flex items-center justify-center">
                <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[14.459px] text-white">1</p>
              </div>
            </div>

            {/* Chatloop - Active Chat */}
            <div 
              onClick={() => setShowChat(true)}
              className="grid grid-cols-[max-content] grid-rows-[max-content] cursor-pointer hover:bg-gray-50 active:bg-gray-100 rounded-lg p-2 -m-2 transition-colors"
            >
              <div className="flex items-start gap-[16px]">
                <div className="bg-gradient-to-b from-[#49aaff] to-[#188bef] rounded-[136.505px] size-[81.286px] p-[2.46px]">
                  <div className="rounded-full size-[76.409px] border-[1.959px] border-white overflow-hidden">
                    <img src={imgRectangle4757} alt="Chatloop" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="flex-1 pt-[8.132px]">
                  <div className="flex items-center justify-between mb-[4px]">
                    <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[21.224px] text-[#061f35]">Chatloop</p>
                    <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[19.592px] text-[#061f35] opacity-50">الان</p>
                  </div>
                  <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[19.592px] text-[#061f35] opacity-70">
                    به گروه عمومی Chatloop خوش آمدید...
                  </p>
                </div>
                
                <div className="bg-[#188bef] rounded-full size-[26.011px] flex items-center justify-center mt-[37.391px]">
                  <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[17.959px] text-white">3</p>
                </div>
              </div>
            </div>
          </div>

          {/* All Chats */}
          <div className="px-[32.65px] pb-[120px]">
            <div className="flex items-center justify-between mb-[29.387px]">
              <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[24.49px] text-[#111d25]">All Chats</p>
              <div className="bg-[#114a7b] h-[22.857px] rounded-[28.917px] px-[6.857px] flex items-center justify-center">
                <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[14.459px] text-white">32</p>
              </div>
            </div>

            {/* Decorative Chats */}
            <div className="space-y-[29.387px]">
              {/* Esther Howard */}
              <div className="flex items-start gap-[16px] opacity-60">
                <div className="rounded-[68.253px] size-[81.621px] overflow-hidden">
                  <img src={imgRectangle4754} alt="Esther" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 pt-[8.164px]">
                  <div className="flex items-center justify-between mb-[4px]">
                    <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[21.224px] text-[#061f35]">Esther Howard</p>
                    <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[19.592px] text-[#061f35] opacity-50">Yesterday</p>
                  </div>
                  <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[19.592px] text-[#061f35] opacity-70">
                    Just wrapped up a clean new UI...
                  </p>
                </div>
                <svg className="w-[26.119px] h-[26.119px] mt-[37.548px]" fill="none" viewBox="0 0 27 27">
                  <path d={svgPaths.p6b7b700} stroke="#188BEF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.95917" />
                </svg>
              </div>

              {/* Robert Fox */}
              <div className="flex items-start gap-[16px] opacity-60">
                <div className="rounded-[45.714px] size-[81.788px] overflow-hidden shadow-[0px_0px_19.592px_3.265px_rgba(0,0,0,0.01)]">
                  <img src={imgRectangle4755} alt="Robert" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 pt-[8.179px]">
                  <div className="flex items-center justify-between mb-[4px]">
                    <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[21.224px] text-[#061f35]">Robert Fox</p>
                    <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[19.592px] text-[#061f35] opacity-50">01:04</p>
                  </div>
                  <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[19.592px] text-[#061f35] opacity-70">
                    Just planted a new sapling today...
                  </p>
                </div>
                <svg className="w-[26.172px] h-[26.172px] mt-[37.621px]" fill="none" viewBox="0 0 27 27">
                  <path d={svgPaths.p1c794600} stroke="#188BEF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.95917" />
                </svg>
              </div>

              {/* Grow Together */}
              <div className="flex items-start gap-[16px] opacity-50">
                <div className="rounded-full size-[81.477px] bg-gray-200" />
                <div className="flex-1 pt-[8.179px]">
                  <div className="flex items-center justify-between mb-[4px]">
                    <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[21.224px] text-[#061f35]">Grow Together</p>
                    <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[19.592px] text-[#061f35] opacity-50">01:04</p>
                  </div>
                  <div className="flex gap-[3.265px] text-[#061f35] text-[19.592px] font-['Helvetica_Neue:Regular',sans-serif]">
                    <p className="opacity-50">Surendar</p>
                    <p className="opacity-20">•</p>
                    <p className="opacity-50">Just planted a new sapling...</p>
                  </div>
                </div>
                <svg className="w-[26.073px] h-[26.172px] mt-[37.624px]" fill="none" viewBox="0 0 27 27">
                  <path d={svgPaths.pc2d12c0} stroke="#188BEF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.95917" />
                </svg>
              </div>

              {/* DesignSight AI */}
              <div className="flex items-start gap-[16px] opacity-60">
                <div className="bg-[#ff83ac] opacity-[0.12] rounded-[45.717px] size-[83.242px] flex items-center justify-center">
                  <svg className="w-[43.286px] h-[43.286px]" fill="none" viewBox="0 0 43 43">
                    <path d={svgPaths.p24c40b00} fill="url(#paint0_linear_6_2668)" />
                    <defs>
                      <linearGradient id="paint0_linear_6_2668" x1="14.0834" y1="14.6627" x2="37.1537" y2="37.733" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#C7E9FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex-1 pt-[8.324px]">
                  <div className="flex items-center justify-between mb-[4px]">
                    <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[21.226px] text-[#061f35]">DesignSight AI</p>
                    <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[19.593px] text-[#061f35] opacity-50">01:04</p>
                  </div>
                  <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[19.593px] text-[#061f35] opacity-50">
                    DesignSight AI is an intelligent analytics p...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Floating & Fixed */}
        <div className="fixed bottom-0 left-0 right-0 max-w-[636px] mx-auto z-50">
          <div className="backdrop-blur-[32.653px] backdrop-filter h-[107.754px] mx-[57.14px] mb-[40px] rounded-[27.755px] border-[2.449px] border-[rgba(255,255,255,0.8)] shadow-[0px_-48.979px_81.632px_0px_rgba(115,189,236,0.18)]" style={{ backgroundImage: "linear-gradient(270deg, rgba(115, 189, 236, 0.06) 7.9918%, rgba(115, 189, 236, 0.21) 92.008%), linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)" }}>
            <div className="flex items-center justify-around h-full px-[20px]">
              {/* Chats - Active */}
              <div className="bg-gradient-to-b from-[#49aaff] to-[#188bef] rounded-[17.959px] h-[78.367px] px-[28px] flex items-center gap-[12px] shadow-[0_24.49px_78.367px_rgba(0,0,0,0.3)]">
                <svg className="w-[39.183px] h-[39.183px]" fill="none" viewBox="0 0 33 33">
                  <path d={svgPaths.p2dff8500} fill="white" />
                  <path d={svgPaths.pba72772} fill="white" />
                </svg>
                <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[19.592px] text-white">Chats</p>
              </div>

              {/* Other Navigation Items - Inactive */}
              <svg className="w-[40.816px] h-[40.816px] opacity-[0.35]" fill="none" viewBox="0 0 34 33">
                <path d={svgPaths.p4237400} fill="#061D3D" />
                <path clipRule="evenodd" d={svgPaths.p2ce96900} fill="#061D3D" fillRule="evenodd" />
              </svg>

              <svg className="w-[40.816px] h-[40.816px] opacity-[0.35]" fill="none" viewBox="0 0 34 33">
                <path clipRule="evenodd" d={svgPaths.p35782c00} fill="#061D3D" fillRule="evenodd" />
              </svg>

              <svg className="w-[40.816px] h-[40.816px] opacity-[0.35]" fill="none" viewBox="0 0 34 33">
                <path d={svgPaths.p1a058500} fill="#061D3D" />
              </svg>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="flex items-center justify-center mb-[21.23px]">
            <div className="bg-[#061d3d] h-[6.531px] w-[161.631px] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
