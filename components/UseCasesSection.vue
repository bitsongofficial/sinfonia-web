<script lang="ts" setup>
import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

const useCases = [
	{
		title: 'Polls',
		subtitle:
			"Participate in your favorite Artists' decisions about their private or musical lives by answering simple surveys.",
		label: 'Q2 2022',
		icon: 'chart-bar',
	},
	{
		title: 'Tickets',
		subtitle: 'Purchase tickets for concerts and events.',
		label: 'Q2 2022',
		icon: 'ticket',
	},
	{
		title: 'Merch',
		subtitle: 'Brand new merchandise of your Artists, Labels, Clubs, Festivals and Radio.',
		label: 'Q2 2022',
		icon: 't-shirt',
	},
	{
		title: 'Memorabilia',
		subtitle: 'Exclusive collectibles , coming directly from your favorite Artists.',
		label: 'Q2 2022',
		icon: 'music-note',
	},
	{
		title: 'Group session',
		subtitle: 'Talk freely with your favorite artist, discover  his life, curiosities and passions.',
		label: 'Q2 2022',
		icon: 'users',
	},
	{
		title: 'Exclusive contents',
		subtitle:
			'Receive exclusive unreleased tracks, promo, customized videos and much more from your favourite Artist & Labels.',
		label: 'Q2 2022',
		icon: 'lock',
	},
	{
		title: 'Collaborate w/ your Artist',
		subtitle: 'Artists or Record Labels may need your support! Establish collaborations with them.',
		label: 'Q2 2022',
		icon: 'microphone',
	},
	{
		title: 'Masterclass',
		subtitle: 'Take classes directly from leading musical exponents.',
		label: 'Q2 2022',
		icon: 'binoculars',
	},
	{
		title: 'Exclusive streamings',
		subtitle: 'Private sessions or Dj sets to celebrate your events with your favorite music.',
		label: 'Q2 2022',
		icon: 'monitor-play',
	},
	{
		title: 'NFTs',
		subtitle: 'Collects unique works of art. Issue autographs and signed photographs, gig tickets and much more',
		label: 'Q2 2022',
		icon: 'sketch',
	},
]

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

		<div class="hidden xl:grid grid-cols-12 gap-7.5 col-span-12 auto-rows-fr">
			<UseCaseCard v-for="(useCase, index) in useCases" :key="index" v-bind="useCase" class="col-span-4" />
		</div>
	</Grid>
</template>
