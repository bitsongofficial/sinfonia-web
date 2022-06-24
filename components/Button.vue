<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		iconLeft?: boolean
		href?: string
		target?: string
	}>(),
	{
		iconLeft: false,
		href: undefined,
		target: '_blank',
	}
)

defineEmits<{
	(e: 'click', event: MouseEvent): void
}>()

const buttonType = computed(() => (props.href ? 'a' : 'button'))

const anchorProps = computed(() => ({
	href: props.href,
	target: props.target,
}))
</script>

<template>
	<component
		:is="buttonType"
		class="flex flex-row justify-center items-center w-45 h-13 hover:active:opacity-80 rounded-4xl text-white font-medium text-base capitalize bg-custom-l-gradient from-purple to-secondary"
		v-bind="anchorProps"
		@click="$emit('click', $event)"
	>
		<div v-if="$slots.left" class="mr-5">
			<slot name="left"> </slot>
		</div>
		<slot></slot>
		<div v-if="$slots.right" class="ml-5">
			<slot name="right"></slot>
		</div>
	</component>
</template>
