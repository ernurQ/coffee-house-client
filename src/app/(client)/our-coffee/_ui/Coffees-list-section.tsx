'use client'

import { CoffeesList } from '@/entities/coffee'

export function CoffeesListSection() {
	return (
		<section>
			<div>coffees list section</div>
			<div>coffees filter</div>
			<CoffeesList coffees={[]} />
		</section>
	)
}
