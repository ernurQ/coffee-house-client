import clsx from 'clsx'

import { HrBeans } from '@/shared/ui'

export function AboutUsSection() {
	return (
		<section
			className={clsx(
				'text-center text-black font-normal min-h-[520px] bg-white py-[80px]',
				'px-8 sm:px-24 md:px-44 lg:px-56 xl:px-96',
			)}
		>
			<h2 className={'text-2xl'}>About Us</h2>
			<HrBeans
				variant={'black'}
				className={'mt-[20px]'}
			/>
			<p className={'pt-[40px] text-sm'}>
				Extremity sweetness difficult behaviour he of. On disposal of as
				landlord horrible. Afraid at highly months do things on at. Situation
				recommend objection do intention so questions. As greatly removed
				calling pleased improve an. Last ask him cold feel met spot shy want.
				Children me laughing we prospect answered followed. At it went is song
				that held help face.
				<br />
				<br />
				Now residence dashwoods she excellent you. Shade being under his bed
				her, Much read on as draw. Blessing for ignorant exercise any yourself
				unpacked. Pleasant horrible but confined day end marriage. Eagerness
				furniture set preserved far recommend. Did even but nor are most gave
				hope. Secure active living depend son repair day ladies now.
			</p>
		</section>
	)
}
