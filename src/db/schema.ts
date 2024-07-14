import {
	boolean,
	pgTable,
	text,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";

export const CourseTable = pgTable("course", {
	id: uuid("id").primaryKey().defaultRandom(),
	cname: varchar("name", { length: 256 }).notNull().unique(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	isLive: boolean("isLive").notNull().default(false),
	createdAt: timestamp("createdAt").notNull().defaultNow(),
	updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});
