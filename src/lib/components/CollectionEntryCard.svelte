<script lang="ts">
	import { activeEntry } from '$ts/stores/activeEntry';
	import { receive, send } from '$ts/animation/transitions';
	import type { TDBCollectionEntry, TDBCollectionShallow } from '$ts/types/db';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import { srcFromUrl, srcsetFromUrl } from '$ts/constants/imgproxy';
	import type { TCollectionEntryObject } from '$ts/types/main';

	export let entry: TCollectionEntryObject;
	export let collection: TDBCollectionShallow;

	let image: HTMLImageElement | undefined;

	$: if (image !== undefined && (image?.naturalWidth > 0 || image?.naturalHeight > 0)) {
		entry.isLoadedBefore = true;
	}

	$: if (entry.isLoadedBefore && !entry.shouldTransitionFaster) {
		setTimeout(() => {
			entry.shouldTransitionFaster = true;
		}, 600);
	}

	function setActiveEntry(entry: TDBCollectionEntry) {
		activeEntry.set(entry);
	}

	const sizes =
		'(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw';

	function loadImage(url: string) {
		const img = new Image();
		img.src = srcFromUrl(url);
	}

	const onClick = () => {
		setActiveEntry(entry);
		window.plausible(`Collections | Entry Clicked`, {
			props: {
				CollectionId: collection.id,
				CollectionName: collection.name,
				EntryId: entry.id,
				EntryName: collection.name + ' | ' + entry.name
			}
		});
	};
</script>

<button
	on:mouseenter={() => loadImage(entry.imageUrl)}
	on:click={onClick}
	class="w-full h-full overflow-hidden group absolute left-0 top-0"
>
	<div
		in:receive|local={{ key: entry.id }}
		out:send|local={{ key: entry.id }}
		class="bg-c-bg-secondary"
	>
		<img
			class="select-none origin-bottom transform filter blur-md transition {entry.shouldTransitionFaster
				? 'duration-300'
				: 'duration-500'} {$isTouchscreen ? 'group-active:scale-102' : 'group-hover:scale-102'}"
			src={entry.imagePlaceholderBase64}
			{sizes}
			width={entry.imageWidth}
			height={entry.imageHeight}
			alt={entry.name}
		/>
		<img
			bind:this={image}
			class="select-none origin-bottom transform absolute left-0 top-0 filter transition {entry.shouldTransitionFaster
				? 'duration-300'
				: 'duration-500'} {$isTouchscreen
				? 'group-active:scale-102'
				: 'group-hover:scale-102'} {entry.isLoadedBefore
				? 'opacity-100 blur-none'
				: 'opacity-0 blur-md'}"
			src={srcFromUrl(entry.imageUrl)}
			srcset={srcsetFromUrl(entry.imageUrl)}
			on:load={() => {
				entry.isLoadedBefore = true;
			}}
			{sizes}
			width={entry.imageWidth}
			height={entry.imageHeight}
			alt={entry.name}
		/>
	</div>
</button>
