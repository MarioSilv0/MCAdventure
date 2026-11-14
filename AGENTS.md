# Agent instructions

## Project purpose

MC-AE2-Adventure is a Minecraft 1.21.1 NeoForge modpack focused on playing
MineColonies in Adventure Mode. Read [the project README](MCAdventure/README.md)
before making gameplay changes.

## Where to make changes

- `kubejs/server_scripts/adventure_start.js` gives each player the FTB Quests
  book once and sets non-creative players to Adventure Mode on login.
- `kubejs/server_scripts/adventure_rules.js` defines recipe and crop-harvesting
  rules, plus an optional Survival fallback that is disabled by default.
- `config/ftbquests/quests/` defines the MineColonies quest progression and
  rewards.
- `config/` contains mod configuration. Check a setting's scope and behavior
  before changing it; do not assume a server setting applies to every world.
- `config/defaultoptions/keybindings.txt` contains first-launch keybind
  defaults; keep `options.txt` and per-player settings out of Git.
- `datapacks/`, `defaultconfigs/`, `blueprints/`, and `resourcepacks/` hold
  pack content when present.

## Project conventions

- Keep changes focused on the requested gameplay or pack-maintenance task.
- Preserve Adventure Mode as the intended player experience. Do not enable
  ordinary block breaking or placement as a shortcut without explicit request.
- The MineColonies `nosupplyplacementrestrictions` setting bypasses Supply Camp
  placement checks; it does not flatten terrain and may allow placement in
  locations the normal checks reject.
- CurseForge is the source for the installed modpack and mod versions. Do not
  add installed mod jars, local instance metadata, saves, logs, or player
  settings to Git. Pack-level first-launch keybind defaults are the exception
  and belong in `config/defaultoptions/keybindings.txt`, not `options.txt`.
- Treat bundled mods and their assets as third-party work; do not change their
  licenses or redistribute their files independently.
- Avoid editing backup files (`*.bak`) unless the task specifically concerns
  backups.

## Validation

- For KubeJS changes, check JavaScript syntax and review KubeJS/server logs
  after a game load when available. Gameplay behavior such as Adventure Mode
  item placement must be verified in-game.
- For config changes, confirm the exact option name and scope, and check that
  the config remains syntactically valid.
- There is no general build or automated test suite for this CurseForge
  instance; report when a change still needs in-game verification.
