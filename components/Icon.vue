<script lang="ts" setup>
const props = defineProps<{
	name: string
}>()

const iconPath = computed(() => `#${props.name}`)
</script>

<template>
	<svg>
		<use :href="iconPath"></use>
	</svg>
</template>
