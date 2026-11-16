# PR 330 revalidation

Remote starting head: 243deef12d6dd78220516db3cfa935f646872e7a.
Tested and pushed head: 6c70e4185a326d60219e877ef11b3a43809e048c.
Tree: a4b536d2e5417996d72fe3a3020e7a9c6345163a.
This is a merge of current main e9a6057e3216c3d3ee87fbf7057277bc9532fbdb into PR 330, preserving the forge/XML security backports from #338.

Full pnpm test passed: 391 mobile, 380 API (including eight Zod migration cases), 81 web, 36 release, security probes, 196 metrics. All five uncached typechecks, lint and formatting passed. Raw audit reports only image-size/deepmerge advisories covered by committed backports and passing exploit probes. Four high Zod alerts remain open on main until this PR lands. Code and secret scanning returned no open alerts.

Native build/install succeeded on T3 local iPhone 18 Pro, iOS 27.2, 4B56D214-31BD-456E-B744-E064A670AA41. Bundle IDs match app.pegada.pr330acceptance and .widgets, OTA disabled. The local build used deployment target 16.2 and a local RevenueCat Swift compatibility adjustment, both recorded here; it is not an unchanged hosted artifact. The backend used only a separately created local pegada_pr330_acceptance database seeded with fixtures. No profile/preferences mutation was exercised.

Launch failed twice. Both UI reads returned COMMAND_FAILED: app 'app.pegada.pr330acceptance' is not running. The prescribed open --relaunch retry also crashed. The simulator log states: UIScene life cycle is required for apps built with this SDK. UIKit traps with EXC_BREAKPOINT/SIGTRAP before the form flow. Device actions stopped after the prescribed retry. No native profile save/reopen, preference save/reopen, localized UI proof, screenshots or video were obtained. PR remains gated.

The prior T3 handoff thread is no longer available (thread_not_found). Its saved handoff and current GitHub source/state were used. Main rules require lint/format/typecheck, dedupe, tests and iOS required E2E. Old PR head had zero hosted checks/runs. Fresh hosted status must be read from the new head; local tests do not establish CI success.

20 open issues were reviewed; #282 is already closed, making 21 including that prior item. No duplicate public comments, new issue closures, paid experiments, outreach, or product expansions. Issue dispositions are in issue-review.md.

No merge, tag, release, OTA or deployment was initiated. GitHub records production deployment 7710037053 success for existing main e9a6057e; production echo.get returned HTTP 200. This does not prove the PR is deployed. Latest GitHub release remains v1.7.3. Workspace packages are private; npm publication is not applicable.
