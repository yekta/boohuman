<script lang="ts">
	export let from: TFrom = 'left';

	type TFrom = 'left' | 'right';
</script>

<div class="w-full h-2px {from === 'right' ? 'p-gradient-270' : 'p-gradient-90'}" />
