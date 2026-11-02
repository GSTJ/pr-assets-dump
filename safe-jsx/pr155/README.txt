PR155 validation, head ba6dc623672a003b270cadecdb37b8b522f59024

Frozen install, 71 plugin tests, 13 release controls, lint, format, typecheck,
build, changelog, workflow controls, package contents and packed-plugin behavior pass.
Built lib bytes match published npm 1.3.9. The existing annotated v1.3.9 tag,
tagged changelog and GitHub release notes agree. No release or tag rewrite is needed.

All 26 newly selected versions clear 14 days using npm registry timestamps.
All 26 lockfile integrity values match registry metadata and downloaded tarballs.
Newest selection: baseline-browser-mapping 2.11.30, 2026-10-19T19:47:37.763Z.
Evidence cutoff: 2026-10-19T22:42:14.039058Z.

Audit exits 1: minimatch (moderate), glob (moderate), deepmerge (low), all dev tooling.
minimatch 11.0.1: 2026-10-27T22:26:03.755Z, eligible November 10 at that UTC time.
glob 14.0.2: 2026-10-27T22:07:00.325Z, eligible November 10 at that UTC time.
Both fixes require major upgrades across existing consumers; no compatible backport
is identified by the reviewed advisories. deepmerge has no published patch.
Glob config uses minimatch optimizationLevel 2; Jest config uses deepmerge.
These are actual installed paths, but exploitability from untrusted inputs in this
repository has not been demonstrated. The published plugin bundles none of them.
No security suppression, global policy change or major override was applied.
Merge withheld pending compatible security remediation or an explicit disposition.

validation.cast is the original CLI recording; PNG, GIF and MP4 derive from it.
raw-evidence.zip contains command logs, exact source comparison, registry responses,
tarball integrity verification, audit responses, release evidence and runnable scripts.
