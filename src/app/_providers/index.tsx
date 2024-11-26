'use client'

import compose from 'compose-function'
import { PropsWithChildren } from 'react'

import { withReactHotToast } from './react-hot-toast/with-react-hot-toast'
import { withTanstackQuery } from './tanstack-query/with-tanstack-query'

const withProviders = compose(withTanstackQuery, withReactHotToast)

export const Providers = withProviders(
	({ children }: PropsWithChildren) => children,
)
