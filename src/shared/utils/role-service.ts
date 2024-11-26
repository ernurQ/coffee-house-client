import Cookies from 'js-cookie'

import { roleKey } from '@/shared/config'

import { UserRole } from '@/entities/user'

export function saveRole(role: UserRole) {
	Cookies.set(roleKey, role)
}

export function getRole() {
	const role = Cookies.get(roleKey)

	if (
		role &&
		role in ['ADMIN', 'PRODUCT_MANAGER', 'CONTENT_MANAGER', 'EDITOR', 'VIEWER']
	) {
		return role as UserRole
	}
}
