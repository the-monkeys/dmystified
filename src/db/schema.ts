import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const CourseTable = pgTable('course', {
  id: uuid('id').primaryKey().defaultRandom(),
  cname: varchar('name', { length: 256 }).notNull().unique(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  imagePath: varchar('imagePath', { length: 256 }).notNull().default(''),
  isLive: boolean('isLive').notNull().default(false),
  onHold: boolean('onHold').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
});

export const SectionTable = pgTable('section', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  courseId: uuid('courseId')
    .references(() => CourseTable.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
});

export const TopicTable = pgTable('topic', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  path: varchar('path', { length: 256 }).notNull(),
  sectionId: integer('sectionId')
    .references(() => SectionTable.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
});
