import { type UserRole } from '@/entities/user'

export interface IRegister {
	username: string
	password: string
	role: UserRole
}
