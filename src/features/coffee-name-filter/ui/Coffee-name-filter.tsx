import { ChangeEvent, useState } from 'react'

interface Props {
	name: string
	setName: (name: string) => void
}

export function CoffeeNameFilter({ name, setName }: Props) {
	const [inputValue, setInputValue] = useState(name)

	const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const name = target.value
		setName(name)
		setInputValue(name)
	}

	return (
		<div className={'flex flex-wrap justify-center items-center'}>
			<span className={'whitespace-nowrap mx-24 px-3 sm:px-0 sm:me-4 sm:ms-0'}>
				Looking for
			</span>
			<label
				htmlFor='search-input'
				hidden={true}
			>
				coffee name
			</label>
			<input
				onChange={onChange}
				value={inputValue}
				id='search-input'
				type='text'
				placeholder='start typing here...'
				className='px-4 py-1 mt-1 sm:mt-0 bg-white border border-gray-200 rounded shadow-xl'
			/>
		</div>
	)
}
