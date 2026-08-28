# 1Tracker public site

Product site, privacy note, and sideload APKs: https://mumayank.github.io/1tracker-public/

This repo is public on purpose. The Android app checks `version.json` and downloads `1tracker.apk` from here without a GitHub token.

The private app source is [`mumayank/1tracker`](https://github.com/mumayank/1tracker). A GitHub Action on that repo publishes each `main` build here.

Filenames look like `1tracker.1.0.12.26.aug.2026.05.30.31.pm.apk`. `1tracker.apk` is the stable alias for in-app updates.
