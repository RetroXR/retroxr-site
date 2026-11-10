---
title: Power
description: Optional power simulation, with wall outlets for your region, power strips, AC adapters and batteries.
sidebar:
  order: 7
---

Real consoles had to be plugged in, and handhelds ran flat. RetroXR can simulate that, but
only if you ask it to.

## Turning it on

Power simulation is **off by default**. With it off, every device runs whether or not
anything is plugged into it, and you can ignore this page.

To turn it on, go to `OPTIONS` → **General** → **Enable Power Simulation**. From then on, a
device only runs when a live supply reaches it.

A room with **no wall outlet** powers everything anyway, so turning it on never leaves you
in a room where nothing can work.

## Outlets for your region

Wall outlets follow the region you pick in `OPTIONS` → **General**. Changing it swaps the
room's sockets and the plugs that fit them, and the room stays plugged in when you do.

Each region has its own **power strip**, and there is a **universal travel adapter** for a
plug that does not match the wall.

## AC adapters

Machines that took a separate power brick need one here too:

- Handhelds, through their **DC IN** socket
- The **32X**, the **Sega CD**, the **Famicom Disk System** drive and the
  [Game Boy Printer](/guide/platforms/game-boy-printer/)

A device's menu shows what it runs on.

## Batteries

Handhelds and other cordless things take **AA**, **AAA** or **C** cells, which snap into
their battery compartments behind a cover. The original
[Game Boy](/guide/platforms/game-boy/#batteries-and-the-screen) can also take the
**DMG-05 Battery Case**, which holds four C cells.

## For mod authors

Mods can add their own AC adapters and battery labels. See [mods](/guide/room/mods/).
