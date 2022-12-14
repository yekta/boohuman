<script lang="ts">
	import BgHoverEffect from '$components/BgHoverEffect.svelte';
	import IconChevronDown from '$components/icons/IconChevronDown.svelte';
	import { clickoutside } from '$ts/actions/clickoutside';
	import { expandCollapse, receive, send } from '$ts/animation/transitions';
	import { srcFromUrl, srcsetFromUrl } from '$ts/helpers/imgproxy';
	import { containImage } from '$ts/helpers/containImage';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import type { TDBCollectionEntry } from '$ts/types/db';
	import { quadOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	export let entry: TDBCollectionEntry | undefined;
	export let onClickoutside: () => void;
	export let windowInnerHeight: number | undefined;
	export let windowInnerWidth: number | undefined;

	let isDescriptionOpen = true;
	let shouldHideChevron = false;

	let shouldHideChevronTimeout: NodeJS.Timeout;

	const toggleDescription = () => {
		if (isDescriptionOpen) closeDescription();
		else openDescription();
	};

	const openDescription = () => {
		isDescriptionOpen = true;
		shouldHideChevron = false;
		clearTimeout(shouldHideChevronTimeout);
	};

	const closeDescription = () => {
		isDescriptionOpen = false;
		clearTimeout(shouldHideChevronTimeout);
		shouldHideChevronTimeout = setTimeout(() => {
			shouldHideChevron = true;
		}, 750);
	};

	let isImageLoaded = false;
	const sizes =
		'(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw';

	$: imageContainerDimensions = containImage(
		entry?.imageWidth || 0,
		entry?.imageHeight || 1,
		windowInnerWidth || 0,
		windowInnerHeight || 1,
		32
	);
</script>

<div
	transition:fade|local={{ duration: 300, easing: quadOut }}
	class="fixed flex flex-col items-center justify-center left-0 top-0 w-screen h-screen z-40 bg-c-bg/90"
	style={windowInnerHeight !== undefined ? `height: ${windowInnerHeight}px` : ''}
/>
<div
	class="fixed flex flex-row justify-center items-center left-0 top-0 w-screen h-screen z-50"
	style={windowInnerHeight !== undefined ? `height: ${windowInnerHeight}px` : ''}
>
	<div
		style="width: {imageContainerDimensions.width}px; height: {imageContainerDimensions.height}px;"
		class="relative z-10"
	>
		<div
			use:clickoutside={{ callback: onClickoutside }}
			in:receive|local={{ key: entry?.id }}
			out:send|local={{ key: entry?.id }}
			class="w-full h-full bg-c-bg-secondary"
		>
			<div class="w-full h-full overflow-hidden relative z-0">
				<img
					class="w-full h-full absolute left-0 top-0 select-none"
					src={srcFromUrl(entry?.imageUrl || '')}
					srcset={srcsetFromUrl(entry?.imageUrl || '')}
					{sizes}
					width={entry?.imageWidth}
					height={entry?.imageHeight}
					alt={entry?.name}
				/>
				<img
					on:load={() => (isImageLoaded = true)}
					class="w-full h-full absolute left-0 top-0 select-none transition {isImageLoaded
						? 'opacity-100'
						: 'opacity-0'}"
					src={srcFromUrl(entry?.imageUrl || '')}
					width={entry?.imageWidth}
					height={entry?.imageHeight}
					alt={entry?.name}
				/>
				<div
					use:clickoutside={{ callback: closeDescription }}
					in:fly|local={{ duration: 350, opacity: 0, easing: quadOut, y: 400 }}
					out:fly|local={{ duration: 150, opacity: 0, easing: quadOut, y: 0 }}
					class="{isDescriptionOpen
						? 'bg-c-bg/60'
						: 'bg-c-bg/0'} transition duration-300 w-full absolute bottom-0 left-0 overflow-hidden"
				>
					<div class="w-full z-0 relative flex flex-col items-start max-h-full overflow-y-auto">
						<div
							on:click={!isDescriptionOpen ? openDescription : undefined}
							class="w-full px-5 md:px-8 py-4 md:py-6 flex items-center justify-between transition bg-c-bg/0 {!isDescriptionOpen
								? 'group'
								: ''} {!$isTouchscreen && !isDescriptionOpen
								? 'hover:cursor-pointer hover:bg-c-bg/20'
								: ''} {!$isTouchscreen && shouldHideChevron
								? 'opacity-0 translate-y-4 hover:translate-y-0 hover:opacity-100'
								: ''}"
						>
							<h1
								class="max-w-full whitespace-nowrap overflow-hidden overflow-ellipsis font-bold 
								inline-block text-2xl md:text-3xl bg-clip-text text-transparent p-gradient-135 pr-4"
							>
								{entry?.name.toLowerCase()}
							</h1>
							<button
								on:click|stopPropagation={toggleDescription}
								class="-mr-3 md:-mr-4 -my-1.5 group"
							>
								<div class="relative overflow-hidden p-2">
									<BgHoverEffect />
									<IconChevronDown
										class="w-7 h-7 md:w-8 md:h-8 relative transition text-c-on-bg/50 transform {isDescriptionOpen
											? ''
											: 'rotate-180'} {$isTouchscreen
											? 'group-active:text-c-bg'
											: 'group-hover:text-c-bg'}"
									/>
								</div>
							</button>
						</div>
						{#if isDescriptionOpen}
							<div transition:expandCollapse={{ opacity: 0 }} class="w-full">
								<p
									class="px-5 md:px-8 pb-5 md:pb-7 -mt-1 md:-mt-2 text-c-on-bg text-sm md:text-base"
								>
									{entry?.prompt.toLowerCase()}
								</p>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
