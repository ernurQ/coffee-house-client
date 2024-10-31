import clsx from 'clsx'
import Image from 'next/image'

import { HrBeans } from '@/shared/ui'

export function AboutGoodsSection() {
	return (
		<section
			className={clsx(
				'min-h-[485px] py-[65px] grid place-items-center font-normal',
				'grid-cols-1 md:grid-cols-2',
			)}
		>
			<Image
				src={'/img/cup-with-steam.png'}
				alt={'cup with steam'}
				height={355}
				width={272}
				priority={true}
				quality={100}
			/>
			<div
				className={'h-full text-center text-black px-4 sm:px-8 md:pe-0 lg:px-0'}
			>
				<h1 className={'mt-8 md:mt-0 text-2xl'}>About our goods</h1>
				<HrBeans
					className={'mt-[20px]'}
					variant={'black'}
				/>
				<p className={'mt-[20px] text-sm'}>
					Extremity sweetness difficult behaviour he of. On disposal of as
					landlord horrible.
					<br />
					<br />
					Afraid at highly months do things on at. Situation recommend objection
					do intention so questions.
					<br />
					As greatly removed calling pleased improve an.
					<br />
					Last ask him cold feel met spot shy want. Children me laughing we
					prospect answered followed. At it went is song that held help face.
				</p>
			</div>
		</section>
	)
}
