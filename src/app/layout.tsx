import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import { Providers } from './_providers'
import './globals.css'

export const metadata: Metadata = {
	title: 'Coffee house app',
	description: 'Coffee house app',
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang='en'>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
