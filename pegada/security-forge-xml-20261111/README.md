# Pegada forge/XML security evidence

Source head: 245905a0abec8aa4a27105cebe6e4dab7a652491
Base: 209ea5b1862577a2b3d7e2d41dcab1ba7aa5abdf
Date: 2026-11-11

The PNG captures a browser harness streaming a real local Node subprocess. It executes the installed built Expo code-signing certificate API (generate, PEM round trip, validate, sign and independently verify a manifest) and AWS XML builder (parse S3-shaped XML including an entity). Separate direct library probes reject a forged identity-key Ed25519 signature, safely handle TLS records without sessions, reject unsupported compression immediately, bound HTTP header/cookie whitespace processing and reject malformed XML stop nodes.

Baseline node-forge 1.4.1 and fast-xml-parser 5.7.3 fail all five attack probes. Patched 1.4.3 and 5.12.0 pass. The TLS compression probe checks immediate rejection; it does not reproduce the subsequent ServerHelloDone crash. HTTP and XML are bounded in subprocesses with a 2 second timeout. Expo key generation has a separate 10 second bound.

This is local built dependency behavior with disposable keys and fixtures. No native application, device acceptance, deployed artifact or production exploitability claim. No device was used. Expo uses RSA; the newly reported Ed25519/TLS/HTTP vulnerabilities are package-level findings, not demonstrated reachable app attacks. AWS's default parser does not enable stopNodes; that attack probe explicitly enables it.

Commands completed with exit 0: pnpm install --frozen-lockfile, pnpm test, pnpm lint, pnpm format, pnpm typecheck, pnpm dedupe --check, git diff --check. pnpm audit --json still exits nonzero with image-size/deepmerge version findings (existing local patches) and Zod (#330, untouched). Both target package findings disappear. No blanket age check or audit suppression added.

The first local suite attempt failed after concurrent dedupe moved installed packages to .ignored. A fresh frozen install and sequential run passed the full suite. The screenshot is from the successful installed state. The browser server and probe source are attached for reproducibility; run the server from the checkout root, open localhost:45831 and click Run.

The XML advisory lists >=5.11.3, but that version is absent from npm. Its linked fix/release is v5.12.0. Exact release-age exceptions cover node-forge 1.4.3, fast-xml-parser 5.12.0 and required is-unsafe 2.0.3 only. Other age policy remains intact.
