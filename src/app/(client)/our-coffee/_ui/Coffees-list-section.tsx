'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { debounce } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { Spinner } from '@/shared/ui'

import { CoffeesList, getCoffees } from '@/entities/coffee'
import { useGetCountriesQuery } from '@/entities/country'

import { CoffeesListSectionPlaceholder } from '@/app/(client)/our-coffee/_ui/Coffees-list-section-placeholder'
import { CoffeeCountryFilter } from '@/features/coffee-country-filter'
import { CoffeeNameFilter } from '@/features/coffee-name-filter'

const DEBOUNCE_WAIT = 1000
const limit = 6

export function CoffeesListSection() {
	const [name, setNameState] = useState('')
	const [country, setCountry] = useState('')

	const debouncedSetName = useMemo(
		() => debounce((name: string) => setNameState(name), DEBOUNCE_WAIT),
		[setNameState],
	)

	useEffect(() => {
		return () => debouncedSetName.cancel()
	}, [debouncedSetName])

	const setName = useCallback(
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
		queryKey: ['coffees', { name, country, limit }],
		initialPageParam: 0,
		queryFn: async ({ pageParam }) =>
			getCoffees({
				name,
				country,
				offset: pageParam,
				limit,
			}).then((res) => res.data),
		getNextPageParam: ({ total }, _, lastPageParam) => {
			if (total < limit) return

			return lastPageParam + limit
		},
		select: (data) => data.pages.map(({ coffees }) => coffees).flat(),
	})

	const { isPending: isCountriesListPending } = useGetCountriesQuery()
	if (isCountriesListPending)
		return <CoffeesListSectionPlaceholder coffeesNumber={limit} />

	if (isError) throw new Error('Could not fetch coffees')

	return (
		<section className={'min-h-[450px] text-black pt-[60px] pb-[30px]'}>
			<div
				className={clsx(
					'grid grid-cols-1 gap-3 place-items-center text-center',
					'px-5 lg:px-0 lg:gap-0 lg:grid-cols-2',
				)}
			>
				<CoffeeNameFilter
					name={name}
					setName={setName}
				/>
				<CoffeeCountryFilter
					country={country}
					setCountry={setCountry}
				/>
			</div>

			{isPending ? (
				<Spinner className={'mt-10'} />
			) : (
				<CoffeesList
					coffees={coffees}
					className={'mt-10'}
				/>
			)}

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
		</section>
	)
}
