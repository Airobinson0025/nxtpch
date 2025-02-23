CREATE TABLE "players" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer NOT NULL,
	"position" text NOT NULL,
	"height" text NOT NULL,
	"weight" integer NOT NULL,
	"handedness" text NOT NULL,
	"team" text,
	"created_at" timestamp DEFAULT now()
);
