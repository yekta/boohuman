<script lang="ts">
	import { srcFromUrl, srcsetFromUrl } from '$ts/helpers/imgproxy';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';

	export let src: string;
	export let srcPlaceholder: string;
	export let sizes: string;
	export let alt: string;
	export let width: number;
	export let height: number;
	export let loaded: boolean = false;
	export let hoverClasses: string = '';

	let image: HTMLImageElement | undefined;

	$: [image], setLoaded();

	function setLoaded() {
		if (
			!loaded &&
			image !== undefined &&
			image.complete &&
			image.naturalWidth > 0 &&
			image.naturalHeight > 0
		) {
			loaded = true;
		}
	}
</script>

<div class="w-full h-full overflow-hidden">
	<div
		style="background-image: url({srcPlaceholder}); background-repeat: no-repeat; background-size: cover;"
		class="w-full h-full transform filter transition ease-in-out duration-400 {loaded
			? 'blur-none scale-100'
			: 'blur-md scale-105'}"
	>
		<img
			bind:this={image}
			class="w-full h-full select-none origin-bottom transform filter transition duration-300 {loaded
				? 'opacity-100'
				: 'opacity-0'} {loaded && !$isTouchscreen ? hoverClasses : ''}"
			src={srcFromUrl(src)}
			srcset={srcsetFromUrl(src)}
			on:load={setLoaded}
			{sizes}
			{width}
			{height}
			{alt}
		/>
	</div>
</div>
