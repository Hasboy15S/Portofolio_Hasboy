import React from 'react';

export default function GlitchText({ text, className, style }) {
  return (
    <div className={`relative inline-block ${className}`} style={style}>
      {/* CSS Animasi Glitch Khusus */}
      <style>{`
        .glitch-wrapper {
          position: relative;
        }
        .glitch-text {
          position: relative;
          display: inline-block;
          font-weight: bold;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        .glitch-text::before {
          left: 3px;
          text-shadow: -2px 0 #06b6d4; /* Warna Cyan */
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -3px;
          text-shadow: -2px 0 #3b82f6; /* Warna Biru */
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
        }
        @keyframes glitch-anim-2 {
          0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
          20% { clip-path: inset(30% 0 20% 0); transform: translate(-2px, 1px); }
          40% { clip-path: inset(70% 0 10% 0); transform: translate(2px, 2px); }
          60% { clip-path: inset(20% 0 50% 0); transform: translate(-2px, -2px); }
          80% { clip-path: inset(50% 0 30% 0); transform: translate(1px, 1px); }
          100% { clip-path: inset(5% 0 80% 0); transform: translate(-1px, -1px); }
        }
      `}</style>

      <div className="glitch-wrapper">
        <span className="glitch-text" data-text={text}>
          {text}
        </span>
      </div>
    </div>
  );
}