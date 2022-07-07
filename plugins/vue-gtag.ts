import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig()

	nuxtApp.vueApp.use(VueGtag, {
		property: {
			appName: config.public.analytics.appName,
			id: config.public.analytics.measurementID,
		},
	})
})
