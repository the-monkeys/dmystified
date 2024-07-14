import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";

const CourseTableSkeleton = () => {
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
				<TableRow>
					<TableCell>
						<Skeleton className="size-10 rounded-full" />
					</TableCell>
					<TableCell>
						<Skeleton className="size-16" />
					</TableCell>
					<TableCell className="w-1/2 space-y-1">
						<Skeleton className="w-1/2 h-6" />
						<Skeleton className="h-4" />
					</TableCell>
				</TableRow>

				<TableRow>
					<TableCell>
						<Skeleton className="size-10 rounded-full" />
					</TableCell>
					<TableCell>
						<Skeleton className="size-16" />
					</TableCell>
					<TableCell className="w-1/2 space-y-1">
						<Skeleton className="w-1/2 h-6" />
						<Skeleton className="h-4" />
					</TableCell>
				</TableRow>

				<TableRow>
					<TableCell>
						<Skeleton className="size-10 rounded-full" />
					</TableCell>
					<TableCell>
						<Skeleton className="size-16" />
					</TableCell>
					<TableCell className="w-1/2 space-y-1">
						<Skeleton className="w-1/2 h-6" />
						<Skeleton className="h-4" />
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};

export default CourseTableSkeleton;
