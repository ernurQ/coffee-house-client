export interface ICoffee {
	id: string
	thumbnail: string
	name: string
	country: string
	price: number
}

export interface ICoffeeFull extends ICoffee {
	description: string
}
