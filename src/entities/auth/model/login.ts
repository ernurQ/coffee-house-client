import { UserRole } from '@/entities/user'

export interface ILogin {
	username: string
	password: string
}

export interface ILoginResponse {
	token: string
	role: UserRole
}
