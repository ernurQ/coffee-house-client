'use client'

import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { register } from '@/entities/auth'
import { UserRole } from '@/entities/user'

interface Inputs {
	username: string
	role: UserRole
	password: string
	confirmPassword: string
}

const roles: UserRole[] = [
	'ADMIN',
	'EDITOR',
	'CONTENT_MANAGER',
	'PRODUCT_MANAGER',
	'VIEWER',
]

export default function RegisterPage() {
	const { register: registerInput, handleSubmit } = useForm<Inputs>()

	const { mutate } = useMutation({
		mutationFn: register,
		onMutate: () => {
			toast.dismiss('register-error')
			toast.loading('Trying to register user', { id: 'loading' })
		},
		onError: (error: AxiosError) => {
			toast.dismiss('loading')
			const { status } = error
			if (status === 409)
				return toast.error('User already exists', {
					id: 'register-error',
					duration: 5 * 1000,
				})
		},
		onSettled: () => {
			toast.dismiss('loading')
		},
		onSuccess: () => {
			toast.success('Registered successfully')
		},
	})

	const onSubmit: SubmitHandler<Inputs> = ({
		username,
		role,
		password,
		confirmPassword,
	}) => {
		if (password.length < 6) {
			toast.error('Password must be at least 6 characters long', {
				id: 'register-error',
			})
			return
		}
		if (password !== confirmPassword) {
			toast.error('Passwords do not match', { id: 'register-error' })
			return
		}
		mutate({ username, password, role })
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={'text-start border-4 rounded p-10'}
		>
			<div className={'grid'}>
				<label
					htmlFor={'username'}
					className={'ps-1'}
				>
					username
				</label>
				<input
					{...registerInput('username', { required: 'Username required' })}
					type={'text'}
					id={'username'}
					className={'border-2 rounded px-2 py-1'}
				/>
			</div>

			<div className={'grid mt-10'}>
				<label
					htmlFor={'role'}
					className={'ps-1'}
				>
					username
				</label>
				<select
					{...registerInput('role')}
					className={'border-2 rounded px-2 py-1'}
				>
					{roles.map((role) => (
						<option
							value={role}
							key={role}
						>
							{role.toLowerCase().replace('_', ' ')}
						</option>
					))}
				</select>
			</div>

			<div className={'grid mt-10'}>
				<label
					htmlFor={'password'}
					className={'ps-1'}
				>
					password
				</label>
				<input
					{...registerInput('password', { required: 'Password required' })}
					type={'password'}
					id={'password'}
					className={'border-2 rounded px-2 py-1'}
				/>
			</div>

			<div className={'grid mt-10'}>
				<label
					htmlFor={'confirmPassword'}
					className={'ps-1'}
				>
					confirm password
				</label>
				<input
					{...registerInput('confirmPassword', {
						required: 'Password required',
					})}
					type={'password'}
					id={'confirmPassword'}
					className={'border-2 rounded px-2 py-1'}
				/>
			</div>

			<input
				type={'submit'}
				value={'Register'}
				className={'block mx-auto text-center mt-14 border rounded px-4 py-1'}
			/>
		</form>
	)
}
