<script lang="ts">
	import { quadOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
</script>

<div
	in:scale={{ start: 1.05, easing: quadOut, duration: 250, opacity: 1 }}
	class="w-full flex-1 flex flex-col"
>
	<slot />
</div>
