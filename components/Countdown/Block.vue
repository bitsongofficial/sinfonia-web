<script lang="ts" setup>
const props = defineProps<{
	time: number
	subtitle: string
}>()

const prevLeft = ref(0)
const prevRight = ref(0)

const left = computed(() => {
	const timestr = props.time.toString()

	return parseInt(timestr.length > 1 ? timestr.split('').shift() : '0')
})

const right = computed(() => {
	const timestr = props.time.toString()

	return parseInt(timestr.split('').pop())
})

watch(
	() => left.value,
	(_, oldLeft) => {
		prevLeft.value = oldLeft
	}
)

watch(
	() => right.value,
	(_, oldRight) => {
		prevRight.value = oldRight
	}
)
</script>

<template>
	<div
		class="flex flex-col items-center justify-center rounded-medium bg-white/5 shadow-4xl min-h-146 md:min-h-154 lg:min-h-212 xl:min-h-266"
	>
		<div class="flex overflow-hidden max-h-18.5 lg:max-h-24.5 xl:max-h-34">
			<transition name="translate" mode="out-in">
				<div class="flex flex-col" :key="left">
					<h3 class="text-6.5xl lg:text-8xl xl:text-11xl text-white text-center font-bold w-9 lg:w-12 xl:w-16">
						{{ left }}
					</h3>
					<h3 class="text-6.5xl lg:text-8xl xl:text-11xl text-white text-center font-bold w-9 lg:w-12 xl:w-16">
						{{ prevLeft }}
					</h3>
				</div>
			</transition>
			<transition name="translate" mode="out-in">
				<div class="flex flex-col" :key="right">
					<h3 class="text-6.5xl lg:text-8xl xl:text-11xl text-white text-center font-bold w-9 lg:w-12 xl:w-16">
						{{ right }}
					</h3>
					<h3 class="text-6.5xl lg:text-8xl xl:text-11xl text-white text-center font-bold w-9 lg:w-12 xl:w-16">
						{{ prevRight }}
					</h3>
				</div>
			</transition>
		</div>
		<p class="!text-lg text-white/30 text-center font-bold">{{ subtitle }}</p>
	</div>
</template>
