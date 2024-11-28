'use client'

import { AddToCollectionForm } from './Add-to-collection-form'
import { UpdateCoffeeForm } from './Update-coffee-form'
import { UploadThumbnailForm } from './Upload-thumbnail-form'

interface Props {
	params: { id: string }
}

export default function AdminCoffeePage({ params: { id } }: Props) {
	return (
		<section className={'py-10 px-8 flex flex-col items-center'}>
			<UploadThumbnailForm id={id} />
			<hr className={'my-5'} />
			<UpdateCoffeeForm id={id} />
			<hr className={'my-5'} />
			<AddToCollectionForm id={id} />
		</section>
	)
}
