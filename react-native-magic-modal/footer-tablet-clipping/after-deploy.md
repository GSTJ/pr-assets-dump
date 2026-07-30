# After #319 deployed, gstj.github.io/react-native-magic-modal

`.mm-footer-meta` right edge minus `clientWidth`, read off the live site once the
Docs workflow published the merge of #319 as `40cfb2f`. Negative at every width,
so nothing is outside the viewport.

| width | overhang | footer columns |
| --- | --- | --- |
| 420 | -27.19 | 170.812px 170.812px |
| 700 | -27.19 | 310.812px 310.812px |
| 701 | -35.05 | 297.922px 297.938px |
| 768 | -38.39 | 326.406px 326.422px |
| 800 | -40.00 | 340px 340px |
| 812 | -40.59 | 345.109px 345.109px |
| 813 | -40.64 | 345.531px 345.547px |
| 861 | -38.81 | 260px 120px 120px 150px |
| 900 | -45.02 | 284.984px 120px 120px 150px |
| 1280 | -64.00 | 432px 176px 176px 176px |

`MIT license` and `v9.1.0` both read in full at every width. The release-history
section stays absent.

One console error showed up on these loads, a 403 from
`api.github.com/repos/GSTJ/react-native-magic-modal`. That is this IP's
unauthenticated quota, 0 of 60 remaining after the day's polling, not a site
fault: the page falls back to its build-time metadata and still renders
`v9.1.0`.
