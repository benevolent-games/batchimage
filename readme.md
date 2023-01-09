
# 🖼️⚙️ `@benev/batchimage`

***command-line tool for converting and compressing images***

- it reads images from one folder, and outputs copies into another folder.
- it's recursive, and the output directory will have the same structure.
- assuming you've installed `nodejs`, you do it like this:
    ```sh
    npx @benev/batchimage \
      --in "assets" \
      --out "x/assets" \
      --format "webp" \
      --quality "75" \
      --size "800"
    ```
- run `npx @benev/batchimage +help` for more info.
