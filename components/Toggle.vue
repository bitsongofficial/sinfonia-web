<script lang="ts" setup>
import { useField } from 'vee-validate'

const props = withDefaults(
	defineProps<{
		name: string
		defaultValue?: boolean
		id?: string
	}>(),
	{
		defaultValue: false,
	}
)

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
	<div class="flex items-center justify-center">
		<label :for="id" class="flex items-center cursor-pointer">
			<!-- toggle -->
			<div class="relative">
				<!-- input -->
				<input
					v-model="value"
					@update:model-value="updateModelValue($event)"
					@blur="handleBlur"
					type="checkbox"
					:id="id"
					class="sr-only peer"
				/>
				<!-- line -->
				<div
					class="block bg-white/10 w-11 h-6 rounded-full transition peer-checked:bg-custom-t-l-gradient from-secondary to-purple"
				></div>
				<!-- dot -->
				<div
					class="dot absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition peer-checked:translate-x-full"
				></div>
			</div>
		</label>
	</div>
</template>
