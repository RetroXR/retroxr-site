---
title: CD player, tape deck and turntable
description: Play your own music on a CD player, a cassette deck or a record player, through speakers you place.
sidebar:
  order: 3
---

Alongside the video hardware there is audio hardware: a **CD player**, a **cassette deck**
and a **record player**. All three take your own music files.

## Getting music in

Put audio files into the `music/` folder:

- **Windows**: `%USERPROFILE%\retroxr\music`
- **Linux / macOS**: `~/retroxr/music`
- **Quest**: `/sdcard/Android/data/com.xenu.retroxr/files/music`

Each **subfolder is an album**, and so is a loose audio file on its own. A **playlist**
(`.m3u` or `.m3u8`) is an album too, made of exactly the tracks it lists in its order, so you
can make a cassette or a record out of tracks that live anywhere, without copying them
into a folder of their own. A folder that contains a playlist plays in the playlist's
order rather than alphabetically.

### Label art

Cassettes and records wear a picture if one is sitting beside the album:

| Album | Side A | Side B |
| --- | --- | --- |
| A folder | `cover`, `folder`, `front` or `album` inside it, or `Folder.png` beside it | `back` inside it, or `Folder B.png` beside it |
| A single file or playlist | `Name.png` (or `Name A.png`) beside it | `Name B.png` beside it |

`.png`, `.jpg`, `.jpeg` and `.webp` all work, and the name is matched regardless of case.
An album with no side B picture shows side A on both sides, like a pressing with one
design. On a record the picture is cropped to its middle square for the round label.

A cassette or record whose album has no art at all wears a RetroXR label with the album's
name on it. A mod's cassette shell wears the album's pictures on its own labels.

### Side A and side B

Cassettes and records have **two sides**. To say where side B starts, put a
`#SIDE B` line in the album's `.m3u` playlist, just before the first track of side B:

```
Track 01.mp3
Track 02.mp3
Track 03.mp3
#SIDE B
Track 04.mp3
Track 05.mp3
```

Insert the cassette turned over, or lay the record upside down, to play side B. The sides
are laid out by the tracks' real lengths.

An album with no `#SIDE B` line has every track on side A. The CD player ignores sides and
plays the whole album.

## Playing something

Spawn a **CD player**, a **cassette deck** or a **record player** from **`SPAWN`** →
**Objects**, along with a pair of **speakers**. Wire the deck to the speakers with a 3.5 mm lead, put a disc or a
cassette in, and press play.

A deck can feed a television's audio input too, and from there a full surround rig. See
[speakers and surround](/guide/playing/plugging-in/#speakers-and-surround).

### The RETRO XR decks

All three are **RETRO XR** models, with live displays and buttons you
can press with a fingertip, the laser or the mouse:

- The **vinyl player** has an RCA line out, into a television or the surround amp.
- The **cassette player**'s door carries the tape, and it has a working **PHONES** jack and
  **VOLUME** knob.
- The **CD player** has a front tray, a working **PHONES** jack and a **LEVEL** knob.

Plug a pair of RETRO XR **headphones** into a PHONES jack to listen on them.

Both decks have the transport buttons you would expect. The CD player can skip tracks; the
cassette deck cannot, because a cassette could not. You rewind and fast-forward and
listen for the gap.

The [TV remote](/guide/room/tv-remote/) drives them from across the room.

## The record player

The turntable is the odd one out, and deliberately so: **it has no transport row to press.**
You work it by hand, the way you work a real one.

Drop a record onto the platter, then **take hold of the tonearm and swing it over**. The
arm is the control. Parked on its rest, the record is loose and liftable; cued over the
band, the deck is committed and the needle is down. Where you set it down across the
record is **where in the album you start**, so dropping the needle two thirds of the way in
starts you two thirds of the way in.

There is no fast-forward or rewind, because a turntable has neither. Those two cells are
grayed out on the TV remote for this deck. START and STOP drive the platter, and it
**spins up and coasts down** rather than snapping between still and turning.

### 33 and 45

The speed switch is real, and so is getting it wrong. Every record here is a 12" LP cut at
33⅓, so playing one at **45** runs it about a third fast and a fifth higher, which is the whole
point of the control. Flip it back and it settles.

### Touch the record

Put a fingertip on the spinning record and you drag it. The pitch **follows the platter**,
so slowing it down bends the note down, letting go lets it glide back up to speed, and
stopping it dead stops the sound, which is what a record halted under your hand does.

## Sound placement

Audio is positioned in the room, so a deck playing across from you sounds like it is
across from you. On Quest this goes through Meta's XR Audio SDK, which renders it with
HRTF, which is why you can point at a sound with your eyes closed. Where that is
unavailable, RetroXR falls back to Godot's own 3D audio.

:::caution[Needs an in-headset pass]
This page is written from the code rather than from a session in the headset. The hardware
and the folder are right; the exact supported audio formats and the deck's full button set
have not been verified against a running build.
:::
