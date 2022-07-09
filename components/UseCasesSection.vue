<script lang="ts" setup>
import { useCases } from '@/constants'
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1280px)')
</script>

<template>
	<Grid tag="section">
		<h5 class="col-span-12 text-white/20 font-bold mb-3 lg:mb-4 xl:mb-8 2xl:mb-9 text-center">Blockchain and DeFi</h5>
		<h2
			class="col-span-12 lg:col-span-10 lg:col-start-2 text-white text-center font-bold mb-13 md:mb-16 lg:mb-20 xl:mb-32"
		>
			Experience the Music as never before
		</h2>

		<div class="col-span-12 grid grid-cols-12 gap-6" v-if="!isLargeScreen">
			<UseCaseCard v-for="(useCase, index) in useCases" :key="index" v-bind="useCase" class="col-span-12 md:col-span-6" />
		</div>

		<UseCasesMasonry class="grid col-span-12" :use-cases="useCases" v-if="isLargeScreen" />
	</Grid>
</template>
