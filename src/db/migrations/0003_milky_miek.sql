DO $$ BEGIN
 CREATE TYPE "public"."course_status" AS ENUM('Live', 'Upcoming', 'Archive');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "topic" ALTER COLUMN "path" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "course" ADD COLUMN "status" "course_status" DEFAULT 'Upcoming';--> statement-breakpoint
ALTER TABLE "course" ADD COLUMN "duration" smallint;--> statement-breakpoint
ALTER TABLE "course" ADD COLUMN "medium" varchar(128);--> statement-breakpoint
ALTER TABLE "section" ADD COLUMN "order" smallint;--> statement-breakpoint
ALTER TABLE "topic" ADD COLUMN "url" varchar(256);