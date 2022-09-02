<script lang="ts">
	import type { TCollection } from '$ts/types/main';

	const collection: TCollection = {
		aiName: 'Midjourney',
		gpuTimeHours: 8,
		totalGenerations: 900,
		name: 'Animals with Hoodies',
		description: 'Animals with hoodies.',
		slug: 'animals-with-hoodies',
		imageUrl:
			'https://cdn.discordapp.com/attachments/430655972956962817/1015016046199054376/Frame_20.jpg',
		entries: [
			{
				name: 'cat',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'cat',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'cat',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'cat',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'cat',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'cat',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'cat',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'cat',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			},
			{
				name: 'cat',
				description: 'cat',
				imageUrl:
					'https://cdn.discordapp.com/attachments/430655972956962817/1015032598789095464/yekta_portrait_of_an_orange_furred_owl_wearing_orange_hoodie_wi_7592d20e-9dd6-481c-ac85-9fb864046c31.jpg'
			}
		]
	};
</script>

<div class="w-full flex flex-col">
	<!-- Title section -->
	<div class="w-full flex items-center justify-center px-5 py-12">
		<h1 class="text-3xl font-bold text-right">{collection.name.toLowerCase()}</h1>
		<div class="w-2px self-stretch p-gradient-180 mx-8" />
		<div class="flex flex-col py-2 text-c-on-bg/60 gap-1.5">
			<p>ai: <span class="font-bold text-c-on-bg">{collection.aiName.toLowerCase()}</span></p>
			<p>
				gpu time: <span class="font-bold text-c-on-bg"
					>{collection.gpuTimeHours.toString().toLowerCase()} hours</span
				>
			</p>
			<p>
				total generations: <span class="font-bold text-c-on-bg"
					>{collection.totalGenerations.toString().toLowerCase()}</span
				>
			</p>
		</div>
	</div>
	<!-- Entries -->
	<div class="w-full flex flex-wrap justify-center">
		{#each collection.entries as entry}
			<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
				<img src={entry.imageUrl} alt={entry.name} />
			</div>
		{/each}
	</div>
</div>
