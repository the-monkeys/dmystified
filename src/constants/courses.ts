export const CourseIDs = {
	GOLANG: "golang_01",
	REACT: "react_02",
	NEXTJS: "next_03",
	JAVASCRIPT: "javascript_04",
	TYPESCRIPT: "typescript_05",
} as const;

export type Instructor = {
	id: number;
	name: string;
	github?: string;
};

export type CourseItem = {
	id: string;
	title: string;
	imagePath: string;
	description?: string;
	isLive: boolean;
	onHold: boolean;
	sectionCount?: number;
	durationInHours?: string;
	medium: string;
	instructors: Instructor[];
};

export const courseList: Record<string, CourseItem> = {
	[CourseIDs.GOLANG]: {
		id: CourseIDs.GOLANG,
		title: "Golang Programming",
		imagePath: "./tech/golang-logo.svg",
		description:
			"Comprehensive Go course covering basic syntax, concurrency, and package management for all skill levels. Learn about Go's unique features, such as goroutines and channels, which make concurrent programming more efficient. Understand how to manage dependencies with Go modules and build robust, maintainable applications. This course is designed to take you from a beginner to an advanced Go developer.",
		isLive: true,
		onHold: false,
		sectionCount: 5,
		durationInHours: "36",
		medium: "English",
		instructors: [
			{
				id: 1,
				name: "Dave Augustus",
				github: "https://github.com/daveaugustus",
			},
		],
	},
	[CourseIDs.REACT]: {
		id: CourseIDs.REACT,
		title: "Understanding React",
		imagePath: "./tech/react-logo.svg",
		description:
			"Deep dive into React, from basic components to advanced state management and hooks for building dynamic web apps. Explore the core concepts of React, such as JSX, props, and state, and how to use them effectively in your projects. Learn about React's ecosystem, including React Router for navigation and Redux for state management. By the end of this course, you'll be equipped to build and deploy scalable React applications.",
		isLive: false,
		onHold: false,
		sectionCount: 0,
		medium: "English",
		instructors: [],
	},
	[CourseIDs.NEXTJS]: {
		id: CourseIDs.NEXTJS,
		title: "Next.js Development",
		imagePath: "./tech/nextjs-logo.svg",
		description:
			"Explore Next.js features like server-side rendering, static site generation, and API routes for modern web apps. Learn how to optimize your React applications for better performance and SEO. Understand the principles of static and dynamic rendering, and how to choose the right strategy for your project. This course will help you build high-performance, production-ready web applications using Next.js.",
		isLive: false,
		onHold: false,
		sectionCount: 0,
		medium: "English",
		instructors: [],
	},
	[CourseIDs.JAVASCRIPT]: {
		id: CourseIDs.JAVASCRIPT,
		title: "JavaScript Foundations",
		imagePath: "./tech/javascript-logo.svg",
		description:
			"Fundamentals of JavaScript, including syntax, data types, and object-oriented programming. Ideal for beginners. Gain a strong foundation in JavaScript by learning about variables, control structures, and functions. Explore more advanced topics like closures, prototypes, and asynchronous programming. This course is perfect for those new to programming or looking to solidify their understanding of JavaScript.",
		isLive: false,
		onHold: false,
		sectionCount: 0,
		medium: "English",
		instructors: [],
	},
	[CourseIDs.TYPESCRIPT]: {
		id: CourseIDs.TYPESCRIPT,
		title: "Typescript Essentials",
		imagePath: "./tech/typescript-logo.svg",
		description:
			"Essentials of TypeScript, covering basic types, interfaces, and advanced features like generics and decorators. Understand the benefits of using TypeScript for large-scale applications, including better code maintainability and fewer runtime errors. Learn how to integrate TypeScript with popular frameworks and libraries, and how to write clean, efficient, and scalable TypeScript code. This course is designed for developers who want to improve their skills and adopt TypeScript in their projects.",
		isLive: false,
		onHold: false,
		sectionCount: 0,
		medium: "English",
		instructors: [],
	},
};
