<script lang="ts">
	import { page } from '$app/stores';
	import MarkAnimated from '$components/MarkAnimated.svelte';
	import MetaTag from '$components/MetaTag.svelte';
	import { canonicalUrl } from '$ts/constants/seo';
</script>

<MetaTag
	title="about | boohuman"
	description=""
	imageUrl="{canonicalUrl}/previews{$page.url.pathname}.jpg"
	canonical="{canonicalUrl}/about"
/>

<div class="flex-1 flex flex-col items-center justify-center px-5 pt-12 pb-16">
	<MarkAnimated />
	<h1 class="text-4xl md:text-5xl leading-tight md:leading-tight font-bold text-center mt-10">
		ai is coming for you.
	</h1>
	<h2
		style="text-fill-color: transparent; -webkit-text-fill-color: transparent;"
		class="bg-clip-text p-gradient-135 text-center text-8xl md:text-10xl font-bold leading-none md:leading-none mt-4"
	>
		boo!
	</h2>
</div>
