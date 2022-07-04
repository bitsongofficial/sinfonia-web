import { TransitionPresets, useTransition, useTimeoutFn } from '@vueuse/core'
import { CSSProperties } from 'vue'

export const useSphereLoadingAnimation = () => {
	const menuStore = useMenuStore()

	const duration = 5000 // ms
	const animationDuration = 3 // seconds
	const textFadeDuration = 400 // ms
	const logoFadeDuration = 700 // ms
	const hideScreenDuration = 1400 // ms
	const scaleTo = 6
	const rotateTo = 360
	const scaleFrom = ref(1)
	const rotateFrom = ref(0)
	const hideLoadingScreen = ref(false)
	const opacityTextTo = 0
	const opacityTextFrom = ref(1)
	const opacityLogoTo = 0
	const opacityLogoFrom = ref(1)
	const textAnimationCompleted = ref(false)

	const { start } = useTimeoutFn(
		() => {
			animationLoading.value = false
		},
		hideScreenDuration,
		{
			immediate: false,
		}
	)

	const animationLoading = computed({
		get: () => menuStore.loading,
		set: (value) => {
			menuStore.loading = value
		},
	})

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

	const scaleTransition = useTransition(scaleFrom, {
		duration,
		transition: TransitionPresets.easeInOutQuint,
		onFinished() {
			// called after the transition ends
			opacityTextFrom.value = opacityTextTo
		},
	})

	const rotateTransition = useTransition(rotateFrom, {
		duration,
		transition: TransitionPresets.easeInOutQuint,
	})

	const animationScaleStyle = computed<CSSProperties>(() => ({
		'--tw-scale-x': scaleTransition.value,
		'--tw-scale-y': scaleTransition.value,
		'--tw-rotate': `${rotateTransition.value}deg`,
	}))

	const animationTextOpacityStyle = computed<CSSProperties>(() => ({
		opacity: opacityTextTransition.value,
	}))

	const animationLogoOpacityStyle = computed<CSSProperties>(() => ({
		opacity: opacityLogoTransition.value,
	}))

	onMounted(() => {
		scaleFrom.value = scaleTo
		rotateFrom.value = rotateTo
	})

	return {
		animationLogoOpacityStyle,
		animationTextOpacityStyle,
		animationScaleStyle,
		animationDuration,
		animationLoading,
		textAnimationCompleted,
		hideLoadingScreen,
	}
}
