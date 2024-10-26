import clsx from 'clsx'
import { unstable_cache } from 'next/cache'

import { CoffeesList, getBestCoffeesList } from '@/entities/coffee'
import { ICoffee } from '@/entities/coffee/model/coffee.model'

const getCoffees = unstable_cache<() => Promise<ICoffee[]>>(
	() => getBestCoffeesList().then((res) => res.data.coffees),
	['best-coffees'],
)

export async function OurBestSection() {
	const coffees = await getCoffees()

	return (
		<section
			className={clsx(
				'bg-[url("/background/paper.png")] bg-center bg-cover bg-no-repeat',
				'min-h-[495px] py-[80px] sm:px-20 md:px-10 lg:px-32 xl:px-56',
			)}
		>
			<h2 className={'text-2xl font-normal text-black text-center'}>
				Our best
			</h2>
			<CoffeesList
				coffees={coffees}
				className={'mt-[40px]'}
			/>
		</section>
	)
}
