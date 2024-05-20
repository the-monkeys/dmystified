"use client";

import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

const FloatingWhatsAppButton: React.FC = () => {
	const [showTooltip, setShowTooltip] = useState(false);

	const handleChatClick = () => {
		window.open("https://api.whatsapp.com/send?phone=8806861078", "_blank");
	};

	return (
		<div className="fixed bottom-8 right-8 z-10">
			<button
				onClick={handleChatClick}
				className="bg-orange text-white p-4  rounded-full shadow-lg"
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
			>
				<BsWhatsapp size={24} />
			</button>
			{showTooltip && (
				<div className="absolute w-fit bottom-16 right-4 border-1 border-orange bg-white text-black px-4 py-2 rounded-lg text-nowrap shadow-lg">
					<p className="text-xs sm:text-sm md:text-base font-semibold">
						Confused? Chat With Us
					</p>
				</div>
			)}
		</div>
	);
};

export default FloatingWhatsAppButton;
