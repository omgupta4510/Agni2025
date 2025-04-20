import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("2025-12-26T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    return {
      days: String(Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)))),
      hours: String(Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24))).padStart(2, "0"),
      minutes: String(Math.max(0, Math.floor((difference / (1000 * 60)) % 60))).padStart(2, "0"),
      seconds: String(Math.max(0, Math.floor((difference / 1000) % 60))).padStart(2, "0"),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBoxes = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-white pt-6 pb-16 px-4 flex flex-col items-center">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-10">
    EVENT WILL START IN
  </h2>

  <div className="flex flex-wrap justify-center gap-6">
    {timeBoxes.map((box, index) => (
      <div
        key={index}
        className="w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-full aspect-square border-2 border-green-500 shadow-[0_8px_20px_rgba(0,0,0,0.25)] bg-white"
      >
        <p className="text-3xl font-bold text-gray-900">{box.value}</p>
        <span className="text-sm font-medium tracking-wide text-gray-600">
          {box.label}
        </span>
      </div>
    ))}
  </div>
</div>

  );
};

export default CountdownTimer;
