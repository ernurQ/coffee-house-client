import { ICoffee } from '../model/coffee'

import { CoffeesListItem } from './Coffees-list-item'

interface Props {
	coffees: ICoffee[]
}

export function CoffeesList({ coffees }: Props) {
	return (
		<ul>
			{coffees.map((coffee) => (
				<CoffeesListItem
					key={coffee.id}
					coffee={coffee}
				/>
			))}
		</ul>
	)
}
