# Independent portfolio maintenance receipt

Final main: d6dfa12f766cf3574e0c0dd85135baf2eda17b2c.
Pegada remained clean and untouched. All source work used /tmp/portfolio-validation-mglI7SJ5 archives, no clone or worktree. No repository CONTRIBUTING file was present in the tracked archive, .github/CONTRIBUTING.md, or GSTJ/.github default community path.

## Local proof

- Main c228ff21fe87a61fdd224cabcd317b0fc054d967, #490 eb8d15c0601e9975d1aca7af8abbc123122a4fd5, #404 44c1e48b19c4df11e21331a1066aebc6d19f5ef8 and refreshed #404 80366f5a6d885a801c11ae3c640c25f88b72ffc2: every tracked blob matched its GitHub SHA, and frozen install, lint, format, typecheck, check:live and production build passed independently.
- #490 merged as cecfd74038d61afdf1eb5d645dd9712e2ac9cdac after all gates were green. Its tree 7d2bbee4de10b4db2e8e419ac515b11d9923c2a4 exactly matched the tested head.
- #492 43df3663cf0415206402de9beeb757fbf9debde8 fixed generated login-page assets. Full relevant checks passed, including live-data/build on Node 26.13.0. Real PDF generation produced a two-page resume with experience and contact text; GIF rendering showed the portfolio. Both scripts rejected a controlled HTTP 200 login page. API blob identities were verified on upload.
- #492 merged only after verify, CodeQL and Vercel were green. Final merge tree d0e01804807e3ffdb5c73fb95b34e485f691b10c exactly equals the tested feature tree.
- Source commits and proof commits use Gabriel Taveira <gabrielstaveira@gmail.com> for author and committer, verified from API responses. The release PR retains the bot source author and GitHub squash committer.

## Release

v1.3.1 published at https://github.com/GSTJ/gabriel-taveira-portfolio/releases/tag/v1.3.1, points to cecfd74038d61afdf1eb5d645dd9712e2ac9cdac. Release body matches the 1.3.1 changelog section; package and release manifest are 1.3.1. Changes are maintenance with no conventional breaking-change marker or migration requirement.

Release Please created a lightweight tag before the independent annotation step. The published tag was preserved. The requested annotated v1.3.1 tag remains unsatisfied because replacing it would violate the instruction not to rewrite published tags. v1.3.0 was not modified.

## Production and assets

Vercel's GitHub integration reports successful Production deployment 7491945969 for cecfd74038d61afdf1eb5d645dd9712e2ac9cdac at https://personal-curriculum-nqu09l0su-gabrieltaveira.vercel.app. The provider dashboard redirects to login in the available browser, so account-level provider inspection was unavailable. No protection setting or credential was changed.

Public browser rendering succeeded for /en-US, /pt-BR and /en-US/resume, including loaded hero/project images. Earlier public 403 requests do not reproduce in the shared browser. These screenshots preceded the final fix deployment and are not exact-final-SHA runtime acceptance.

The PDF endpoint returned application/pdf with valid PDF bytes, but semantic validation found a Vercel login page. Artifact 13140152923 from run 41442531590 contains the exact bad assets: PDF 90441 bytes, SHA256 c77b37394e6948c4d1001de997fa2ef22cb834b334b5f1b9f73d8205cbebe800; GIF 4958 bytes, SHA256 8bbbc64d3d5646cd77ae5b11e83764085cd7ada521cb0eae2e90cc1cf77ea648. Both matched live custom-domain bytes at the time of the check. MIME and successful upload checks did not detect the wrong content.

#492 replaces protected-deployment captures with a local production build from the exact checkout and validates page content before generating either asset. It removes the third-party GIF action and uses Puppeteer plus ffmpeg. Credentials remain isolated in the upload job. Attempts to cancel obsolete bad-generator runs 41443126749 and 41443609210 returned 'Cannot cancel a workflow run that is completed'.

Final main deployment and corrected R2 generation/upload/content verification remain pending after the merge. No PR watcher, retry job, credential entry, protection bypass or polling loop was started. Parent must complete these provider/run waits and inspect corrected published assets before runtime acceptance.

## Security and pending work

Paginated open Dependabot alerts: 0. Open CodeQL alerts: 0. Reviewed PDF response headers, fixed upstream URL, JSON-LD escaping, live-data validators/timeouts, workflow credential separation and the actual maintenance diff. No additional exploitable vulnerability found in this scope; this is not a whole-repository security certification.

#404 remains open on last observed 80366f5a6d885a801c11ae3c640c25f88b72ffc2, with CI/CodeQL/Vercel green and renovate/stability-days pending. Fresh local checks passed on that head. Renovate may regenerate it again after #492; revalidate new exact bytes before merge and do not bypass the age gate.
