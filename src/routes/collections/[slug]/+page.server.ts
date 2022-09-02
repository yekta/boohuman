import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	const slug = { params };
	return {
		status: 200,
		data: slug
	};
};
