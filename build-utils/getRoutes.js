import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getRoutes() {
	let pages = ['*'];
	try {
		const { data, error } = await supabase.from('art_collection').select('slug');
		const routes = data.map((p) => `/collections/${p.slug}`);
		pages.push(...routes);
	} catch (error) {
		console.log(error);
	}
	return pages;
}
