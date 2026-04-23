import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '..')
const src = resolve(root, 'src/styles/theme.css')
const dest = resolve(root, 'dist/index.css')

mkdirSync(dirname(dest), { recursive: true })
copyFileSync(src, dest)
console.log(`copied ${src} -> ${dest}`)
