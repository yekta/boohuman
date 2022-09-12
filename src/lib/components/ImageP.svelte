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
	export let transitioned: boolean = false;

	let image: HTMLImageElement | undefined;

	$: [image], setLoaded();
	$: [loaded, transitioned], setTransitionedTimeout();

	function setLoaded() {
		if (!loaded && image !== undefined && (image?.naturalWidth > 0 || image?.naturalHeight > 0)) {
			loaded = true;
		}
	}

	function setTransitionedTimeout() {
		if (loaded && !transitioned) {
			setTimeout(() => {
				transitioned = true;
			}, 600);
		}
	}
</script>

<div class="w-full h-full">
	<img
		class="w-full h-full select-none origin-bottom transform filter transition {transitioned
			? 'duration-300 blur-none opacity-0'
			: 'duration-500 blur-md'} {$isTouchscreen
			? 'group-active:scale-102'
			: 'group-hover:scale-102'}"
		src={srcPlaceholder}
		{width}
		{height}
		{alt}
	/>
	<img
		bind:this={image}
		class="w-full h-full select-none origin-bottom transform absolute left-0 top-0 filter transition {transitioned
			? 'duration-300'
			: 'duration-500'} {$isTouchscreen
			? 'group-active:scale-102'
			: 'group-hover:scale-102'} {loaded ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}"
		src={srcFromUrl(src)}
		srcset={srcsetFromUrl(src)}
		on:load={setLoaded}
		{sizes}
		{width}
		{height}
		{alt}
	/>
</div>
