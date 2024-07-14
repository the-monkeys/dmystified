"use client";

import React from "react";
import Link from "next/link";

import { navItems } from "@/constants/navigation";
import { Button } from "../ui/button";
import Icon from "../icon";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="sticky top-0 left-0 w-full z-50">
			<div className="mx-auto max-w-7xl flex items-center justify-between p-4 lg:px-8">
				<div className="hidden md:block mx-auto px-6 py-2 border-1 border-gray-300 rounded-full bg-white/50 backdrop-blur-md">
					<ul className="inline-flex space-x-8">
						{navItems.map((item) => (
							<li
								key={item.name}
								className="text-sm font-medium text-black hover:text-orange"
							>
								<Link href={item.href}>{item.name}</Link>
							</li>
						))}
					</ul>
				</div>

				<Button
					size="icon"
					variant="outline"
					className="mx-auto md:hidden rounded-full bg-white/50 backdrop-blur-md"
					onClick={toggleMenu}
				>
					{!isMenuOpen ? (
						<Icon
							name="RiArrowDownS"
							className="rotate-0 transition"
						/>
					) : (
						<Icon
							name="RiArrowDownS"
							className="rotate-180 transition"
						/>
					)}
				</Button>

				{isMenuOpen && (
					<div className="w-full absolute top-full left-0 z-50 md:hidden transition">
						<div className="w-52 mx-auto border-1 border-gray-300 rounded-lg bg-white/50 backdrop-blur-lg">
							<ul className="p-4 flex flex-col space-y-4">
								{navItems.map((item) => (
									<li
										key={item.name}
										className="text-sm font-medium text-black hover:text-orange text-center"
									>
										<Link href={item.href}>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default Navbar;
