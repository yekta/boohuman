import { getCollectionsShallow } from '$ts/queries/getCollectionsShallow';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async () => {
	const { data, error } = await getCollectionsShallow();
	return {
		collections: data
	};
};
