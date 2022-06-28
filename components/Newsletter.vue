<script lang="ts" setup>
import { useForm } from 'vee-validate'

const validationSchema = computed(() => ({
	email: {
		required: true,
		email: true,
	},
	agree: {
		required: true,
	},
}))

const initialValues = {
	email: '',
	agree: '',
}

const { handleSubmit, values, meta } = useForm({
	initialValues,
	validationSchema,
})

const onSubmit = handleSubmit(() => {
	console.log(values)
})
</script>

<template>
	<Grid>
		<h4
			class="col-span-12 md:col-span-4 xl:col-span-3 md:!col-start-2 text-white font-medium text-center md:text-left mb-13"
		>
			Be the first on<br />
			every new drop.
		</h4>

		<Input class="col-span-12 mb-4 xl:mb-10" name="email" type="email" placeholder="Type your email address" />

		<Checkbox class="col-span-9 mb-16" name="agree" label="I agree to receive Bitsong Newsletter" />

		<Button
			class="w-full col-span-6 md:col-span-4 col-start-4 md:col-start-5 mx-auto mb-20 lg:mb-25 xl:mb-32 2xl:mb-49"
			@click="onSubmit"
			:disabled="!meta.valid"
		>
			Get notified
		</Button>
	</Grid>
</template>
