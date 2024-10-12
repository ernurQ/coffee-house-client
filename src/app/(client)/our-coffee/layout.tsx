import { PropsWithChildren } from 'react'

import { Header } from './_ui'

export default function OurCoffeeLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}
