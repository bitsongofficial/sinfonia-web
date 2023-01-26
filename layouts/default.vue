<script lang="ts" setup>
const menuStore = useMenuStore()

const bodyClasses = computed(() => `bg-primary overflow-overlay`)
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
