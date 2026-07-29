# After the deploy, gstj.github.io/react-native-magic-modal

Driven against the live GitHub Pages site after #317 merged as `2f95cd4` and the
Docs workflow (run 30500371781) deployed it. Zero console errors on the home
route.

| file | what it shows |
| --- | --- |
| `live-01-swipe-pending.png` | production swipe: `Modal closing`, `promise pending`, `// waiting for the close animation` |
| `live-02-intentional-hide-resolved.png` | production `hide({ answer: 42 })` resolved 70ms in, sheet still closing |
| `live-03-upload-100pct-pending.png` | production `magicModal.show()` + `update()` at 100% with the promise pending |

Live DOM reads:

- `.mm-history` absent from the page and from the CSS bundle
- swipe: `pending / SWIPE_COMPLETE / closing` then `resolved / SWIPE_COMPLETE / closed`
- `hide({ answer: 42 })`: `resolved / INTENTIONAL_HIDE / closing` with `{ reason: MagicModalHideReason.INTENTIONAL_HIDE, data: { answer: 42 } }`
- upload: `Promise pending` at 100% with a live stack entry at `100`, then `Promise resolved` with the stack empty
