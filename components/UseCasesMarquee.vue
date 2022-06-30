<script lang="ts" setup>
defineProps<{
	useCases: string[]
}>()
</script>

<template>
	<div class="group relative flex overflow-x-visible">
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
</template>
