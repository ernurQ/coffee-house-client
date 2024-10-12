import { CoffeesList } from '@/entities/coffee'

export function OurBestSection() {
	return (
		<section>
			<div>our best section</div>
			<CoffeesList coffees={[]} />
		</section>
	)
}
