import { supabase } from '$ts/constants/supabase';
import type { TDBCollectionShallow } from '$ts/types/db';
import type { PostgrestError } from '@supabase/supabase-js';

export async function getCollectionsShallow() {
	const { data, error }: { data: TDBCollectionShallow[] | null; error: PostgrestError | null } =
		await supabase.from('art_collection').select(
			`
        id,
        name,
        slug,
        imageUrl:image_url,
        imageWidth:image_width,
        imageHeight:image_height,
        imagePlaceholderBase64:image_placeholder_base64,
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
	return { data, error };
}
