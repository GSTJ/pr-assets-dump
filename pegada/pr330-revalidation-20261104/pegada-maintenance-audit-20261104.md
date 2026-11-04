# Pegada maintenance audit, 2026-11-04

Tested PR head: `a37c4f0fd64f604ff3c318b389d75694550b1c0f`.
Default branch observed: `fba8f8a01d401221b43878e83f9fd9d6a9f26d91`.

No source changes, merges, deployment or publication performed. PR334 closed as superseded by PR330.

## Verification

- Frozen install succeeded, pnpm 11.17.0.
- Uncached typecheck: five packages passed.
- Mobile: 49 suites, 387 tests passed with Watchman disabled.
- Zod migration: eight tests passed with Watchman disabled.
- Web: 79 tests passed during full-suite attempt.
- Release automation: 30 tests passed.
- Metrics: 196 tests passed.
- Security script at tested PR head: three image-size regressions passed. This head predates the transitive-security script now on main.
- Full integration suite blocked by minio/minio:latest Docker pull access denied.
- Native attempt failed to boot prior simulator with NSPOSIXErrorDomain code 22, Invalid argument. One retry failed: Device list failed: Could not communicate with device support. Try refreshing devices. Stopped device work. Save/reopen and locale device acceptance remain unverified.
- All six Dependabot alerts remain open. Four Zod alerts await PR330. Deepmerge backport and legacy minimatch mitigation exist on main; raw version alerts were retained.
- No draft releases. Latest published release v1.7.3; old v1.5.0 release candidates retained.
- PR330 contains breaking marker, migration notes and BREAKING CHANGE footer; existing generator carries conventional commit notes to tags and releases. No new release cut.

## Issue dispositions

- #282 (Production exceptions follow ups): Keep open. Echo, login, upload retry, keychain retry and missing-dog recovery exist in source. The issue also asks for production exception readout; no fresh runtime/event proof collected.
- #273 (Seeded team dogs MVP: 10 disclosed Equipe Pegada dogs that like back and reply, one week): Keep open. Team account, consenting photos, personas and experiment decisions remain explicit prerequisites.
- #270 (Deck supply: artificial volume assessment and refill plan): Keep open. Refill exists, but seeded experiment and supply/readout decisions remain.
- #268 (Pricing and revenue plan): Keep open. Pricing decisions, store configuration and paid conversion readout remain.
- #256 (Stop paying for external services): Keep open. Source replacement exists; cancellation, provider configuration and moderation readout remain unverified.
- #243 (Design QA backlog after v1.7.2): Keep open. Brand decisions and remaining UI polish are still listed; device verification unavailable.
- #235 (Story card variant picker: let people choose between DM aberta and Rolê ticket): Keep open. Picker is gated on a share completion baseline; no fresh analytics gate result.
- #216 (Design: invite a friend and both get 7 days premium, gated by the fake door): Keep open. Referral rewards require measurement gate, entitlement credentials and reward decisions.
- #211 (Instagram: fix the dead link in bio, 14 day repost calendar and the first boost): Keep open. Instagram operations, permissions and scheduling remain.
- #210 (ASO audit: keyworded titles, age rating and category fix, 6 screenshots (pt-BR)): Keep open. Existing comments distinguish screenshot delivery from pending titles and taxonomy.
- #209 (Web SEO: share page, universal links and a gated breed pilot): Keep open. Share infrastructure exists, but breed pilot, indexing and provider verification remain.
- #208 (Meta Ads R$500 install test (staged, attribution first)): Keep open. Paid experiment needs account configuration, attribution prerequisites and budget decisions.
- #206 (Five reels under 15 seconds from the story card and Remotion variants, with ref attribution): Keep open. Existing render delivery has incomplete swipe footage and real park footage; publication/readout remains.
- #205 (Acquisition channel plan: seven channels for Brazilian dog owners, smallest test and kill number each): Keep open. Acquisition campaign needs creator permission, account operations and channel readouts.
- #204 (Release train v1.7.0: JavaScript first over the air, then one native build for share and universal links): Keep open. Releases newer than this plan exist, but current store acceptance and adoption criteria were not verified.
- #203 (AI story: proactive free generation prompt and notification): Keep open. AI generation and fake-door gate remain prerequisites.
- #202 (AI story: Remotion render service design): Keep open. Measured Lambda spike, music licence and provider access remain prerequisites.
- #201 (AI story: evaluate Hugging Face Inference for cheaper image and short animation): Keep open. Provider comparison and blind rating results are absent; external promotional comments were ignored.
- #200 (AI story: Gemini 2.5 Flash Image generation behind a flag): Keep open. AI generation gate and requested decisions remain; external promotional comments were ignored.
- #199 (AI story: web landing experiment with email capture (pre-MVP validation)): Keep open. Landing implementation is partially delivered; traffic, installs and email funnel acceptance remain.
- #195 (Premium reminder when a free user receives a like): Keep open. Explicitly measurement-first; no fresh 30-day cohort result.
