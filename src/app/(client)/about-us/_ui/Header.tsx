import clsx from 'clsx'
import Link from 'next/link'

import { routes } from '@/shared/config'
import { HrBeans } from '@/shared/ui'

export function HeaderAboutUs() {
	return (
		<header
			className={clsx(
				'min-h-[640px] pt-[180px] block px-8',
				'bg-[url("/background/header-about-us.png")] bg-center bg-cover bg-no-repeat',
				'text-white text-center block font-bold [text-shadow:_1px_2px_1px_rgb(0_0_0_/_40%)]',
			)}
		>
			<h1 className={'text-4xl'}>Everything You Love About Coffee</h1>

			<HrBeans
				variant={'white'}
				className={'mt-[20px]'}
			/>

			<p className={'text-2xl mt-[35px]'}>
				We makes every day full of energy and taste
			</p>
			<p className={'text-2xl mt-[20px]'}>Want to try our beans?</p>

			<Link
				href={routes.ourCoffee()}
				className={
					'block text-sm mt-[20px] mx-auto rounded border-2 border-white w-28 p-1'
				}
			>
				More
			</Link>
		</header>
	)
}
