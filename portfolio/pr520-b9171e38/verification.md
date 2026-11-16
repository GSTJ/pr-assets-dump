# Portfolio independent final verification

No new P0/P1/P2 findings. Final release and deployment verification passed. PR #520 remains gated by dependency age.

## Exact source and local checks

Final merge: 1f2ffe304eec8f8d2a2f5f1bd0a8c864079429ba.
Tested PR #546 head: d7d642af1fd3e7aa5053f48d1daaa41d19372df2.
Both live GitHub commit objects reference tree e609c9a4c733e56a83cd0edfd5eb0a5197b74c00.

Fresh final merge archive: /tmp/gstj-portfolio-independent-final.
Fresh current PR #520 archive: /tmp/gstj-portfolio-independent-520-b9171e38, exact head b9171e38322e8f794d8f779cd41bc7821e4b2e67.
After checks, every one of 209 source blobs in each snapshot matched its live remote Git tree. Receipt: /tmp/gstj-portfolio-independent-exact-source.json.

Both fresh snapshots independently passed frozen installation, all 16 tests, live stalled-response checks, lint, formatting, production build, typecheck and audit (zero advisories). Every command exit code is recorded separately:
- /tmp/gstj-portfolio-independent-final-checks.json
- /tmp/gstj-portfolio-independent-520-checks.json
Associated logs are at the paths recorded in those JSON files.

The earlier /tmp/gstj-portfolio/release-1.3.11 directory had drift in CHANGELOG.md and pnpm-lock.yaml against the final remote tree. Its checks were not relied on for this verdict; new exact archives and successful complete checks replace that uncertainty.

## Release and production

https://github.com/GSTJ/gabriel-taveira-portfolio/releases/tag/v1.3.11 is published, not draft.
Annotated tag object 4a09cec858b4411fcacdcb2d8c7ad5ae62313d0e resolves to final merge 1f2ffe304eec8f8d2a2f5f1bd0a8c864079429ba. Tag annotation equals release body byte for byte.
Evidence: /tmp/gstj-portfolio-independent-release.json.

Final main CI https://github.com/GSTJ/gabriel-taveira-portfolio/actions/runs/43865073173 and Release https://github.com/GSTJ/gabriel-taveira-portfolio/actions/runs/43865072390 are successful on the exact final merge.
GitHub Production deployment 7823733895 reports success at https://personal-curriculum-frxbc9ykz-gabrieltaveira.vercel.app.

Independently refetched public https://www.gabrieltaveira.dev/en-US and its JavaScript chunks. The served main-app-8108fd20c6686d93.js contains exact final SHA 1f2ffe304eec8f8d2a2f5f1bd0a8c864079429ba and hashes to ddde6d482b4093e810cbbe35a7552dac0d4c8c3fca1771e9cfe851936a68b3ba.
Evidence: /tmp/gstj-portfolio-independent-served.json.
No provider dashboard access is claimed. This private application does not publish an npm package.

## Final R2 generated assets

Final-SHA generation/upload run https://github.com/GSTJ/gabriel-taveira-portfolio/actions/runs/43865072473 is now completed/success. Both generate and upload jobs passed, including custom-domain readback.
Downloaded artifact portfolio-static-assets-1f2ffe304eec8f8d2a2f5f1bd0a8c864079429ba, ID 14225770339, into /tmp/gstj-portfolio-independent-assets. Independently fetched public files and compared their exact bytes to those workflow artifacts:

- https://assets.gabrieltaveira.dev/demo.gif: 1,255,179 bytes, image/gif, SHA256 4a5feefd2d341b3ed7019bb76ececa13506d71cc6cf041e5d131af33c9210b71, exact match.
- https://assets.gabrieltaveira.dev/curriculum.pdf: 60,784 bytes, application/pdf, SHA256 4afac3279074bfac6f72e5ed89d7885caecc972d4672f164a1769af883e99973, exact match.

Evidence: /tmp/gstj-portfolio-independent-r2.json, /tmp/gstj-portfolio-independent-r2.log.

## PR #520 and local rendered evidence

https://github.com/GSTJ/gabriel-taveira-portfolio/pull/520 remains open at b9171e38322e8f794d8f779cd41bc7821e4b2e67. Live diff against current main contains only pnpm-lock.yaml. Hosted CI/CodeQL passed; renovate/stability-days is pending. Preserve this gate; parent should watch the PR and re-read head before merging after the gate clears.

Captured current exact-head local production build on port 3217, then stopped that server. English desktop home, Portuguese mobile home, resume, security and links returned HTTP200 with no page errors. Home and Portuguese images visually inspected. Files retained locally for parent publication if needed:
- /tmp/gstj-portfolio-independent-520-current-home.png
- /tmp/gstj-portfolio-independent-520-current-pt.png
- /tmp/gstj-portfolio-independent-520-current-resume.png
- /tmp/gstj-portfolio-independent-520-current-security.png
- /tmp/gstj-portfolio-independent-520-current-links.png
- /tmp/gstj-portfolio-independent-520-capture.log

These new captures have not been uploaded or attached publicly. The existing PR proof names an older snapshot; do not label those earlier screenshots as current-head proof.

No external mutations, public replies, PR edits, merges, releases, retries, deployments or child agents were initiated by this verifier. No full UX audit or native/device claim applies.

PR https://github.com/GSTJ/gabriel-taveira-portfolio/pull/546, head d7d642af1fd3e7aa5053f48d1daaa41d19372df2, checks passed, merged; final release/deployment/assets verified.
PR https://github.com/GSTJ/gabriel-taveira-portfolio/pull/520, head b9171e38322e8f794d8f779cd41bc7821e4b2e67, hosted/local checks passed, dependency age gate pending.
