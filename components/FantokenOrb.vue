<script lang="ts" setup>
withDefaults(
	defineProps<{
		name: string
		role: string
		img: string
		playing?: boolean
	}>(),
	{
		playing: false,
	}
)
</script>

<template>
	<figure class="flex flex-col items-center cursor-pointer relative">
		<div class="mb-4 md:mb-10.5 lg:mb-8 xl:mb-14 2xl:mb-18 relative">
			<div
				class="w-18 md:w-20 lg:w-24 xl:w-32 2xl:w-40 h-18 md:h-20 lg:h-24 xl:h-32 2xl:h-40 absolute z-auto left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
				v-if="playing"
			>
				<div
					class="w-full h-full bg-custom-radial-gradient from-white/0 to-white opacity-5 animate-ping origin-center rounded-full"
				></div>
			</div>
			<img
				class="w-24.5 md:w-25 lg:w-29 xl:w-40 2xl:w-52 h-auto object-cover relative z-auto"
				:src="img"
				:alt="name"
				:title="name"
			/>
		</div>
		<figcaption
			class="text-base md:text-p1 lg:text-basexl 2xl:text-2xl font-medium text-white mb-1 md:mb-3 lg:mb-4 xl:mb-3 2xl:mb-3.5 capitalize"
		>
			{{ name }}
		</figcaption>
		<p
			class="text-xs lg:text-tiny xl:text-xs 2xl:text-base font-medium text-red uppercase absolute -bottom-3 translate-y-2/4 transform-gpu"
			v-if="playing"
		>
			{{ role }}
		</p>
		<audio>
			<source src="@/assets/audio/sample.mp3" type="audio/mpeg" />
			Your browser does not support the
			<code>audio</code> element.
		</audio>
	</figure>
</template>