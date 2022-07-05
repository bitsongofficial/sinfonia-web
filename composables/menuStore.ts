import { defineStore } from 'pinia'

export interface MenuState {
	open: boolean
	loading: boolean
	fixed: boolean
}

export const useMenuStore = defineStore('menu', {
	state: (): MenuState => {
		return {
			open: false,
			loading: true,
			fixed: false,
		}
	},
})
