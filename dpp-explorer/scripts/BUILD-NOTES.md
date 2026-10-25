# Static build and preview

First install the repository root's build dependencies with `pnpm install --frozen-lockfile` using Node.js 24 or later and the pinned pnpm version. Then, from `dpp-explorer`, run `node scripts/build.mjs --check` to validate inputs without writing output. Run `node scripts/build.mjs` to create `dist/` and the identical integration files under `integration/docs/dpp-explorer/`. The map and graph have no runtime network dependency.

The build reads immutable release 0.1.0 and dated source inputs to generate unsealed candidate 0.2.0. It preserves baseline bytes, copies all `src/` assets, and generates readable catalogues for both editions. It copies the baseline provenance dossiers so their links work under a nested GitHub Pages path; other retained dossier references are labelled as not redistributed. Frozen release files are never modified. `build-manifest.json` records all intended output files and content hashes.

The build overwrites its own output files but never recursively deletes directories. Unrelated old files are not removed. Integration output is populated from the current build's intended file list rather than a blind copy of a possibly stale `dist/`. Both output locations reject symbolic-link escape paths. Keep deployments limited to the manifest's intended files.

After a build, run `node scripts/serve.mjs` for an HTTP preview on `http://127.0.0.1:4173/`. An alternative port can be specified with `--port`. The server binds only to the loopback interface, accepts GET/HEAD, provides no directory listing, and rejects malformed or traversal paths. It is a development preview, not a production server.

From the repository root, `pnpm run atlas:prepare` verifies the frozen release and rebuilds the Atlas into `docs/dpp-explorer/` before the site build. See [the Atlas README](../README.md) for complete preview commands and candidate publication limits. Strict production validation rejects the unsealed candidate. Building locally does not push or deploy; application and catalogue links support `/spherity-research/dpp-explorer/`.
