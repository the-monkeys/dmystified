import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { FC } from "react";

type Course = {
	id: string;
	cname: string;
	title: string;
	description: string;
	isLive: boolean;
	createdAt: Date;
	updatedAt: Date;
};

type CoursesTableProps = {
	courses: Course[] | undefined;
};

const CoursesTable: FC<CoursesTableProps> = ({ courses }) => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-14">S.No.</TableHead>
					<TableHead className="w-20 text-center">Icon</TableHead>
					<TableHead className="min-w-[250px] text-center">
						Title & Description
					</TableHead>
					<TableHead className="text-center">Actions</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{courses?.map((course, index) => {
					return (
						<TableRow key={course.id}>
							<TableCell className="font-medium text-center">
								{index}
							</TableCell>
							<TableCell>
								<div className="size-16">
									<Image
										src="../../tech/golang-logo.svg"
										alt={course.title}
										width={100}
										height={100}
										className="w-full h-full"
									/>
								</div>
							</TableCell>
							<TableCell className="w-1/2">
								<p className="font-medium text-lg">
									{course.title}
								</p>

								<p className="text-sm text-gray-800 line-clamp-2">
									{course.description}
								</p>
							</TableCell>
							<TableCell></TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default CoursesTable;
