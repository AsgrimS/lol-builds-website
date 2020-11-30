interface ItemInterface {
	name: string
	description: string
	plaintext: string
	image: string
}

export interface BuildItemInterface {
	item: ItemInterface
	comment: string
}

export interface BuildInterface {
	id: number
	user_id: number
	name: string
	description: string
	items: BuildItemInterface[]
}
