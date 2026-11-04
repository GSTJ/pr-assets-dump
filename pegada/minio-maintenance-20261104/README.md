# Pegada maintenance evidence

Main security baseline: fba8f8a01d401221b43878e83f9fd9d6a9f26d91.
Infra head: 48dfebfb1d8280726154d8286b99c0bfc287fba3.
Infra tree: b076d2ccda55c0b0b3ccccefb9248c7b25fd181c.

- security.cast and security.gif record pnpm test:security on main and the deepmerge negative control. The untouched upstream CommonJS and UMD files reproduce prototype poisoning; the installed patched builds block it. Legacy minimatch 3.1.5 lacks the affected firstPhasePreProcess/optimizationLevel phase and passes the bounded advisory-pattern regression; modern glob uses 11.0.1.
- alert569.json records the inaccurate dismissal. alert568.json records the patched-byte mitigation dismissal (GitHub reason not_used). Four Zod alerts 559/552/551/546 remain open for PR330.
- minio.cast, minio.mp4 and minio.png record both project verifiers at the infra head. Each creates an empty isolated compose project, initializes the bucket, uploads an object with authentication and reads it anonymously (HTTP 200), then removes its own project. The video is an accelerated rendering of the recorded terminal output.
- final-test.log is the full pnpm test run at the infra head. test-summary.cast and test-summary.png record its command, head, summaries and exit status. The previous run also tested creation of a fresh test environment after removing only the containers and volumes created by this task: database initialization, readiness and migrations succeeded.
- build.log records the initial uncached Go source build. Server source is minio/minio@7aac2a2c5b7c882e68c1ce017d8256be2feea27f; client is minio/mc@77f82e18b5401a65958f1619df6ebb994634bd88. Runtime and compiler base images are pinned by digest in the Dockerfile. Later verifier builds include both upstream license files.

Local infrastructure proof does not establish hosted CI, deployment, release, or native save/reopen acceptance. PR330 was not changed or merged, and no device tools were retried. The new PR is handed back for hosted gates without watching or polling checks.
