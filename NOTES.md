# Jay Jabiru — Developer Notes
*Read this file at the start of any new chat before touching code.*
*Last updated: February 2026*

---

## PROJECT OVERVIEW

Artist website for **Jay Jabiru** (Jan Stefan Tolstoy), Electronic Space Pop musician based in Dortmund, Germany.

- **Live site:** jayjabiru.com
- **Repository:** github.com/jayjabiru/jayjabiru.github.io
- **Hosting:** GitHub Pages (free, static files only — no server, no backend)
- **Stack:** Pure HTML / CSS / JavaScript — NO frameworks, NO npm, NO build tools
- **Upload method:** Files dragged directly into GitHub web interface

---

## FILE STRUCTURE

```
index.html          — Main website (single page)
impressum.html      — German legal page (noindex)
ambient.html        — Ambient Keys instrument page (dark lilac, glitter, distortion)
sokoban.html        — Sokoban puzzle game
logo.png            — JJ wings logo
photo.jpg           — Artist photo (currently NOT used on site, kept in repo)
art-astronaut.jpg   — Hero background image
art-mermaid.jpg     — Music section background
art-cats.jpg        — Gallery
art-spacecat.jpg    — Gallery
art-peacock.jpg     — Gallery
art-fossa.jpg       — Gallery + About section image
are-you-for-real.mp3
warp-closer-remix.mp3
WobblyNote_SingleA.wav
WobblyNote3_SingleA.wav
FATTER_bass_stab_C.wav
PSS560_TOM_3.wav
PSS560_Shaker.wav
NOTES.md            — This file
```

---

## DESIGN SYSTEM

```css
--deep:   #0a0a14   /* page background */
--navy:   #0d0d1f
--blue:   #1a1a3e
--accent: #4a7fff   /* electric blue — primary accent */
--glow:   #6fa3ff
--gold:   #c8a84b   /* gold — secondary accent */
--white:  #f0f0ff
--muted:  #8888aa
```

**Fonts:**
- `Cinzel` (serif) — headings, nav, labels
- `Raleway` (sans) — body text
- `Share Tech Mono` — used in synth.html UI only

**Aesthetic:** Dark space, cyberpunk, ancient-meets-orbital. No white backgrounds. No generic layouts.

---

## KNOWN ISSUES & TODOS

### synth.html — LOOP and HOLD modes disabled
- **Status:** Buttons present but disabled (opacity 0.3, not-allowed cursor)
- **Why:** The PSS560 WAV samples have a natural decay — they are NOT sustained/looped samples. Loop mode causes audible clicks/glitches at loop points. Hold mode works technically but sounds wrong because the note fades out anyway.
- **Fix when ready:** Source a proper **sustained, loopable** WAV sample (flat sustain in the middle, no natural decay). Format: ~1-2 seconds, WAV, 44100Hz or 48000Hz. Then re-enable both buttons by removing `disabled` attribute and `opacity:0.3` style. The underlying JS logic for both modes is already written and correct — just needs the right sample.
- **Good source:** freesound.org — search "synth pad loop" or "organ sustain" filtered to CC0

### Distrokid / Spotify name change pending
- Account still shows "toneofpeacock" — a live track must exist before name change is possible
- Plan: re-upload a track, immediately request name change via Edit Release
- Once live as Jay Jabiru: claim Spotify for Artists at spotify.com/artists

### Audio protection on index.html
- Native `<audio>` tags replaced with custom Web Audio players
- No download button shown, right-click context menu blocked on track cards
- Note: technically determined users can still find the file URL in browser dev tools — this is unavoidable on any public website. This protects against casual downloading only.

### Sokoban music volume
- Sokoban has music tracks — a volume control should be added
- User plans to add 2 more songs (total 4 tracks for Sokoban)
- When updating sokoban.html: add a volume slider, make it easy to add more mp3 filenames to a playlist array
- A hidden visitor counter exists on index.html
- It uses localStorage (counts unique visitors per browser)
- Revealed only on hover over the logo in the top-left nav
- This is a LOCAL counter — it only counts visits from that specific browser, not global unique visitors
- For real global analytics: consider adding Plausible or Goatcounter (both privacy-friendly, free tier available, no cookies)

### Photo removed from About section
- photo.jpg still exists in the repository
- Currently replaced by art-fossa.jpg in the About section
- Can be restored any time by changing `src="art-fossa.jpg"` back to `src="photo.jpg"` in the about-grid div

---

## IMPRESSUM (LEGAL — PRIVATE)
*Do not display this section publicly — for reference only*
- Name: Jan Stefan Tolstoy
- Address: Nadlerweg 6, 44329 Dortmund
- Email: stormheart@gmx.at

---

## EMAIL NOTES
- stormheart@gmx.at is used in Impressum
- Email is written in plain HTML currently — at risk of harvesting by spam crawlers
- **Recommended fix:** Obfuscate with CSS or JS (see index/impressum update)
- You are NOT legally required to monitor this email constantly — but the Impressum email must be reachable. Check it occasionally.
- You CAN use any email you own — it just must be genuinely reachable for legal contact

---

## SOUND CREDITS (all CC0)
**Yamaha PSS-560 pack** — all from freesound.org/people/Crabflag

| File | Original name |
|------|--------------|
| WobblyNote_SingleA.wav | Wobbly Note_Single_A_PSS560 & Boss Chorus.aif |
| WobblyNote3_SingleA.wav | Wobbly Note3_Single_A_PSS560 & Boss Chorus.aif |
| FATTER_bass_stab_C.wav | FATTER bass stab_Single_C_MONO_PSS560.aif |
| PSS560_TOM_3.wav | PSS560_TOM_3.aif |
| PSS560_Shaker.wav | PSS560_Shaker.aif |

**DigitalUnderglow ambient pack** — all from freesound.org/people/DigitalUnderglow

| File | Freesound ID | Notes |
|------|-------------|-------|
| cw_chd100_angel_Esus.wav | #783988 | Esus ambient chord, 9.6s |
| 130_Bbm_pad_02.wav | #757713 | Bbm pad loop, 7.4s |
| 90_Fmaj7_Lead_01.wav | #745076 | F# vaporwave lead, 10.7s |
| 90_Fmaj7_pad_02.wav | #757747 | F# pad (trimmed to single note), 10.7s |
| drumhit_Kick9.wav | #691692 | Electronic kick drum, 0.36s |

---

## ARTIST CONTEXT
- Genre: Jabiru K-Pop / Electronic Space Pop
- Instruments played: tin whistle, ocarina, flutes, pipa (learning)
- Influences: Jarre, Björk, Kate Bush
- Two tracks ready: "Are You for Real?" (K-Pop direction) and "Warp Closer [Remix]" (darker)
- Strategy: make 4 songs in each direction, see which feels more natural
- Parrotlets: two pacific parrotlets (blue and green) — part of personal brand
- Also: carpenter, educator, chess/Go player, free climber, pyrography artist

---

## PLATFORM LINKS
| Platform | URL |
|----------|-----|
| Website | jayjabiru.com |
| YouTube | youtube.com/@jayjabiru |
| Instagram | instagram.com/jayjabiru |
| TikTok | tiktok.com/@jayjabiru |
| SoundCloud | soundcloud.com/jayjabiru |
| Suno | suno.com/@jayjabiru |
| GitHub | github.com/jayjabiru |
