<script lang="ts">
	import { clickoutside } from '$ts/actions/clickoutside';
	import { receive, send } from '$ts/animation/transitions';
	import { activeEntry } from '$ts/stores/activeEntry';
	import type { TCollection, TCollectionEntry } from '$ts/types/main';
	import { quadOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	const collection: TCollection = {
		owner: {
			name: 'yekta'
		},
		aiName: 'Midjourney',
		gpuTimeHours: 8,
		totalGenerations: 900,
		name: 'animals in hoodies',
		description: 'animals in hoodies.',
		slug: 'animals-in-hoodies',
		imageUrl:
			'https://cdn.discordapp.com/attachments/430655972956962817/1015016046199054376/Frame_20.jpg',
		entries: [
			{
				name: 'cat',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'cat asdf',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'cat asdfsdf',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'cat1234',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'caasdft',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'cat123424',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'ca12341234t',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			}
		]
	};

	function setActiveEntry(entry: TCollectionEntry) {
		activeEntry.set(entry);
	}

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

	let imageHeights: number[] = Array.from({ length: collection.entries.length }, () => 0);
	let imageWidths: number[] = Array.from({ length: collection.entries.length }, () => 0);

	$: maxImageHeight = imageHeights.reduce((a, b) => Math.max(a, b), 0);
	$: maxImageWidth = imageWidths.reduce((a, b) => Math.max(a, b), 0);
</script>

<div class="w-full flex flex-col">
	<!-- Title section -->
	<div class="w-full flex items-center justify-center px-5 py-12">
		<h1 class="text-3xl font-bold text-right">{collection.name.toLowerCase()}</h1>
		<div class="w-2px self-stretch p-gradient-180 mx-8" />
		<div class="flex flex-col py-2 text-c-on-bg/60 gap-1.5 text-lg">
			<p>ai: <span class="font-bold text-c-on-bg">{collection.aiName.toLowerCase()}</span></p>
			<p>
				gpu time: <span class="font-bold text-c-on-bg"
					>{collection.gpuTimeHours.toString().toLowerCase()} hours</span
				>
			</p>
			<p>
				total generations: <span class="font-bold text-c-on-bg"
					>{collection.totalGenerations.toString().toLowerCase()}</span
				>
			</p>
			<p>
				prompts by: <span class="font-bold text-c-on-bg">{collection.owner.name.toLowerCase()}</span
				>
			</p>
		</div>
	</div>
	<!-- Entries -->
	<div class="w-full flex flex-wrap justify-center z-0 relative">
		{#each collection.entries as entry, index (entry.name)}
			<div
				bind:clientHeight={imageHeights[index]}
				bind:clientWidth={imageWidths[index]}
				style="min-width: {maxImageWidth}px; min-height: {maxImageHeight}px;"
				class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-c-bg relative flex flex-col"
			>
				{#if $activeEntry?.name !== entry.name}
					<button on:click={() => setActiveEntry(entry)} class="w-full">
						<img
							in:receive|local={{ key: entry.name }}
							out:send|local={{ key: entry.name }}
							src={entry.imageUrl}
							alt={entry.name}
							class="select-none"
						/>
					</button>
				{/if}
			</div>
		{/each}
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
			in:receive|local={{ key: oldActiveEntry?.name }}
			out:send|local={{ key: oldActiveEntry?.name }}
			use:clickoutside={closeModal}
			class="max-h-full max-w-full select-none"
			src={oldActiveEntry?.imageUrl}
			alt={oldActiveEntry?.name}
		/>
	</div>
{/if}
