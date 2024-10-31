import { Hr } from '@/shared/ui'

import { AboutGoodsSection, CoffeesListSection, Header } from './_ui'

export default function ForYourPleasurePage() {
	return (
		<>
			<Header />
			<main
				className={
					'px-8 sm:px-20 md:px-16 lg:px-40 xl:px-64 2xl:px-80 bg-white'
				}
			>
				<AboutGoodsSection />
				<Hr />
				<CoffeesListSection />
			</main>
		</>
	)
}
