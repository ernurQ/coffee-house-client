import { coffeeHouseApi } from '@/shared/api'

import { ICountry } from '../model/country.model'

export function getCountries() {
	return coffeeHouseApi.get<ICountry[]>('/countries')
}
