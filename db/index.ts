import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { players } from './schema'

// Connect to Supabase
const sql = postgres(process.env.EXPO_PUBLIC_SUPABASE_URL!, {
    ssl: "require"
})

// Initialize Drizzle
const db = drizzle(sql, { schema: { players }})