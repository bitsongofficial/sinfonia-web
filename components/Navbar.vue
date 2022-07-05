<script lang="ts" setup>
import { Ref } from 'vue'
import FantokensPlayerVue from './FantokensPlayer.vue'

const menuStore = useMenuStore()
const audioStore = useAudioStore()

const volumeActive = computed({
	get: () => audioStore.volumeActive,
	set: (value) => {
		audioStore.volumeActive = value
	},
})

const menuOpen = computed({
	get: () => menuStore.open,
	set: (value) => {
		menuStore.open = value
	},
})

const fantokensPlayer = inject<Ref<InstanceType<typeof FantokensPlayerVue> | null>>('fantokensPlayer')

const onToggle = () => {
	if (fantokensPlayer.value) {
		fantokensPlayer.value.toggleMuted()
	}
}
</script>

<template>
	<div class="fixed xl:relative xl:top-0 bottom-0 left-0 w-screen z-50 h-screen xl:h-auto pointer-events-none">
		<div
			class="grid grid-rows-menuLayout h-full xl:h-auto relative"
			:class="{
				'bg-primary': menuOpen,
			}"
		>
			<BlurSphere
				class="md:w-500 md:h-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:hidden"
				v-if="menuOpen"
			/>
			<div
				class="pointer-events-none transition-opacity opacity-0 overflow-auto xl:hidden"
				:class="{
					'!opacity-100 !pointer-events-auto': menuOpen,
				}"
			>
				<div class="container mx-auto px-7.5">
					<MobileMenu @link:click="menuOpen = false" />
				</div>
			</div>

			<div
				class="bg-primary xl:bg-transparent pointer-events-auto w-full"
				:class="{
					'!bg-transparent': menuOpen,
				}"
			>
				<Container>
					<div class="flex flex-row items-center justify-between pt-7.5 xl:pt-0 pb-13.5 xl:pb-0">
						<Logo :vertical="false" class="hidden xl:flex" />

						<div class="flex flex-row items-center">
							<Icon
								class="w-7.5 h-7.5 stroke-2 stroke-grey opacity-30 fill-transparent transition mr-4"
								:class="{
									'opacity-100': volumeActive,
								}"
								name="volume"
							/>

							<Toggle name="audio" v-model="volumeActive" @update:modelValue="onToggle" :default-value="true" />
						</div>

						<MenuButton @click="menuOpen = !menuOpen" :open="menuOpen" class="xl:hidden" />
					</div>
				</Container>
			</div>
		</div>
	</div>
</template>
