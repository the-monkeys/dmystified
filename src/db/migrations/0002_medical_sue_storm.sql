ALTER TABLE "section" DROP CONSTRAINT "section_courseId_course_id_fk";
--> statement-breakpoint
ALTER TABLE "topic" DROP CONSTRAINT "topic_sectionId_section_id_fk";
--> statement-breakpoint
ALTER TABLE "section" ALTER COLUMN "courseId" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "topic" ALTER COLUMN "sectionId" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "section" ADD CONSTRAINT "section_courseId_course_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "topic" ADD CONSTRAINT "topic_sectionId_section_id_fk" FOREIGN KEY ("sectionId") REFERENCES "public"."section"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
