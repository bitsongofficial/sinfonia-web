<script lang="ts" setup>
const propsInt = withDefaults(
	defineProps<{
		date?: string
	}>(),
	{
		date: new Date('07-11-2022').toISOString(),
	}
)

const time = computed(() => new Date(propsInt.date).getTime() - new Date().getTime())
</script>

<template>
	<Grid tag="section">
		<h3 class="col-span-12 !text-1xl text-center text-white font-bold mb-16">Platform Release</h3>

		<div class="col-span-12 md:col-span-10 2xl:col-span-8 md:col-start-2 2xl:col-start-3">
			<ClientOnly>
				<vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
					<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
						<CountdownBlock :time="days" subtitle="DAYS" />
						<CountdownBlock :time="hours" subtitle="HOURS" />
						<CountdownBlock :time="minutes" subtitle="MINUTES" />
						<CountdownBlock :time="seconds" subtitle="SECONDS" />
					</div>
				</vue-countdown>
			</ClientOnly>
		</div>
	</Grid>
</template>
