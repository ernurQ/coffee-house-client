import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { uploadCoffeeThumbnail } from '@/entities/coffee'

interface ThumbnailInputs {
	thumbnail: FileList
}

export function UploadThumbnailForm({ id }: { id: string }) {
	const {
		handleSubmit: handleThumbnailSubmit,
		register: registerThumbnailInput,
	} = useForm<ThumbnailInputs>()

	const { mutate: upload } = useMutation({
		mutationFn: (thumbnail: File) => uploadCoffeeThumbnail(id, { thumbnail }),
		onMutate: () => {
			toast.loading('Uploading', { id: 'upload-loading' })
		},
		onSuccess: () => {
			toast.dismiss('upload-loading')
			toast.success('Uploaded successfully')
		},
		onError: ({ status }: AxiosError) => {
			toast.dismiss('upload-loading')
			toast.error(`Could not upload. Status: ${status}`)
		},
	})

	const onThumbnailSubmit = (values: ThumbnailInputs) => {
		const thumbnail = values.thumbnail[0]
		upload(thumbnail)
	}

	return (
		<form onSubmit={handleThumbnailSubmit(onThumbnailSubmit)}>
			<input
				type='file'
				accept='image/*'
				{...registerThumbnailInput('thumbnail', {
					required: 'Please select an image file',
				})}
			/>
			<input
				type={'submit'}
				value={'Update thumbnail'}
				className={'block mx-auto text-center mt-2 border rounded px-4 py-1'}
			/>
		</form>
	)
}
