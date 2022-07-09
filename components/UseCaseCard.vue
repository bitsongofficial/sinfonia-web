<script lang="ts" setup>
defineProps<{
	title: string
	subtitle: string
	label: string
	icon: string
}>()
</script>

<template>
	<Card class="flex flex-col backdrop-blur-0 shadow-3xl !drop-shadow-none xl:px-10.5 !bg-white/5 !bg-none" :bg="false">
		<div class="flex flex-row justify-between items-center gap-x-2 mb-8 xl:mb-11">
			<h5 class="!text-p1 xl:!text-1.5xl !leading-none font-medium text-white">{{ title }}</h5>

			<Icon :name="icon" class="min-w-6 w-6 h-6 stroke-secondary stroke-2 fill-transparent" />
		</div>

		<p class="!text-tiny xl:!text-base text-white/50 mt-auto whitespace-pre-wrap">{{ subtitle }}</p>

		<!-- <p class="!text-tiny xl:!text-base text-white/50 mb-6 mt-auto">{{ subtitle }}</p> -->

		<!-- <label class="text-xs xl:text-tiny text-secondary font-medium uppercase">{{ label }}</label> -->
	</Card>
</template>
