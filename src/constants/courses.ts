export type CourseItem = {
	id: string;
	title: string;
	image?: string;
	description: string;
	instructors: {
		id: number;
		name: string;
		github?: string;
	}[];
	durationString: string;
	medium: string;
	totalSections: number;
};

export const courseList: Record<string, CourseItem> = {
	golang_01: {
		id: "golang_01",
		title: "Golang Programming",
		image: "./tech/golang-logo.svg",
		instructors: [
			{
				id: 1,
				name: "Dave Augustus",
				github: "https://github.com/daveaugustus",
			},
		],
		description:
			"This course provides a comprehensive understanding of Go, from basic syntax and structure to advanced concepts like concurrency and package management. Suitable for beginners and experienced programmers alike, it covers both core principles and practical applications of Golang.",
		durationString: "36",
		medium: "Live (English)",
		totalSections: 5,
	},
};
