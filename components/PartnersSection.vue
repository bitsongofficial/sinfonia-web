<script lang="ts" setup>
import engie from '@/assets/img/engie.svg?url'
import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

const breakpoints: {
	[width: number]: SwiperOptions
	[ratio: string]: SwiperOptions
} = {
	768: {
		slidesPerView: 4,
		centeredSlides: false,
		centeredSlidesBounds: false,
	},
	1024: {
		slidesPerView: 4,
		centeredSlides: false,
		centeredSlidesBounds: false,
		spaceBetween: 84,
	},
	1280: {
		slidesPerView: 4,
		centeredSlides: false,
		centeredSlidesBounds: false,
		spaceBetween: 112,
	},
	1560: {
		slidesPerView: 4,
		centeredSlides: false,
		centeredSlidesBounds: false,
		spaceBetween: 162,
	},
}
</script>

<template>
	<Grid tag="section">
		<h5 class="col-span-12 text-white/20 font-bold mb-3 lg:mb-4 xl:mb-8 2xl:mb-9 text-center">DEFi at your service</h5>
		<h2 class="col-span-12 lg:col-span-10 lg:col-start-2 text-white text-center font-bold mb-16 lg:mb-20 2xl:mb-30">
			Partners
		</h2>

		<div class="col-span-12 md:col-span-10 md:col-start-2">
			<swiper
				class="!overflow-visible"
				:slides-per-view="1.8"
				:centered-slides="true"
				:centered-slides-bounds="true"
				:space-between="64"
				:breakpoints="breakpoints"
				:grab-cursor="true"
			>
				<swiper-slide>
					<img class="w-full h-auto opacity-20" :src="engie" alt="engie" title="engie" />
				</swiper-slide>
				<swiper-slide>
					<img class="w-full h-auto opacity-20" :src="engie" alt="engie" title="engie" />
				</swiper-slide>
				<swiper-slide>
					<img class="w-full h-auto opacity-20" :src="engie" alt="engie" title="engie" />
				</swiper-slide>
				<swiper-slide>
					<img class="w-full h-auto opacity-20" :src="engie" alt="engie" title="engie" />
				</swiper-slide>
				<swiper-slide>
					<img class="w-full h-auto opacity-20" :src="engie" alt="engie" title="engie" />
				</swiper-slide>
				<swiper-slide>
					<img class="w-full h-auto opacity-20" :src="engie" alt="engie" title="engie" />
				</swiper-slide>
				<swiper-slide>
					<img class="w-full h-auto opacity-20" :src="engie" alt="engie" title="engie" />
				</swiper-slide>
			</swiper>
		</div>
	</Grid>
</template>
