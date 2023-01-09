
# 🖼️ `@benev/batchimage` convert images

***bulk image conversion and compression, command-line tool***

it reads a folder with images in it, and then generates and outputs images into a different directory.

the output directory will have the same structure.

assuming you've installed `nodejs`, you do it like this:

```sh
npx @benev/batchimage \
  --in "assets" \
  --out "x/assets" \
  --format "webp" \
  --quality "75" \
  --size "800"
```

run `npx @benev/batchimage +help` for more info
