"""Prepare existing, studio-owned Steam imagery and trailers for the website.

Run with the bundled Python runtime (Pillow and imageio-ffmpeg required).
No game project files are modified. Website videos retain their original audio.
"""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import json
import subprocess

from PIL import Image, ImageDraw, ImageOps
import imageio_ffmpeg

ROOT = Path(__file__).resolve().parents[1]
CAT2 = ROOT.parent
OUT = ROOT / "assets" / "games"
QA = ROOT / "_qa"
OUT.mkdir(parents=True, exist_ok=True)
QA.mkdir(exist_ok=True)
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
MOMENT = CAT2 / "PhasePuzzle" / "steam"
KLOCKY = CAT2 / "ClockSmith" / "marketing" / "steam" / "refresh_2026-10-24" / "screenshots"

IMAGES = {
    "moment-cover": MOMENT / "screenshots" / "free_canon_d_dusk.png",
    "moment-timing": MOMENT / "graphics" / "screenshots-upload" / "05_clockwork_timing.jpg",
    "moment-colour": MOMENT / "graphics" / "screenshots-upload" / "03_colour_puzzle.png",
    "klocky-cover": KLOCKY / "08_prague_en.png",
    "klocky-book": KLOCKY / "03_history_tourbillon_en.png",
    "klocky-orrery": KLOCKY / "07_detail_orrery_en.png",
}
for name, source in IMAGES.items():
    with Image.open(source) as im:
        im = im.convert("RGB")
        im.thumbnail((1600, 1000), Image.Resampling.LANCZOS)
        im.save(OUT / f"{name}.webp", quality=86, method=6)
        small = ImageOps.fit(im, (720, 405), method=Image.Resampling.LANCZOS)
        small.save(OUT / f"{name}-small.webp", quality=83, method=6)

VIDEOS = {
    "moment-en": CAT2 / "游戏运营" / "MOMENT_EN_YouTube备份.mp4",
    "moment-zh": MOMENT / "trailer" / "MOMENT_中文宣传片_v1.mp4",
    "klocky-en": CAT2 / "ClockSmith" / "backups" / "KlockySteam-2026-10-12" / "eng_pv.mp4",
    "klocky-zh": CAT2 / "ClockSmith" / "backups" / "KlockySteam-2026-10-12" / "chn_pv.mp4",
}

def prepare_video(item):
    name, source = item
    target = OUT / f"{name}.mp4"
    if not target.exists():
        args = [FFMPEG, "-hide_banner", "-loglevel", "error", "-y", "-i", str(source)]
        if name == "moment-en":
            args += ["-c", "copy"]
        else:
            args += ["-vf", "scale=1280:720:flags=lanczos", "-c:v", "libx264",
                     "-preset", "medium", "-crf", "24", "-maxrate", "2200k",
                     "-bufsize", "4400k", "-threads", "4", "-pix_fmt", "yuv420p",
                     "-c:a", "aac", "-b:a", "128k"]
        args += ["-movflags", "+faststart", str(target)]
        subprocess.run(args, check=True)
    # Filmstrips for reviewing the original trailers, not fabricated artwork.
    frames = []
    for second in (8, 25, 45, 60):
        frame = QA / f"{name}-{second}.jpg"
        subprocess.run([FFMPEG, "-hide_banner", "-loglevel", "error", "-y",
                        "-ss", str(second), "-i", str(target), "-frames:v", "1",
                        "-vf", "scale=480:-1", str(frame)], check=True)
        frames.append(frame)
    print(json.dumps({"video": target.name, "bytes": target.stat().st_size}), flush=True)
    return name, frames

with ThreadPoolExecutor(max_workers=2) as pool:
    filmstrips = list(pool.map(prepare_video, VIDEOS.items()))

sheet = Image.new("RGB", (1440, 6 * 300 + 4 * 300), "#f7f1e7")
draw = ImageDraw.Draw(sheet)
for i, (name, source) in enumerate(IMAGES.items()):
    with Image.open(source) as im:
        thumb = ImageOps.contain(im.convert("RGB"), (1100, 278))
        sheet.paste(thumb, (300, i * 300 + 10))
    draw.text((20, i * 300 + 20), name, fill="#222222")
for i, (name, frames) in enumerate(filmstrips):
    y = 1800 + i * 300
    draw.text((20, y + 10), name, fill="#222222")
    for j, frame in enumerate(frames[:3]):
        with Image.open(frame) as im:
            im = ImageOps.fit(im, (380, 214))
            sheet.paste(im, (260 + j * 390, y + 40))
sheet.save(QA / "asset-review.jpg", quality=88)
print("Assets and review sheet prepared.")
