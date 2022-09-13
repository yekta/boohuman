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
	export let hoverClasses = '';

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
		class="w-full h-full transform transition ease-out filter duration-400 {loaded
			? 'blur-none scale-100'
			: 'blur-md scale-105'}"
	>
		<img
			bind:this={image}
			style="transition: opacity 0.4s ease-out, transform 0.3s cubic-bezier(0, 0.5, 0.5, 1);"
			class="w-full h-full select-none origin-bottom transform filter transition {loaded
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
