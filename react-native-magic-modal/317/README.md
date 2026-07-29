# react-native-magic-modal#317, local proof

Captured from `apps/docs` built with `pnpm run build` at `39b81ee`, then served
from `apps/docs/out` under `/react-native-magic-modal` (the export's basePath)
and driven with Playwright in Chromium. Nothing here is a mockup or a
transcription: every state came out of the built artifact.

`promise-timing.json` holds the DOM reads behind each screenshot.
`ci-equivalent.log` holds the build, lint, format, typecheck, test, doctor and
changelog:check output, with oxlint invoked directly per workspace.

## Close results, 1280x800

| file | what it shows |
| --- | --- |
| `lab-01-pending.png` | the modal open, promise pending |
| `lab-02-intentional-hide-resolved-while-closing.png` | `hide({ answer: 42 })` 70ms in: receipt already says `INTENTIONAL_HIDE` with `data`, sheet still animating out |
| `lab-03-intentional-hide-closed.png` | settled, reset offered |
| `lab-04-drag-40px-below-threshold.png` | 40px drag held, under the 72px threshold |
| `lab-05-snapped-back-still-pending.png` | released, snapped back, promise never resolved |
| `lab-06-drag-100px-past-threshold.png` | 100px drag held |
| `lab-07-swipe-closing-promise-still-pending.png` | released: `Modal closing`, `promise pending`, `// waiting for the close animation` |
| `lab-08-swipe-resolved-after-animation.png` | `SWIPE_COMPLETE` after the animation |
| `lab-09-backdrop-press.png` | tapping the live backdrop |
| `lab-10-back-button-press.png` | `BACK_BUTTON_PRESS` |
| `lab-11-global-hide-all.png` | `GLOBAL_HIDE_ALL` |
| `lab-12-keyboard-activated-swipe.png` | Enter on the drag handle takes the swipe path |
| `result-lab-swipe.mp4`, `result-lab-swipe.gif` | drag, release, pending through the animation, resolve, reset |

## Real package calls

| file | what it shows |
| --- | --- |
| `upload-01-ready.png` | `magicModal.show()` not called yet |
| `upload-02-uploading-midway.png` | `update()` running, promise pending |
| `upload-03-100pct-promise-still-pending.png` | 100% with the same promise still pending |
| `upload-04-resolved-after-close.png` | resolved by hiding the entry with `"done"` |
| `upload-update-flow.mp4` | the whole flow |
| `live-01-idle.png` | empty stack |
| `live-02-stacked.png` | two real entries, top VISIBLE, one WAITING, both PENDING |
| `live-03-top-closed-rating-still-pending.png` | top entry returned, rating promise still pending |
| `live-04-rating-resolved.png` | rating returned 4, follow-up opened |
| `example-01..05` | the confirm and follow-up examples end to end |

## Responsive

| file | what it shows |
| --- | --- |
| `responsive-390x844-*`, `responsive-768x900-*`, `responsive-1280x800-*` | full page, result lab, examples, live package, backdrop tap, closed state |
| `phone-frame-390x844.png`, `phone-frame-768x900.png`, `phone-frame-1280x800.png` | the phone frame at a computed 9/16, inside the viewport at all three |

## Reduced motion

`reduced-01-hideall-instant.png`, `reduced-02-swipe-instant.png`,
`reduced-03-upload-instant-100pct.png`, taken with
`prefers-reduced-motion: reduce` emulated. Both close paths skip the wait and
the upload jumps to 100% with the promise pending.
