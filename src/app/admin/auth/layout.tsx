import { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
	return <main className={'flex justify-center py-24'}>{children}</main>
}
