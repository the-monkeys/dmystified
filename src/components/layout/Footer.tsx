import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LogoFull } from "../logo";
import Section from "./Section";
import Icon from "../icon";
import { Badge } from "../ui/badge";

export function Footer() {
	return (
		<Section className="mx-auto max-w-7xl py-4 sm:py-6 px-4 lg:px-8 border-t-1 border-gray-200">
			<div className="mb-4">
				<Image
					src={LogoFull}
					alt="Dmystified"
					width={150}
					height={150}
					className="mx-1"
				/>

				<p className="m-1 w-fit text-xs font-medium text-gray-600">
					Dmystified, 2024, All Rights Reserved
				</p>

				<Link href="https://x.com/dmystified_tech" target="_blank">
					<Badge variant="outline" className="mb-2 hover:bg-gray-100">
						Get latest updates on X
					</Badge>
				</Link>
			</div>

			<p className="text-xs font-medium text-gray-600 text-center">
				Illustrations from{" "}
				<Link
					href="https://popsy.co/"
					className="font-medium text-orange/80 underline"
				>
					Popsy
				</Link>
			</p>

			<div className="p-1 flex flex-wrap justify-center gap-2 text-sm">
				<Link
					href="#"
					className="text-sm font-medium text-gray-600 hover:text-gray-900"
				>
					Terms
				</Link>

				<Link
					href="#"
					className="text-sm font-medium text-gray-600 hover:text-gray-900"
				>
					Policy
				</Link>
			</div>
		</Section>
	);
}
