---
title: Arcade cabinets
description: Cabinets for arcade, Neo Geo, DICE and Laserdisc games, including one that rebuilds its controls for whatever game you insert.
sidebar:
  order: 1
---

Arcade games do not come out as cartridges. They come out as the hardware they were sold
as, and they go into a cabinet:

| System | The game is | Its cabinet |
| --- | --- | --- |
| **MAME** and **Arcade** | a **JAMMA board** | the Morphing Arcade Cabinet |
| **DICE** | a **JAMMA board** | a simple arcade cabinet |
| **Neo Geo** | a **Neo Geo MVS cartridge** | a simple Neo Geo cabinet |
| **Laserdisc** | a disc | a simple arcade cabinet |

## Putting a game in

Each cabinet has a **bay** made of a disc reader, for MAME CHDs, and a **JAMMA docking
board**. Insert the board or cartridge, and the cabinet **skins itself from the game**:
its top and sides take the game's scraped art. See [box art](/guide/connecting/box-art/)
for scraping.

The simple cabinets have **two controller plugs**, which take any controller-type device.

## The Morphing Arcade Cabinet

Arcades used all sorts of hardware beyond a stick and buttons. The Morphing Arcade
Cabinet reads MAME's lists and **rebuilds its controls for the game you insert**. Put in a
shooter and it grows guns; put in a racing game and it grows a wheel.

It knows guns, driving wheels, motorbikes, boards, dance pads, taiko drums, guitars, DJ
stations, a rifle with a scope, a plane cockpit and rolling balls. Some cabinets come with
a **racing seat**, and some of those seats move.

The shapes are approximations, not copies of the original cabinets. If a cabinet morphs
wrong for a game, or a game needs hardware it does not grow, please
[open an issue](https://github.com/RetroXR/RetroXR/issues). And if you are a 3D artist,
contributions to make the cabinets more faithful are very welcome.

## Attract mode

A switched-on cabinet plays the game's **scraped video**, the way a real cabinet loops its
attract sequence. The emulator is not running yet, which keeps a room full of cabinets
cheap. It starts when you grab a controller, press a button or insert a coin.

Attract mode can be turned off on a single cabinet's menu, or for every cabinet in
`OPTIONS`.

## Using the screen for something else

Every cabinet has a **component input**, so any other console can be cabled to it and
played on the cabinet's screen. The input is bypassed while the JAMMA or Neo Geo bay has a
game in it, so take the game out to use it.

## Somewhere to sit

A chair, a stool, a cushion, a sofa and a bed can all be spawned from `SPAWN` → **Objects**,
whether or not there is a cabinet to sit at.
