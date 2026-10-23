---
title: Cartridges, discs and memory cards
description: "Media you physically insert: cartridges, CDs, UMDs and memory cards."
sidebar:
  order: 3
---

A game is not a menu entry you launch. It is an object carrying a file path, and it has to
go into the machine.

## Cartridges

Open **`SPAWN`** → **Games** and click a game. The cartridge spawns into the hand
that clicked, already carrying that ROM.

![The Games tab: a grid of systems with box art, each showing how many games it holds.](../../../../assets/screenshots/menu_spawn_cartridges.png)

Push it into the console's slot. **It has to go in the right way up.** A cartridge held
upside down will not seat, exactly as it would not have then.

Pull it back out by grabbing it and lifting. Swapping cartridges while the machine is
powered on does what you would expect it to do.

### Shells, colors and regions

Most cartridges are no longer plain boxes. The **NES**, **Super Nintendo**, **Nintendo
64**, **Game Boy**, **Game Boy Color**, **Game Boy Advance**, **DS**, **3DS**,
**Genesis** and **32X** cartridges all spawn in a modeled shell. These are free of the original
trademarks, so the labels are blank apart from your box art.

The shell is picked for the game, from the scrape and the ROM's own header:

- **Region.** A Japanese N64 cartridge has its own rear notches and latches; North
  American and PAL ones share a shape. A Super Nintendo game from North America gets the
  **Type A** shell, or the later **Type B** if it was first printed after the change
  partway through 1993; a Japanese, European or Australian one gets the Super Famicom
  shell.
- **Color.** The games that shipped in special plastic spawn in it: the gold Zelda
  Game Paks, the colored N64 cartridges (looked up by the game's header), Killer
  Instinct, DOOM and Maximum Carnage on the Super Nintendo, the Pokémon and Donkey Kong
  Land cartridges on Game Boy and Game Boy Color, the translucent third-generation Pokémon
  cartridges and the gray Classic NES Series on the Game Boy Advance. Everything else
  comes in the standard gray, or in black for a Game Boy game that also runs in color.

To choose for yourself, **hold the game's button in the spawn menu for a second** instead
of clicking it. A sub-menu offers every region body and preset color that cartridge
comes in, and for the N64, Game Boy, Game Boy Color and Super Nintendo a color wheel for
any color at all.

:::note
Region and color detection lean on the scrape. An unscraped game falls back to the file
name and the ROM header, which is usually right. When it is not, the hold menu is the
fix.
:::

## Discs

Disc-based systems take a disc into a tray or a slot. Open the lid or eject the tray,
place the disc in, close it, and power on.

### Swapping discs mid-game

Multi-disc games work the way they did. On cores that support disc control you can take
disc 1 out and put disc 2 in while the game is running, and it carries on, which is the
only way to finish a game that asks for the next disc.

Since v0.4.0, **pulling a disc out no longer switches the machine off** on those cores.
The console keeps running with an empty tray, waiting for the next disc, exactly as it
should.

## UMDs

PSP titles come as UMDs, which slot into the back of the handheld.

## Memory cards

Systems that used memory cards have them as separate objects you plug into the console's
card slots. Your saves live on the card, not in a hidden folder.

The PlayStation's card can be browsed from inside the room, where you can see the blocks
used and manage what is on it. A running PlayStation notices when either card slot is emptied,
so pulling a card mid-game is something the game sees.

The **PlayStation 2** has both card slots and a save viewer of its own, which draws each
save's icon in 3D the way the console's browser did (see
[PlayStation 2](/guide/platforms/playstation-2/)). The Dreamcast's memory card is the
**VMU**, a tiny handheld in its own right. See [Dreamcast](/guide/platforms/dreamcast/).

### Consoles that save to themselves

Not every disc system used a card. The **Sega CD**, the **Sega Saturn** and the **3DO**
kept saves in battery-backed memory inside the console, and in RetroXR they do the same:
the save belongs to the machine, not to the disc. The Sega CD and the Saturn each have a
**backup cartridge** you can plug in to carry saves between consoles. See
[expansion hardware](/guide/playing/expansion-hardware/).

For the same reason, a disc game's saves are not listed in the disc's own menu. It shows
a note saying whether the game uses memory cards instead.

The GameCube takes **raw memory card files** as of v0.4.0, so a card image from elsewhere
is one you can use here.

:::note
Saves are per card, so if a game is not finding your save, check that the same card is in
the same slot.
:::

## Where the files come from

Everything in these tabs is read from your own folders: `roms/`, `dvd/`, `videos/`,
`books/` and `music/`. Nothing ships with the app. See
[adding your games](/guide/adding-games/).
