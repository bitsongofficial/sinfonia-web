<script lang="ts" setup>
const {
	animationScaleStyle,
	animationDuration,
	textAnimationCompleted,
	animationTextOpacityStyle,
	animationLogoOpacityStyle,
	hideLoadingScreen,
	animationFixed,
} = useSphereLoadingAnimation()
</script>

<template>
	<div
		class="bg-primary xl:bg-transparent w-screen h-screen fixed xl:relative top-0 xl:top-auto left-0 xl:left-auto z-100 transition-colors xl:transition-none ease-in-out duration-700"
		:class="{
			'!bg-transparent': hideLoadingScreen,
		}"
	>
		<Container class="xl:hidden">
			<Grid>
				<Header class="col-span-12 mt-16" :style="animationLogoOpacityStyle" no-blur />
			</Grid>
		</Container>
		<Container
			class="absolute top-1/2 xl:top-auto xl:bottom-21 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:translate-y-0 w-full xl:h-full"
		>
			<div
				class="absolute top-1/2 xl:top-auto xl:bottom-36 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:translate-y-0 p-7.5 w-73 md:w-110 xl:w-200 h-73 md:h-110 xl:h-200 -z-1"
			>
				<BlurSphere
					class="xl:w-105 xl:h-105 absolute top-1/2 xl:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
					class="text-2xl xl:!text-4xl font-bold text-center text-radial-gradient-white z-50 xl:absolute xl:bottom-0 xl:left-1/2 xl:-translate-x-1/2"
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

				<div
					class="text-center text-radial-gradient-white z-50 xl:absolute xl:bottom-0 xl:left-1/2 xl:-translate-x-1/2"
					v-else
					:style="animationTextOpacityStyle"
				>
					<p class="!text-2xl xl:!text-4xl font-bold">Immerse yourself<br />by Activating the Sounds</p>
				</div>
			</Transition>
			<Transition name="fade" mode="out-in">
				<div
					class="flex flex-col items-center justify-center text-center z-50 xl:absolute xl:bottom-0 xl:left-1/2 xl:-translate-x-1/2"
					v-if="animationFixed"
				>
					<Icon name="mouse" class="stroke-white stroke-2 w-5 h-7.5 mb-4.5 fill-transparent animate-bounce" />
					<p class="!text-tiny text-white/30">Scroll down</p>
				</div>
			</Transition>
		</Container>
	</div>
</template>
