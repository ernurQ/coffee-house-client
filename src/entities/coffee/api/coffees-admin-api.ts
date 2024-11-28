import axios from 'axios'

import { coffeeHouseAdminApi } from '@/shared/api'

import {
	ICreateCoffee,
	IUpdateCoffee,
	IUploadCoffeeThumbnail,
} from '../model/coffee-admin-query.model'
import { ICoffee } from '../model/coffee.model'

export function createCoffee(body: ICreateCoffee) {
	return coffeeHouseAdminApi.post<ICoffee>('/coffees', body)
}

export function updateCoffee(id: string, data: IUpdateCoffee) {
	return coffeeHouseAdminApi.put<ICoffee>(`/coffees/${id}`, data)
}

export function uploadCoffeeThumbnail(
	id: string,
	data: IUploadCoffeeThumbnail,
) {
	return coffeeHouseAdminApi.post(`/coffees/${id}/thumbnail`, data, {
		headers: { 'Content-Type': 'multipart/form-data' },
	})
}

export function addCoffeesToCollection(
	ids: string[],
	collection: 'best' | 'pleasure',
) {
	return coffeeHouseAdminApi.post(`/coffees-lists/${collection}`, { ids })
}

export function removeCoffeesFromCollection(
	ids: string[],
	collection: 'best' | 'pleasure',
) {
	return coffeeHouseAdminApi.delete(`/coffees-lists/${collection}`, {
		data: { ids },
	})
}

export function revalidateTag(tag: 'pleasure' | 'best') {
	return axios.patch('/api/revalidate-tag', undefined, { params: { tag } })
}
