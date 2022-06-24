<script lang="ts" setup>
defineProps<{
	name: string
	symbol: string
	price: string
	marketCap: string
	volume: string
	variation: string
	image: string
}>()
</script>

<template>
	<Card>
		<p
			class="text-tiny md:text-xs lg:text-tiny font-medium text-l-gradient-secondary from-purple to-secondary uppercase mb-3"
		>
			token
		</p>

		<div class="flex flex-row justify-between items-center">
			<div class="flex flex-col items-start">
				<h4 class="text-lg md:text-base lg:text-lg text-white font-medium mb-1 capitalize">{{ name }}</h4>

				<p class="text-base md:text-tiny lg:text-base text-white/40">{{ symbol }}</p>
			</div>

			<img
				class="w-10 md:w-8 lg:w-10 h-10 md:h-8 lg:h-10 object-cover bg-white rounded-full"
				:src="image"
				title="Adam Clay"
				alt="Adam Clay"
			/>
		</div>

		<div class="flex flex-row items-center justify-between my-6 md:my-5 lg:my-6">
			<h5 class="text-base md:text-tiny lg:text-base font-medium text-purple2/50 uppercase">price</h5>

			<p class="text-base md:text-tiny lg:text-base text-white">{{ price }} $</p>
		</div>

		<div class="bg-primary py-6 px-4 md:pl-5 md:pr-3.5 lg:px-6 rounded-medium mb-6 md:mb-5 lg:mb-6 font-medium">
			<div class="flex flex-row items-center justify-between mb-5">
				<h5 class="text-tiny md:text-xs lg:text-tiny text-white uppercase">market cap</h5>

				<p class="text-tiny md:text-xs lg:text-tiny text-white">{{ marketCap }} $</p>
			</div>

			<div class="flex flex-row items-center justify-between">
				<h5 class="text-tiny md:text-xs lg:text-tiny text-purple2/50 uppercase">VOLUME</h5>

				<p class="text-tiny md:text-xs lg:text-tiny text-white">{{ volume }} $</p>
			</div>
		</div>

		<div class="flex flex-row items-center justify-between">
			<h5 class="text-base md:text-tiny lg:text-base font-medium text-purple2/50 uppercase">variation</h5>

			<p class="text-base md:text-tiny lg:text-base text-success">+ {{ variation }} $</p>
		</div>
	</Card>
</template>
