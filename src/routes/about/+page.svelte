<script lang="ts">
	import { page } from '$app/stores';
	import MarkAnimated from '$components/MarkAnimated.svelte';
	import MetaTag from '$components/MetaTag.svelte';
	import PageWrapper from '$components/PageWrapper.svelte';
	import { canonicalUrl } from '$ts/constants/seo';
</script>

<MetaTag
	title="about | boohuman"
	description="ai is coming for you. boo!"
	imageUrl="{canonicalUrl}/previews{$page.url.pathname}.jpg"
	canonical="{canonicalUrl}/about"
/>

<PageWrapper>
	<div class="flex-1 flex flex-col items-center justify-center px-5 pt-16 pb-16">
		<MarkAnimated class="max-w-[30%] w-40" />
		<h1 class="text-4xl md:text-5xl leading-tight md:leading-tight font-bold text-center mt-10">
			ai is coming for you.
		</h1>
		<h2
			style="text-fill-color: transparent; -webkit-text-fill-color: transparent;"
			class="bg-clip-text p-gradient-135 text-center text-8xl md:text-10xl font-bold leading-none md:leading-none mt-3"
		>
			boo!
		</h2>
	</div>
</PageWrapper>
