---
title: Netplay
description: Play together over the network — an early prototype, not a finished feature.
sidebar:
  order: 4
---

:::danger[This is a prototype]
Netplay is in the build, and it is **very early and very lightly tested**. Treat it as
something to experiment with rather than something to rely on. If it does not work, that
is the expected outcome rather than a misconfiguration on your part.
:::

## What it is

One player hosts, others join by IP. The emulator runs with **rollback netcode**, the same
approach fighting games use, so inputs are predicted and corrected rather than waited for.

Beyond the game itself, the room is shared: player poses are broadcast, so you can see
each other as avatars, and objects stay in sync. The core and the ROM can be transferred
to whoever does not have them.

v0.4.0 reworked the netcode strategy under the hood and fixed a long list of object-sync
bugs, so the shared room holds together better than it did — but the warning above still
stands unchanged.

## Using it

Open the **`NET`** tab. One person hosts; the others enter that machine's address to join.

![The NET tab: a Multiplayer (LAN) panel with a player name field, a Host Game button, and a host IP field with an on-screen numeric keypad.](../../../../assets/screenshots/menu_net.png)

Both machines need to be able to reach each other on the network. Across the internet that
means port forwarding, with all the usual difficulty that implies.

## Which cores can do it

Rollback only works on a core whose save states are exact enough to rewind to, and most
cores' are not. RetroXR keeps a list of the ones it has checked, and v0.9.0 fixed the
state saving in a run of its own core forks so they could join it:

| Core | Systems | How it keeps in step |
| --- | --- | --- |
| FCEUmm | NES, Famicom | Rollback |
| Snes9x | Super Nintendo, Sufami Turbo | Rollback |
| Genesis Plus GX | Genesis / Mega Drive, Sega CD, Master System, Game Gear | Rollback |
| Mupen64Plus-Next | Nintendo 64 | Rollback |
| PCSX ReARMed | PlayStation | Rollback |
| Beetle Saturn | Sega Saturn | Rollback |
| gambatte, TGB Dual | Game Boy, Game Boy Color | Rollback |
| mGBA | Game Boy Advance, Game Boy, Game Boy Color, e-Reader | Rollback |
| gpSP | Game Boy Advance | Rollback |
| Beetle Lynx | Atari Lynx | Rollback |
| Beetle NeoPop | Neo Geo Pocket and Pocket Color | Rollback |
| VeMUlator | Dreamcast VMU, played on its own | Rollback |
| FinalBurn Neo | Neo Geo, arcade | Rollback |
| Dolphin | GameCube, Wii | Lockstep, and unverified |

A core that is not on the list falls back to running live on the host alone, which is a
placeholder rather than netplay.

## Link cables over netplay

A [link cable](/guide/playing/link-cables/) between two machines still carries its data
when the machines belong to different players in a session — two Game Boys, two
PlayStations, a Game Boy and a [printer](/guide/platforms/game-boy-printer/).

:::caution[Everyone on v0.11.1 or later]
v0.11.1 renamed the protocols the link cables speak (`gb-sio`, `psx-sio`, `ethernet` and
the rest). A player on an older build, or with cores that have not been updated, will not
link with one on a newer build. Update the app, and let the core manager update the cores,
on every machine in the session.
:::

## Known limits

- Very lightly tested — expect desyncs.
- Both ends need the same core and the same ROM.
- Most cores cannot share a session between different kinds of machine — a Quest and a
  Windows PC — because their save states do not carry across.
- There is no matchmaking, no lobby list and no NAT traversal. It is an IP address.

