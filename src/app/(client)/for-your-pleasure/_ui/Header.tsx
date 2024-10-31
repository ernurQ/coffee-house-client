import clsx from 'clsx'

export function Header() {
	return (
		<header
			className={clsx(
				'min-h-[260px] pt-[130px]',
				'bg-[url("/background/for-your-pleasure.png")] bg-cover bg-no-repeat bg-center bg-black',
				'text-white text-center text-4xl block font-bold',
			)}
		>
			For your pleasure
		</header>
	)
}
