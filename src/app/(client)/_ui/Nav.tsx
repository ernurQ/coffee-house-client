import clsx from 'clsx'
import Link from 'next/link'

import { routes } from '@/shared/config'
import { LogoBeans } from '@/shared/ui'

interface Props {
	variant: 'white' | 'black'
	className?: string
}

export function Nav({ variant, className }: Props) {
	return (
		<nav
			className={clsx(className, 'font-normal text-xs pt-6 pb-1 w-full', {
				'text-black': variant === 'black',
				'text-white': variant === 'white',
			})}
		>
			<ul className={`flex justify-around`}>
				<li>
					<Link
						href={routes.aboutUs()}
						className={'relative ms-8 p-1'}
					>
						<LogoBeans
							fill={variant}
							className={'absolute top-[-17px] left-[-30px]'}
						/>
						Coffee house
					</Link>
				</li>

				<li>
					<Link
						href={routes.ourCoffee()}
						className={'p-1'}
					>
						Our coffee
					</Link>
				</li>

				<li>
					<Link
						href={routes.forYourPleasure()}
						className={'p-1'}
					>
						For your pleasure
					</Link>
				</li>
			</ul>
		</nav>
	)
}
