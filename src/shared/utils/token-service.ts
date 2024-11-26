import Cookies from 'js-cookie'

import { accessTokenKey } from '@/shared/config'

export function saveAccessToken(token: string) {
	Cookies.set(accessTokenKey, token)
}

export function getAccessToken() {
	return Cookies.get(accessTokenKey)
}
