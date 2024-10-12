interface Props {
	variant: 'white' | 'black'
}

export function HrBeans({ variant }: Props) {
	return <div>------------- {variant} beans----------------</div>
}
