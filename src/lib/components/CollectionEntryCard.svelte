<script lang="ts">
	import { activeEntry } from '$ts/stores/activeEntry';
	import { receive, send } from '$ts/animation/transitions';
	import type { TDBCollectionEntry, TDBCollectionShallow } from '$ts/types/db';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import { srcFromUrl, srcsetFromUrl } from '$ts/constants/imgproxy';

	export let entry: TDBCollectionEntry;
	export let collection: TDBCollectionShallow;

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
			class="select-none transition duration-300 origin-bottom {$isTouchscreen
				? 'group-active:scale-102'
				: 'group-hover:scale-102'}"
			src={srcFromUrl(entry.imageUrl)}
			srcset={srcsetFromUrl(entry.imageUrl)}
			{sizes}
			width={entry.imageWidth}
			height={entry.imageHeight}
			alt={entry.name}
		/>
	</div>
</button>
