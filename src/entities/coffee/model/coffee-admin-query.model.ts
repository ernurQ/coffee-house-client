export interface ICreateCoffee {
	name: string
	countryName: string
	description: string
	price: number
}

export type IUpdateCoffee = Partial<ICreateCoffee>
