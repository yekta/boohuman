<script lang="ts">
	import BgHoverEffect from '$components/BgHoverEffect.svelte';
	import ButtonBack from '$components/buttons/ButtonBack.svelte';
	import EntryCard from '$components/CollectionEntryCard.svelte';
	import FullScreenCollectionEntry from '$components/FullScreenCollectionEntry.svelte';
	import MetaTag from '$components/MetaTag.svelte';
	import PageWrapper from '$components/PageWrapper.svelte';
	import { srcFromUrl } from '$ts/constants/imgproxy';
	import { canonicalUrl } from '$ts/constants/seo';
	import { activeEntry } from '$ts/stores/activeEntry';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import type { TDBCollection, TDBCollectionEntry, TDBCollectionShallow } from '$ts/types/db';
	import type { TCollectionEntryObject } from '$ts/types/main';

	export let data: { collection: TDBCollection };

	const { collection } = data;
	const { entries, ...rest } = collection;
	const entryObjects: TCollectionEntryObject[] = entries.map((entry) => ({
		...entry,
		isLoadedBefore: false
	}));
	const collectionShallow: TDBCollectionShallow = { ...rest };

	function closeModal() {
		activeEntry.set(undefined);
	}

	let oldActiveEntry: TDBCollectionEntry | undefined;

	$: $activeEntry, activeEntryChanged();

	function activeEntryChanged() {
		if ($activeEntry !== undefined) {
			oldActiveEntry = $activeEntry;
		}
	}

	let innerHeight: number | undefined;
	let innerWidth: number | undefined;
</script>

<MetaTag
	title="{collection.name.toLowerCase()} | collections"
	description={collection.description.toLowerCase()}
	imageUrl={srcFromUrl(collection.previewImageUrl)}
	imageWidth={collection.previewImageWidth}
	imageHeight={collection.previewImageHeight}
	canonical="{canonicalUrl}/collections/{collection.slug}"
/>

<svelte:window
	bind:innerHeight
	bind:innerWidth
	on:keyup={(e) => {
		if ($activeEntry !== undefined && e.key === 'Escape') closeModal();
	}}
/>

<PageWrapper>
	<div class="w-full flex flex-col md:flex-row items-center justify-center px-5 py-12">
		<div class="flex flex-col items-stretch md:items-end justify-center">
			<h1 class="text-4xl font-bold text-center md:text-right max-w-md px-5 md:px-0">
				{collection.name.toLowerCase()}
			</h1>
			<div class="block md:hidden p-gradient-270 h-2px self-stretch mt-6" />
		</div>
		<div class="h-2px md:w-2px md:h-auto self-stretch mt-7 md:mx-12 md:my-0 px-5 md:px-0">
			<div class="hidden md:block p-gradient-180 w-full h-full" />
		</div>
		<div class="font-light flex flex-col md:py-2 text-lg">
			<div class="flex items-center py-0.5">
				<p class="text-c-on-bg/60 mr-0.5ch py-0.5">ai:</p>
				<a
					href={collection.aiOption.url}
					class="font-bold group relative overflow-hidden transition text-c-on-bg px-2 py-0.5 {$isTouchscreen
						? 'active:text-c-bg'
						: 'hover:text-c-bg'}"
					target="_blank"
				>
					<BgHoverEffect underline />
					<p class="relative">{collection.aiOption.name.toLowerCase()}</p>
				</a>
			</div>
			<div class="flex items-center py-0.5">
				<p class="text-c-on-bg/60 mr-0.5ch py-0.5">prompts:</p>
				<a
					href={collection.owner.url}
					class="font-bold group relative overflow-hidden transition text-c-on-bg px-2 py-0.5 {$isTouchscreen
						? 'active:text-c-bg'
						: 'hover:text-c-bg'}"
					target="_blank"
				>
					<BgHoverEffect underline />
					<p class="relative">{collection.owner.name.toLowerCase()}</p>
				</a>
			</div>
			<div class="flex items-center py-0.5">
				<p class="text-c-on-bg/60 mr-0.5ch py-0.5">gpu time:</p>
				<p class="font-bold text-c-on-bg px-2 py-0.5">
					{collection.gpuTimeHours.toString().toLowerCase()} hours
				</p>
			</div>
			<div class="flex items-center py-0.5">
				<p class="text-c-on-bg/60 mr-0.5ch py-0.5">total generations:</p>
				<p class="font-bold text-c-on-bg px-2 py-0.5">
					{collection.totalGenerations.toString().toLowerCase()}
				</p>
			</div>
		</div>
	</div>
	<!-- Entries -->
	<div class="w-full flex flex-wrap justify-center z-0 relative">
		{#each entryObjects.sort((a, b) => a.order - b.order) as entry, index (entry.id)}
			<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 relative">
				<svg class="w-full h-auto" width={entry.imageWidth} height={entry.imageHeight} />
				{#if $activeEntry?.id !== entry.id}
					<EntryCard bind:entry collection={collectionShallow} class="absolute left-0 top-0" />
				{/if}
			</div>
		{/each}
	</div>
	<!-- Back button -->
	<div class="w-full flex justify-center mt-12 mb-12">
		<ButtonBack />
	</div>
</PageWrapper>

{#if $activeEntry !== undefined}
	<FullScreenCollectionEntry
		entry={oldActiveEntry}
		onClickoutside={closeModal}
		windowInnerHeight={innerHeight}
		windowInnerWidth={innerWidth}
	/>
{/if}
