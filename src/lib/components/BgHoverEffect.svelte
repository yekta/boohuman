<script lang="ts">
	import { isTouchscreen } from '$ts/stores/isTouchscreen';

	export let from: TFrom = 'bottom';
	export let underline = false;

	type TFrom = 'top' | 'bottom';
</script>

<div
	class="w-[200%] h-full absolute left-0 bottom-0 transition duration-200 transform {underline
		? from === 'top'
			? '-translate-y-[calc(100%-1px)]'
			: 'translate-y-[calc(100%-1px)]'
		: from === 'top'
		? '-translate-y-full'
		: 'translate-y-full'}
	  {$isTouchscreen ? 'group-active:translate-y-0' : 'group-hover:translate-y-0'}"
>
	<div
		class="w-full h-full p-gradient-135 transition duration-600 ease-out-steep transform {$isTouchscreen
			? 'group-active:-translate-x-1/2'
			: 'group-hover:-translate-x-1/2'}"
	/>
</div>
