import Image from "next/image";
import React from "react";

export function Footer() {
	return (
		<section className="mx-auto my-8 sm:my-12 max-w-7xl px-2 lg:px-8">
			<div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center gap-4">
				<div className="p-4">
					<Image
						src="dmystified_logo_full.svg"
						alt="Dmystified"
						width={130}
						height={130}
					/>

					<p className="py-2 text-xs text-slate-700 font-semibold">
						Dmystified, 2024, All Rights Reserved
					</p>
				</div>

				<div className="mr-4 p-4 flex-1 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
					<a
						className="text-sm font-medium text-gray-800 hover:text-black"
						href="#"
					>
						Privacy Policy
					</a>

					<a
						className="text-sm font-medium text-gray-800 hover:text-black"
						href="#"
					>
						Terms of Service
					</a>

					<a
						className="text-sm font-medium text-gray-800 hover:text-black"
						href="#"
					>
						Return Policy
					</a>

					<a
						className="text-sm font-medium text-gray-800 hover:text-black"
						href="#"
					>
						Contact Us
					</a>
				</div>
			</div>
		</section>
	);
}
