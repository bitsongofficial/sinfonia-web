<script lang="ts" setup>
const {
	animationScaleStyle,
	animationDuration,
	textAnimationCompleted,
	animationTextOpacityStyle,
	animationLogoOpacityStyle,
	hideLoadingScreen,
} = useSphereLoadingAnimation()
</script>

<template>
	<div
		class="bg-primary w-screen h-screen fixed top-0 left-0 z-50 transition-colors ease-in-out duration-700"
		:class="{
			'!bg-transparent': hideLoadingScreen,
		}"
	>
		<Container class="xl:hidden">
			<Grid>
				<Header class="col-span-12 mt-16" :style="animationLogoOpacityStyle" no-blur />
			</Grid>
		</Container>
		<Container class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-7.5 w-73 md:w-110 xl:w-200 h-73 md:h-110 xl:h-200 -z-1"
			>
				<BlurSphere
					class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					:style="animationTextOpacityStyle"
				/>
				<div class="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" :style="animationScaleStyle">
					<MediumOrb class="absolute top-9 md:top-15 xl:top-36 left-9 md:left-15 xl:left-36 -rotate-45" />
					<MediumOrb class="absolute top-0 left-1/2 -translate-x-1/2" />
					<MediumOrb class="absolute top-9 md:top-15 xl:top-36 right-9 md:right-15 xl:right-36 rotate-45" />
					<MediumOrb class="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90" />
					<MediumOrb class="absolute top-1/2 right-0 -translate-y-1/2 rotate-90" />
					<MediumOrb class="absolute bottom-9 md:bottom-15 xl:bottom-36 left-9 md:left-15 xl:left-36 -rotate-135" />
					<MediumOrb class="absolute bottom-0 left-1/2 rotate-180 -translate-x-1/2" />
					<MediumOrb class="absolute bottom-9 md:bottom-15 xl:bottom-36 right-9 md:right-15 xl:right-36 rotate-135" />
				</div>
			</div>
			<Transition name="fade" mode="out-in" appear>
				<div
					class="text-2xl xl:text-4xl font-bold text-center text-radial-gradient-white z-50"
					v-if="!textAnimationCompleted"
				>
					<number
						:from="0"
						:to="101"
						:duration="animationDuration"
						easing="Power1.easeOut"
						@complete="textAnimationCompleted = true"
					/>
					<span>%</span>
				</div>

				<div class="text-center text-radial-gradient-white z-50" v-else :style="animationTextOpacityStyle">
					<p class="!text-2xl xl:!text-6xl font-bold">Immerse yourself<br />by Activating the Sounds</p>
				</div>
			</Transition>
		</Container>
	</div>
</template>
