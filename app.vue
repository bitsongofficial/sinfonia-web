<template>
	<NuxtLayout>
		<div class="container mx-auto px-7.5">
			<div class="grid grid-cols-12 gap-x-2.5">
				<Header class="col-span-12 mt-16 mb-28 md:mb-33 lg:mb-36"></Header>

				<h1
					class="col-span-12 lg:col-span-10 lg:col-start-2 font-bold text-center text-radial-gradient-white mb-6 md:mb-8 xl:mb-11.5"
				>
					Sinfonia tune<br />into Richer<br class="md:hidden" />
					Fan Exp
				</h1>

				<p
					class="col-span-12 lg:col-span-10 lg:col-start-2 font-regular text-white/30 text-center mb-14 md:mb-8 lg:mb-16 xl:mb-32 2xl:mb-20"
				>
					Fan Tokens are the ultimate way<br class="md:hidden" />to support the music and the acts<br class="xl:hidden" />
					you love<br class="hidden xl:inline 2xl:hidden" />
					and get rewarded for it.
				</p>

				<Button
					class="col-span-8 md:col-span-4 col-start-3 md:col-start-5 mx-auto mb-20 lg:mb-25 xl:mb-32 2xl:mb-49"
					href="#"
				>
					launch app
					<template #right>
						<Icon
							class="w-4 h-4 xl:w-4.5 xl:h-4.5 2xl:w-6 2xl:h-6 fill-transparent stroke-white stroke-3"
							name="chevron-right"
						/>
					</template>
				</Button>

				<FantokensSection class="col-span-12 md:col-span-10 md:col-start-2" />
			</div>
		</div>
	</NuxtLayout>
</template>
