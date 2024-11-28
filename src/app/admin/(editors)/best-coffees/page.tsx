'use client'

import { useQuery } from '@tanstack/react-query'

import { Spinner } from '@/shared/ui'

import { CoffeeCollection, getBestCoffeesList } from '@/entities/coffee'

export default function AdminBestCoffeesPage() {
	const {
		data: coffees,
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ['best'],
		queryFn: () => getBestCoffeesList().then((res) => res.data.coffees),
	})

	if (isPending) return <Spinner />
	if (isError) throw error

	return (
		<div>
			<CoffeeCollection
				className={'mt-5 px-20'}
				coffees={coffees}
				collection={'best'}
			/>
		</div>
	)
}
