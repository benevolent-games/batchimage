
import path from "path"
import {globby} from "globby"

import {Params} from "./internals/params.js"
import {convertImage} from "./internals/convert-image.js"

export async function batchConvert(params: Params) {
	const patterns = ["**/*.{jpg,jpeg,png,webp}"]
	const cwd = path.resolve(params["--in"])
	const inputImages = await globby(patterns, {cwd})
	await Promise.all(inputImages.map(i => convertImage(i, params)))
}
