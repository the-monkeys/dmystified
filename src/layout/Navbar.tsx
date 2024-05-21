"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const menuItems = [
	{
		name: "Home",
		href: "#",
	},
	{
		name: "Courses",
		href: "#courses",
	},
	{
		name: "Pricing",
		href: "#pricing",
	},
	{
		name: "FAQ",
		href: "#faq",
	},
	{
		name: "Contact",
		href: "#contactUs",
	},
];

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="sticky top-0 left-0 w-full bg-white/25 backdrop-blur-xl z-50">
			<div className="mx-auto max-w-7xl flex items-center justify-between p-4 sm:px-6 lg:px-8">
				<div className="inline-flex items-center space-x-2">
					<Image
						src="dmystified_logo_full.svg"
						alt="Dmsytified"
						width={130}
						height={130}
					/>
				</div>

				<div className="hidden md:block">
					<ul className="inline-flex space-x-8">
						{menuItems.map((item) => (
							<li key={item.name}>
								<a
									href={item.href}
									className="text-sm font-semibold text-black hover:text-orange uppercase"
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className="md:hidden">
					<Menu
						onClick={toggleMenu}
						className="h-6 w-6 cursor-pointer"
					/>
				</div>

				{isMenuOpen && (
					<div className="w-full absolute top-0 left-0 z-50 transform p-2 transition md:hidden">
						<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="p-2">
								<div className="flex items-center justify-between">
									<Image
										src="dmystified_logo.svg"
										alt="Dmystified"
										width={30}
										height={30}
									/>

									<button
										type="button"
										onClick={toggleMenu}
										className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
									>
										<span className="sr-only">
											Close menu
										</span>
										<X
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</button>
								</div>

								<div className="mt-2">
									<nav className="flex flex-col gap-2">
										{menuItems.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="w-full py-2 rounded-md font-semibold text-black text-sm text-center hover:bg-orange/25 uppercase"
											>
												{item.name}
											</a>
										))}
									</nav>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default Navbar;
