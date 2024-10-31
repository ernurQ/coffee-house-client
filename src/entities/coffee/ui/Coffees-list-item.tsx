import Image from 'next/image'
import Link from 'next/link'

import { routes } from '@/shared/config'

import { ICoffee } from '../model/coffee.model'

interface Props {
	coffee: ICoffee
}

export function CoffeesListItem({ coffee }: Props) {
	return (
		<li
			className={
				'bg-white w-[220px] h-full rounded-2xl flex flex-col items-center justify-between text-black drop-shadow-2xl py-[15px] px-[25px]'
			}
		>
			<Link
				href={routes.coffee(coffee.id)}
				className={'h-[170px] w-[170px] relative'}
			>
				<Image
					src={coffee.thumbnail}
					alt={coffee.name}
					fill
					sizes={'100%'}
					priority={false}
				/>
			</Link>
			<div className={'w-full'}>
				<Link
					href={routes.coffee(coffee.id)}
					className={'block mt-[15px] text-center w-full]'}
				>
					{coffee.name}
				</Link>
				<div className={'mt-[15px] text-end w-full'}>{coffee.countryName}</div>
				<div className={'mt-[15px] text-end w-full'}>{coffee.price}$</div>
			</div>
		</li>
	)
}
