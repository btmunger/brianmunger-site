import { useEffect, useState } from "react";

export default function Countdown() {
  const releaseDate = new Date("2026-07-06T00:00:00");

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = releaseDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Released!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${days}d ${hours}h ${minutes}m ${seconds}s`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="dashboard-shell">
      <h1>Release Date</h1>
      <h2>July 6, 2026</h2>

      <div style={{ fontSize: "3rem", margin: "2rem 0" }}>
        {timeLeft}
      </div>

      <h3>Timeline</h3>

      <ul>
        <li>April 26, 2026 - Timeline Begins</li>
        <li>July 6, 2026 - Release Date</li>
      </ul>
    </main>
  );
}