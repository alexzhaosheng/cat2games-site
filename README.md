# Cat 2 Studio company website

Public site: https://cattwogames.com/ — existing GitHub Pages, main / root.

The homepage introduces CAT TWO GAMES PTY LTD, MOMENT: A Clockwork Melody and
Klocky. English and Simplified Chinese copy and trailers switch together.
Screenshots open in a native image dialog with keyboard support.

## Content and assets

Based on the public Steam descriptions checked on 27 October 2026:

- MOMENT: https://store.steampowered.com/app/5375520/
- Klocky: https://store.steampowered.com/app/5428130/Klocky/

MOMENT is Coming soon on Steam, separate from its Android Google Play listing.
Klocky's planned Steam release is March 2027; more than 30 machines are planned
for the full game. Do not describe this as a released update or advertise a
Klocky free mode.

Studio-owned screenshots and localized trailers live in assets/games/. Videos
retain game audio and use native controls and preload=none. English copy is
the HTML fallback in index.html; Chinese copy is in site.js. Keep both updated.

tools/prepare_assets.py prepares the original ClockSmith, PhasePuzzle and
游戏运营 assets with Pillow and imageio-ffmpeg. It does not modify the games.
Run using the bundled Python runtime. The ignored _qa/ directory holds review
frames and browser evidence.

## Preview and publish

Run a static server from this folder, e.g. python -m http.server 8765 --bind
127.0.0.1. Open http://127.0.0.1:8765/?lang=en and check both languages,
desktop/mobile layouts, image dialogs and actual video playback.

Commit completed changes and push main to the existing Pages deployment.
Retain CNAME, the Google ownership verification file, privacy.html, icons and
existing brand assets. Domain hosting and mail DNS are independent of this
website update. Do not publish private enrollment contact details or phone.
