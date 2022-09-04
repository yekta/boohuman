<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { tick } from 'svelte';
	import { quadOut } from 'svelte/easing';
	import { tweened, type Tweened } from 'svelte/motion';

	export let animationTime = 400;
	export let delay = 200;

	type TProgressType = 'navigating' | 'idle';

	let progressType: TProgressType = 'idle';
	const minValue = 0;
	const maxValue = 1;

	let sizeBefore: Tweened<number>;
	let sizeAfter: Tweened<number>;

	setSizeBefore(minValue);
	setSizeAfter(minValue);

	$: $sizeBefore, alternateSizeBefore();

	function alternateSizeBefore() {
		if (progressType === 'navigating') {
			if ($sizeBefore === maxValue) {
				$sizeBefore = minValue;
			} else if ($sizeBefore === minValue) {
				$sizeBefore = maxValue;
			}
		}
	}

	function setSizeBefore(n: number) {
		sizeBefore = tweened(n, {
			duration: animationTime,
			easing: quadOut,
			delay: delay
		});
	}

	function setSizeAfter(n: number) {
		sizeAfter = tweened(n, {
			duration: animationTime * (($sizeBefore - minValue) / (maxValue - minValue)),
			easing: quadOut,
			delay: delay
		});
	}

	beforeNavigate(() => {
		setSizeBefore(minValue);
		progressType = 'navigating';
		sizeBefore.set(maxValue);
	});

	afterNavigate(async () => {
		progressType = 'idle';
		setSizeAfter($sizeBefore);
		sizeAfter.set(minValue);
		await tick();
		setSizeBefore(minValue);
	});
</script>

<div
	style="transform: translateX({progressType === 'navigating'
		? $sizeBefore * -100
		: $sizeAfter * -100}%)"
	class="w-full"
>
	<div
		style="transition-delay: {progressType === 'navigating' ? delay : 0}ms"
		class="w-[200%] h-2px background-gradient transition duration-300 transform origin-top {progressType ===
		'navigating'
			? 'scale-y-[300%]'
			: 'scale-y-100'}"
	/>
</div>

<style>
	.background-gradient {
		background: linear-gradient(
			90deg,
			rgba(var(--c-color-1)) 0%,
			rgba(var(--c-color-2)) 12.5%,
			rgba(var(--c-color-3)) 25%,
			rgba(var(--c-color-4)) 37.5%,
			rgba(var(--c-color-5)) 50%,
			rgba(var(--c-color-1)) 62.5%,
			rgba(var(--c-color-2)) 75%,
			rgba(var(--c-color-3)) 87.5%,
			rgba(var(--c-color-4)) 100%
		);
	}
</style>
