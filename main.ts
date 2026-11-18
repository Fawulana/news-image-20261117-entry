// news-image-20261117 entry (Node 22, standard library only).
//
// The entry's image is the artwork file image.png beside this program: a
// newspaper-style front page summing up Tuesday 17 November 2026 world
// news (Kerch Bridge hit, Kyiv bridges struck, Hormuz mines, Trump in
// Manila, Vulcan rocket failure, JPMorgan outage bug). The program copies
// that file, byte for byte, to the output directory as entry.png, so both
// runs write identical bytes. The copy is exact: no re-encoding, no
// resizing, no metadata is added, so the gate sees the same image the
// repository holds. It uses no network and no dependency beyond
// the Node standard library.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./image.png', import.meta.url), join(outDir, 'entry.png'));
