<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	export let title: string;
	export let description: string;
	export let canonical: string;
	export let imageUrl: string;
	export let imageWidth = 1920;
	export let imageHeight = 1080;
</script>

<MetaTags
	{title}
	{description}
	{canonical}
	openGraph={{
		type: 'website',
		url: canonical,
		title: title,
		description: description,
		images: [
			{
				url: imageUrl,
				width: imageWidth,
				height: imageHeight
			}
		]
	}}
	twitter={{
		cardType: 'summary_large_image',
		title: title,
		description: description,
		image: imageUrl
	}}
/>
