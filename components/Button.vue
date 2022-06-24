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
		class="flex flex-row justify-center items-center py-4 2xl:py-5.5 pl-8 2xl:pl-9 pr-6.5 2xl:pr-7.5 hover:active:opacity-80 rounded-full text-white font-medium text-base md:text-tiny lg:text-base xl:text-lg 2xl:text-basexl capitalize bg-custom-l-gradient from-purple to-secondary"
		v-bind="anchorProps"
		@click="$emit('click', $event)"
	>
		<div v-if="$slots.left" class="mr-5">
			<slot name="left"> </slot>
		</div>
		<span>
			<slot></slot>
		</span>
		<div v-if="$slots.right" class="ml-5">
			<slot name="right"></slot>
		</div>
	</component>
</template>
