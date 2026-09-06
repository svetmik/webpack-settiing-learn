import { createClient } from '@supabase/supabase-js';
import { DEBUG } from '../config';

const supabaseUrl  = process.env.WEBPACK_SUPABASE_URL!;
const supabaseKey = process.env.WEBPACK_SUPABASE_PUBLISHABLE_KEY!;


//console.log("URL: ", supabaseUrl, "Key: ", supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);


