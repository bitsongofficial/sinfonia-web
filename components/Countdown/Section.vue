<script lang="ts" setup>
const propsInt = defineProps<{
	date: string
}>()

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

		<h5
			class="col-span-12 md:col-span-10 md:col-start-2 xl:col-span-8 xl:col-start-3 font-regular text-white/30 text-center mt-10 lg:mt-14 xl:mt-16 2xl:mt-21"
		>
			The Sinfonia DApp launch is scheduled at 4pm UTC, 2 hours after the BitSong Blockchain Upgrade.<br />
			The launch time may vary according to the achievement of the consensus during the upgrade.
		</h5>
	</Grid>
</template>
