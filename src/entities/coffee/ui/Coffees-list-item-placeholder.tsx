export function CoffeesListItemPlaceholder() {
	return (
		<li
			className={
				'bg-gray-200 w-[220px] h-full rounded-2xl flex flex-col items-center justify-between drop-shadow-2xl py-[15px] px-[25px] animate-pulse'
			}
		>
			<div className={'h-[170px] w-[170px] bg-gray-300 rounded-lg'}></div>
			<div className={'w-full mt-[15px]'}>
				<div className={'h-4 bg-gray-300 rounded w-full mb-4'}></div>
				<div className={'h-4 bg-gray-300 rounded w-1/2 ml-auto mb-4'}></div>
				<div className={'h-4 bg-gray-300 rounded w-1/4 ml-auto'}></div>
			</div>
		</li>
	)
}
