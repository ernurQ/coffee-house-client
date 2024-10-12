import { PropsWithChildren } from 'react'

import { Footer, Navbar } from './_ui'

export default function ClientLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}
