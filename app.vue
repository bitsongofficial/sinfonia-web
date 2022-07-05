<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'
import FantokensPlayerVue from './components/FantokensPlayer.vue'

const isLargeScreen = useMediaQuery('(min-width: 1280px)')

const menuStore = useMenuStore()

const fantokensPlayer = ref<InstanceType<typeof FantokensPlayerVue> | null>()

provide('fantokensPlayer', fantokensPlayer)
</script>

<template>
	<NuxtLayout>
		<Loading v-show="menuStore.loading || (menuStore.fixed && isLargeScreen)" />
		<Navbar />

		<Container>
			<Grid class="xl:hidden">
				<Header class="col-span-12 mt-16 mb-28 md:mb-33 lg:mb-36"></Header>
			</Grid>

			<IntroSection />

			<Grid>
				<FantokensSection class="col-span-12 md:col-span-10 md:col-start-2 mb-35 md:mb-45 lg:mb-71 xl:mb-56 2xl:mb-59" />

				<FantokensPlayer
					ref="fantokensPlayer"
					class="col-span-12 md:col-span-11 md:col-start-2 mb-43 md:mb-40 lg:mb-49 xl:mb-45 2xl:mb-36"
				/>

				<Newsletter class="col-span-12 mb-35 md:mb-28 lg:mb-35 xl:mb-64" />

				<DefiSection class="col-span-12 mb-29 md:mb-32 lg:mb-35 xl:mb-40 2xl:mb-49" />

				<ListingSection class="col-span-12 mb-29 md:mb-32 lg:mb-29 xl:mb-55 2xl:mb-71.5" />

				<SwapSection class="col-span-12 mb-29 md:mb-32 lg:mb-29 xl:mb-55 2xl:mb-71.5" />

				<PoolsSection class="col-span-12 mb-20 xl:mb-32" />

				<Button
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

				<UseCasesSection class="col-span-12 mb-35" />

				<PartnersSection class="col-span-12 mb-40 md:mb-44 lg:mb-52 xl:mb-64 2xl:mb-96" />
			</Grid>

			<Footer class="mb-40 md:mb-29 lg:mb-20 xl:mb-36 2xl:mb-39" />
		</Container>
	</NuxtLayout>
</template>
