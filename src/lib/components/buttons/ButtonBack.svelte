<script>
	import Button from './Button.svelte';
	import IconArrowDown from '$components/icons/IconArrowDown.svelte';
</script>

<Button href="/">
	<IconArrowDown
		class="w-5 h-5 mr-2 relative transform rotate-90 transition group-hover:-translate-x-1"
		slot="icon"
	/>
	go back
</Button>
