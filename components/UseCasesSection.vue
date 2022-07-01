<script lang="ts" setup>
import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useCases } from '~~/constants'

import 'swiper/css'

const breakpoints: {
	[width: number]: SwiperOptions
	[ratio: string]: SwiperOptions
} = {
	768: {
		slidesPerView: 2,
		centeredSlides: false,
		centeredSlidesBounds: false,
	},
	1024: {
		slidesPerView: 3,
		centeredSlides: false,
		centeredSlidesBounds: false,
	},
}
</script>

<template>
	<Grid tag="section">
		<h5 class="col-span-12 text-white/20 font-bold mb-3 lg:mb-4 xl:mb-8 2xl:mb-9 text-center">DEFi at your service</h5>
		<h2
			class="col-span-12 lg:col-span-10 lg:col-start-2 text-white text-center font-bold mb-13 md:mb-16 lg:mb-20 xl:mb-32"
		>
			You can have much more
		</h2>

		<div class="col-span-12 xl:hidden">
			<swiper
				class="!overflow-visible"
				:slides-per-view="1.02"
				:space-between="24"
				:grab-cursor="true"
				:auto-height="true"
				:centered-slides="true"
				:centered-slides-bounds="true"
				:breakpoints="breakpoints"
			>
				<swiper-slide v-for="(useCase, index) in useCases" :key="index" class="!h-full">
					<UseCaseCard v-bind="useCase" class="h-full" />
				</swiper-slide>
			</swiper>
		</div>

		<UseCasesMasonry class="hidden xl:grid col-span-12" :use-cases="useCases" />
	</Grid>
</template>
