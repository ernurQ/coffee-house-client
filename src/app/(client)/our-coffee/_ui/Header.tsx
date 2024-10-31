import clsx from 'clsx'

export function Header() {
	return (
		<header
			className={clsx(
				'bg-[url("/background/our-coffee.png")] bg-cover bg-center bg-no-repeat',
				'min-h-[260px] text-white text-center pt-[130px] font-bold text-5xl',
			)}
		>
			Our Coffee
		</header>
	)
}
