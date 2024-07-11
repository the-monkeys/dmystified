import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {
	return (
		<section className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
			<div className="pb-4">
				<Image
					src="./dmystified_logo_full.svg"
					alt="Dmystified"
					width={150}
					height={150}
				/>

				<p className="py-2 text-sm text-gray-900">
					Dmystified, 2024, All Rights Reserved
				</p>

				<div className="flex">
					<Link
						href="https://x.com/dmystified_tech"
						target="_blank"
						className="text-orange hover:text-black text-sm font-semibold"
					>
						Twitter
					</Link>
				</div>
			</div>

			<div className="p-2 flex flex-wrap justify-center gap-4 text-sm">
				<Link
					href="#"
					className="font-medium text-gray-600 hover:text-gray-900"
				>
					Privacy Policy
				</Link>
				<Link
					href="#"
					className="font-medium text-gray-600 hover:text-gray-900"
				>
					Terms of Service
				</Link>
				<Link
					href="#"
					className="font-medium text-gray-600 hover:text-gray-900"
				>
					Return Policy
				</Link>
			</div>

			<p className="py-1 text-sm text-gray-500 text-center">
				Illustrations from{" "}
				<Link
					href="https://popsy.co/"
					className="font-medium text-gray-900"
				>
					Popsy
				</Link>
			</p>
		</section>
	);
}
