<script lang="ts">
	export let from: TFrom = 'bottom';

	type TFrom = 'top' | 'bottom';
</script>

<div
	class="w-[200%] h-full absolute left-0 top-0 transition duration-200 transform {from === 'top'
		? '-translate-y-full'
		: 'translate-y-full'}
	  group-hover:translate-y-0"
>
	<div
		class="w-full h-full p-gradient-135 transition duration-600 delay-150 transform group-hover:-translate-x-1/2"
	/>
</div>
