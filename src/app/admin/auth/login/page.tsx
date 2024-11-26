'use client'

import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { routes } from '@/shared/config'

import { login } from '@/entities/auth/api/auth-api'

interface Inputs {
	username: string
	password: string
}

export default function LoginPage() {
	const { register, handleSubmit } = useForm<Inputs>()
	const router = useRouter()

	const { mutate } = useMutation({
		mutationFn: login,
		onError: (error: AxiosError) => {
			toast.dismiss('loading')
			const { status } = error
			if (status === 404)
				return toast.error('User not found', { duration: 5 * 1000 })
			if (status === 401)
				return toast.error('Incorrect password', { duration: 5 * 1000 })

			throw error
		},
		onMutate: () => {
			toast.loading('Trying to login', { id: 'loading' })
		},
		onSettled: () => {
			toast.dismiss('loading')
		},
		onSuccess: ({ role }) => {
			toast.success(`Login successfully. Role: ${role.toLowerCase()}`)
			if (role === 'ADMIN') return router.replace(routes.register())

			router.replace(routes.adminCoffees())
		},
	})

	const onSubmit: SubmitHandler<Inputs> = (values) => {
		mutate(values)
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
					{...register('username', { required: 'Username required' })}
					type={'text'}
					id={'username'}
					className={'border-2 rounded px-2 py-1'}
				/>
			</div>

			<div className={'grid mt-10'}>
				<label
					htmlFor={'password'}
					className={'ps-1'}
				>
					password
				</label>
				<input
					{...register('password', { required: 'Password required' })}
					type={'password'}
					id={'password'}
					className={'border-2 rounded px-2 py-1'}
				/>
			</div>

			<input
				type={'submit'}
				value={'Login'}
				className={'block mx-auto text-center mt-14 border rounded px-4 py-1'}
			/>
		</form>
	)
}
