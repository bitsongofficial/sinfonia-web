<script lang="ts" setup>
withDefaults(
	defineProps<{
		noBlur?: boolean
	}>(),
	{
		noBlur: false,
	}
)
</script>

<template>
	<div class="flex justify-center relative">
		<BlurSphere class="absolute -top-28 md:-top-36" v-if="!noBlur" />
		<Logo />
	</div>
</template>
