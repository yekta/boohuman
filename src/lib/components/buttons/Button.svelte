<script lang="ts">
	import BgHoverEffect from '$components/BgHoverEffect.svelte';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';

	export let href: string | undefined;
	export let onClick: (() => void) | undefined = undefined;
</script>

{#if href !== undefined}
	<a
		data-sveltekit-prefetch
		{href}
		class="max-w-full px-8 py-4 flex items-center justify-center text-center text-c-on-bg 
      font-bold group relative overflow-hidden transition {$isTouchscreen
			? 'active:text-c-bg'
			: 'hover:text-c-bg'}"
	>
		<BgHoverEffect />
		<slot name="icon" />
		<p class="text-lg relative"><slot /></p>
	</a>
{:else}
	<button
		on:click={onClick}
		class="max-w-full px-8 py-4 flex items-center justify-center text-center text-c-on-bg 
      font-bold group relative overflow-hidden transition {$isTouchscreen
			? 'active:text-c-bg'
			: 'hover:text-c-bg'}"
	>
		<BgHoverEffect />
		<slot name="icon" />
		<p class="text-lg relative"><slot /></p>
	</button>
{/if}
