"use client";
import React, { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";

const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const tooltipInterval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 5000); // Hide tooltip after 5 seconds
    }, 10000); // Show tooltip every 10 seconds

    return () => clearInterval(tooltipInterval);
  }, []);

  const handleChatClick = () => {
    // Logic to handle opening WhatsApp chat
    window.open("https://api.whatsapp.com/send?phone=8806861078", "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-10">
      <button
        onClick={handleChatClick}
        className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-full shadow-lg"
      >
        <BsWhatsapp size={25} />
      </button>
      {showTooltip && (
        <div className="absolute w-[230px] bottom-14 right-11 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg">
          <p>Confused? Chat With Us</p>
        </div>
      )}
    </div>
  );
};

export default FloatingWhatsAppButton;
