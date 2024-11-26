import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

export function withReactHotToast(Component: () => ReactNode) {
	// @ts-ignore
	return function WithReactHotToast(props) {
		return (
			<>
				<Component {...props} />
				<Toaster />
			</>
		)
	}
}
