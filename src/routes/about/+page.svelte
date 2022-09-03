<script lang="ts">
	import Mark from '$components/Mark.svelte';
	import MetaTag from '$components/MetaTag.svelte';
	import { canonicalUrl } from '$ts/constants/seo';
</script>

<MetaTag title="about | boohuman" description="" imageUrl="" canonical="{canonicalUrl}/about" />

<div class="flex-1 flex flex-col items-center justify-center px-5 py-12">
	<Mark />
	<h1 class="text-5xl font-bold text-center leading-tight mt-10">ai is coming for you.</h1>
	<h2
		style="text-fill-color: transparent; -webkit-text-fill-color: transparent;"
		class="bg-clip-text p-gradient-135 text-center text-10xl font-bold leading-none mt-4"
	>
		boo!
	</h2>
</div>
