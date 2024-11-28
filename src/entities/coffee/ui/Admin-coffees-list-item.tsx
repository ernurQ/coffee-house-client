import Link from 'next/link'

import { routes } from '@/shared/config'

import { ICoffee } from '@/entities/coffee/model/coffee.model'

interface Props {
	coffee: ICoffee
}

export function AdminCoffeesListItem({ coffee }: Props) {
	return (
		<li className={'flex w-full border-2 px-2'}>
			<Link
				href={routes.adminOneCoffee(coffee.id)}
				className={'me-5 w-3/6'}
			>
				{coffee.name}
			</Link>
			<div>{coffee.countryName}</div>
		</li>
	)
}
