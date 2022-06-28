<script lang="ts" setup>
withDefaults(
	defineProps<{
		tag?: string
	}>(),
	{
		tag: 'div',
	}
)
</script>

<template>
	<component :is="tag" class="grid grid-cols-12 gap-x-2.5 md:gap-x-6">
		<slot></slot>
	</component>
</template>
