import { sql } from "drizzle-orm";
import {
	boolean,
	integer,
	pgTable,
	serial,
	text,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";

export const CourseTable = pgTable("course", {
	id: serial("id").primaryKey(),
	title: varchar("title", { length: 128 }).notNull(),
	description: text("description").notNull(),
	language: varchar("language", { length: 64 })
		.array()
		.notNull()
		.default(sql`ARRAY[]::varchar[]`),
	isLive: boolean("isLive").notNull().default(false),
	createdAt: timestamp("createdAt").notNull().defaultNow(),
	updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const SectionTable = pgTable("section", {
	id: uuid("id").primaryKey().defaultRandom(),
	title: varchar("title", { length: 256 }).notNull(),
	description: text("description"),
	order: integer("order").notNull(),
	createdAt: timestamp("createdAt").notNull().defaultNow(),
	updatedAt: timestamp("updatedAt").notNull().defaultNow(),
	courseId: integer("courseId")
		.notNull()
		.references(() => CourseTable.id),
});

export const TopicTable = pgTable("topic", {
	id: uuid("id").primaryKey().defaultRandom(),
	title: varchar("title", { length: 256 }).notNull(),
	fileName: varchar("fileName", { length: 128 }).notNull(),
	order: integer("order").notNull(),
	createdAt: timestamp("createdAt").notNull().defaultNow(),
	updatedAt: timestamp("updatedAt").notNull().defaultNow(),
	sectionId: uuid("sectionId")
		.notNull()
		.references(() => SectionTable.id),
});
