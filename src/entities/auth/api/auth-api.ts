import { coffeeHouseAdminApi } from '@/shared/api'
import { saveAccessToken, saveRole } from '@/shared/utils'

import { ILogin, ILoginResponse } from '../model/login'
import { IRegister } from '../model/register'

export async function register(body: IRegister) {
	return coffeeHouseAdminApi.post<void>('/auth/register', body)
}

export async function login(body: ILogin) {
	const res = await coffeeHouseAdminApi
		.post<ILoginResponse>('/auth/login', body)
		.then(({ data }) => data)

	saveAccessToken(res.token)
	saveRole(res.role)

	return res
}
