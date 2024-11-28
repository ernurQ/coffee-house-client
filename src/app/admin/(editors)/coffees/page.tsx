'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { debounce } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { Spinner } from '@/shared/ui'

import { AdminCoffeesList, getCoffees } from '@/entities/coffee'

import { CoffeeNameFilter } from '@/features/coffee-name-filter'

const coffeesLimit = 2
const DEBOUNCE_WAIT = 1500

export default function CoffeesAdminPage() {
	const [coffeeName, setCoffeeNameState] = useState('')

	const debouncedSetName = useMemo(
		() => debounce((name: string) => setCoffeeNameState(name), DEBOUNCE_WAIT),
		[setCoffeeNameState],
	)

	useEffect(() => {
		return () => debouncedSetName.cancel()
	}, [debouncedSetName])

	const setCoffeeName = useCallback(
		(name: string) => {
			debouncedSetName(name)
		},
		[debouncedSetName],
	)

	const {
		data: coffees,
		fetchNextPage,
		hasNextPage,
		isPending,
		isFetchingNextPage,
		isError,
	} = useInfiniteQuery({
		queryKey: [
			'coffees',
			{ name: coffeeName, country: '', limit: coffeesLimit },
		],
		initialPageParam: 0,
		queryFn: async ({ pageParam }) =>
			getCoffees({
				name: coffeeName,
				offset: pageParam,
				limit: coffeesLimit,
			}).then((res) => res.data),
		getNextPageParam: ({ total }, _, lastPageParam) => {
			if (total < coffeesLimit) return

			return lastPageParam + coffeesLimit
		},
		select: (data) => data.pages.map(({ coffees }) => coffees).flat(),
	})

	const coffeesListView = () => {
		if (isPending) return <Spinner className={'mt-10'} />
		if (isError) return <div>Something went wrong. Try later</div>
		return (
			<AdminCoffeesList
				coffees={coffees}
				className={'px-8 lg:px-56 mt-10'}
			/>
		)
	}

	return (
		<section className={'py-10'}>
			<CoffeeNameFilter
				name={coffeeName}
				setName={setCoffeeName}
			/>

			{coffeesListView()}

			{isFetchingNextPage && <Spinner className={'mt-10'} />}

			{isPending || (
				<button
					className={clsx(
						'block mx-auto mt-10 px-2 py-0.5 bg-white border rounded shadow-xl border-gray-200',
					)}
					disabled={!hasNextPage || isFetchingNextPage || isPending}
					onClick={() => fetchNextPage()}
				>
					{isFetchingNextPage && 'Loading...'}
					{!hasNextPage && 'All coffees are loaded'}
					{!isFetchingNextPage && hasNextPage && 'Load more'}
				</button>
			)}
		</section>
	)
}
