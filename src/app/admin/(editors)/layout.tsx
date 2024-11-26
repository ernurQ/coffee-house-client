import { PropsWithChildren } from 'react'

import { AdminNavbar } from './_ui'

export default function EditorsLayout({ children }: PropsWithChildren) {
	return (
		<>
			<AdminNavbar />
			{children}
		</>
	)
}
