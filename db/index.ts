import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { player } from './schema'

// Connect to Supabase
const sql = postgres(process.env.REACT_APP_SUPABASE_URL!, {
    ssl: "require"
})

// Initialize Drizzle
const db = drizzle(sql, { schema: { player }})