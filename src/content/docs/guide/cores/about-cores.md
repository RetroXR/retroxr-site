---
title: What a core is
description: Why RetroXR ships no emulators, and what you are choosing when you pick one.
sidebar:
  order: 1
---

RetroXR is not itself an emulator. It is a room that runs **libretro cores**, and a core
is an emulator for one system, packaged so a program like this one can load it.

That is why the app arrives with none of them. You download the cores for the systems you
actually care about, from inside the headset, and RetroXR runs them.

## What this gets you

Anything libretro supports, RetroXR can play: NES, SNES, Mega Drive, Nintendo 64,
PlayStation, Saturn, Dreamcast, GameCube, Game Boy through to the DS and 3DS, PSP and
Vita, the PlayStation 3 and Xbox 360, plus the long tail: Neo Geo Pocket, WonderSwan,
Virtual Boy, Amiga, Atari ST, C64, MSX, FM Towns, DOS, ScummVM, Doom and Duke Nukem 3D,
arcade boards from JAMMA to Sega Lindbergh, and fantasy consoles like PICO-8.

How many systems you can play comes down to which cores you install and which BIOS files
you own.

Not every core runs everywhere. A few, such as Sega Hikaru and Lindbergh and the n64emu
Nintendo 64 core, are **Windows only**, and ARMSX2 for the PlayStation 2 is **Quest only**.
The PlayStation 3 and Xbox 360 cores are offered on Quest to try, but later-generation
systems may struggle there. Some cores the libretro build server does not build yet are
already known to RetroXR, and appear in the list as soon as it does.

## Several cores per system

Most systems have more than one core, and they are not interchangeable. One may be more
accurate; another faster; another may support something specific.

Where one core is clearly the right default, it is marked **recommended**. Take that one
unless you have a reason not to. The Nintendo 3DS is the example worth knowing: its
recommended core renders in **stereoscopic 3D**, which in a headset is the entire point,
and the alternatives do not.

## Where cores come from

Cores are downloaded from the libretro build server, the same source every libretro
frontend uses. Nothing is bundled with RetroXR and nothing is scraped from anywhere
unusual.

A handful come from RetroXR's own forks instead, published as releases in the
[RetroXR organization on GitHub](https://github.com/RetroXR). Those are cores that needed
something upstream does not do, mostly carrying a [link cable](/guide/playing/link-cables/)
between two cores in one room, but also the Dreamcast's VMU screen, the N64's Voice
Recognition Unit, and microphones. The downloader picks the right source for you; the
fork is simply what you get when you choose that core.

One is not a fork at all. **xemu**, for the original **Xbox**, has no libretro core
upstream, so RetroXR builds its own port of it. It runs on **Quest** and **Windows**.

## Next

- [Downloading and managing cores](/guide/cores/downloading/)
- [BIOS files](/guide/cores/bios/)
