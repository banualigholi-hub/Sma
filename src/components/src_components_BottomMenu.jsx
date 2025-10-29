import React from "react";
import "./BottomMenu.css";

export default function BottomMenu({
  active = "chats" // فقط برای تعیین کدام آیتم فعال است، کاربردی نیست
}) {
  return (
    <nav className="bm-container" aria-label="Bottom navigation">
      <div className="bm-pill">
        <button
          className={`bm-item bm-item--active ${active === "chats" ? "is-active" : ""}`}
          aria-label="Chats"
        >
          <span className="bm-icon bm-icon--light">
            {/* chat bubble white icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" fill="white"/>
            </svg>
          </span>
          <span className="bm-label">Chats</span>
        </button>
        <button
          className={`bm-item ${active === "settings" ? "is-active" : ""}`}
          aria-label="Settings"
        >
          <span className="bm-icon">
            {/* gear icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" fill="#9AA7B8"/>
              <path d="M19.4 13.1a7.6 7.6 0 0 0 0-2.2l2.1-1.6a.5.5 0 0 0 .1-.7l-2-3.5a.5.5 0 0 0-.6-.2l-2.5 1a7.2 7.2 0 0 0-1.9-1.1l-.4-2.7a.5.5 0 0 0-.5-.4H9.9a.5.5 0 0 0-.5.4l-.4 2.7a7.2 7.2 0 0 0-1.9 1.1l-2.5-1a.5.5 0 0 0-.6.2l-2 3.5a.5.5 0 0 0 .1.7l2.1 1.6a7.6 7.6 0 0 0 0 2.2L2.2 14.7a.5.5 0 0 0-.1.7l2 3.5c.15.26.45.34.7.22l2.5-1c.6.43 1.25.78 1.9 1.1l.4 2.7c.06.31.33.53.64.53h4.2c.31 0 .58-.22.64-.53l.4-2.7c.65-.32 1.3-.67 1.9-1.1l2.5 1c.25.12.55.04.7-.22l2-3.5a.5.5 0 0 0-.1-.7l-2.1-1.6z" fill="#9AA7B8"/>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}
