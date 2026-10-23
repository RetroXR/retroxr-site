---
title: Mods
description: Browse and install mods from inside RetroXR — consoles, cartridges, rooms and props published on mod.io — and what a mod is and is not allowed to be.
---

Since **v0.10.0** RetroXR has a **mod browser**. Mods add to the room — modelled consoles
and cartridge shells, whole platforms, rooms, props, television cabinets and controllers —
or replace something RetroXR ships. They are published on
**[mod.io](https://mod.io/g/retroxr)**, and an initial set of models is already there.

## Installing a mod

Open the menu's **MODS** tab.

1. The first time, it shows **mod.io's terms**. Nothing is asked of mod.io until you agree
   to them.
2. **Browse** lists the mods published for RetroXR. Pick one and press **Download**. It is
   fetched and checked, and you are shown what it replaces before you install it.
3. It then appears under **Installed**. **Enable** it, and press **Apply now**.

**Apply now** loads a newly enabled mod without restarting: the room you are standing in is
rebuilt behind the loading screen, with everything in it put back where it was. Switching a
running mod off, updating or removing one, or loading one that replaces something RetroXR
ships cannot happen in place — for those the button reads **Restart now**, and RetroXR
restarts itself and comes back to the same room. Neither works during a netplay session.

Each tile in Browse has a **Download** or **Update** button, so keeping mods current is one
press.

**Packs** lists mod packs — collections somebody has put together on mod.io. One press
downloads a pack's mods, and removing the pack removes the mods it brought, leaving any you
had installed on their own.

## Mods are off until you say so

A mod is **disabled when it arrives**, and that is deliberate. A mod runs with the app's
full permissions — it can reach your ROMs, your saves, your RomM login and the network —
and there is no sandbox to put it in. **Enabling a mod is the trust decision**, and it is
yours. Only enable mods from authors you are willing to trust that far.

RetroXR does not make, host or endorse mods. mod.io scans what it hosts, and a new upload
shows as *Being scanned by mod.io* until that finishes. A mod can be reported from its page
in the browser.

## What a mod may not contain

A mod is models, scenes, pictures, sound and scripts. **It is never a game**, and RetroXR
will not install a download that carries one, or a program:

- no file with an extension any emulator core loads as content — `.iso`, `.nes`, `.sfc`,
  `.bin`, `.chd`, and several hundred more;
- no native code — `.dll`, `.so`, `.exe`, `.apk` and the like.

So a mod page is never a way to get ROMs, disc images or BIOS files. Text, pictures and
sound are fine.

## Installing by hand

A mod is one file — normally a `.zip`. You can also drop it in the mods folder yourself:

| Platform | Folder |
| --- | --- |
| Windows | `%USERPROFILE%\retroxr\mods\` |
| Linux / macOS | `~/retroxr/mods/` |
| Quest | `mods/` in the app's data folder (`/sdcard/Android/data/com.xenu.retroxr/files/mods/`) |

Then open **MODS → Installed**, enable it, and press **Apply now**. A file you copy in by hand
has been through RetroXR's own checks, but not mod.io's scan.

## When a mod stops working

RetroXR is young and changes fast, and **mods are expected to break when it updates**. A mod
built for an older version is refused with a message saying what moved, rather than loading
and misbehaving. If a mod you rely on stops loading after an update, look for a new version
in the browser.

## Making mods

Mods are made in Godot, inside a checkout of RetroXR. The
**[modding guide](https://github.com/RetroXR/RetroXR/blob/master/docs/modding.md)** covers
the lot — the manifest, adding or replacing a console, cartridge shells, rooms and props,
building a pack and publishing it on mod.io.
