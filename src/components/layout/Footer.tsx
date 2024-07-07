import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {
	return (
		<section className="mx-auto my-8 sm:my-12 max-w-7xl px-4 lg:px-8">
			<div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center gap-4">
				<div>
					<Image
						src="dmystified_logo_full.svg"
						alt="Dmystified"
						width={130}
						height={130}
					/>

					<p className="py-2 text-xs text-gray-900">
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
				</div>
			</div>
		</section>
	);
}
