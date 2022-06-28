<script lang="ts" setup>
import { useField } from 'vee-validate'

const props = withDefaults(
	defineProps<{
		name: string
		type?: string
		defaultValue?: string
		placeholder?: string
		label?: string
	}>(),
	{
		type: 'text',
	}
)

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

const name = toRef(props, 'name')

const { value, handleBlur, handleChange, errorMessage, meta } = useField(name, undefined, {
	initialValue: props.defaultValue,
})

const updateModelValue = (e: unknown) => {
	handleChange(e)
	emit('update:modelValue', value.value)
}
</script>

<template>
	<div class="flex flex-col">
		<input
			class="text-base xl:text-basexl text-white placeholder:text-white/30 bg-transparent border-0 border-b border-b-white/30 focus:border-b-white pt-0 px-0 pb-3 xl:pb-6 !ring-offset-1 !ring-transparent !ring-offset-transparent"
			v-model="value"
			@update:model-value="updateModelValue($event)"
			@blur="handleBlur"
			:placeholder="placeholder"
			:name="name"
			:type="type"
		/>

		<p class="text-base text-error mt-2" v-if="errorMessage && meta.touched && !$slots.bottom">{{ errorMessage }}</p>

		<slot name="bottom"></slot>
	</div>
</template>
