import { useQuery } from '@tanstack/react-query'

import { getCountries } from '../api/countries-api'

export function useGetCountriesQuery() {
	return useQuery({
		queryKey: ['countries'],
		queryFn: getCountries,
		select: (data) => data.data,
	})
}
