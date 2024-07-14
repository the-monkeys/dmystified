import { addCourseSchema } from "@/lib/schema/course";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addCourseAction } from "../actions";
import { toast } from "@/components/ui/use-toast";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AddCourseForm = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<z.infer<typeof addCourseSchema>>({
		resolver: zodResolver(addCourseSchema),
		defaultValues: {
			cname: "",
			title: "",
			description: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof addCourseSchema>) => {
		setLoading(true);

		try {
			const response = await addCourseAction(values);

			if (response.status) {
				toast({
					title: "Success",
					description: response.message,
				});
				form.reset({
					cname: "",
					title: "",
					description: "",
				});
				setLoading(false);
			} else {
				toast({
					variant: "destructive",
					title: "Error",
					description: response.message,
				});
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
			toast({
				variant: "destructive",
				title: "Error",
				description: "An error occurred while adding the course.",
			});
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="cname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>

							<ul className="px-2 pb-2 list-decimal list-inside">
								<li className="text-sm text-gray-600">
									Should be in format name_name_YY (e.g.
									golang_24)
								</li>

								<li className="text-sm text-gray-600">
									Contain only lowercase letters
								</li>
							</ul>

							<FormControl>
								<Input
									placeholder="Enter course name"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>

							<FormControl>
								<Input
									placeholder="Enter course title"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>

							<FormControl>
								<Textarea
									placeholder="Enter course description"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="pt-4">
					<Button disabled={loading} className="float-right">
						{loading && <Loader />}
						Add Course
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default AddCourseForm;
