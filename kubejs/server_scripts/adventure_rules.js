// adventure_rules.js
// Place in: <instance>\kubejs\server_scripts\adventure_rules.js
// Target: Minecraft 1.21.1, NeoForge, KubeJS 2101.7.x
//
// Every feature has a toggle at the top. Change true/false, then run
// /kubejs reload server_scripts (recipe changes may need a world restart).
//
// UNTESTED. Things to verify in-game are marked with VERIFY.

// ---- TOGGLES -------------------------------------------------------

// Remove all Ender IO crafting recipes so players cannot build
// resource-producing machines that bypass the colony.
// This is heavy-handed. Set to false if you want Ender IO available.
const DISABLE_ENDERIO_RECIPES = true

// Stop players harvesting crops by right-clicking (Right Click Harvest).
// VERIFY: Right Click Harvest may act before this event runs. If crops
// still get harvested, remove that mod or look at its config file.
const BLOCK_CROP_RIGHT_CLICK = true

// FALLBACK for when Adventure Mode does not let colony items work.
// Use this INSTEAD of Adventure Mode: players stay in Survival, but
// breaking and placing are cancelled unless allowed below.
// Leave false while Adventure Mode works.
const SURVIVAL_FALLBACK = true

// Items that may still place blocks in the Survival fallback.
// VERIFY these IDs (use JEI or /give tab-complete).
const ALLOWED_PLACE_ITEMS = [
  'minecolonies:supplycampdeployer',
  'minecolonies:blockhuttownhall',
  'minecraft:torch',
  'minecraft:soul_torch',
  'minecraft:redstone_torch',
]

// Blocks that may still be broken in the Survival fallback.
const ALLOWED_BREAK_BLOCKS = [
  'minecraft:spawner',
  'minecraft:torch',
  'minecraft:wall_torch',
  'minecraft:soul_torch',
  'minecraft:soul_wall_torch',
  'minecraft:redstone_torch',
  'minecraft:redstone_wall_torch',
]

// ---- RECIPES -------------------------------------------------------

ServerEvents.recipes((event) => {
  if (DISABLE_ENDERIO_RECIPES) {
    event.remove({ mod: 'enderio' })
  }
})

// ---- RIGHT CLICK HARVEST -------------------------------------------

BlockEvents.rightClicked((event) => {
  if (!BLOCK_CROP_RIGHT_CLICK) return
  if (event.player.isCreative()) return
  if (event.block.hasTag('minecraft:crops')) {
    event.cancel()
  }
})

// ---- SURVIVAL FALLBACK ---------------------------------------------

BlockEvents.broken((event) => {
  if (!SURVIVAL_FALLBACK) return
  if (event.player.isCreative()) return
  if (ALLOWED_BREAK_BLOCKS.indexOf(event.block.id) === -1) {
    event.cancel()
  }
})

BlockEvents.placed((event) => {
  if (!SURVIVAL_FALLBACK) return
  if (event.player === null || event.player.isCreative()) return
  const held = event.player.mainHandItem.id
  const offHeld = event.player.offHandItem.id
  if (
    ALLOWED_PLACE_ITEMS.indexOf(held) === -1 &&
    ALLOWED_PLACE_ITEMS.indexOf(offHeld) === -1
  ) {
    event.cancel()
  }
})
