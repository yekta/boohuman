import { supabase } from '$ts/constants/supabase';
import type { TDBCollection } from '$ts/types/db';
import type { PostgrestError } from '@supabase/supabase-js';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	const { slug } = params;
	const { data: collection, error }: { data: TDBCollection | null; error: PostgrestError | null } =
		await supabase
			.from('art_collection')
			.select(
				`
					id,
					name,
					gpuTimeHours:gpu_time_hours,
					totalGenerations:total_generations,
					entries:art_collection_entry (
						id,
						name,
						imageUrl:image_url,
						imageWidth:image_width,
						imageHeight:image_height
					),
					aiOption:ai_option (
						name,
						url
					),
					owner:public_user (
						name,
						url
					)
  			`
			)
			.eq('slug', slug)
			.single();
	return {
		collection
	};
};
