<script lang="ts">
	import { srcFromUrl, srcsetFromUrl } from '$ts/constants/imgproxy';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';

	export let src: string;
	export let srcPlaceholder: string;
	export let sizes: string;
	export let alt: string;
	export let width: number;
	export let height: number;
	export let loaded: boolean = false;

	let image: HTMLImageElement | undefined;

	$: [image], setLoaded();

	function setLoaded() {
		if (!loaded && image !== undefined && (image?.naturalWidth > 0 || image?.naturalHeight > 0)) {
			loaded = true;
		}
	}
</script>

<div
	style="background-image: url({srcPlaceholder}); background-repeat: no-repeat; background-size: cover;"
	class="w-full h-full filter duration-600 {loaded ? 'blur-none' : 'blur-md'}"
>
	<img
		bind:this={image}
		class="w-full h-full select-none origin-bottom transform filter transition duration-300 {$isTouchscreen
			? 'group-active:scale-102'
			: 'group-hover:scale-102'} {loaded ? 'opacity-100' : 'opacity-0'}"
		src={srcFromUrl(src)}
		srcset={srcsetFromUrl(src)}
		on:load={setLoaded}
		{sizes}
		{width}
		{height}
		{alt}
	/>
</div>
