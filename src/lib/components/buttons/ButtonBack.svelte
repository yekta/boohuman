<script lang="ts">
	import Button from './Button.svelte';
	import IconArrowDown from '$components/icons/IconArrowDown.svelte';
	import { afterNavigate } from '$app/navigation';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';

	let previousPage: string | undefined;
	afterNavigate((navigaton) => {
		previousPage = navigaton.from?.pathname;
	});
</script>

<Button href={previousPage ?? '/'}>
	<IconArrowDown
		class="w-5 h-5 mr-2 relative transform rotate-90 transition text-c-on-bg {$isTouchscreen
			? 'group-active:-translate-x-1.5 group-hover:text-c-bg'
			: 'group-hover:-translate-x-1.5 group-hover:text-c-bg'}"
		slot="icon"
	/>
	go back
</Button>
