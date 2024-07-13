import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const ContactUs = () => {
	return (
		<section
			className="mx-auto max-w-7xl px-4 lg:px-8 flex flex-col md:flex-row gap-4"
			id="contactUs"
		>
			<div className="text-center sm:text-left md:w-1/2 cursor-default">
				<h2 className="pb-2 text-2xl sm:text-3xl md:text-4xl">
					<span className="font-medium text-orange">Connect </span>{" "}
					with Us
				</h2>

				<p className="leading-relaxed text-gray-500 text-sm sm:text-base">
					We Value Your Input. Reach Out to Us with Any Comments,
					Suggestions, or Questions
				</p>
			</div>

			<form action="" className="flex-1 py-4 grid grid-cols-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="firstname">First Name</Label>
					<Input
						id="firstname"
						type="text"
						placeholder="Enter first name"
					/>
				</div>

				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="lastname">Last Name</Label>
					<Input
						id="lastname"
						type="text"
						placeholder="Enter last name"
					/>
				</div>

				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="emailaddress">Email Address</Label>
					<Input
						id="emailaddress"
						type="email"
						placeholder="Enter email address"
					/>
				</div>

				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="contact">Contact Number</Label>
					<Input
						id="contact"
						type="number"
						placeholder="Enter contact number"
					/>
				</div>

				<div className="col-span-2">
					<Label htmlFor="message">Message</Label>
					<Textarea
						id="message"
						placeholder="Type your message here."
					/>
				</div>

				<Button
					type="button"
					variant="secondary"
					className="col-span-2"
				>
					Send Message
				</Button>
			</form>
		</section>
	);
};

export default ContactUs;
