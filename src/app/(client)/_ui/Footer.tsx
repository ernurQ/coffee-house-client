import { HrBeans } from '@/shared/ui'

import { Nav } from './Nav'

export function Footer() {
	return (
		<footer className={'min-h-[150px] bg-white flex flex-col items-center'}>
			<Nav
				variant={'black'}
				className={' mt-[30px] sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6'}
			/>
			<HrBeans
				variant={'black'}
				className={'mt-[30px]'}
			/>
		</footer>
	)
}
