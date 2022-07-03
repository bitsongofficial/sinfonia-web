<script lang="ts" setup>
import { Ref } from 'vue'
import FantokensPlayerVue from './FantokensPlayer.vue'

const volumeActive = ref(true)
const menuOpen = ref(false)

const fantokensPlayer = inject<Ref<InstanceType<typeof FantokensPlayerVue> | null>>('fantokensPlayer')

const onToggle = () => {
	if (fantokensPlayer.value) {
		fantokensPlayer.value.toggleMuted()
	}
}
</script>

<template>
	<div
		class="flex flex-row items-center justify-between bg-gradient-to-b from-purple5 to-purple5 p-7.5 pb-13.5 fixed bottom-0 left-0 w-screen z-50"
	>
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

		<MenuButton @click="menuOpen = !menuOpen" :open="menuOpen" />
	</div>
</template>
