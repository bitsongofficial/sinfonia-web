<script lang="ts" setup>
import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { partners } from '@/constants'

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
		<h5 class="col-span-12 text-white/20 font-bold mb-3 lg:mb-4 xl:mb-8 2xl:mb-9 text-center">Blockchain and DeFi</h5>
		<h2 class="col-span-12 lg:col-span-10 lg:col-start-2 text-white text-center font-bold mb-16 lg:mb-20 2xl:mb-30">
			Partner
		</h2>

		<div
			class="col-span-8 col-start-3 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5"
			v-for="(partner, index) in partners"
			:key="index"
		>
			<a
				:key="index"
				class="w-full h-auto opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200"
				target="_blank"
				:href="partner.href"
				rel="external"
			>
				<img class="w-full h-auto" :src="partner.img" :alt="partner.name" :title="partner.name" />
			</a>
			<!-- <swiper
				class="!overflow-visible"
				:slides-per-view="1.8"
				:centered-slides="true"
				:centered-slides-bounds="true"
				:space-between="64"
				:breakpoints="breakpoints"
				:grab-cursor="true"
			>
				<swiper-slide v-for="(partner, index) in partners" :key="index">
					<a
						class="w-full h-auto opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200"
						target="_blank"
						:href="partner.href"
						rel="external"
					>
						<img class="w-full h-auto" :src="partner.img" :alt="partner.name" :title="partner.name" />
					</a>
				</swiper-slide>
			</swiper> -->
		</div>
	</Grid>
</template>
