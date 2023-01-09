
import path from "path"
import sharp from "sharp"
import shell from "shelljs"

import {Params} from "./params.js"
import {undash} from "./undash.js"

export async function convertImage(inputImage: string, params: Params) {
	const {indir, out, format, quality, size} = undash(params)

	const inputParse = path.parse(inputImage)
	const inPath = path.resolve(indir, inputImage)
	const outPath = path.resolve(out, inputParse.dir, inputParse.name + `.${format}`)

	shell.mkdir("-p", path.parse(outPath).dir)

	let sharpImage = sharp(inPath)

	sharpImage = sharpImage.rotate()

	sharpImage = size !== undefined
		? sharpImage.resize({
			width: size,
			height: size,
			fit: "inside",
			withoutEnlargement: true,
		})
		: sharpImage

	sharpImage = (
		(format === "jpg")
			? sharpImage.jpeg({quality, progressive: true})

		: (format === "webp")
			? sharpImage.webp({quality, alphaQuality: quality})

		: (format === "png")
			? sharpImage.png({progressive: true})
			: sharpImage.jpeg({quality, progressive: true})
	)

	return sharpImage.toFile(outPath)
}
