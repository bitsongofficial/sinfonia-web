<script lang="ts" setup>
withDefaults(
	defineProps<{
		open?: boolean
	}>(),
	{
		open: false,
	}
)

const emit = defineEmits<{
	(e: 'click'): void
}>()

const click = (e: unknown) => {
	emit('click')
}
</script>

<template>
	<button class="flex flex-col justify-center items-center gap-1.5 w-6 h-6" type="button" @click="click">
		<Icon name="menu" class="stroke-white stroke-2 w-full h-full" v-if="!open" />
		<Icon name="close" class="stroke-white stroke-2 w-full h-full" v-else />
	</button>
</template>
