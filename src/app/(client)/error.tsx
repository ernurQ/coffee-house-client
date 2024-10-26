'use client'

import { useEffect } from 'react'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error('client.error.tsx', error)
	}, [error])

	return (
		<div className={'py-36 text-center'}>
			<h1 className={'text-2xl'}>Something went wrong!</h1>
			<button
				onClick={() => reset()}
				className={'border rounded border-black mt-14 px-4 py-1'}
			>
				Try again
			</button>
		</div>
	)
}
