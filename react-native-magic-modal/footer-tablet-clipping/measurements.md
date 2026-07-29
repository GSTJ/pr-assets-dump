# `.mm-footer-meta` right edge minus `clientWidth`

Positive means the text is outside the viewport, and `body` clips rather than
scrolls, so it is unreachable. `main` measured against the deployed
gstj.github.io site, the branch against a local `pnpm run build` of
`apps/docs/out` served under the export's basePath. Chromium.

| width | main | branch | main footer columns | branch footer columns |
| --- | --- | --- | --- | --- |
| 420 | -27.19 | -27.19 | 170.812px 170.812px | 170.812px 170.812px |
| 700 | -27.19 | -27.19 | 310.812px 310.812px | 310.812px 310.812px |
| 701 | +89.19 | -35.05 | 260px 120px 120px 150px | 297.922px 297.938px |
| 768 | +35.56 | -38.39 | 260px 120px 120px 150px | 326.406px 326.422px |
| 800 | +10.00 | -40.00 | 260px 120px 120px 150px | 340px 340px |
| 810 | +2.00 | -40.50 | 260px 120px 120px 150px | 344.25px 344.25px |
| 811 | +1.19 | -40.55 | 260px 120px 120px 150px | 344.672px 344.688px |
| 812 | +0.38 | -40.59 | 260px 120px 120px 150px | 345.109px 345.109px |
| 813 | -0.44 | -40.64 | 260px 120px 120px 150px | 345.531px 345.547px |
| 820 | -6.00 | -41.00 | 260px 120px 120px 150px | 348.5px 348.5px |
| 860 | -38.00 | -43.00 | 260px 120px 120px 150px | 365.5px 365.5px |
| 861 | -38.81 | -38.81 | 260px 120px 120px 150px | 260px 120px 120px 150px |
| 867 | -43.36 | -43.36 | 260.266px 120px 120px 150px | 260.266px 120px 120px 150px |
| 900 | -45.02 | -45.02 | 284.984px 120px 120px 150px | 284.984px 120px 120px 150px |
| 1020 | -51.02 | -51.02 | 338.875px 138.062px 138.047px 150px | same |
| 1280 | -64.00 | -64.00 | 432px 176px 176px 176px | 432px 176px 176px 176px |

Overhang of the tracks past the footer's own content box on `main`: 124.24 at
701px, 73.96 at 768px, 42.5 at 810px, 40.98 at 812px, 5.0 at 860px, -0.01 at
867px. Between 812.5px and 867px the tracks are wider than the container and
land inside the right padding, which is why nothing is clipped there.

420px and 700px take their padding from the `max-width: 700px` block, `1.7rem`
rather than `5vw`, so those two rows do not follow the `650 + 0.2w` formula.
