import { supabase } from '$ts/constants/supabase';
import type { TDBCollectionShallow } from '$ts/types/db';
import type { PostgrestError } from '@supabase/supabase-js';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async () => {
	const {
		data: collections,
		error
	}: { data: TDBCollectionShallow[] | null; error: PostgrestError | null } = await supabase
		.from('art_collection')
		.select(
			`
        id,
        name,
        slug,
        imageUrl:image_url,
        imageWidth:image_width,
        imageHeight:image_height,
        gpuTimeHours:gpu_time_hours,
        totalGenerations:total_generations,
        aiOption:ai_option (
          name,
          url
        ),
        owner:public_user (
          name,
          url
        )
  		`
		);
	return {
		collections
	};
};
