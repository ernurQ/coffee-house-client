import type { Metadata } from 'next'
import { Merienda } from 'next/font/google'
import { PropsWithChildren } from 'react'

import './globals.css'

const font = Merienda({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
	title: 'Coffee house app',
	description: 'Coffee house app'
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	)
}
