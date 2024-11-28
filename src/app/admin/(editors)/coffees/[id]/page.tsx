'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Spinner } from '@/shared/ui'

import {
	getOneCoffee,
	updateCoffee,
	uploadCoffeeThumbnail,
} from '@/entities/coffee'
import { ICoffee } from '@/entities/coffee/model/coffee.model'
import { useGetCountriesQuery } from '@/entities/country'

type Inputs = Partial<Omit<ICoffee, 'id' | 'thumbnail'>>

type ThumbnailInputs = {
	thumbnail: FileList
}

interface Props {
	params: { id: string }
}

export default function AdminCoffeePage({ params: { id } }: Props) {
	const {
		data: countries,
		isPending: isCountriesPending,
		isError: isCountriesError,
	} = useGetCountriesQuery()

	const {
		data: coffee,
		isPending,
		isError,
	} = useQuery({
		queryKey: ['coffee', { id }],
		queryFn: () => getOneCoffee({ id }).then(({ data }) => data),
	})

	const { mutate: update } = useMutation({
		mutationFn: (data: Inputs) => updateCoffee(id, data),
		onMutate: () => {
			toast.loading('Updating', { id: 'update-loading' })
		},
		onSuccess: () => {
			toast.dismiss('update-loading')
			toast.success('Updated successfully')
		},
		onError: ({ status }: AxiosError) => {
			toast.dismiss('update-loading')
			toast.error(`Could not update. Status: ${status}`)
		},
	})

	const { mutate: upload } = useMutation({
		mutationFn: (thumbnail: File) => uploadCoffeeThumbnail(id, { thumbnail }),
		onMutate: () => {
			toast.loading('Uploading', { id: 'upload-loading' })
		},
		onSuccess: () => {
			toast.dismiss('upload-loading')
			toast.success('Uploaded successfully')
		},
		onError: ({ status }: AxiosError) => {
			toast.dismiss('upload-loading')
			toast.error(`Could not upload. Status: ${status}`)
		},
	})

	const {
		handleSubmit,
		register,
		formState: { isDirty },
	} = useForm<Inputs>()

	const {
		handleSubmit: handleThumbnailSubmit,
		register: registerThumbnailInput,
	} = useForm<ThumbnailInputs>()

	const onSubmit = (values: Inputs) => {
		if (!isDirty || !coffee) return
		values.name = values.name || undefined
		values.price = values.price || undefined
		values.description = values.description || undefined
		values.countryName =
			values.countryName === coffee.countryName ? undefined : values.countryName
		update(values)
	}

	const onThumbnailSubmit = (values: ThumbnailInputs) => {
		const thumbnail = values.thumbnail[0]
		upload(thumbnail)
	}

	if (isPending || isCountriesPending) return <Spinner className={'mt-10'} />
	if (isError || isCountriesError)
		throw new Error('Error in component AdminCoffeePage')

	return (
		<section className={'py-10 px-8 flex flex-col items-center'}>
			<form onSubmit={handleThumbnailSubmit(onThumbnailSubmit)}>
				<input
					type='file'
					accept='image/*'
					{...registerThumbnailInput('thumbnail', {
						required: 'Please select an image file',
					})}
				/>
				<input
					type={'submit'}
					value={'Update thumbnail'}
					className={'block mx-auto text-center mt-14 border rounded px-4 py-1'}
				/>
			</form>

			<hr className={'my-5'} />

			<form onSubmit={handleSubmit(onSubmit)}>
				<label className={'grid'}>
					Coffee name
					<input
						{...register('name')}
						placeholder={coffee.name}
						type={'text'}
						className={'border-2 px-2'}
					/>
				</label>

				<label className={'grid mt-5'}>
					Coffee description
					<textarea
						{...register('description')}
						placeholder={coffee.description}
						className={'border-2 px-2'}
					/>
				</label>

				<label className={'grid mt-5'}>
					Coffee country name
					<select
						{...register('countryName')}
						defaultValue={coffee.countryName}
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
						placeholder={`${coffee.price}$`}
						type={'number'}
						className={'border-2 px-2'}
					/>
				</label>

				<input
					type={'submit'}
					value={'Update coffee'}
					className={'block mx-auto text-center mt-14 border rounded px-4 py-1'}
				/>
			</form>
		</section>
	)
}
