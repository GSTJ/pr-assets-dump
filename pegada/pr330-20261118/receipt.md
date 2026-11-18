# Pegada maintenance verification

PR 330 remains open. No merge, tag, release, OTA or production deployment was started.

Source head: 6c70e4185a326d60219e877ef11b3a43809e048c.
Source tree: a4b536d2e5417996d72fe3a3020e7a9c6345163a.

Full local suite passed: 391 mobile, 380 API, 81 web, 36 release automation and 196 metrics tests, plus security probes. All five uncached typechecks, lint and formatting passed. Docker was initially stopped; it was started before the successful full suite. All hosted checks at this head passed, including required iOS E2E; latest review is Copilot COMMENTED, no required approving review.

## Native acceptance remains incomplete

T3 device_list and device_open selected local iOS 26.5 simulator 35421C11-13E7-4637-BFA4-349BF68F5A25. Every UI/install/launch action used its returned session-bound agent-device command. A real device_screenshot was inspected at sign-in in the conversation. No successful native profile/preferences screenshots or video exist.

The local Release build succeeded with Xcode 27.2 after local deployment target 16.2 and RevenueCat PaywallColor initializer placement adjustments. Generated Expo.plist disables OTA. Test API was http://localhost:3017/api, backed by the separately created local pegada_pr330_20261118 database and standard Maestro fixtures. Native application source and validation code came from the head above; the build is not an unchanged hosted artifact. Main JS bundle SHA256: 1bfabd87f9526a2a9861a31cc3009b52b29ad87a79db443aa8fd8acfce4d0c1c.

The app installed and launched to the native sign-in screen on iOS 26.5. Entering the test email failed before any API login request. Runtime logs identify SecureStore getValueWithKeyAsync failure, 'A required entitlement is not present', ERR_KEY_CHAIN / -34018. The initial simulator build had CODE_SIGNING_ALLOWED=NO.

An ad hoc signature with simulator keychain entitlements was applied locally, then installed. Both launch and the prescribed --debug relaunch failed: COMMAND_FAILED, 'Simulator device failed to launch app.pegada'. Diagnostic 1b04f61923a59b7a.ndjson reports FBSOpenApplicationServiceErrorDomain code 1 / SBMainWorkspace request denied. System logs show RBSRequestErrorDomain code 5, NSPOSIXErrorDomain code 163, Launchd job spawn failed. This signing attempt did not fix the blocker. Device actions stopped after the prescribed retry, per the device tool instructions. The isolated API was stopped afterward.

No localized native invalid-input behavior, profile weight/birthday save/reopen, preference distance/age save/reopen or DB mutation was established. Preserve the merge gate.

The earlier iOS 27 startup crash is explained by Expo 55's legacy AppDelegate template and UIKit's SDK 27 scene requirement. Expo's supported scene implementation starts in SDK 57 with an explicit opt-in. No scene migration or SDK upgrade was made. Hosted verification used Xcode 26.6 and iOS 26, according to its build log.

## Security

Four open Dependabot high Zod alerts remain on main: 546, 551, 552, 559. PR 330 pins and overrides Zod 4.6.6. No alerts were dismissed. Code scanning has no open alerts: 13 fixed, one dismissed false positive in llms.ts. The dismissed HTML sanitization finding operates on translation JSON and is served as text/plain. Secret scanning has one resolved false positive, Google API key placeholders in google-services.stub.json and GoogleService-Info.stub.plist.

Raw audit now has three high findings: two image-size advisories covered by the committed backport and passing probes; a newly reported picomatch ReDoS remains real. The subprocess probes for +( *)b (without the space) and +(*a)b with 40 a characters plus ! each exceed 1.5 seconds in both installed picomatch 4.0.5 and 2.3.2. Audit suggests >=4.0.8, but npm has no 4.0.8, and the current GitHub advisory says no patched version. No application route accepting arbitrary glob patterns was found; affected uses are tooling. No speculative parser patch, override to a nonexistent version, or audit suppression was introduced.

Source inspection also covered authentication token algorithm/expiry, OTP lockout paths, RevenueCat authentication, message ownership, profile image origin checks and bounded route schemas. This source review and existing test coverage do not establish deployed exploit resistance.

## Backlog and release

All 20 open issues are individually assessed in issue-review.md. Growth experiments retain their measurement/asset/account gates. Reporting prerequisites in 270 and 273 are stale: report rows and Report Submitted exist. No product issue was blindly implemented, closed or repeatedly commented on.

Latest GitHub release is v1.7.3. Its October 27 rerun has successful native build and submit jobs; store production visibility was not independently verified. Existing main e9a6057e3216c3d3ee87fbf7057277bc9532fbdb has deployment 7710037053 marked success. Production echo.get returned HTTP 200. Neither proves PR 330 deployed. Workspace packages are private, so npm publication is not applicable. The PR includes its breaking-change migration notes in CHANGELOG.md. No duplicate release dispatch or tag was created.

## Shared picomatch mitigation follow-up

Read GSTJ/safe-jsx PR 190 at exact head 95f04acb40a935a224169ee73aabeb69807969c0 after maintenance steering. It patches picomatch 2.3.2 and 4.0.7, deliberately narrowing unsafe repeated/nested grammar with explicit parser hashes and adversarial probes. Pegada currently resolves 4.0.5 and 2.3.2, so this is not a byte-identical two-file drop-in. Its independent review is still in progress per the steering; no approval is shown in the PR review state. No mitigation was copied or claimed to be reviewed. Keep GHSA-fc5q-39xc-vjpf unresolved here pending review and a version-specific verified backport.
