<template>
	<Grid>
		<div
			class="col-span-12 md:col-span-8 xl:col-span-4 md:col-start-3 xl:col-start-8 flex flex-col items-center xl:items-end mb-14 md:mb-13 lg:mb-35 xl:mb-0 2xl:mr-11.5 relative"
		>
			<PurpleBlurSphere class="absolute -top-4 md:hidden" />
			<Badge class="w-full mb-6">listing</Badge>

			<h3
				class="text-white text-basexl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-bold text-center xl:text-right mb-6 lg:mb-8 xl:mb-6 2xl:mb-8"
			>
				Your favourite Artists<br />
				are here.
			</h3>

			<p
				class="text-white/30 text-tiny md:text-base lg:text-lg xl:text-base 2xl:text-p2 text-center xl:text-right lg:px-10 xl:px-0"
			>
				Artists, Record Labels, Digital Distributors, Clubs & Festivals. Explore the FanTokens and find out their long-term
				vision and the opportunities they offer.
			</p>
		</div>

		<ListingCard
			class="col-span-12 md:col-span-8 xl:col-span-5 md:col-start-3 xl:row-start-1 xl:col-start-2 lg:mx-7 xl:mx-0 2xl:ml-10"
		/>
	</Grid>
</template>
