import axios from 'axios'

import { getAccessToken } from '@/shared/utils'

const baseURL = 'http://localhost:4200/api'

export const coffeeHouseApi = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export const coffeeHouseAdminApi = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
})

coffeeHouseAdminApi.interceptors.request.use(
	(config) => {
		const token = getAccessToken()
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}

		return config
	},
	(error) => error,
)
