<script lang="ts" setup>
const useCases = ['Pools', 'Tickets', 'Merch', 'Memorabilia']
</script>

<template>
	<Grid tag="section">
		<h5 class="col-span-12 text-white/20 font-bold mb-3 lg:mb-4 xl:mb-8 2xl:mb-9 text-center">DEFi at your service</h5>
		<h2
			class="col-span-12 lg:col-span-10 lg:col-start-2 text-white text-center font-bold mb-13 md:mb-16 lg:mb-20 xl:mb-32"
		>
			You can have much more
		</h2>

		<div class="col-span-12 group relative flex overflow-x-visible">
			<div class="animate-marquee group-hover:pause whitespace-nowrap flex flex-nowrap">
				<div class="flex flex-row" v-for="(useCase, index) in useCases" :key="index">
					<h3
						class="text-5.5xl md:text-9.5xl font-bold text-center text-radial-gradient-white hover:bg-white opacity-10 hover:opacity-100 transition-all duration-300 cursor-pointer"
					>
						{{ useCase }}
					</h3>
					<h3 class="text-5.5xl md:text-9.5xl font-bold text-center text-radial-gradient-white opacity-10 mx-5">/</h3>
				</div>
			</div>
			<div class="absolute top-0 animate-marquee2 group-hover:pause whitespace-nowrap flex flex-nowrap">
				<div class="flex flex-row" v-for="(useCase, index) in useCases" :key="index">
					<h3
						class="text-5.5xl md:text-9.5xl font-bold text-center text-radial-gradient-white hover:bg-white opacity-10 hover:opacity-100 transition-all duration-300 cursor-pointer"
					>
						{{ useCase }}
					</h3>
					<h3 class="text-5.5xl md:text-9.5xl font-bold text-center text-radial-gradient-white opacity-10 mx-5">/</h3>
				</div>
			</div>
		</div>
	</Grid>
</template>
