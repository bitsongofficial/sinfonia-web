<script lang="ts" setup>
import { UseCase } from '~~/models'

const props = defineProps<{
	useCases: UseCase[]
}>()

const firstColumn = computed(() => props.useCases.slice(0, 3))
const secondColumn = computed(() => props.useCases.slice(3, 7))
const thirdColumn = computed(() => props.useCases.slice(7))
</script>

<template>
	<div class="grid grid-cols-12 gap-10">
		<div class="grid gap-10 grid-rows-masonryThree col-span-4">
			<UseCaseCard v-for="(useCase, index) in firstColumn" :key="index" v-bind="useCase" />
		</div>

		<div class="grid gap-10 grid-rows-4 col-span-4">
			<UseCaseCard v-for="(useCase, index) in secondColumn" :key="index" v-bind="useCase" />
		</div>

		<div class="grid gap-10 grid-rows-masonryThree col-span-4">
			<UseCaseCard v-for="(useCase, index) in thirdColumn" :key="index" v-bind="useCase" />
		</div>
	</div>
</template>
