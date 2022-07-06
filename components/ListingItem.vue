<script lang="ts" setup>
defineProps<{
	name: string
	symbol: string
	price: string
	image: string
}>()
</script>

<template>
	<div class="flex flex-row items-center">
		<img
			class="w-10 h-10 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6"
			:src="image"
			:title="name"
			:alt="name"
		/>

		<div
			class="flex flex-col md:flex-row md:justify-between md:items-center md:flex-1 ml-6 md:ml-7 lg:ml-8.5 xl:ml-7.5 2xl:ml-8.5"
		>
			<p class="md:text-tiny lg:text-lg xl:text-base 2xl:text-lg text-white capitalize font-medium mb-1 md:mb-0">
				{{ name }}
			</p>
			<p class="md:text-xs lg:text-tiny xl:text-xs 2xl:text-tiny text-white/40 uppercase font-medium">{{ symbol }}</p>
		</div>

		<p
			class="md:text-tiny lg:text-lg xl:text-base 2xl:text-lg text-white font-medium ml-auto md:ml-16.5 lg:ml-20.5 xl:ml-18 2xl:ml-21"
		>
			{{ price }}
		</p>
	</div>
</template>
