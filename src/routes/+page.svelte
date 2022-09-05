<script lang="ts">
	import CollectionsSection from '$components/CollectionsSection.svelte';
	import MetaTag from '$components/MetaTag.svelte';
	import PageWrapper from '$components/PageWrapper.svelte';
	import { canonicalUrl } from '$ts/constants/seo';
	import type { TDBCollectionShallow } from '$ts/types/db';
	import { quadOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

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

<PageWrapper>
	<div class="flex-1 flex flex-col items-center justify-center relative">
		<h1
			class="px-5 text-4xl md:text-5xl leading-tight md:leading-tight font-bold text-center pt-12"
		>
			ai generated,
			<br />
			human curated
			<br />
			<div class="text-6xl md:text-7xl text-c-bg inline-block px-3 mt-4 relative overflow-hidden">
				<div class="absolute -left-1/2 -top-1/2 p-gradient-animation" />
				<p class="relative">art</p>
			</div>
		</h1>
		<CollectionsSection {collections} />
	</div>
</PageWrapper>
