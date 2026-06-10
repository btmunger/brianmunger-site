"use client";

import { useEffect, useState } from "react";

export default function ReleasePage() {
  const releaseDate = new Date("2026-07-06T00:00:00");

  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = releaseDate - now;

      if (diff <= 0) {
        setCountdown("Released!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        Release Date
      </h1>

      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "50px",
        }}
      >
        July 6, 2026
      </h2>

      <div
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "60px",
        }}
      >
        {countdown}
      </div>

      <h2>Timeline</h2>

      <div
        style={{
          borderLeft: "3px solid #666",
          paddingLeft: "25px",
          marginTop: "30px",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <h3>April 26, 2026</h3>
          <p>Initial announcement</p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h3>May 10, 2026</h3>
          <p>Development update</p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h3>May 24, 2026</h3>
          <p>Progress update</p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h3>June 7, 2026</h3>
          <p>Final preparations</p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h3>June 21, 2026</h3>
          <p>Launch readiness update</p>
        </div>

        <div>
          <h3>July 6, 2026</h3>
          <p>🚀 Release Date</p>
        </div>
      </div>
    </main>
  );
}"use client";

import { useEffect, useState } from "react";

export default function ReleasePage() {
  const releaseDate = new Date("2026-07-06T00:00:00");

  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = releaseDate - now;

      if (diff <= 0) {
        setCountdown("Released!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        Release Date
      </h1>

      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "50px",
        }}
      >
        July 6, 2026
      </h2>

      <div
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "60px",
        }}
      >
        {countdown}
      </div>

      <h2>Timeline</h2>

      <div
        style={{
          borderLeft: "3px solid #666",
          paddingLeft: "25px",
          marginTop: "30px",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <h3>April 26, 2026</h3>
          <p>Start</p>
        </div>

        <div>
          <h3>July 6, 2026</h3>
          <p>Release Date</p>
        </div>
      </div>
    </main>
  );
}