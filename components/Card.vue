<script lang="ts" setup>
withDefaults(
	defineProps<{
		bg?: boolean
	}>(),
	{
		bg: true,
	}
)
</script>

<template>
	<div
		class="drop-shadow-3xl rounded-medium py-8 px-6"
		:class="{
			'bg-radial-gradient-white': bg,
		}"
	>
		<slot></slot>
	</div>
</template>
