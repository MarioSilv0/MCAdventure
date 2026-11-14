const QUEST_BOOK_STAGE = 'ftbquests_book_given'

PlayerEvents.loggedIn((event) => {
  const player = event.player

  if (!player.isCreative()) {
    player.server.runCommandSilent(`gamemode adventure ${player.username}`)
  }

  if (player.stages.has(QUEST_BOOK_STAGE)) return

  player.give(Item.of('ftbquests:book'))
  player.stages.add(QUEST_BOOK_STAGE)
})
