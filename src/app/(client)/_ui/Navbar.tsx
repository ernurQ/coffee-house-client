import { Nav } from './Nav'

export function Navbar() {
	return (
		<div
			className={'absolute top-0 w-full md:w-3/6 md:pl-4 lg:w-2/6 pt-3 z-50'}
			style={{ textShadow: '1px 1px 5px black' }}
		>
			<Nav variant={'white'} />
		</div>
	)
}
