import { defineStore } from 'pinia'
import { fantokens } from '@/constants'
import { Fantoken } from '@/models'

export interface MenuState {
	open: boolean
}

export const useMenuStore = defineStore('menu', {
	state: (): MenuState => {
		return {
			open: false,
		}
	},
})
