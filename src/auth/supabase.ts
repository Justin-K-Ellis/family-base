import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl) {
  throw new Error("Supabase url not configured.");
}
if (!supabaseKey) {
  throw new Error("Supabase key not configured.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
