import Link from 'next/link'

import { routes } from '@/shared/config'

import { Footer, Navbar } from './(client)/_ui'

export default function NotFound() {
	return (
		<>
			<Navbar />
			<div className={'py-40 text-center text-black'}>
				<p>Page not found</p>
				<Link
					href={routes.aboutUs()}
					className={'block mt-10 underline'}
				>
					Go to main page
				</Link>
			</div>
			<Footer />
		</>
	)
}
