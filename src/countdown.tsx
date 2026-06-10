import { useEffect, useState } from "react";

export default function Countdown() {
  const releaseDate = new Date("2026-07-06T00:00:00");
  const startDate = new Date("2026-04-26T00:00:00");

  const [timeLeft, setTimeLeft] = useState("");
  const [timePassed, setTimePassed] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // -------------------
      // TIME LEFT (to release)
      // -------------------
      const diffLeft = releaseDate.getTime() - now.getTime();

      if (diffLeft <= 0) {
        setTimeLeft("Done!");
      } else {
        const days = Math.floor(diffLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diffLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((diffLeft / 1000) % 60);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }

      // -------------------
      // TIME PASSED (since start)
      // -------------------
      const diffPassed = now.getTime() - startDate.getTime();

      if (diffPassed <= 0) {
        setTimePassed("Not started yet");
      } else {
        const days = Math.floor(diffPassed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffPassed / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diffPassed / (1000 * 60)) % 60);
        const seconds = Math.floor((diffPassed / 1000) % 60);

        setTimePassed(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="dashboard-shell">
      <h1>Release Date</h1>
      <h2>July 6, 2026</h2>

      <div style={{ marginTop: "2rem" }}>
        <h3>Time Remaining</h3>
        <div style={{ fontSize: "3rem" }}>{timeLeft}</div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Time Passed</h3>
        <div style={{ fontSize: "3rem" }}>{timePassed}</div>
      </div>

      <h3>Timeline</h3>
      <ul>
        <li>April 26, 2026 - Timeline Begins</li>
        <li>July 6, 2026 - Done Date</li>
      </ul>
    </main>
  );
}