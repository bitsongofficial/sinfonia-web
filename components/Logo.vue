<script lang="ts" setup>
import sinfoniaLogo from '@/assets/img/sinfonia-logo.svg?url'
import sinfoniaLogoText from '@/assets/img/sinfonia-logo-text.svg?url'

withDefaults(
	defineProps<{
		vertical?: boolean
	}>(),
	{
		vertical: true,
	}
)
</script>

<template>
	<div
		class="flex items-center h-auto"
		:class="{
			'flex-col w-20': vertical,
			'flex-row': !vertical,
		}"
	>
		<img
			class="h-auto"
			:class="{
				'mb-5 px-3.5': vertical,
				'mr-9 w-15': !vertical,
			}"
			:src="sinfoniaLogo"
			alt="Sinfonia Logo"
			title="Sinfonia Logo"
			width="80px"
			height="52px"
		/>
		<LogoText
			:class="{
				'w-24': !vertical,
			}"
		/>
	</div>
</template>
