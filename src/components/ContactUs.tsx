"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

const ContactUs = () => {
	const [contactInfo, setContactInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		contact: "",
		message: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target;
		setContactInfo((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	return (
		<section
			className="mx-auto my-8 sm:my-12 max-w-7xl px-4 lg:px-8	"
			id="contactUs"
		>
			<div className="mx-auto max-w-7xl py-12 md:py-24">
				<div className="flex gap-4 flex-col md:flex-row items-end lg:items-center">
					<div className="w-full md:w-1/2">
						<div>
							<h2 className="py-4 font-bold text-2xl sm:text-3xl md:text-4xl">
								<span className="text-orange">Connect </span>{" "}
								with Us
							</h2>

							<p className="mb-8 leading-relaxed font-semibold text-gray-500">
								We Value Your Input. Reach Out to Us with Any
								Comments, Suggestions, or Questions
							</p>

							<form action="" className="mt-4 space-y-4">
								<div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
									<div className="grid w-full items-center gap-1.5">
										<label
											className="text-sm font-medium leading-none text-gray-800"
											htmlFor="firstName"
										>
											First Name
										</label>
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange disabled:opacity-75"
											type="text"
											id="firstName"
											placeholder="First Name"
											value={contactInfo.firstName}
											onChange={handleChange}
										/>
									</div>

									<div className="grid w-full items-center gap-1.5">
										<label
											className="text-sm font-medium leading-none text-gray-800"
											htmlFor="lastName"
										>
											Last Name
										</label>
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange disabled:opacity-75"
											type="text"
											id="lastName"
											placeholder="Last Name"
											value={contactInfo.lastName}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="grid w-full items-center gap-1.5">
									<label
										className="text-sm font-medium leading-none text-gray-800"
										htmlFor="email"
									>
										Email Address
									</label>
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange disabled:opacity-75"
										type="text"
										id="email"
										placeholder="Email Address"
										value={contactInfo.email}
										onChange={handleChange}
									/>
								</div>

								<div className="grid w-full items-center gap-1.5">
									<label
										className="text-sm font-medium leading-none text-gray-800"
										htmlFor="contact"
									>
										Contact Number
									</label>
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange disabled:opacity-75"
										type="tel"
										id="contact"
										placeholder="Contact Number"
										value={contactInfo.contact}
										onChange={handleChange}
									/>
								</div>

								<div className="grid w-full items-center gap-1.5">
									<label
										className="text-sm font-medium leading-none text-gray-800"
										htmlFor="message"
									>
										Message
									</label>
									<textarea
										className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange disabled:opacity-75"
										id="message"
										placeholder="Leave us a message"
										cols={3}
										value={contactInfo.message}
										onChange={handleChange}
									/>
								</div>

								<button
									type="button"
									className="w-full rounded-lg border-1 border-transparent bg-orange px-3 py-3 font-semibold text-white hover:text-black hover:bg-transparent hover:border-orange hover:shadow-md outline-none disabled:opacity-75"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>

					<div className="flex-1 hidden md:block">
						<Image
							src="/contact_us.svg"
							alt="Contact Us"
							width={300}
							height={300}
							className="w-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
