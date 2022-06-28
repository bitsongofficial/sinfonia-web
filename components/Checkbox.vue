<script lang="ts" setup>
import { useField } from 'vee-validate'

const props = defineProps<{
	name: string
	defaultValue?: boolean
	label?: string
}>()

const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void
}>()

const name = toRef(props, 'name')

const { value, handleBlur, handleChange } = useField(name, undefined, {
	initialValue: props.defaultValue,
})

const updateModelValue = (e: unknown) => {
	handleChange(e)
	emit('update:modelValue', value.value)
}
</script>

<template>
	<div class="flex items-center">
		<div class="flex relative">
			<input
				v-model="value"
				@update:model-value="updateModelValue($event)"
				@blur="handleBlur"
				:id="name"
				type="checkbox"
				class="w-5 h-5 xl:w-5.5 xl:h-5.5 transition-all duration-300 peer cursor-pointer text-purple3 !bg-none bg-white/0 focus:bg-transparent checked:!bg-white rounded-md border border-solid border-white/30 hover:border-white checked:!border-white !ring-offset-1 !ring-transparent !ring-offset-transparent"
			/>

			<Icon
				class="w-3.5 h-3.5 xl:w-4 xl:h-4 fill-transparent stroke-purple3 stroke-3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none hidden peer-checked:block"
				name="check"
			/>
		</div>
		<label v-if="label" :for="name" class="ml-3 text-xs xl:text-base text-white cursor-pointer">{{ label }}</label>
	</div>
</template>
