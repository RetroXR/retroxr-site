---
title: Troubleshooting
description: The things that go wrong most often, and what each one actually means.
sidebar:
  order: 4
---

## The TV shows nothing

A blank input paints blank, deliberately — the television behaves like a television, so
what you see reflects the state of your wiring. In rough order of likelihood:

1. **The A/V plug is not seated**, or is in the socket next to the one you meant.
2. **The TV is on a different input.**
3. **The TV is switched off** — its own power button, not the console's.
4. **The machine is off**, or has no cartridge or disc in it.
5. **The channel is untuned**, if you went through an RF switch. Snow means the set works
   and nothing is reaching it on that channel.
6. **No core is installed** for that system.

## A game does not appear in the menu

- The file is in the wrong folder, or the **system folder is misspelled** — the folder
  name under `roms/` is what assigns a game to a console. Since v0.8.0 the folders use the
  short names ES-DE uses — `snes`, `n64`, `psx`, `gb`, `genesis` — rather than libretro's
  longer ones. Old folders such as `super_nes` or `playstation` are still read, so a
  library from an older version keeps working.
- The file extension is not one that system recognizes.
- On Quest, the file went to internal storage rather than
  `/sdcard/Android/data/com.xenu.retroxr/files/`.

## A game appears but will not start

- The system needs a **BIOS** you have not supplied. Check `CORES` → BIOS / Extras —
  see [BIOS files](/guide/cores/bios/).
- The core installed for that system cannot run that particular title. Try another core
  from the Manager.

## Sound but no picture, or picture but no sound

- Composite carries its own audio; a separate 3.5 mm output does not. If the machine has
  one, it needs its own lead.
- The **television's** volume and mute act on the input it is currently showing, so check
  the set before the deck.
- The TV's **audio output** button decides whether sound comes from the set's own speakers
  or goes out to external ones. Set to external with no speakers wired up, the TV is
  silent. See [the television](/guide/room/television/).

## A plug or cartridge will not go in

- Check the [log](/guide/reference/reporting-bugs/): since v0.11.1 it says **why** a held
  object will not preview or seat in a socket.
- On **v0.11.0** specifically, link cables, Ethernet, coax, TRS and VGA plugs refused every
  socket. Update to v0.11.1 or later.

## An object floats in mid-air

Now and then something you drop stays hanging where you let go of it, as if gravity had
not noticed. Pick it up and drop it again. This is a known bug.

## The web file manager will not load

- It is switched off. Turn on **Web File Manager** in `OPTIONS`.
- The computer is on a different network from the headset — a guest network or a VPN will
  do this.
- The address changed. It is tied to the headset's local IP, which can move between
  sessions; re-read it from the options screen.

## Performance is poor

Open **`GRAPHICS`**. Render scale, refresh rate and quality preset are all there, and
there is a performance HUD you can mount in view or on your wrist to see what is actually
costing you.

Some cores are simply heavier than others. A system with several cores may have a faster
one — see [downloading and managing cores](/guide/cores/downloading/).

## Netplay does not work

Netplay is an early prototype rather than a finished feature, and is known to be lightly
tested. Treat problems there as expected rather than as something you have misconfigured.

Two things are worth checking first: every player must be on the **same version**, and
linking machines over netplay needs everyone on **v0.11.1 or later** with up-to-date
cores. See [netplay](/guide/connecting/netplay/).

## Still stuck

Ask in [Discord](https://discord.gg/pgUkRhafca), or open an issue on
[GitHub](https://github.com/RetroXR/RetroXR/issues).
