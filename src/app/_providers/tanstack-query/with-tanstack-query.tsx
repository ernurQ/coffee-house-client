'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const queryClient = new QueryClient()

export function withTanstackQuery(Component: () => ReactNode) {
	// @ts-ignore
	return function WithTanstackQuery(props) {
		return (
			<QueryClientProvider client={queryClient}>
				<Component {...props} />
			</QueryClientProvider>
		)
	}
}
