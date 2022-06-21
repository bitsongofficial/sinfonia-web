<script lang="ts" setup>
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
			src="~/assets/img/sinfonia-logo.svg"
			alt="Sinfonia Logo"
			title="Sinfonia Logo"
		/>
		<img
			:class="{
				'w-24': !vertical,
			}"
			src="~/assets/img/sinfonia-logo-text.svg"
			alt="Sinfonia Text"
			title="Sinfonia Text"
		/>
	</div>
</template>
