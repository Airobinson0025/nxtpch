import { pgTable, integer, timestamp, serial, text } from 'drizzle-orm/pg-core'

// Players table
export const players = pgTable('players', {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    age: integer("age").notNull(),
    position: text("position").notNull(), // Pitcher, Catcher, Infielder, Outfielder
    height: text("height").notNull(),
    weight: integer("weight").notNull(),
    handedness: text("handedness").notNull(), // Left, Right, Switch
    team_name: text("team"), // Optional
    created_at: timestamp("created_at").defaultNow()
})