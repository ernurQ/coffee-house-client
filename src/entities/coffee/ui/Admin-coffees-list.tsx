import { ICoffee } from '@/entities/coffee/model/coffee.model'
import { AdminCoffeesListItem } from '@/entities/coffee/ui/Admin-coffees-list-item'

interface Props {
	coffees: ICoffee[]
	className?: string
}

export function AdminCoffeesList({ coffees, className }: Props) {
	return (
		<ul className={className}>
			{coffees.map((coffee) => (
				<AdminCoffeesListItem
					coffee={coffee}
					key={coffee.id}
				/>
			))}
		</ul>
	)
}
