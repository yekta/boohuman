<script lang="ts">
	import { activeEntry } from '$ts/stores/activeEntry';
	import type { TCollectionEntry } from '$ts/types/main';
	import { receive, send } from '$ts/animation/transitions';
	import type { TDBCollectionEntry } from '$ts/types/db';

	export let entry: TDBCollectionEntry;

	function setActiveEntry(entry: TDBCollectionEntry) {
		activeEntry.set(entry);
	}

	const sizes =
		'(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw';

	const imageSizes = [512, 768, 1024, 1536, 2048];
	function srcSetFromUrl(url: string) {
		const { pathname, hostname, protocol } = new URL(url);
		const prefix = '/boohuman/';
		const rest = pathname.slice(prefix.length);
		let srcset = '';
		imageSizes.forEach((size) => {
			srcset += `${protocol}//${hostname}${prefix}tr:w-${size}/${rest} ${size}w, `;
		});
		return srcset;
	}

	function loadImage(url: string) {
		const img = new Image();
		img.src = url;
	}
</script>

<button
	on:mouseenter={() => loadImage(entry.imageUrl)}
	on:click={() => setActiveEntry(entry)}
	class="w-full overflow-hidden group"
>
	<img
		in:receive|local={{ key: entry.id }}
		out:send|local={{ key: entry.id }}
		src={entry.imageUrl}
		srcset={srcSetFromUrl(entry.imageUrl)}
		alt={entry.name}
		width={entry.imageWidth}
		height={entry.imageHeight}
		{sizes}
		class="select-none transition duration-300 origin-bottom group-hover:scale-102"
	/>
</button>
