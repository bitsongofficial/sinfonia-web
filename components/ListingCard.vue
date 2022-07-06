<script lang="ts" setup>
import bitsongLogo from '@/assets/img/bitsong-logo.svg?url'
import adamToken from '@/assets/img/adam-player-token.png?url'
import delta9Token from '@/assets/img/delta9.png?url'
import fasanoToken from '@/assets/img/fasano.png?url'

const coins = [
	{
		name: 'Bitsong',
		symbol: 'BTSG',
		price: '0.25',
		image: bitsongLogo,
	},
	{
		name: 'Adam Clay',
		symbol: 'CLAY',
		price: '0.68',
		image: adamToken,
	},
	{
		name: 'Nicola Fasano',
		symbol: 'FASANO',
		price: '0.32',
		image: fasanoToken,
	},
	{
		name: 'Delta 9',
		symbol: 'D9X',
		price: '0.44',
		image: delta9Token,
	},
]
</script>

<template>
	<Card
		class="md:pt-9 lg:pt-11 xl:pt-9.5 2xl:pt-11 md:pl-11 lg:pl-13 xl:pl-11.5 2xl:pl-13.5 md:pr-11.5 lg:pr-14 xl:pr-12 2xl:pr-14.5 md:pb-8 lg:pb-9.5 xl:pb-9.5 2xl:pb-10"
	>
		<Grid class="gap-y-7 lg:gap-y-8 xl:gap-y-7.5 2xl:gap-y-8.5">
			<ListingItem v-for="(coin, index) in coins" :key="index" v-bind="coin" class="col-span-12" />
		</Grid>
	</Card>
</template>
