<template>
	<NuxtLayout>
		<div class="container mx-auto px-7.5 md:px-10 lg:px-14">
			<Grid>
				<Header class="col-span-12 mt-16 mb-28 md:mb-33 lg:mb-36"></Header>

				<h1
					class="col-span-12 lg:col-span-10 lg:col-start-2 font-bold text-center text-radial-gradient-white mb-6 md:mb-8 xl:mb-11.5"
				>
					Music Industry has<br class="hidden md:inline" />
					arrived in Web 3.0
				</h1>

				<p
					class="col-span-12 lg:col-span-10 lg:col-start-2 font-regular text-white/30 text-center mb-14 md:mb-8 lg:mb-16 xl:mb-32 2xl:mb-20"
				>
					The Fan Token Platform built to enrich the Artists and Fans Relationship.<br />
					Loyalty is what you always deserved.
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
			</Grid>
			<Grid>
				<FantokensSection class="col-span-12 md:col-span-10 md:col-start-2 mb-35 md:mb-45 lg:mb-71 xl:mb-56 2xl:mb-59" />

				<FantokensPlayer class="col-span-12 md:col-span-11 md:col-start-2 mb-43 md:mb-40 lg:mb-49 xl:mb-45 2xl:mb-36" />

				<Newsletter class="col-span-12 mb-35 md:mb-28 lg:mb-35 xl:mb-64" />

				<DefiSection class="col-span-12 mb-29 md:mb-32 lg:mb-35 xl:mb-40 2xl:mb-49" />

				<ListingSection class="col-span-12 mb-29 md:mb-32 lg:mb-29 xl:mb-55 2xl:mb-71.5" />
			</Grid>
		</div>
	</NuxtLayout>
</template>
