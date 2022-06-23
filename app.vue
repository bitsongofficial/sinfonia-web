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

				<Button class="col-span-8 col-start-3 mx-auto" href="ciao">
					launch app
					<template #right>
						<Icon class="w-4 h-4 fill-transparent stroke-white stroke-3" name="chevron-right" />
					</template>
				</Button>
			</div>
		</div>
	</NuxtLayout>
</template>
