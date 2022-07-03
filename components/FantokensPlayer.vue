<script lang="ts" setup>
import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { fantokens } from '@/constants'

import 'swiper/css'

const breakpoints: {
	[width: number]: SwiperOptions
	[ratio: string]: SwiperOptions
} = {
	1024: {
		spaceBetween: 96,
	},
	1280: {
		spaceBetween: 128,
	},
	1560: {
		spaceBetween: 142,
	},
}

const audioPlayer = ref<HTMLAudioElement>()
const activeTrackIndex = ref(-1)

const fantokensStatus = computed(() =>
	fantokens.map((fantoken, index) => ({
		...fantoken,
		playing: index === activeTrackIndex.value,
	}))
)

const playableTrack = computed<string | undefined>(() => {
	if (activeTrackIndex.value in fantokensStatus.value) {
		return fantokensStatus.value[activeTrackIndex.value].track
	}

	return undefined
})

const onFantokenChange = (isPlaying: boolean, index: number) => {
	activeTrackIndex.value = !isPlaying ? -1 : index

	if (audioPlayer.value) {
		audioPlayer.value.pause()
		audioPlayer.value.currentTime = 0

		if (playableTrack.value) {
			audioPlayer.value.play()
		}
	}
}

const toggleMuted = () => {
	if (audioPlayer.value) {
		audioPlayer.value.muted = !audioPlayer.value.muted
	}
}

const pause = () => {
	if (audioPlayer.value) {
		audioPlayer.value.pause()
	}
}

const reset = () => {
	if (audioPlayer.value) {
		audioPlayer.value.pause()
		audioPlayer.value.currentTime = 0
	}
}

defineExpose({
	toggleMuted,
	pause,
	reset,
})
</script>

<template>
	<section class="relative">
		<PurpleBlurSphere
			class="absolute -translate-y-2/4 xl:-translate-y-3/4 -translate-x-2/4 xl:-translate-x-3/4 hidden lg:block"
		/>
		<audio class="invisible" ref="audioPlayer">
			<source :src="playableTrack" type="audio/mpeg" v-if="playableTrack" />
			Your browser does not support the
			<code>audio</code> element.
		</audio>
		<Grid class="gap-y-11.5 md:hidden">
			<FantokenOrb
				v-for="(fantoken, index) in fantokensStatus"
				:key="index"
				v-bind="fantoken"
				class="col-span-4"
				:class="{
					'col-start-2': index % 2 === 0,
					'col-end-12': index % 2 !== 0,
				}"
				@update:playing="onFantokenChange($event, index)"
			/>
		</Grid>
		<swiper
			class="hidden md:block !overflow-visible"
			slides-per-view="auto"
			:space-between="80"
			:breakpoints="breakpoints"
			:grab-cursor="true"
		>
			<swiper-slide
				class="!w-1/6 lg:!w-[14.5%] xl:!w-3/20"
				v-for="(fantoken, index) in fantokensStatus"
				:key="index"
				v-bind="fantoken"
			>
				<FantokenOrb v-bind="fantoken" @update:playing="onFantokenChange($event, index)" />
			</swiper-slide>
		</swiper>
	</section>
</template>
