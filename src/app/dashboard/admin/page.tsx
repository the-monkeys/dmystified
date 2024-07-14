"use client";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import AddCourseForm from "./components/AddCourseForm";
import Icon from "@/components/icon";
import useSWR from "swr";
import { getCoursesAction } from "./actions";
import Section from "@/components/layout/Section";
import CourseTableSkeleton from "@/components/skeleton/CourseTableSkeleton";
import CoursesTable from "./components/CoursesTable";
import Image from "next/image";
import DashboardImage from "../../../../public/dashboard.svg";

const AdminDashboard = () => {
	const { data: courses, isLoading } = useSWR(
		"getAllCourses",
		getCoursesAction
	);

	return (
		<Container className="min-h-screen">
			<Section className="flex flex-col items-center">
				<h1 className="font-medium text-2xl sm:text-3xl md:text-4xl text-center">
					<span className="font-medium text-orange">Admin</span>{" "}
					Dashboard
				</h1>

				<Image
					src={DashboardImage}
					alt="Dashboard Page"
					width={150}
					height={150}
					className="size-60"
				/>
			</Section>

			<Section className="mt-6">
				<div>
					<Dialog>
						<div className="mb-2 flex justify-end">
							<DialogTrigger asChild>
								<Button>
									Add
									<Icon name="RiAdd" className="ml-2" />
								</Button>
							</DialogTrigger>
						</div>

						<DialogContent>
							<DialogHeader>
								<DialogTitle>Course Details</DialogTitle>
							</DialogHeader>

							<AddCourseForm />
						</DialogContent>
					</Dialog>
				</div>

				<h3 className="mb-2 p-2 font-semibold text-xl sm:text-2xl">
					Courses
				</h3>

				{isLoading ? (
					<CourseTableSkeleton />
				) : (
					<CoursesTable courses={courses} />
				)}
			</Section>
		</Container>
	);
};

export default AdminDashboard;
