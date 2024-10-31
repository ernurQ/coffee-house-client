import clsx from 'clsx'
import { useState } from 'react'

import { useCountriesList } from '@/entities/country'

interface Props {
	country: string
	setCountry: (country: string) => void
}

export function CoffeeCountryFilter({ country, setCountry }: Props) {
	const { visibleCountries, allCountries, chooseCountry } = useCountriesList()
	const [chosenCountry, setChosenCountry] = useState(country)

	const onCountryChoose = (name: string) => {
		chooseCountry(name)

		if (chosenCountry && name === chosenCountry) {
			setChosenCountry('')
			setCountry('')
			return
		}
		setChosenCountry(name)
		setCountry(name)
	}

	return (
		<div
			className={clsx(
				'flex flex-wrap justify-center items-center',
				'lg:grid-cols-2 mt-5 lg:mt-0 lg:flex-nowrap',
			)}
		>
			<span className={'whitespace-nowrap mx-24 sm:me-4 sm:ms-0'}>
				Or filter
			</span>

			<div
				className={
					'flex flex-wrap justify-center align-middle gap-3 mt-1 lg:mt-0'
				}
			>
				{visibleCountries.map(({ name }) => (
					<button
						key={name}
						onClick={() => onCountryChoose(name)}
						className={clsx('px-2 py-0.5 bg-white border rounded shadow-xl', {
							'border-gray-200': chosenCountry !== name,
							'border-2 border-black': chosenCountry === name,
						})}
					>
						{name}
					</button>
				))}

				<select
					className={'text-center border bg-white rounded shadow-xl'}
					value={'•••'}
					onChange={({ target }) => onCountryChoose(target.value)}
				>
					<option className={''}>•••</option>
					{allCountries?.map(({ name }) => <option key={name}>{name}</option>)}
				</select>
			</div>
		</div>
	)
}
