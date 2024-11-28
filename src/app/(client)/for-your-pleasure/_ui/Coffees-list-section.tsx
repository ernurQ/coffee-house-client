import { unstable_cache } from 'next/cache'

import { CoffeesList, getPleasureCoffeesList } from '@/entities/coffee'
import { ICoffee } from '@/entities/coffee/model/coffee.model'

const getCoffees = unstable_cache<() => Promise<ICoffee[]>>(
	() => getPleasureCoffeesList().then((res) => res.data.coffees),
	['pleasure'],
)

export async function CoffeesListSection() {
	const coffees = await getCoffees()

	return (
		<section className={'pt-[60px] pb-[30px]'}>
			<CoffeesList coffees={coffees} />
		</section>
	)
}
