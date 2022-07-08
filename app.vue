<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'
import FantokensPlayerVue from './components/FantokensPlayer.vue'

const isLargeScreen = useMediaQuery('(min-width: 1280px)')

const config = useRuntimeConfig()

const menuStore = useMenuStore()

const fantokensPlayer = ref<InstanceType<typeof FantokensPlayerVue> | null>()

provide('fantokensPlayer', fantokensPlayer)

useHead({
	title: 'Sinfonia',
	htmlAttrs: {
		lang: 'en',
	},
	meta: [
		{
			name: 'theme-color',
			content: '#1B0929',
		},
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1',
		},
		{
			hid: 'keywords',
			name: 'keywords',
			content: 'music, blockchain, crypto, music, fantokens, swap, airdrop, sell, trading, sinfonia, nfts',
		},
		{
			hid: 'description',
			name: 'description',
			content: 'Your Music FanToken Marketplace powered by BitSong',
		},
		{
			hid: 'og:site_name',
			property: 'og:site_name',
			content: 'Sinfonia',
		},
		{
			hid: 'og:title',
			name: 'og:title',
			content: 'FanToken Music Marketplace',
		},
		{
			hid: 'og:description',
			name: 'og:description',
			content: 'Your Music FanToken Marketplace powered by BitSong',
		},
		{
			hid: 'og:type',
			property: 'og:type',
			content: 'website',
		},
		{
			hid: 'og:url',
			name: 'og:url',
			content: 'https://www.sinfonia.zone/',
		},
		{
			hid: 'og:image',
			name: 'og:image',
			content: 'https://www.sinfonia.zone/cover.jpeg',
		},
		{
			hid: 'og:image:width',
			name: 'og:image:width',
			content: '2220',
		},
		{
			hid: 'og:image:height',
			name: 'og:image:height',
			content: '1186',
		},
		{
			hid: 'twitter:card',
			name: 'twitter:card',
			content: 'summary_large_image',
		},
		{
			hid: 'twitter:site',
			name: 'twitter:site',
			content: '@sinfoniazone',
		},
		{
			hid: 'twitter:title',
			name: 'twitter:title',
			content: 'Sinfonia',
		},
		{
			hid: 'twitter:description',
			name: 'twitter:description',
			content: 'Your Music FanToken Marketplace powered by BitSong',
		},
		{
			hid: 'twitter:creator',
			name: 'twitter:creator',
			content: '@sinfoniazone',
		},
		{
			hid: 'twitter:image',
			name: 'twitter:image',
			content: 'https://www.sinfonia.zone/cover.jpeg',
		},
		{
			hid: 'twitter:image:alt',
			name: 'twitter:image:alt',
			content: 'Sinfonia',
		},
	],
})
</script>

<template>
	<NuxtLayout>
		<Loading v-show="menuStore.loading || (menuStore.fixed && isLargeScreen)" />
		<!-- <Navbar /> -->

		<Container>
			<Grid class="xl:hidden">
				<Header class="col-span-12 mt-16 mb-28 md:mb-33 lg:mb-36"></Header>
			</Grid>

			<IntroSection class="mb-20 lg:mb-25 xl:mb-32 2xl:mb-49" />

			<CountdownSection :date="config.public.countdownDate" class="mb-20 lg:mb-25 xl:mb-32 2xl:mb-49" />

			<!-- <FantokensSection class="col-span-12 md:col-span-10 md:col-start-2 mb-35 md:mb-45 lg:mb-71 xl:mb-56 2xl:mb-59" /> -->

			<!-- <FantokensPlayer
					ref="fantokensPlayer"
					class="col-span-12 md:col-span-11 md:col-start-2 mb-43 md:mb-40 lg:mb-49 xl:mb-45 2xl:mb-36"
				/> -->

			<Newsletter :list-id="config.public.newsletter.listID" class="col-span-12 mb-35 md:mb-28 lg:mb-35 xl:mb-64" v-once />

			<DefiSection class="col-span-12 mb-29 md:mb-32 lg:mb-35 xl:mb-40 2xl:mb-49" v-once />

			<ListingSection class="col-span-12 mb-29 md:mb-32 lg:mb-29 xl:mb-55 2xl:mb-71.5" v-once />

			<SwapSection class="col-span-12 mb-29 md:mb-32 lg:mb-29 xl:mb-55 2xl:mb-71.5" v-once />

			<PoolsSection class="col-span-12 mb-20 xl:mb-32" v-once />

			<Grid>
				<Button
					disabled
					class="col-span-8 md:col-span-4 col-start-3 md:col-start-5 mx-auto mb-35 md:mb-32 lg:mb-35 xl:mb-71 2xl:mb-59"
					href="https://app.sinfonia.zone"
				>
					launch app
					<template #right>
						<Icon
							class="w-4 h-4 xl:w-4.5 xl:h-4.5 2xl:w-6 2xl:h-6 fill-transparent stroke-white stroke-3"
							name="chevron-right"
						/>
					</template>
				</Button>
			</Grid>

			<UseCasesSection class="col-span-12 mb-35" v-once />

			<Newsletter :list-id="config.public.newsletter.listID" class="col-span-12 mb-35 md:mb-28 lg:mb-35 xl:mb-64" v-once />

			<!-- <PartnersSection class="col-span-12 mb-40 md:mb-44 lg:mb-52 xl:mb-64 2xl:mb-96" /> -->

			<Footer class="mb-40 md:mb-29 lg:mb-20 xl:mb-36 2xl:mb-39" v-once />
		</Container>
	</NuxtLayout>
</template>
