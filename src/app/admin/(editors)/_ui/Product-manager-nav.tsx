import Link from 'next/link'

import { routes } from '@/shared/config'

export function ProductManagerNav() {
	return (
		<nav className={'w-full'}>
			<ul className={'flex justify-around py-2'}>
				<li>
					<Link href={routes.adminCoffees()}>All coffees</Link>
				</li>

				<li>
					<Link href={routes.createCoffee()}>Create coffee</Link>
				</li>

				<li>
					<Link href={routes.createCountry()}>Create country</Link>
				</li>

				<li>
					<Link href={routes.adminBestCoffees()}>Best coffees</Link>
				</li>

				<li>
					<Link href={routes.adminPleasureCoffees()}>Pleasure coffees</Link>
				</li>
			</ul>
		</nav>
	)
}
