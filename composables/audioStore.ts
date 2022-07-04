import { defineStore } from 'pinia'
import { fantokens } from '@/constants'
import { Fantoken } from '@/models'

export interface AudioState {
	activeTrackIndex: number
	volumeActive: boolean
	isPlaying: boolean
}

export const useAudioStore = defineStore('audio', {
	state: (): AudioState => {
		return {
			activeTrackIndex: -1,
			volumeActive: true,
			isPlaying: false,
		}
	},
	getters: {
		fantokens({ activeTrackIndex }): Fantoken[] {
			return fantokens.map((fantoken, index) => ({
				...fantoken,
				playing: index === activeTrackIndex,
			}))
		},
		playableTrack({ activeTrackIndex }) {
			if (activeTrackIndex in this.fantokens) {
				return this.fantokens[activeTrackIndex].track
			}

			return undefined
		},
	},
})
