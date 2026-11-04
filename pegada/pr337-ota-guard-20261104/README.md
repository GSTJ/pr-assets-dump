PR337 OTA guard verification

Source 301de4493c46fb902f9339ada41b6c0119b3602c
36 automation tests and actionlint passed. The actual PR diff returns publish=false. Synthetic Git histories confirm app/shared/lock/dependency changes and missing history still publish.

The recording shows actual CLI execution, not device runtime. The earlier full integration proof remains linked in PR337.
