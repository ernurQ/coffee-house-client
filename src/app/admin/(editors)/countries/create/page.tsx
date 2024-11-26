'use client'

import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { ICountry, createCountry } from '@/entities/country'

type Inputs = ICountry

export default function CreateCountryPage() {
	const { register, handleSubmit } = useForm<Inputs>()

	const { mutate: create } = useMutation({
		mutationFn: createCountry,
		onMutate: () => {
			toast.loading('Creating', { id: 'creating-loading' })
		},
		onSuccess: () => {
			toast.dismiss('creating-loading')
			toast.success('Created successfully')
		},
		onError: ({ status }: AxiosError) => {
			toast.dismiss('creating-loading')
			toast.error(`Could not create. Status: ${status}`)
		},
	})

	const onSubmit = (body: Inputs) => {
		create(body)
	}

	return (
		<section className={'py-10 px-8 flex justify-center'}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className={'grid'}>
					Country name
					<input
						{...register('name')}
						type={'text'}
						className={'border-2 px-2'}
					/>
				</label>

				<input
					type={'submit'}
					value={'Create country'}
					className={'block mx-auto text-center mt-14 border rounded px-4 py-1'}
				/>
			</form>
		</section>
	)
}
