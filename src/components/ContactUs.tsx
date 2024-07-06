"use client";

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
			className="mx-auto max-w-7xl px-4 lg:px-8 flex flex-col md:flex-row gap-4"
			id="contactUs"
		>
			<div className="text-center sm:text-left md:w-1/2 cursor-default">
				<h2 className="pt-4 sm:pt-6 pb-2 font-semibold text-2xl sm:text-3xl md:text-4xl">
					<span className="text-orange">Connect </span> with Us
				</h2>

				<p className="leading-relaxed text-gray-500">
					We Value Your Input. Reach Out to Us with Any Comments,
					Suggestions, or Questions
				</p>
			</div>

			<form action="" className="flex-1 py-4 grid grid-cols-2 gap-2">
				<div className="col-span-2 sm:col-span-1 mb-4">
					<label
						className="text-sm font-medium leading-none text-gray-800"
						htmlFor="firstname"
					>
						First Name
					</label>
					<input
						className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange disabled:opacity-75"
						type="text"
						id="firstname"
						placeholder="Enter first name"
						value={contactInfo.firstName}
						onChange={handleChange}
					/>
				</div>

				<div className="col-span-2 sm:col-span-1 mb-4">
					<label
						className="text-sm font-medium leading-none text-gray-800"
						htmlFor="lastname"
					>
						Last Name
					</label>
					<input
						className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange disabled:opacity-75"
						type="text"
						id="lastname"
						placeholder="Enter last name"
						value={contactInfo.lastName}
						onChange={handleChange}
					/>
				</div>

				<div className="col-span-2 sm:col-span-1 mb-4">
					<label
						className="text-sm font-medium leading-none text-gray-800"
						htmlFor="emailaddress"
					>
						Email Address
					</label>
					<input
						className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange disabled:opacity-75"
						type="email"
						id="emailaddress"
						placeholder="Enter email address"
						value={contactInfo.email}
						onChange={handleChange}
					/>
				</div>

				<div className="col-span-2 sm:col-span-1 mb-4">
					<label
						className="text-sm font-medium leading-none text-gray-800"
						htmlFor="contact"
					>
						Contact Number
					</label>
					<input
						className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange disabled:opacity-75"
						type="number"
						id="contact"
						placeholder="Enter contact number"
						value={contactInfo.contact}
						onChange={handleChange}
					/>
				</div>

				<div className="col-span-2 mb-4">
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
					className="col-span-2 w-full font-medium rounded-lg border-1 border-transparent bg-orange px-4 py-2 text-white hover:text-orange hover:bg-transparent hover:border-orange outline-none disabled:opacity-75"
				>
					Send Message
				</button>
			</form>
		</section>
	);
};

export default ContactUs;
