import { TransitionPresets, useTransition, useTimeoutFn, useMediaQuery } from '@vueuse/core'
import { CSSProperties } from 'vue'

export const useSphereLoadingAnimation = () => {
	const menuStore = useMenuStore()

	const isLargeScreen = useMediaQuery('(min-width: 1280px)')

	const duration = ref(5000) // ms
	const animationDuration = ref(3) // seconds
	const textFadeDuration = ref(400) // ms
	const logoFadeDuration = ref(700) // ms
	const hideScreenDuration = ref(1400) // ms
	const hideLoadingScreen = ref(false)
	const opacityTextTo = 0
	const opacityTextFrom = ref(1)
	const opacityLogoTo = 0
	const opacityLogoFrom = ref(1)
	const textAnimationCompleted = ref(false)

	const animationLoading = computed({
		get: () => menuStore.loading,
		set: (value) => {
			menuStore.loading = value
		},
	})

	const animationFixed = computed({
		get: () => menuStore.fixed,
		set: (value) => {
			menuStore.fixed = value
		},
	})

	const { start } = useTimeoutFn(
		() => {
			if (isLargeScreen.value) {
				animationFixed.value = true
			}

			animationLoading.value = false
		},
		hideScreenDuration,
		{
			immediate: false,
		}
	)

	const opacityLogoTransition = useTransition(opacityLogoFrom, {
		duration: logoFadeDuration,
		transition: TransitionPresets.easeInOutQuint,
	})

	const opacityTextTransition = useTransition(opacityTextFrom, {
		duration: textFadeDuration,
		transition: TransitionPresets.easeInOutQuint,
		onFinished() {
			// called after the transition ends
			hideLoadingScreen.value = true
			opacityLogoFrom.value = opacityLogoTo
			start()
		},
	})

	const { start: startLoading } = useTimeoutFn(
		() => {
			opacityTextFrom.value = opacityTextTo
		},
		duration,
		{
			immediate: false,
		}
	)

	const animationTextOpacityStyle = computed<CSSProperties>(() => ({
		opacity: opacityTextTransition.value,
	}))

	const animationLogoOpacityStyle = computed<CSSProperties>(() => ({
		opacity: opacityLogoTransition.value,
	}))

	watch(
		() => isLargeScreen.value,
		(value) => {
			if (!animationLoading.value) {
				if (value) {
					duration.value = 0
					animationDuration.value = 0
					textFadeDuration.value = 0
					logoFadeDuration.value = 0
					hideScreenDuration.value = 0
					animationFixed.value = true
				} else {
					animationFixed.value = false
				}
			}
		}
	)

	onMounted(() => {
		startLoading()
	})

	return {
		animationLogoOpacityStyle,
		animationTextOpacityStyle,
		animationDuration,
		animationLoading,
		animationFixed,
		textAnimationCompleted,
		hideLoadingScreen,
		isLargeScreen,
	}
}
