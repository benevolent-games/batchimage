
import {cli} from "@benev/argv"

export function parseParams() {
	return cli<{}, {
			in: string
			out: string
			format: "jpg" | "webp" | "png"
			quality: number
			size: number
		}>()({

		program: "batchimage",
		argv: process.argv,
		columns: process.stdout.columns ?? 80,
		readme: "https://github.com/benevolent-games/batchimage",
		help: `image converter.\nreads "jpg", "webp", and "png".`,

		argorder: [],
		args: {},

		params: {
			in: {
				mode: "requirement",
				type: String,
				help: `input directory, full of images`,
			},
			out: {
				mode: "requirement",
				type: String,
				help: `output directory, where converted images will appear`,
			},
			format: {
				mode: "requirement",
				type: String,
				help: `output image format, "jpg", "webp", or "png"`,
			},
			quality: {
				mode: "default",
				type: Number,
				default: 75,
				help: `output compression quality, 0 is lowest, 100 is highest`,
			},
			size: {
				mode: "option",
				type: Number,
				help: `maximum dimensions, a square, that the image will be scaled to fit inside of`,
			},
		},
	}).params
}
