# news-image-20261117 — 17 November 2026 in one image

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Fawulana/news-image-20261117-entry/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Fawulana/news-image-20261117-entry/reward.svg)](https://make.fun/bounty/news-image-20261117)

A newspaper-style front page summing up Tuesday 17 November 2026 world news in one image: the Kerch Bridge strike, the Kyiv bridge attacks, mines near the Strait of Hormuz, Trump arriving in Manila for the ASEAN summit, the ULA Vulcan rocket failure, and the JPMorgan banking outage blamed on a software bug.

The artwork (`image.png`) was generated with an image model for this entry; `main.ts` copies it to the output unchanged, so both runs produce byte-identical output. The date "17 NOVEMBER 2026" heads the page, and each of the six stories carries its own illustration and a short label, so the day's news reads from the image alone.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024 PNG, under 1 MiB)
```

Node 22, standard library only, no network.
