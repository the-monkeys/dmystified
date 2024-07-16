export const CourseIDs = {
  GOLANG: 'golang_01',
  REACT: 'react_02',
  NEXTJS: 'next_03',
  JAVASCRIPT: 'javascript_04',
  TYPESCRIPT: 'typescript_05',
} as const;

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
};

export const courseList: Record<string, CourseItem> = {
  [CourseIDs.GOLANG]: {
    id: CourseIDs.GOLANG,
    title: 'Golang Programming',
    imagePath: './tech/golang-logo.svg',
    description:
      'Comprehensive Go course covering basic syntax, concurrency, and package management for all skill levels.',
    isLive: true,
    onHold: false,
    sectionCount: 5,
    durationInHours: '36',
    medium: 'English',
  },
  [CourseIDs.REACT]: {
    id: CourseIDs.REACT,
    title: 'Understanding React',
    imagePath: './tech/react-logo.svg',
    description:
      'Deep dive into React, from basic components to advanced state management and hooks for building dynamic web apps.',
    isLive: false,
    onHold: false,
    sectionCount: 0,
    medium: 'English',
  },
  [CourseIDs.NEXTJS]: {
    id: CourseIDs.NEXTJS,
    title: 'Next.js Development',
    imagePath: './tech/nextjs-logo.svg',
    description:
      'Explore Next.js features like server-side rendering, static site generation, and API routes for modern web apps.',
    isLive: false,
    onHold: false,
    sectionCount: 0,
    medium: 'English',
  },
  [CourseIDs.JAVASCRIPT]: {
    id: CourseIDs.JAVASCRIPT,
    title: 'JavaScript Foundations',
    imagePath: './tech/javascript-logo.svg',
    description:
      'Fundamentals of JavaScript, including syntax, data types, and object-oriented programming. Ideal for beginners.',
    isLive: false,
    onHold: false,
    sectionCount: 0,
    medium: 'English',
  },
  [CourseIDs.TYPESCRIPT]: {
    id: CourseIDs.TYPESCRIPT,
    title: 'Typescript Essentials',
    imagePath: './tech/typescript-logo.svg',
    description:
      'Essentials of TypeScript, covering basic types, interfaces, and advanced features like generics and decorators.',
    isLive: false,
    onHold: false,
    sectionCount: 0,
    medium: 'English',
  },
};
