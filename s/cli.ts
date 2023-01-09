#!/usr/bin/env node

import {deathWithDignity} from "@benev/argv"
import {batchConvert} from "./batch-convert.js"
import {parseParams} from "./internals/parse-params.js"

deathWithDignity()
await batchConvert(parseParams())
