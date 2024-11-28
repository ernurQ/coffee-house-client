'use client'

import { useQuery } from '@tanstack/react-query'

import { Spinner } from '@/shared/ui'

import { CoffeeCollection, getPleasureCoffeesList } from '@/entities/coffee'

export default function AdminForYourPleasurePage() {
	const {
		data: coffees,
		isError,
		error,
		isPending,
	} = useQuery({
		queryKey: ['pleasure'],
		queryFn: () => getPleasureCoffeesList().then((res) => res.data.coffees),
	})

	if (isPending) return <Spinner />
	if (isError) throw error

	return (
		<div className={'mt-7 px-32'}>
			<CoffeeCollection
				coffees={coffees}
				collection={'pleasure'}
			/>
		</div>
	)
}
