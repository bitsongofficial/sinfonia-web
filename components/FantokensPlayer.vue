<script lang="ts" setup>
import adamToken from '@/assets/img/adam-player-token.png?url'
import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

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
</script>

<template>
	<section>
		<Grid class="gap-y-11.5 md:hidden">
			<FantokenOrb name="Adam Clay" role="Singer" :img="adamToken" playing class="col-span-4 col-start-2" />
			<FantokenOrb name="Adam Clay" role="Singer" :img="adamToken" class="col-span-4 col-end-12" />
			<FantokenOrb name="Adam Clay" role="Singer" :img="adamToken" class="col-span-4 col-start-2" />
			<FantokenOrb name="Adam Clay" role="Singer" :img="adamToken" class="col-span-4 col-end-12" />
		</Grid>
		<swiper
			class="hidden md:block !overflow-visible"
			slides-per-view="auto"
			:space-between="80"
			:breakpoints="breakpoints"
			:grab-cursor="true"
		>
			<swiper-slide class="!w-1/6 lg:!w-[14.3%] xl:!w-3/20">
				<FantokenOrb name="Adam Clay" role="Singer" playing :img="adamToken" />
			</swiper-slide>
			<swiper-slide class="!w-1/6 lg:!w-[14.3%] xl:!w-3/20">
				<FantokenOrb name="Adam Clay" role="Singer" :img="adamToken" />
			</swiper-slide>
			<swiper-slide class="!w-1/6 lg:!w-[14.3%] xl:!w-3/20">
				<FantokenOrb name="Adam Clay" role="Singer" :img="adamToken" />
			</swiper-slide>
			<swiper-slide class="!w-1/6 lg:!w-[14.3%] xl:!w-3/20">
				<FantokenOrb name="Adam Clay" role="Singer" :img="adamToken" />
			</swiper-slide>
			<swiper-slide class="!w-1/6 lg:!w-[14.3%] xl:!w-3/20">
				<FantokenOrb name="Adam Clay" role="Singer" :img="adamToken" />
			</swiper-slide>
			<swiper-slide class="!w-1/6 lg:!w-[14.3%] xl:!w-3/20">
				<FantokenOrb name="Adam Clay" role="Singer" :img="adamToken" />
			</swiper-slide>
			<swiper-slide class="!w-1/6 lg:!w-[14.3%] xl:!w-3/20">
				<FantokenOrb name="Adam Clay" role="Singer" :img="adamToken" />
			</swiper-slide>
			<swiper-slide class="!w-1/6 lg:!w-[14.3%] xl:!w-3/20">
				<FantokenOrb name="Adam Clay" role="Singer" :img="adamToken" />
			</swiper-slide>
			<swiper-slide class="!w-1/6 lg:!w-[14.3%] xl:!w-3/20">
				<FantokenOrb name="Adam Clay" role="Singer" :img="adamToken" />
			</swiper-slide>
		</swiper>
	</section>
</template>
