import { defineRule } from 'vee-validate'
import { required, email } from '@vee-validate/rules'

export default defineNuxtPlugin((nuxtApp) => {
	defineRule('required', (value: unknown) => {
		const valid = required(value)

		if (!valid) {
			return 'Required field'
		}

		return true
	})

	defineRule('email', (value: unknown) => {
		const valid = email(value)

		if (!valid) {
			return 'Invalid email, rewrite it correctly.'
		}

		return true
	})
})
