import { coffeeHouseApi } from '@/shared/api'

import {
	IGetCoffees,
	IGetCoffeesResponse,
	IGetOneCoffee,
} from '../model/coffee-query.model'
import { ICoffee } from '../model/coffee.model'

export function getCoffees(params?: IGetCoffees) {
	return coffeeHouseApi.get<IGetCoffeesResponse>('/coffees', {
		params,
	})
}

export function getOneCoffee({ id }: IGetOneCoffee) {
	return coffeeHouseApi.get<ICoffee>(`/coffees/${id}`)
}

export function getBestCoffeesList() {
	return coffeeHouseApi.get<{ coffees: ICoffee[] }>('/coffees-lists/best')
}

export function getPleasureCoffeesList() {
	return coffeeHouseApi.get<{ coffees: ICoffee[] }>('/coffees-lists/pleasure')
}
