ALTER TABLE "course" ALTER COLUMN "status" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "course" ALTER COLUMN "duration" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "course" DROP COLUMN IF EXISTS "isLive";--> statement-breakpoint
ALTER TABLE "course" DROP COLUMN IF EXISTS "onHold";--> statement-breakpoint
ALTER TABLE "course" DROP COLUMN IF EXISTS "medium";