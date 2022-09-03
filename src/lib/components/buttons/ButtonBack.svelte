<script lang="ts">
	import Button from './Button.svelte';
	import IconArrowDown from '$components/icons/IconArrowDown.svelte';
	import { afterNavigate } from '$app/navigation';

	let previousPage: string | undefined;
	afterNavigate((navigaton) => {
		previousPage = navigaton.from?.pathname;
	});
</script>

<Button href={previousPage ?? '/'}>
	<IconArrowDown
		class="w-5 h-5 mr-2 relative transform rotate-90 transition group-hover:-translate-x-1"
		slot="icon"
	/>
	go back
</Button>
