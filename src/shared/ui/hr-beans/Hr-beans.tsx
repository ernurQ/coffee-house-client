import clsx from 'clsx'

import { IconBeans } from './Icon-beans'

interface Props {
	variant: 'white' | 'black'
	className?: string
}

export function HrBeans({ variant, className }: Props) {
	return (
		<div className={clsx(className, 'block mx-auto  h-[30px] w-[30px]')}>
			<span
				className={clsx(
					'relative block',
					'before:content-[""] before:block before:absolute before:h-px before:w-[60px] before:top-1/2 before:left-[-85px]',
					'after:content-[""] after:block after:absolute after:h-px after:w-[60px] after:top-1/2 after:right-20 after:left-[55px]',
					{
						'before:bg-black after:bg-black': variant === 'black',
						'before:bg-white after:bg-white': variant === 'white',
					},
				)}
			>
				<IconBeans
					fill={variant}
					className={'block mx-auto'}
				/>
			</span>
		</div>
	)
}
