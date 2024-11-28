'use client'

import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Spinner } from '@/shared/ui'

import { createCoffee } from '@/entities/coffee'
import { ICoffee } from '@/entities/coffee/model/coffee.model'
import { useGetCountriesQuery } from '@/entities/country'

type Inputs = Omit<ICoffee, 'id' | 'thumbnail'>

export default function CreateCoffeePage() {
	const { handleSubmit, register } = useForm<Inputs>()

	const {
		data: countries,
		isPending: isCountriesPending,
		isError: isCountriesError,
	} = useGetCountriesQuery()

	const { mutate: create } = useMutation({
		mutationFn: createCoffee,
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

	const onSubmit = (values: Inputs) => {
		create(values)
	}

	if (isCountriesPending) return <Spinner className={'mt-10'} />
	if (isCountriesError) throw new Error('Error in component AdminCoffeePage')

	return (
		<section className={'py-10 px-8 flex justify-center'}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className={'grid'}>
					Coffee name
					<input
						{...register('name')}
						type={'text'}
						className={'border-2 px-2'}
					/>
				</label>

				<label className={'grid mt-5'}>
					Coffee description
					<textarea
						{...register('description')}
						className={'border-2 px-2'}
					/>
				</label>

				<label className={'grid mt-5'}>
					Coffee country name
					<select
						{...register('countryName')}
						className={'border-2 px-2'}
					>
						{countries.map(({ name }) => (
							<option
								value={name}
								key={name}
							>
								{name}
							</option>
						))}
					</select>
				</label>

				<label className={'grid mt-5'}>
					Coffee price ($)
					<input
						{...register('price')}
						type={'number'}
						className={'border-2 px-2'}
					/>
				</label>

				<input
					type={'submit'}
					value={'Create coffee'}
					className={'block mx-auto text-center mt-14 border rounded px-4 py-1'}
				/>
			</form>
		</section>
	)
}
