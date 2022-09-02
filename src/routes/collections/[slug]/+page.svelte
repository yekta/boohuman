<script lang="ts">
	import BgHoverEffect from '$components/BgHoverEffect.svelte';
	import ButtonBack from '$components/buttons/ButtonBack.svelte';

	import EntryCard from '$components/CollectionEntryCard.svelte';
	import { clickoutside } from '$ts/actions/clickoutside';
	import { receive, send } from '$ts/animation/transitions';
	import { collection } from '$ts/constants/collections';
	import { activeEntry } from '$ts/stores/activeEntry';
	import type { TCollectionEntry } from '$ts/types/main';
	import { quadOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	function closeModal() {
		activeEntry.set(undefined);
	}

	let oldActiveEntry: TCollectionEntry | undefined;

	$: $activeEntry, setOldActiveEntry();

	function setOldActiveEntry() {
		if ($activeEntry !== undefined) {
			oldActiveEntry = $activeEntry;
		}
	}
</script>

<div class="w-full flex flex-col">
	<!-- Title section -->
	<div class="w-full flex items-center justify-center px-5 py-12">
		<div class="flex flex-col items-end justify-center self-stretch">
			<h1 class="text-4xl font-bold text-right max-w-md">{collection.name.toLowerCase()}</h1>
		</div>
		<div class="w-2px self-stretch p-gradient-180 mx-8" />
		<div class="font-light flex flex-col py-2 gap-1.5 text-lg">
			<div class="flex items-center">
				<p class="mr-0.5ch text-c-on-bg/60">ai:</p>
				<a
					href={collection.aiUrl}
					class="font-bold group relative overflow-hidden transition text-c-on-bg hover:text-c-bg px-1"
					target="_blank"
				>
					<BgHoverEffect />
					<p class="relative">{collection.aiName.toLowerCase()}</p>
				</a>
			</div>
			<div class="flex items-center">
				<p class="text-c-on-bg/60 mr-0.5ch">prompts by:</p>
				<a
					href={collection.owner.url}
					class="font-bold group relative overflow-hidden transition text-c-on-bg hover:text-c-bg px-1"
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
		{#each collection.entries as entry (entry.id)}
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
	<div class="w-full flex justify-center mt-12">
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
		<img
			in:receive|local={{ key: oldActiveEntry?.id }}
			out:send|local={{ key: oldActiveEntry?.id }}
			use:clickoutside={closeModal}
			class="max-h-full max-w-full select-none"
			src={oldActiveEntry?.imageUrl}
			alt={oldActiveEntry?.name}
		/>
	</div>
{/if}
