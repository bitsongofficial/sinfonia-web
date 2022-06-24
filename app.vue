<script lang="ts" setup>
import adamToken from '~/assets/img/adam-token.png'

console.log(adamToken)
</script>

<template>
	<NuxtLayout>
		<div class="container mx-auto px-7.5">
			<div class="grid grid-cols-12 gap-x-2.5">
				<Header class="col-span-12 mt-16 mb-28 md:mb-33 lg:mb-36"></Header>

				<h1 class="col-span-12 font-bold text-center text-radial-gradient-white mb-6 md:mb-8 xl:mb-11.5">
					Sinfonia tune<br />into Richer<br class="md:hidden" />Fan Exp
				</h1>

				<p class="col-span-12 font-regular text-white/30 text-center mb-14 md:mb-8 lg:mb-16 xl:mb-32 2xl:mb-20">
					Fan Tokens are the ultimate way to support the music and the acts you love AND get rewarded for it.
				</p>

				<Button class="col-span-8 col-start-3 mx-auto mb-20 lg:mb-25 xl:mb-32 2xl:mb-49" href="#">
					launch app
					<template #right>
						<Icon class="w-4 h-4 fill-transparent stroke-white stroke-3" name="chevron-right" />
					</template>
				</Button>

				<div class="col-span-12 md:col-span-10 md:col-start-2 grid grid-cols-12 gap-x-6">
					<FantokenCard
						name="Adam Clay"
						symbol="CLAY"
						price="0.542"
						market-cap="101,10,862,575"
						volume="3,862,575"
						variation="3.56"
						:image="adamToken"
						class="col-span-12 md:col-span-6"
					/>
					<FantokenCard
						name="Nicola Fasano"
						symbol="FASANO"
						price="0.287"
						market-cap="51,10,862,575"
						volume="1,862,575"
						variation="1.56"
						:image="adamToken"
						class="col-span-12 md:col-span-6 hidden md:block"
					/>

					<p
						class="col-span-12 font-regular text-white/30 text-center text-tiny md:text-base lg:text-lg xl:text-basexl 2xl:text-1.5xl mt-10 lg:mt-14 xl:mt-16 2xl:mt-21"
					>
						Fan Tokens are the ultimate way to support the music and the acts you love AND get rewarded for it. Access VIP
						experiences, exclusive previews, finance your own music projects<br />and have your say.
					</p>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>
