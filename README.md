# MC-AE2-Adventure

A Minecraft 1.21.1 NeoForge modpack centered on **MineColonies**, designed for
players to build and manage a colony while playing in **Adventure Mode**. The
pack provides colony tools and starter supplies instead of relying on normal
free block breaking and placement.

**Current pack version:** 0.1.0

## Repository scope

CurseForge is the source for the installed modpack and its mod versions. This
repository tracks pack-specific changes and content—such as configuration
overrides, quests, and KubeJS scripts—not a copy of the complete CurseForge
instance. Keep installed mod JARs, instance metadata, saves, logs, and personal
settings out of Git. When a full config file is needed, keep it only when it
represents or supports an intentional pack-level setting.

## Starting a colony

On first login, you receive an FTB Quests book and enter Adventure Mode. Open
the book to follow the MineColonies chapter. Craft a Supply Camp Deployer or
Supply Chest Deployer, then use the quest steps to found your colony.

After you place the Town Hall, claim the quest reward for your initial Builder,
Citizen, Farmer, Lumberjack, and Miner huts. The Builder's Hut quest follows
this milestone.

## Exploration

The pack includes When Dungeons Arise and When Dungeons Arise: Seven Seas for
large structures and ships to explore. Climbing Claws and Yori3o's Grappling
Hooks provide ways to traverse difficult terrain. In Adventure Mode, check
entrances, loot access, and exits in a disposable new world; some structures
may require block breaking to navigate.

## Adventure Mode rules

- The first-login Adventure Mode and quest-book grant are implemented in
  `kubejs/server_scripts/adventure_start.js`; gameplay rules are in
  `kubejs/server_scripts/adventure_rules.js`.
- The MineColonies quest progression and initial hut rewards are in
  `config/ftbquests/quests/chapters/minecolonies.snbt`.
- The MineColonies setting `nosupplyplacementrestrictions` is enabled in
  `config/minecolonies-server.toml`. This bypasses the Supply Camp's normal
  placement checks; it does **not** flatten or prepare the terrain.
- The KubeJS rules remove all Ender IO recipes and attempt to block right-click
  crop harvesting. These rules can be adjusted at the top of
  `adventure_rules.js`.

The starter command sets Adventure Mode when a player chooses a colony type.
For a dedicated server, configure `gamemode=adventure` and
`force-gamemode=true` in `server.properties` as well.

## Client keybind defaults

The Default Options mod applies the pack's keybind overrides on first launch
without overwriting existing players' controls. The defaults are maintained in
`config/defaultoptions/keybindings.txt`.