<script lang="ts">
	import BgHoverEffect from '$components/BgHoverEffect.svelte';
	import ButtonBack from '$components/buttons/ButtonBack.svelte';

	import EntryCard from '$components/CollectionEntryCard.svelte';
	import MetaTag from '$components/MetaTag.svelte';
	import { clickoutside } from '$ts/actions/clickoutside';
	import { receive, send } from '$ts/animation/transitions';
	import { canonicalUrl } from '$ts/constants/seo';
	import { activeEntry } from '$ts/stores/activeEntry';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import type { TDBCollection, TDBCollectionEntry } from '$ts/types/db';
	import { quadOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	export let data: { collection: TDBCollection };
	const { collection } = data;

	function closeModal() {
		activeEntry.set(undefined);
	}

	let oldActiveEntry: TDBCollectionEntry | undefined;

	$: $activeEntry, setOldActiveEntry();

	function setOldActiveEntry() {
		if ($activeEntry !== undefined) {
			oldActiveEntry = $activeEntry;
		}
	}
</script>

<MetaTag
	title="{collection.name.toLowerCase()} | collections"
	description={collection.description.toLowerCase()}
	imageUrl={collection.previewImageUrl}
	imageWidth={collection.previewImageWidth}
	imageHeight={collection.previewImageHeight}
	canonical="{canonicalUrl}/collections/{collection.slug}"
/>

<div class="w-full flex flex-col">
	<!-- Title section -->
	<div class="w-full flex flex-col md:flex-row items-center justify-center px-5 py-12">
		<div class="flex flex-col items-stretch md:items-end justify-center">
			<h1 class="text-4xl font-bold text-center md:text-right max-w-md px-5 md:px-0">
				{collection.name.toLowerCase()}
			</h1>
			<div class="block md:hidden p-gradient-90 h-2px self-stretch mt-7" />
		</div>
		<div class="h-2px md:w-2px md:h-auto self-stretch mt-7 md:mx-12 md:my-0 px-5 md:px-0">
			<div class="hidden md:block p-gradient-180 w-full h-full" />
		</div>
		<div class="font-light flex flex-col md:py-2 gap-1.5 text-lg">
			<div class="flex items-center">
				<p class="mr-0.5ch text-c-on-bg/60">ai:</p>
				<a
					href={collection.aiOption.url}
					class="font-bold group relative overflow-hidden transition text-c-on-bg px-1 {$isTouchscreen
						? 'active:text-c-bg'
						: 'hover:text-c-bg'}"
					target="_blank"
				>
					<BgHoverEffect />
					<p class="relative">{collection.aiOption.name.toLowerCase()}</p>
				</a>
			</div>
			<div class="flex items-center">
				<p class="text-c-on-bg/60 mr-0.5ch">prompts by:</p>
				<a
					href={collection.owner.url}
					class="font-bold group relative overflow-hidden transition text-c-on-bg px-1 {$isTouchscreen
						? 'active:text-c-bg'
						: 'hover:text-c-bg'}"
					target="_blank"
				>
					<BgHoverEffect />
					<p class="relative">{collection.owner.name.toLowerCase()}</p>
				</a>
			</div>
			<div class="flex items-center">
				<p class="text-c-on-bg/60 mr-0.5ch">gpu time:</p>
				<p class="font-bold text-c-on-bg">
					{collection.gpuTimeHours.toString().toLowerCase()} hours
				</p>
			</div>
			<div class="flex items-center">
				<p class="text-c-on-bg/60 mr-0.5ch">total generations:</p>
				<p class="font-bold text-c-on-bg">{collection.totalGenerations.toString().toLowerCase()}</p>
			</div>
		</div>
	</div>
	<!-- Entries -->
	<div class="w-full flex flex-wrap justify-center z-0 relative">
		{#each collection.entries.sort((a, b) => a.order - b.order) as entry (entry.id)}
			<div
				style="aspect-ratio: {entry.imageWidth / entry.imageHeight};"
				class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-c-bg relative flex flex-col"
			>
				{#if $activeEntry?.id !== entry.id}
					<EntryCard {entry} />
				{/if}
			</div>
		{/each}
	</div>
	<!-- Back button -->
	<div class="w-full flex justify-center mt-12 mb-12">
		<ButtonBack />
	</div>
</div>

{#if $activeEntry !== undefined}
	<div
		transition:fade|local={{ duration: 300, easing: quadOut }}
		class="fixed flex flex-col items-center justify-center left-0 top-0 w-screen h-screen z-40 bg-c-bg/90"
	/>
	<div
		class="fixed flex flex-col items-center justify-center left-0 top-0 w-screen h-screen z-50 p-5"
	>
		<div
			style="aspect-ratio: {(oldActiveEntry?.imageWidth || 0) /
				(oldActiveEntry?.imageHeight || 1)};"
			class="max-w-full max-h-full object-contain"
		>
			<div
				in:receive|local={{ key: oldActiveEntry?.id }}
				out:send|local={{ key: oldActiveEntry?.id }}
				class="w-full bg-c-bg/10"
			>
				<img
					use:clickoutside={closeModal}
					class="w-full h-full select-none"
					src={oldActiveEntry?.imageUrl}
					width={oldActiveEntry?.imageWidth}
					height={oldActiveEntry?.imageHeight}
					alt={oldActiveEntry?.name}
				/>
			</div>
		</div>
	</div>
{/if}
