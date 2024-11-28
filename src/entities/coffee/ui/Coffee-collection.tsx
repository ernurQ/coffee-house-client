'use client'

import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'

import { removeCoffeesFromCollection, revalidateTag } from '@/entities/coffee'
import { ICoffee } from '@/entities/coffee/model/coffee.model'

interface Props {
	coffees: ICoffee[]
	className?: string
	collection: 'pleasure' | 'best'
}

export function CoffeeCollection({ coffees, className, collection }: Props) {
	return (
		<ul className={className}>
			{coffees.map((coffee) => (
				<CoffeeCollectionItem
					key={coffee.id}
					coffee={coffee}
					collection={collection}
				/>
			))}
		</ul>
	)
}

interface ItemProps {
	coffee: ICoffee
	collection: 'pleasure' | 'best'
}

function CoffeeCollectionItem({ coffee, collection }: ItemProps) {
	const { mutate: remove } = useMutation({
		mutationFn: () => removeCoffeesFromCollection([coffee.id], collection),
		mutationKey: ['pleasure'],
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

	const onRemove = async () => {
		remove()
		await revalidateTag(collection)
	}

	return (
		<li className={'flex w-full border-2 px-2'}>
			<div className={'me-5 w-3/6'}>{coffee.name}</div>
			<button onClick={onRemove}>Remove</button>
		</li>
	)
}
