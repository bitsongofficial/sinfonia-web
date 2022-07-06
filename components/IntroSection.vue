<script lang="ts" setup>
/* import Rellax from 'rellax'

onMounted(() => {
	new Rellax('.rellax', {
		speed: 2,
	})
}) */
</script>

<template>
	<Grid class="relative" tag="section">
		<SmallOrb class="rellax absolute -rotate-90 top-20 md:-top-6 lg:-top-8 xl:top-48 -left-3 lg:left-0 xl:-left-10" />
		<SmallOrb
			class="rellax absolute rotate-135 -bottom-5 md:bottom-6 lg:-bottom-6 xl:-bottom-24 -right-5 md:right-0 lg:right-20 xl:right-0"
		/>

		<h1
			class="col-span-12 lg:col-span-10 lg:col-start-2 font-bold text-center text-radial-gradient-white mb-6 md:mb-8 xl:mb-11.5 xl:mt-48 2xl:mt-40"
		>
			Music Industry<br class="md:hidden" />
			has<br class="hidden md:inline" />
			arrived<br class="md:hidden" />
			in Web 3.0
		</h1>

		<p
			class="col-span-12 md:col-span-10 md:col-start-2 font-regular text-white/30 text-center mb-14 md:mb-8 lg:mb-16 xl:mb-32 2xl:mb-20"
		>
			The Fan Token Platform built to enrich the Artists and Fans Relationship.<br class="md:hidden" />
			Loyalty is what you always deserved.
		</p>

		<Button disabled class="col-span-8 md:col-span-4 col-start-3 md:col-start-5 mx-auto" href="https://app.sinfonia.zone">
			launch app
			<template #right>
				<Icon
					class="w-4 h-4 xl:w-4.5 xl:h-4.5 2xl:w-6 2xl:h-6 fill-transparent stroke-white stroke-3"
					name="chevron-right"
				/>
			</template>
		</Button>
	</Grid>
</template>
