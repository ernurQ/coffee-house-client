import { CoffeesList } from '@/entities/coffee'

export function CoffeesListSection() {
	return (
		<section>
			<div>Coffees list section</div> <CoffeesList coffees={[]} />
		</section>
	)
}
