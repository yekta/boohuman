import { canonicalUrl } from '$ts/constants/seo';
import { supabase } from '$ts/constants/supabase';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const collectionRoutes = await getCollectionRoutes();
	const allRoutes = [...definedRoutes, ...collectionRoutes];
	const headers = {
		'Cache-Control': `max-age=${3600}, s-max-age=${3600}`,
		'Content-Type': 'text/xml'
	};
	const body = render(allRoutes);
	return new Response(body, { headers });
};

function render(routes: IRoute[]) {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    	${routes
				.map(
					(route) =>
						`<url><loc>${canonicalUrl}${route.loc}</loc><lastmod>${route.lastmod}</lastmod><changefreq>${route.changefreq}</changefreq></url>`
				)
				.join('')}
    </urlset>`;
	return xml;
}

async function getCollectionRoutes() {
	const { data, error } = await supabase.from('art_collection').select('slug');
	if (!data) throw Error(error.message);
	const routes = data.map(({ slug }: { slug: string }) => {
		let date = new Date(Date.now());
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let dateString = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day}`;
		let route: IRoute = {
			loc: `/collections/${slug}`,
			lastmod: dateString,
			changefreq: 'weekly'
		};
		return route;
	});
	return routes;
}

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const todayString = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day}`;

const definedRoutes: IRoute[] = [
	{
		loc: '/',
		lastmod: todayString,
		changefreq: 'daily'
	},
	{
		loc: '/collections',
		lastmod: todayString,
		changefreq: 'daily'
	},
	{
		loc: '/about',
		lastmod: todayString,
		changefreq: 'daily'
	}
];

interface IRoute {
	loc: string;
	lastmod: string;
	changefreq: string;
}
