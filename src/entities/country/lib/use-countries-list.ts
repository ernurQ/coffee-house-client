'use client'

import { useEffect, useState } from 'react'

import { useGetCountriesQuery } from '@/entities/country'
import { ICountry } from '@/entities/country/model/country.model'

const maxVisibleCountries = 2

export function useCountriesList() {
	const { data: allCountries, isPending: isCountriesPending } =
		useGetCountriesQuery()
	const [visibleCountries, setVisibleCountries] = useState<ICountry[]>([])

	useEffect(() => {
		if (!allCountries) return
		setVisibleCountries(allCountries.slice(0, maxVisibleCountries))
	}, [allCountries])

	const chooseCountry = (countryName: string) => {
		const newCountry = { name: countryName }
		updateVisibleCountriesList(newCountry)
	}

	const updateVisibleCountriesList = (newCountry: ICountry) => {
		if (visibleCountries.some(({ name }) => name === newCountry.name)) {
			setVisibleCountries((visibleCountries) => [
				newCountry,
				...visibleCountries.filter(({ name }) => name !== newCountry.name),
			])
			return
		}

		setVisibleCountries((visibleCountries) => [
			newCountry,
			...visibleCountries.slice(0, maxVisibleCountries - 1),
		])
	}

	return {
		isCountriesPending,
		allCountries,
		visibleCountries,
		chooseCountry,
	}
}
