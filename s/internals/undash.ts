
import {Params} from "./params.js"

export function undash(params: Params) {
	const {
		"--in": indir,
		"--out": out,
		"--format": format,
		"--quality": quality,
		"--size": size,
	} = params
	return {indir, out, format, quality, size}
}
