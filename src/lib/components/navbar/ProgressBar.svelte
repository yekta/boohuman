<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Divider from '$components/Divider.svelte';
	import { tick } from 'svelte';
	import { quadOut } from 'svelte/easing';
	import { tweened, type Tweened } from 'svelte/motion';

	export let animationTime = 500;
	export let delay = 200;

	type TProgressType = 'navigating' | 'idle';

	let progressType: TProgressType = 'idle';
	const maxValue = 1;
	const minValue = 0.25;

	let sizeBefore: Tweened<number>;
	let sizeAfter: Tweened<number>;

	setSizeBefore(maxValue);
	setSizeAfter(maxValue);

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
			duration: animationTime * ((maxValue - $sizeBefore) / (maxValue - minValue)),
			easing: quadOut,
			delay: delay
		});
	}

	beforeNavigate(() => {
		setSizeBefore(maxValue);
		progressType = 'navigating';
		sizeBefore.set(minValue);
	});

	afterNavigate(async () => {
		progressType = 'idle';
		setSizeAfter($sizeBefore);
		sizeAfter.set(maxValue);
		await tick();
		setSizeBefore(maxValue);
	});
</script>

<div class="w-full relative overflow-hidden z-0">
	<div
		style="transform: scaleX({progressType === 'navigating' ? $sizeBefore : $sizeAfter})"
		class="w-full"
	>
		<Divider />
	</div>
</div>
