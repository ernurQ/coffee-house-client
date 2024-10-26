import { IPaginationParams } from '@/shared/model'

import { ICoffee } from './coffee.model'

export interface IGetCoffees extends IPaginationParams {
	name?: string
	country?: string
}

export interface IGetCoffeesResponse {
	coffees: ICoffee[]
	total: number
}

export interface IGetOneCoffee {
	id: string
}
