"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { navItems } from "@/constants/navigation";
import { Button } from "../ui/button";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [prevScrollpos, setPrevScrollpos] = React.useState(0);
	const [top, setTop] = React.useState(0);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	React.useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			if (prevScrollpos > currentScrollPos) {
				setTop(0);
			} else {
				setTop(-50);
			}
			setPrevScrollpos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollpos]);

	return (
		<div
			className={`sticky top-${top} left-0 w-full bg-white/50 backdrop-blur-lg z-50`}
		>
			<div className="mx-auto max-w-7xl flex items-center justify-between p-4 sm:px-6 lg:px-8">
				<Link href="/" className="inline-flex items-center space-x-2">
					<Image
						src="dmystified_logo_full.svg"
						alt="Dmsytified"
						width={130}
						height={130}
					/>
				</Link>

				<div className="hidden md:block">
					<ul className="inline-flex space-x-8">
						{navItems.map((item) => (
							<li key={item.name}>
								<a
									href={item.href}
									className="text-sm font-medium text-black hover:text-orange"
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>

				<Button
					size="icon"
					variant="ghost"
					className="md:hidden rounded-full"
				>
					<Menu size="20" onClick={toggleMenu} />
				</Button>

				{isMenuOpen && (
					<div className="w-full absolute top-0 left-0 z-50 transform p-2 transition md:hidden">
						<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="p-2">
								<div className="flex items-center justify-between">
									<Link href="/">
										<Image
											src="dmystified_logo.svg"
											alt="Dmystified"
											width={22}
											height={22}
										/>
									</Link>

									<Button
										size="icon"
										variant="ghost"
										type="button"
										onClick={toggleMenu}
										className="rounded-full"
									>
										<X size="20" aria-hidden="true" />
									</Button>
								</div>

								<div className="mt-2">
									<nav className="flex flex-col gap-2">
										{navItems.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="w-full py-2 rounded-md font-medium text-black text-sm text-center hover:bg-orange/15"
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
