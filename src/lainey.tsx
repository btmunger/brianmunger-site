import { useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

const playfulNoTexts = [
  'Not yet',
  'Are you sure?',
  'Think again',
  'One more chance?',
  'Pretty please?',
  'Okay this one is tiny',
];
const confettiColors = ['#ffd166', '#7dd3fc', '#86efac', '#fda4af', '#c4b5fd', '#f9a8d4', '#93c5fd', '#fcd34d', '#67e8f9'];
const confettiPieces = Array.from({ length: 64 }, (_, index) => index);

function Lainey() {
  const [accepted, setAccepted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });
  const confettiTimerRef = useRef<number | null>(null);

  const noLabel = useMemo(
    () => playfulNoTexts[Math.min(noCount, playfulNoTexts.length - 1)],
    [noCount],
  );

  const yesScale = Math.min(1 + noCount * 0.12, 1.8);

  const handleNo = () => {
    setNoCount((count) => count + 1);
    setNoOffset({
      x: Math.floor(Math.random() * 180) - 90,
      y: Math.floor(Math.random() * 80) - 40,
    });
  };

  const handleYes = () => {
    setAccepted(true);
    setShowConfetti(true);

    if (confettiTimerRef.current !== null) {
      window.clearTimeout(confettiTimerRef.current);
    }

    confettiTimerRef.current = window.setTimeout(() => {
      setShowConfetti(false);
      confettiTimerRef.current = null;
    }, 8000);
  };

  return (
    <div className="hero lainey-hero">
      <style>{`
        .lainey-hero {
          color: #fff;
        }

        .valentine-card {
          position: relative;
          width: min(92vw, 760px);
          border-radius: 24px;
          padding: 2.25rem 2rem;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,.22), transparent 45%),
            radial-gradient(circle at 85% 0%, rgba(255,153,185,.25), transparent 35%),
            linear-gradient(135deg, rgba(128,0,45,.92), rgba(222,47,85,.86));
          border: 1px solid rgba(255,255,255,.3);
          box-shadow: 0 18px 40px rgba(0,0,0,.28);
          overflow: hidden;
        }

        .valentine-card h1 {
          margin: 0 0 .5rem;
          font-size: clamp(2rem, 5vw, 3rem);
          line-height: 1.05;
          text-wrap: balance;
        }

        .valentine-card p {
          margin: 0;
          font-size: 1.1rem;
          color: rgba(255,255,255,.92);
        }

        .question-wrap {
          margin-top: 2rem;
          min-height: 140px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: .9rem;
          position: relative;
        }

        .yes-btn,
        .no-btn {
          border: 0;
          color: #fff;
          border-radius: 999px;
          font-weight: 700;
          letter-spacing: .01em;
          transition: transform .2s ease, opacity .2s ease;
        }

        .yes-btn {
          background: linear-gradient(120deg, #ff4f7f, #ff2f6a);
          box-shadow: 0 10px 20px rgba(125, 5, 45, .35);
          padding: .9rem 1.6rem;
          transform-origin: center;
        }

        .no-btn {
          background: rgba(255,255,255,.2);
          backdrop-filter: blur(2px);
          padding: .8rem 1.25rem;
          position: relative;
        }

        .celebrate {
          margin-top: 1.5rem;
          animation: fadeIn .45s ease;
        }

        .celebrate h2 {
          margin: 0 0 .6rem;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
        }

        .celebrate p {
          margin: 0.3rem 0 0;
        }

        .certificate {
          margin: 1rem auto 0;
          max-width: 480px;
          background: #ffffff;
          color: #2a0a15;
          border: 3px solid #9f1d45;
          border-radius: 16px;
          padding: 1.2rem 1.25rem;
          box-shadow: 0 10px 24px rgba(0,0,0,.28);
        }

        .certificate * {
          color: inherit;
          text-shadow: none;
        }

        .certificate p {
          margin: 0;
          color: #7a1234;
        }

        .certificate-title {
          display: block;
          font-weight: 800;
          letter-spacing: .06em;
          text-transform: uppercase;
          font-size: .9rem;
          margin-bottom: .55rem;
          color: #7a1234;
        }

        .certificate .certificate-main {
          margin: 0;
          font-size: clamp(1.2rem, 3.4vw, 1.55rem);
          line-height: 1.35;
          font-weight: 800;
          color: #7a1234;
        }

        .certificate .certificate-sub {
          margin-top: .6rem;
          font-size: 1rem;
          color: #7a1234;
          font-weight: 600;
        }

        .confetti-area {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999;
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 18px;
          top: -24px;
          border-radius: 2px;
          background: var(--confetti-color);
          animation: confettiFall 2.4s linear infinite;
        }

        @keyframes confettiFall {
          0% { transform: translateY(-30px) rotate(0deg); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translateY(120vh) rotate(500deg); opacity: 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="valentine-card">
        <h1>Lainey, will you be my Valentine?</h1>
        <p>Pick your answer below! Don't press no...</p>

        {!accepted ? (
          <div className="question-wrap">
            <button
              type="button"
              className="yes-btn"
              style={{ transform: `scale(${yesScale})` }}
              onClick={handleYes}
            >
              Yes, absolutely
            </button>
            <button
              type="button"
              className="no-btn"
              style={{
                transform: `translate(${noOffset.x}px, ${noOffset.y}px)`,
                opacity: noCount > 8 ? 0.2 : 1,
              }}
              onClick={handleNo}
            >
              {noLabel}
            </button>
          </div>
        ) : (
          <div className="celebrate">
            <h2>Yay! It&apos;s a date!</h2>
            <p>This certifies that Lainey is officially Brian&apos;s Valentine.</p>
            <div className="certificate">
              <span className="certificate-title">Certificate of Valentine Status</span>
              <p className="certificate-main">Lainey + Brian = Official Valentines</p>
              <p className="certificate-sub">Signed with maximum excitement.</p>
            </div>
          </div>
        )}
      </section>
      {showConfetti && (
        <div className="confetti-area" aria-hidden="true">
          {confettiPieces.map((piece) => (
            <span
              key={piece}
              className="confetti"
              style={
                {
                  left: `${(piece * 137) % 100}%`,
                  animationDelay: `${(piece % 12) * 0.11}s`,
                  animationDuration: `${1.8 + (piece % 8) * 0.25}s`,
                  ['--confetti-color' as string]: confettiColors[piece % confettiColors.length],
                } as CSSProperties
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Lainey;
