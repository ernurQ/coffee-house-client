import { Hr } from '@/shared/ui'

import { AboutBeansSection, CoffeesListSection } from './_ui'

export default function OurCoffeePage() {
	return (
		<div
			className={'px-8 sm:px-20 md:px-16 lg:px-40 xl:px-64 2xl:px-80 bg-white'}
		>
			<AboutBeansSection />
			<Hr />
			<CoffeesListSection />
		</div>
	)
}
