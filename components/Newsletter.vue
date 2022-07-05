<script lang="ts" setup>
import { useForm } from 'vee-validate'

const props = defineProps<{
	listId: string
}>()

const config = useRuntimeConfig()

const success = ref(false)
const error = ref(false)

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

const onSubmit = handleSubmit(async () => {
	console.log(values)
	try {
		success.value = false
		error.value = false

		await $fetch(`${config.public.newsletter.apiUrl}subscribe`, {
			body: {
				email: values.email,
				listID: props.listId,
			},
			method: 'post',
		})

		success.value = true
	} catch (e) {
		console.error(e)
		error.value = true
	}
})
</script>

<template>
	<Grid class="relative" tag="section">
		<PurpleBlurSphere class="absolute -top-44 md:top-28 lg:top-64 -right-7.5 md:-right-24 lg:-right-36" />
		<h4
			class="col-span-12 md:col-span-4 xl:col-span-3 md:!col-start-2 text-white font-medium text-center md:text-left mb-13 md:mb-0"
		>
			Be the first on<br />
			every new drop.
		</h4>

		<div
			class="col-span-12 md:col-span-5 xl:col-span-7 2xl:col-span-5 md:col-start-7 2xl-col-span-5 lg:max-w-lginput xl:max-w-full xl:pl-11.5 2xl:pl-0 2xl:mt-1.5"
		>
			<Input class="mb-4 md:mb-6 xl:mb-10" name="email" type="email" placeholder="Type your email address">
				<template #bottom>
					<p class="text-base text-success mt-2" v-if="success">Email successfully added to the newsletter.</p>
					<p class="text-base text-error mt-2" v-if="error">An error occurred, please try again later.</p>
				</template>
			</Input>

			<Checkbox class="mb-16 md:mb-10 xl:mb-16" name="agree" label="I agree to receive Bitsong Newsletter" />
		</div>

		<Button
			class="w-full col-span-6 md:col-span-3 xl:col-span-2 2xl:col-span-3 col-start-4 md:col-start-7 xl:col-start-5 2xl:col-start-10 xl:ml-11.5 2xl:ml-16 2xl:mb-auto mx-auto md:mx-0 md:max-w-mdbutton lg:max-w-lgbutton xl:max-w-xlbutton 2xl:max-w-2xlbutton"
			@click="onSubmit"
			:disabled="!meta.valid"
		>
			Get notified
		</Button>
	</Grid>
</template>
