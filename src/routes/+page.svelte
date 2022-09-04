<script lang="ts">
	import CollectionsSection from '$components/CollectionsSection.svelte';
	import MetaTag from '$components/MetaTag.svelte';
	import { canonicalUrl } from '$ts/constants/seo';
	import type { TDBCollectionShallow } from '$ts/types/db';

	export let data: {
		collections: TDBCollectionShallow[];
	};
	const { collections } = data;
</script>

<MetaTag
	title="boohuman"
	description="ai generated, human curated art."
	imageUrl="{canonicalUrl}/previews/home.jpg"
	canonical={canonicalUrl}
/>

<div class="flex-1 flex flex-col items-center justify-center relative">
	<h1
		class="px-5 text-4xl md:text-5xl leading-tight md:leading-tight font-bold text-center pt-16 pb-4"
	>
		ai generated,
		<br />
		human curated
		<br />
		<div class="text-7xl md:text-8xl text-c-bg p-gradient-135 inline-block px-4 mt-4">art</div>
	</h1>
	<CollectionsSection {collections} />
</div>
