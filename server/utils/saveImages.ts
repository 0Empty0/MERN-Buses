import { UploadedFile } from 'express-fileupload'
import path from 'path'

export const saveImages = (images: any) => {
	const filenames: string[] = []

	// images.map((image, index) => {
	// 	let filename = Date.now().toString() + index + image

	// 	image.mv(path.join(__dirname, '..', 'uploads', filename))

	// 	filenames.push(filename)
	// })

	console.log(images)

	// return filenames
	return ''
}
