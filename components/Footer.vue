<script lang="ts" setup>
import sinfoniaLogoFooter from '@/assets/img/sinfonia-logo-footer.svg?url'

const socials = [
	{
		href: 'https://twitter.com/BitSongOfficial',
		name: 'twitter',
	},
	{
		href: 'https://discord.com/invite/mZC9Yk3',
		name: 'discord',
	},
	{
		href: 'https://www.reddit.com/r/bitsong/',
		name: 'reddit',
	},
	{
		href: 'https://t.me/BitSongOfficial',
		name: 'telegram',
	},
	{
		href: 'https://bitsongofficial.medium.com/',
		name: 'medium',
	},
	{
		href: 'https://github.com/BitSongOfficial',
		name: 'github',
	},
	{
		href: 'https://www.instagram.com/bitsong_official/?hl=en',
		name: 'instagram',
	},
	{
		href: 'https://www.linkedin.com/company/bitsong/mycompany/?viewAsMember=true',
		name: 'linkedin',
	},
]

const privacyPolicyLink = 'https://bitsong.io/privacy-policy/'
const cookiePolicyLink = 'https://bitsong.io/cookie-policy/'
</script>

<template>
	<Grid class="relative">
		<PurpleBlurSphere
			class="absolute top-44 md:-top-60 lg:-top-82 xl:top-36 2xl:top-0 left-30 md:left-auto md:-right-60 lg:-right-40 xl:-right-60 2xl:-right-52"
		/>

		<img
			class="col-span-2 col-start-6 xl:col-start-2 2xl:col-start-1 w-10 md:w-15 xl:w-20.5 h-10 md:h-15 xl:h-20.5 mx-auto xl:mx-0 mb-14 md:mb-16 xl:mb-0 2xl:ml-25"
			:src="sinfoniaLogoFooter"
			alt="Sinfonia"
			title="Sinfonia"
		/>

		<p
			class="col-span-12 md:col-span-10 xl:col-span-7 2xl:col-span-8 md:col-start-2 xl:col-start-5 2xl:col-start-4 text-tiny md:!text-base text-center xl:text-left text-white/30 mb-10 md:mb-16 xl:mb-14 2xl:mb-24 2xl:pr-8"
		>
			This website is maintained by BitSong. The contents and opinions of this website are those of BitSong. BitSong
			provides links to cryptocurrency exchanges as a service to the public. BitSong does not warrant that the information
			provided by these websites is correct, complete, and up-to-date. BitSong is not responsible for their content and
			expressly rejects any liability for damages of any kind resulting from the use, reference to, or reliance on any
			information contained within these websites.
		</p>

		<ul
			class="col-span-12 xl:col-span-7 2xl:col-span-9 xl:col-start-5 2xl:col-start-4 flex flex-row gap-5 md:gap-6 justify-center xl:justify-start mb-14 md:mb-16 xl:mb-20"
		>
			<li v-for="social in socials" :key="social.name">
				<NuxtLink
					class="opacity-30 hover:opacity-100 transition-opacity duration-200"
					:to="social.href"
					rel="noopener noreferrer external"
					target="_blank"
				>
					<Icon class="w-5 md:w-6 h-5 md:h-6 stroke-transparent fill-white pointer-events-none" :name="social.name" />
				</NuxtLink>
			</li>
		</ul>

		<div
			class="flex flex-col xl:flex-row col-span-10 xl:col-span-7 2xl:col-span-4 col-start-2 xl:col-start-5 2xl:col-start-4 text-center xl:mb-6"
		>
			<p class="text-tiny md:!text-base text-white/30 mb-2 md:mb-3 xl:mb-0">BitSong is a registered trademark of the</p>
			<p class="text-tiny md:!text-base text-white mb-10 md:mb-14 xl:mb-0 xl:ml-2">BitSong S.r.l. Company</p>
		</div>

		<div
			class="col-span-10 xl:col-span-7 2xl:col-span-3 col-start-2 xl:col-start-5 2xl:col-start-9 text-tiny md:!text-base text-center xl:text-left 2xl:text-right text-white"
		>
			<NuxtLink :to="privacyPolicyLink" rel="noopener noreferrer external" target="_blank">Privacy Policy</NuxtLink>
			<span class="mx-3 xl:mx-6.5">|</span>
			<NuxtLink :to="cookiePolicyLink" rel="noopener noreferrer external" target="_blank">Terms of Conditions</NuxtLink>
		</div>
	</Grid>
</template>
