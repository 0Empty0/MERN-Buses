import { UploadedFile } from 'express-fileupload'
import path from 'path'

export const saveImages = (image: UploadedFile | UploadedFile[]) => {
	let filename = Date.now().toString() + image
	let logo = image as UploadedFile

	logo.mv(path.join(__dirname, '..', 'uploads', filename))

	return filename
}
