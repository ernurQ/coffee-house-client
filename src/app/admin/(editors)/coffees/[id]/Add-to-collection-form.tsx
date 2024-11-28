import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { addCoffeesToCollection, revalidateTag } from '@/entities/coffee'

interface Inputs {
	collection: 'best' | 'pleasure'
}

export function AddToCollectionForm({ id }: { id: string }) {
	const { register, handleSubmit } = useForm<Inputs>()

	const { mutate: addCoffee } = useMutation({
		mutationFn: (collection: 'best' | 'pleasure') =>
			addCoffeesToCollection([id], collection),
		onMutate: () => {
			toast.loading('Adding', { id: 'add-loading' })
		},
		onSuccess: () => {
			toast.dismiss('add-loading')
			toast.success('Added successfully')
		},
		onError: ({ status }: AxiosError) => {
			toast.dismiss('add-loading')
			toast.error(`Could not add. Status: ${status}`)
		},
	})

	const onSubmit = ({ collection }: Inputs) => {
		addCoffee(collection)
		revalidateTag(collection).then((res) => console.log(res))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label className={'grid mt-5'}>
				Collection name
				<select
					{...register('collection')}
					className={'border-2 px-2'}
				>
					{['best', 'pleasure'].map((name) => (
						<option
							value={name}
							key={name}
						>
							{name}
						</option>
					))}
				</select>
			</label>

			<input
				type={'submit'}
				value={'Add'}
				className={'block mx-auto text-center mt-2 border rounded px-4 py-1'}
			/>
		</form>
	)
}
