import axios from 'axios'

import { coffeeHouseAdminApi } from '@/shared/api'

import { ICreateCoffee, IUpdateCoffee } from '../model/coffee-admin-query.model'
import { ICoffee } from '../model/coffee.model'

export function createCoffee(body: ICreateCoffee) {
	return coffeeHouseAdminApi.post<ICoffee>('/coffees', body)
}

export function updateCoffee(id: string, data: IUpdateCoffee) {
	return coffeeHouseAdminApi.put<ICoffee>(`/coffees/${id}`, data)
}

// TODO: add uploadCoffeeThumbnail feature

export function revalidateTag(tag: string) {
	return axios.patch('/api/revalidate-tag', undefined, { params: { tag } })
}
