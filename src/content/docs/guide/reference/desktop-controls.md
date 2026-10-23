---
title: Desktop controls
description: Mouse and keyboard controls for running RetroXR without a headset.
sidebar:
  order: 2
---

With no VR headset detected, RetroXR falls back to a desktop mode driven by mouse and
keyboard. Everything in the room still works. You are just reaching into it with a cursor
instead of your hands.

## Moving and looking

| Input | Does |
| --- | --- |
| `W` `A` `S` `D` | Move |
| Mouse | Look |
| `Ctrl` *(hold)* | Crouch |
| `Caps Lock` *(hold)* | Walk (slower, for fine positioning) |

## Handling things

| Input | Does |
| --- | --- |
| Left-click | Grab or pick up whatever is under the cursor |
| `Ctrl` + Left-click | Drop the held object |
| Scroll wheel | Push or pull the held object along the view ray |
| `F11`, looking at a TV or handheld | Full screen. Its picture fills the window, and pressing again puts it back in the room |
| Middle-mouse drag | Rotate the held object in place |
| `Tab` | Toggle the spawn menu |

Two objects, the **ray gun** and the **TV remote**, snap to a fixed position on screen
while held, the way an FPS weapon does. Those need `Ctrl` + Left-click to drop; a plain
click will not do it, and the scroll wheel does nothing while they are snapped. Everything
else drops on a plain click too.

If you are holding the ray gun, left-click fires it rather than grabbing.

Pull a held object **all the way in** with the scroll wheel and it settles somewhere
useful rather than in your face: a handheld turns to put its screen front and center, and
anything else drops to just below the middle of the view.

## Full screen

Look at a television or a handheld and press `F11`. Its picture fills the window and its
sound moves in front of you, so a game can be played like any desktop emulator. Press
`F11` again to put it back in the room. This is the desktop's version of the headset's
[Focus Mode](/guide/reference/vr-controls/#focus-mode).

## Settings for desktop mode

A few settings only matter without a headset:

- **Mouse Sensitivity**, under `OPTIONS`.
- **Zoom**, under `OPTIONS`, beside the field of view. Above 1.00× everything is drawn
  closer, and unlike the field of view it is saved between sessions.
- **Resolution** of the window, under `GRAPHICS`.

## Playing a game

When a running system has input focus, the keyboard acts as a retro joypad. The current
mapping is always visible under the **`CONTROLS`** tab:

![The CONTROLS tab, listing gamepad buttons against their bound keys: D-pad up/down/left/right on W/S/A/D, and face buttons on the numeric keypad.](../../../../assets/screenshots/menu_controls.png)

| Control | Keys |
| --- | --- |
| D-pad | `W` `A` `S` `D` |
| Face buttons | Numpad `1`=B, `2`=A, `3`=Y, `4`=X |
| Shoulders | `L` = `Q` / `R` / Numpad `3` · `R` = `E` / `Y` / Numpad `6` |
| Triggers | `L2` = `Z` · `R2` = `X` |
| Stick clicks | `L3` = `C` · `R3` = `V` |
| Select / Start | `Shift` / `Enter` |
| Left stick | `T` `G` `F` `H` for up, down, left, right |
| Right stick | `I` `K` `J` `L` for up, down, left, right |

A real gamepad plugged into the PC works too, and is a great deal more pleasant. See
[controllers and peripherals](/guide/playing/controllers/).

## Reading a book

With a book held: `E` turns to the next page, `Q` to the previous one, with the same
animated turn as a page dragged by hand. Tap either key quickly and several pages riffle
over at once. See [books](/guide/room/books/).
