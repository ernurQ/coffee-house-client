import { coffeeHouseAdminApi, coffeeHouseApi } from '@/shared/api'

import { ICountry } from '../model/country.model'

export function getCountries() {
	return coffeeHouseApi.get<ICountry[]>('/countries')
}

export function createCountry(body: ICountry) {
	return coffeeHouseAdminApi.post('/countries', body)
}
