import React from "react";
const messages = [
  "For registration, please contact NIT TIRUCHIRAPALLY",
  "Call for papers is open",
  "Submit your abstract before DEC 24 2025",
];

const NotificationBar = () => {
  return (
    <div className="bg-gray-600 overflow-hidden w-full py-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {messages.map((msg, index) => (
          <span key={index} className="text-white font-semibold text-sm sm:text-base mx-6">
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;
