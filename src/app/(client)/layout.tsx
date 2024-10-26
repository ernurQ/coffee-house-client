import { Merienda } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { Footer, Navbar } from './_ui'

const font = Merienda({ subsets: ['latin'], weight: ['400', '700'] })

export default function ClientLayout({ children }: PropsWithChildren) {
	return (
		<div className={font.className}>
			<Navbar />
			{children}
			<Footer />
		</div>
	)
}
