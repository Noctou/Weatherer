"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function fetchWeather() {
      const city: string = "Autonomous Region in Muslim Mindanao"
      const url = `${process.env.NEXT_PUBLIC_OPENWEATHER_BASE_URL}/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`;

      console.log("Fetching:", url);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Weather data:", data);
      } catch (err) {
        console.error("Error fetching API:", err);
      }
    }
    fetchWeather();
  }, []);

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <h1 className="text-4xl font-bold font-mono">Hello</h1>
      </div>
    </div>
  );
}
