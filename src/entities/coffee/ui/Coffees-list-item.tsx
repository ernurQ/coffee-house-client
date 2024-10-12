import { ICoffee } from '../model/coffee'

interface Props {
	coffee: ICoffee
}

export function CoffeesListItem({ coffee }: Props) {
	return (
		<li>
			<div>{coffee.name}</div>
		</li>
	)
}
