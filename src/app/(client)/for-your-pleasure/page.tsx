import { Hr } from '@/shared/ui'

import { AboutGoodsSection, CoffeesListSection, Header } from './_ui'

export default function ForYourPleasurePage() {
	return (
		<>
			<Header />
			<main>
				<AboutGoodsSection />
				<Hr />
				<CoffeesListSection />
			</main>
		</>
	)
}
