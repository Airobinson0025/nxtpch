import { pgTable, integer, timestamp, serial, text, uuid } from 'drizzle-orm/pg-core'

// Users table (handles both email and OAuth users)
export const user = pgTable( 'user', {
    id: uuid("id").defaultRandom().primaryKey(),
    email: text("email").notNull().unique(),
    hashed_password: text("password"), // Nullable for OAuth users
    provider: text("provider").notNull().default("'email'"), // 'Email' or 'Google'
    created_at: timestamp("created_at").defaultNow()
})

// Players table linked to users
export const player = pgTable('player', {
    id: serial("id").primaryKey(),
    user_id: uuid("user_id").notNull().references(() => user.id, { onDelete: 'cascade'}),
    name: text("name").notNull(),
    age: integer("age").notNull(),
    position: text("position").notNull(), // Pitcher, Catcher, Infielder, Outfielder
    height: text("height").notNull(),
    weight: integer("weight").notNull(),
    handedness: text("handedness").notNull(), // Left, Right, Switch
    created_at: timestamp("created_at").defaultNow()
})