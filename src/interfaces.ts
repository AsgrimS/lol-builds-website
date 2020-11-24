interface ItemInterface {
	name: string
	description: string
	plaintext: string
	image: { full: string }
}

export interface ItemDataInterface {
	id: string
	item: ItemInterface
}
