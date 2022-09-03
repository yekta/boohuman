import { getCollection } from '$ts/queries/getCollection';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	const { slug } = params;
	const { data, error } = await getCollection(slug!!);
	return {
		collection: data
	};
};
