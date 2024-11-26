import clsx from 'clsx'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { HrBeans } from '@/shared/ui'

import { getOneCoffee } from '@/entities/coffee'

interface Props {
	params: { id: string }
}

export default async function CoffeePage({ params: { id } }: Props) {
	const coffee = await getOneCoffee({ id })
		.then(({ data }) => data)
		.catch(({ status }) => {
			if (status === 404) notFound()
		})

	if (!coffee) throw new Error('Coffee page error')

	const { thumbnail, name, countryName, description, price } = coffee

	return (
		<section
			className={clsx(
				'min-h-[455px] bg-white text-black text-start text-sm pt-[70px] pb-[30px]',
				'grid lg:grid-cols-2 place-items-center items-start gap-10 lg:px-32 xl:px-56',
			)}
		>
			<div className={'relative h-[350px] w-[350px] border'}>
				<Image
					src={thumbnail}
					alt={'Coffee thumbnail'}
					fill
					sizes={'100%'}
				/>
			</div>

			<div className={'px-8'}>
				<h1 className={'text-center text-2xl'}>{name}</h1>

				<HrBeans
					variant={'black'}
					className={'mt-[20px]'}
				/>

				<p className={'mt-[25px]'}>
					<span>Country: </span>
					{countryName}
				</p>

				{description && (
					<p className={'mt-[15px]'}>
						<span>Description: </span>
						{description}
					</p>
				)}

				<p className={'mt-[15px]'}>
					<span>Price: </span>
					<span className={'font-bold text-2xl'}>{price}$</span>
				</p>
			</div>
		</section>
	)
}
