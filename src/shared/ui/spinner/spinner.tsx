import clsx from 'clsx'

interface Props {
	className?: string
}

export function Spinner({ className }: Props) {
	return (
		<div className={clsx(className, 'flex items-center justify-center')}>
			<div className='animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black'></div>
		</div>
	)
}
