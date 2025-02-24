import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_API_URL!;
const subaseAnonKey = process.env.EXPO_PUBLIC_API_KEY!;

export const supabaseClient = createClient(supabaseUrl, subaseAnonKey);