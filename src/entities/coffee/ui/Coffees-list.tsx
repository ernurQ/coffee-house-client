import clsx from 'clsx'

import { ICoffee } from '../model/coffee.model'

import { CoffeesListItem } from './Coffees-list-item'
import { CoffeesListItemPlaceholder } from './Coffees-list-item-placeholder'

interface Props {
	coffees: ICoffee[]
	className?: string
}

interface PlaceholderProps {
	placeholder: true
	coffeesNumber: number
	className?: string
}

export function CoffeesList(props: Props | PlaceholderProps) {
	return (
		<ul
			className={clsx(
				props.className,
				'grid  gap-10 place-items-center',
				'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
			)}
		>
			{'placeholder' in props
				? Array.from({ length: props.coffeesNumber }).map((item, index) => (
						<CoffeesListItemPlaceholder key={index} />
					))
				: props.coffees.map((coffee) => (
						<CoffeesListItem
							key={coffee.id}
							coffee={coffee}
						/>
					))}
		</ul>
	)
}
