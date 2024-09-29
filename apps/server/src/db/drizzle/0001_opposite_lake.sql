DO $$ BEGIN
 CREATE TYPE "public"."problemset_status" AS ENUM('O', 'A', 'P', 'p', 'h');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."contest_permission" AS ENUM('A', 'W', 'P', 'J');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TYPE "tag_status" ADD VALUE 'deleted';--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tag_to_problem_tag" (
	"tag_id" uuid NOT NULL,
	"problem_tag_id" uuid NOT NULL,
	CONSTRAINT "tag_to_problem_tag_tag_id_problem_tag_id_pk" PRIMARY KEY("tag_id","problem_tag_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "assignment_to_problemset" (
	"assignment_id" uuid NOT NULL,
	"problemset_id" uuid NOT NULL,
	CONSTRAINT "assignment_to_problemset_assignment_id_problemset_id_pk" PRIMARY KEY("assignment_id","problemset_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "judger_assignment" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "discussions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"content" text,
	"user_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "contest_results" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"score" numeric DEFAULT '0',
	"rank" integer,
	"rating_mutation" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "contests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_id" uuid,
	"title" text,
	"settings" json,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "problem_to_contest" (
	"problem_id" uuid NOT NULL,
	"contest_id" uuid NOT NULL,
	"problem_figure" text,
	CONSTRAINT "problem_to_contest_problem_id_contest_id_pk" PRIMARY KEY("problem_id","contest_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_to_contest" (
	"user_id" uuid NOT NULL,
	"contest_id" uuid NOT NULL,
	"permission" "contest_permission" DEFAULT 'W',
	"result_id" uuid NOT NULL,
	CONSTRAINT "user_to_contest_user_id_contest_id_pk" PRIMARY KEY("user_id","contest_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ratingMutations" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"rating_id" uuid NOT NULL,
	"timestamp" timestamp DEFAULT now(),
	"offset" numeric,
	"contest_result_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ratings" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"rating" numeric
);
--> statement-breakpoint
ALTER TABLE "problem_tags" RENAME COLUMN "tag_id" TO "id";--> statement-breakpoint
ALTER TABLE "organization_member" DROP CONSTRAINT "organization_member_organization_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "problem_tags" DROP CONSTRAINT "problem_tags_tag_id_tags_id_fk";
--> statement-breakpoint
ALTER TABLE "problem_tags" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "problem_tags" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "problem_tags" ALTER COLUMN "id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "problems" ADD COLUMN "problemset_id" uuid;--> statement-breakpoint
ALTER TABLE "problemset" ADD COLUMN "problemset_status" "problemset_status";--> statement-breakpoint
ALTER TABLE "submissions" ADD COLUMN "submit_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "judgers" ADD COLUMN "token" text;--> statement-breakpoint
ALTER TABLE "judgers" ADD COLUMN "owner_id" uuid;--> statement-breakpoint
ALTER TABLE "judgers" ADD COLUMN "assignment_id" uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tag_to_problem_tag" ADD CONSTRAINT "tag_to_problem_tag_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tag_to_problem_tag" ADD CONSTRAINT "tag_to_problem_tag_problem_tag_id_problem_tags_id_fk" FOREIGN KEY ("problem_tag_id") REFERENCES "public"."problem_tags"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "assignment_to_problemset" ADD CONSTRAINT "assignment_to_problemset_assignment_id_users_id_fk" FOREIGN KEY ("assignment_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "assignment_to_problemset" ADD CONSTRAINT "assignment_to_problemset_problemset_id_problemset_id_fk" FOREIGN KEY ("problemset_id") REFERENCES "public"."problemset"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "discussions" ADD CONSTRAINT "discussions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "problem_to_contest" ADD CONSTRAINT "problem_to_contest_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "problem_to_contest" ADD CONSTRAINT "problem_to_contest_contest_id_contests_id_fk" FOREIGN KEY ("contest_id") REFERENCES "public"."contests"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_to_contest" ADD CONSTRAINT "user_to_contest_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_to_contest" ADD CONSTRAINT "user_to_contest_contest_id_contests_id_fk" FOREIGN KEY ("contest_id") REFERENCES "public"."contests"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_to_contest" ADD CONSTRAINT "user_to_contest_result_id_contest_results_id_fk" FOREIGN KEY ("result_id") REFERENCES "public"."contest_results"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ratingMutations" ADD CONSTRAINT "ratingMutations_rating_id_ratings_id_fk" FOREIGN KEY ("rating_id") REFERENCES "public"."ratings"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ratingMutations" ADD CONSTRAINT "ratingMutations_contest_result_id_contest_results_id_fk" FOREIGN KEY ("contest_result_id") REFERENCES "public"."contest_results"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ratings" ADD CONSTRAINT "ratings_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organization_member" ADD CONSTRAINT "organization_member_organization_id_organization_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "problems" ADD CONSTRAINT "problems_problemset_id_problemset_id_fk" FOREIGN KEY ("problemset_id") REFERENCES "public"."problemset"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "judgers" ADD CONSTRAINT "judgers_assignment_id_judger_assignment_id_fk" FOREIGN KEY ("assignment_id") REFERENCES "public"."judger_assignment"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
