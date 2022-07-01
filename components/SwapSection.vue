<script lang="ts" setup>
import swap from '@/assets/img/swap.svg?url'
</script>

<template>
	<Grid>
		<div
			class="col-span-12 md:col-span-8 xl:col-span-4 md:col-start-3 xl:col-start-2 flex flex-col items-center xl:items-start mb-14 md:mb-13 lg:mb-35 xl:mb-0 2xl:ml-10"
		>
			<Badge class="w-full mb-6">swap</Badge>

			<h3
				class="text-white text-basexl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-bold text-center xl:text-left mb-6 lg:mb-8 xl:mb-6 2xl:mb-8"
			>
				Swap any Fan<br />
				Token with a click.
			</h3>

			<p
				class="text-white/30 text-tiny md:text-base lg:text-lg xl:text-base 2xl:text-p2 text-center xl:text-left lg:px-10 xl:px-0"
			>
				Swapping Artists' Fantokens has never been easier. Each artist, one coin.<br />
				Collect them and swap them as you prefer.
			</p>
		</div>

		<div
			class="col-span-12 md:col-span-8 xl:col-span-5 md:col-start-3 xl:row-start-1 xl:col-start-7 lg:mx-7 xl:mx-0 2xl:mr-11.5"
		>
			<img :src="swap" class="w-full" alt="Swap Component" title="Swap Component" />
		</div>
	</Grid>
</template>
