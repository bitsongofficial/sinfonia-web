<script lang="ts" setup>
const menuStore = useMenuStore()

/* const bodyClasses = computed(
	() => `bg-primary overflow-overlay ${menuStore.open || menuStore.loading ? '!overflow-hidden' : ''}`
) */
const bodyClasses = computed(() => `bg-primary overflow-overlay`)

onMounted(() => {
	if (process.client && window) {
		window.history.scrollRestoration = 'manual'
		window.scrollTo({
			top: 0,
		})
	}
})
</script>

<template>
	<div class="default-layout">
		<Body :class="bodyClasses"></Body>
		<div class="overflow-hidden relative">
			<slot></slot>
		</div>
		<Icons />
	</div>
</template>
