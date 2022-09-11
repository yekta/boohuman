import { supabase } from '$ts/constants/supabase';
import type { TDBCollection } from '$ts/types/db';
import type { PostgrestError } from '@supabase/supabase-js';

export async function getCollection(slug: string) {
	const { data, error }: { data: TDBCollection | null; error: PostgrestError | null } =
		await supabase
			.from('art_collection')
			.select(
				`
          id,
          name,
          slug,
          description,
          gpuTimeHours:gpu_time_hours,
          totalGenerations:total_generations,
          previewImageUrl:preview_image_url,
          previewImageWidth:preview_image_width,
          previewImageHeight:preview_image_height,
          entries:art_collection_entry (
            id,
            name,
            imageUrl:image_url,
            imageWidth:image_width,
            imageHeight:image_height,
            imagePlaceholderBase64:image_placeholder_base64,
            order,
            prompt
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
	return { data, error };
}
