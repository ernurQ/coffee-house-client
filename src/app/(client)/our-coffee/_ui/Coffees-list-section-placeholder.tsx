import clsx from 'clsx'

import { CoffeesList } from '@/entities/coffee'

interface Props {
	coffeesNumber: number
}

export function CoffeesListSectionPlaceholder({ coffeesNumber }: Props) {
	return (
		<section className={'min-h-[450px] text-black pt-[60px] pb-[30px]'}>
			<div
				className={clsx(
					'grid grid-cols-1 gap-3 place-items-center text-center',
					'px-5 lg:px-0 lg:gap-0 lg:grid-cols-2',
				)}
			>
				<div
					className={
						'animate-pulse h-[30px] w-5/6 bg-white border rounded shadow-xl border-gray-200'
					}
				></div>
				<div
					className={
						'animate-pulse h-[30px] w-5/6 bg-white border rounded shadow-xl border-gray-200'
					}
				></div>
			</div>

			<CoffeesList
				placeholder
				coffeesNumber={coffeesNumber}
				className={'mt-10'}
			/>

			<button
				className={clsx(
					'block mx-auto mt-10 px-2 py-0.5 bg-white border rounded shadow-xl border-gray-200',
				)}
				disabled={true}
			>
				Load more
			</button>
		</section>
	)
}
