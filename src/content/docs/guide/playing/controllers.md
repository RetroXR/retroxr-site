---
title: Controllers and peripherals
description: Virtual pads you plug in, and how to drive a console with a real gamepad in your hands.
sidebar:
  order: 4
---

Controllers are objects like everything else. Spawn one, plug it into a console's port,
pick it up, and it works.

## Virtual pads

![The Controllers tab of the spawn menu, listing a primitive controller, ray gun, mouse and keyboard.](../../../../assets/screenshots/menu_spawn_controllers.png)

Open **`SPAWN`** → **Controllers**. Alongside the generic retro pad there are
system-specific ones, such as an NES pad, an Atari CX40 stick and a Virtual Boy pad, plus
peripherals: a multitap for more players, a light gun, a mouse, and a keyboard.

Plug the pad's lead into one of the console's numbered controller ports. Port 1 is player
one, and the ports are labeled, so a two-player game needs two pads in the right holes.

Then pick the pad up and play. Your thumbs drive the buttons directly.

## Using a real gamepad, keyboard or mouse

Holding an imaginary controller is charming for about ten minutes. If you have real
hardware, whether a gamepad, a keyboard or a mouse, RetroXR forwards it into a machine through a
small box called a **receiver**, with nothing held in your hands.

**A real device drives exactly one destination, and you say which** by choosing the port
you seat the receiver in.

That has its own page: **[using a real gamepad, keyboard or
mouse](/guide/playing/external-devices/)**.

## Peripherals

- **Multitap**: plugs into one port and gives you several, for games that supported it.
  The Super Multitap has the real one's **2P / 5P switch**: at 5P it is a multitap, at 2P
  only its first socket is live and it is nothing more than an extension cord, exactly as
  the hardware behaved. Flip it with the tap plugged in and the ports re-route on the spot.
- **Light gun / ray gun**: point it at the screen and pull the trigger.
- **Mouse**: for the systems that had one.
- **Keyboard**: for the computers that needed one.
- **Motion controllers**: a Wiimote with its nunchuk, MotionPlus and sensor bar.

- **Paks and packs**: the N64's Controller, Rumble and Transfer Paks go into the pad, and
  so does the Dreamcast's **Jump Pack**: seat it in a controller's expansion slot and the
  game's rumble reaches the hand holding that pad. It shares the two slots with the VMU,
  so the usual arrangement is a VMU in slot 1 and the pack in slot 2.
- **Microphones**: see below.

Peripherals plug in the same way as pads, and the machine has to actually support them for
a game to notice.

## Microphones

A handful of games were played by talking to them, and those work with your headset's (or
PC's) microphone. The volume reaching the game falls off with distance, so hold the
microphone up to your face as you would have.

| System | The hardware | How it goes in | Talking |
| --- | --- | --- | --- |
| **Nintendo 64** | Voice Recognition Unit and its microphone | The VRU into a controller port, the microphone into the VRU | The game decides when it listens. In Hey You, Pikachu!, that is while you hold **Z** |
| **GameCube** | GameCube Microphone | Its plug into **memory card slot 2** | Hold the microphone and pull that hand's **trigger** (left mouse button on desktop) |
| **Dreamcast** | Dreamcast Microphone | A controller's **expansion slot**: slot 2, or either slot of the external controller dongle | No button of its own; the game uses one of the pad's, such as A in Seaman |
| **Famicom** | Controller II's built-in microphone | Nothing to plug, since it is part of the second pad | Talk; the console hears only how loud you are |

The N64's VRU also needs its voice-recognition data, a separate English or Japanese
download under **`BIOS / Extras`** for Mupen64Plus. See
[BIOS and firmware](/guide/cores/bios/).

The microphone RetroXR listens to, and whether it may listen at all, are in `OPTIONS`.

:::caution[Needs an in-headset pass]
This page is written from the code rather than from a session in the headset. The general
model of spawn, plug into a port and pick up is right, but the exact set of peripherals
offered for a given console may differ. If you find something inaccurate, the **Edit this
page** link at the bottom goes straight to the source.
:::
