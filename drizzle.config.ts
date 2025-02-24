import { config } from 'dotenv';
config(); 

export default {
    schema: './db/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.EXPO_PUBLIC_API_URL,
    }

}