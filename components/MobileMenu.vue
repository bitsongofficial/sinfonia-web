<script lang="ts" setup>
import { menuOptions } from '@/constants'
import { MenuOption } from '@/models'

const activeLink = ref('')

const emit = defineEmits<{
	(e: 'link:click', value: MenuOption): void
}>()

const onClick = (option: MenuOption) => {
	activeLink.value = option.to
	emit('link:click', option)
}
</script>

<template>
	<Grid>
		<Header class="col-span-12 mt-16 mb-45 md:mb-44 lg:mb-36" no-blur />
		<ul class="col-span-12 flex flex-col items-center gap-6 mb-20 md:mb-21 lg:mb-43">
			<li v-for="(option, index) in menuOptions" :key="index">
				<a
					:href="option.to"
					class="text-white font-medium text-base md:text-p1 opacity-30"
					:class="{
						'opacity-100': option.to === activeLink,
					}"
					:target="option.target"
					@click="onClick(option)"
				>
					{{ option.label }}
				</a>
			</li>
		</ul>

		<Button disabled class="col-span-8 md:col-span-4 col-start-3 md:col-start-5 mx-auto" href="https://app.sinfonia.zone">
			launch app
			<template #right>
				<Icon
					class="w-4 h-4 xl:w-4.5 xl:h-4.5 2xl:w-6 2xl:h-6 fill-transparent stroke-white stroke-3"
					name="chevron-right"
				/>
			</template>
		</Button>
	</Grid>
</template>
