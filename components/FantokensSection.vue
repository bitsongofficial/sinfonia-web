<script lang="ts" setup>
import adamToken from '@/assets/img/adam-token.png?url'
</script>

<template>
	<div class="grid grid-cols-12 gap-x-6">
		<FantokenCard
			name="Adam Clay"
			symbol="CLAY"
			price="0.542"
			market-cap="101,10,862,575"
			volume="3,862,575"
			variation="3.56"
			:image="adamToken"
			class="col-span-12 md:col-span-6 xl:hidden"
		/>
		<FantokenCard
			name="Nicola Fasano"
			symbol="FASANO"
			price="0.287"
			market-cap="51,10,862,575"
			volume="1,862,575"
			variation="1.56"
			:image="adamToken"
			class="col-span-12 md:col-span-6 hidden md:block xl:hidden"
		/>

		<img
			src="@/assets/img/fantoken-table.png"
			class="col-span-12 hidden xl:block"
			alt="Fantokens Table"
			title="Fantokens Table"
		/>

		<p
			class="col-span-12 font-regular text-white/30 text-center text-tiny md:text-base lg:text-lg xl:text-basexl 2xl:text-1.5xl mt-10 lg:mt-14 xl:mt-16 2xl:mt-21"
		>
			Fan Tokens are the ultimate way to support the music and the acts you love AND get rewarded for it. Access VIP
			experiences, exclusive previews, finance your own music projects<br />and have your say.
		</p>
	</div>
</template>
