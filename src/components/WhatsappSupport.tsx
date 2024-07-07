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
				className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-none"
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
			>
				<BsWhatsapp size={18} />
			</button>

			{showTooltip && (
				<div className="absolute w-fit bottom-12 right-4 border-1 border-green-500 bg-white text-black px-4 py-2 rounded-lg text-nowrap shadow-lg">
					<p className="text-sm">Confused? Chat With Us</p>
				</div>
			)}
		</div>
	);
};

export default FloatingWhatsAppButton;
