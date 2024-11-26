import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { PropsWithChildren } from 'react'

const font = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
	title: 'Admin',
	robots: {
		googleBot: {
			index: false,
		},
	},
}

export default function AdminLayout({ children }: PropsWithChildren) {
	return <div className={font.className}>{children}</div>
}
