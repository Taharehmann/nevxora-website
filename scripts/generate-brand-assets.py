from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
ASSETS = ROOT / "src" / "assets"
LOGO_PATH = ASSETS / "nevxora-logo.png"
MASTER_SIZE = 512


def sharpen(image: Image.Image, radius: float = 0.8, percent: int = 130) -> Image.Image:
    return image.filter(ImageFilter.UnsharpMask(radius=radius, percent=percent, threshold=2))


def extract_icon(image: Image.Image) -> Image.Image:
    width, height = image.size
    split_row = height

    for y in range(height):
        opaque = sum(1 for x in range(width) if image.getpixel((x, y))[3] > 10)
        if y > 0 and opaque == 0:
            split_row = y
            break

    icon = image.crop((0, 0, width, split_row))
    bbox = icon.getbbox()
    return icon.crop(bbox) if bbox else icon


def logo_to_square(image: Image.Image, size: int) -> Image.Image:
    bbox = image.getbbox()
    if not bbox:
        return Image.new("RGBA", (size, size), (0, 0, 0, 0))

    cropped = image.crop(bbox)
    width, height = cropped.size
    side = max(width, height)
    padding = int(side * 0.08)
    canvas_side = side + padding * 2

    canvas = Image.new("RGBA", (canvas_side, canvas_side), (0, 0, 0, 0))
    offset_x = (canvas_side - width) // 2
    offset_y = (canvas_side - height) // 2
    canvas.paste(cropped, (offset_x, offset_y), cropped)

    master = canvas.resize((size, size), Image.Resampling.LANCZOS)
    return sharpen(master)


def resize_logo(master: Image.Image, size: int) -> Image.Image:
    resized = master.resize((size, size), Image.Resampling.LANCZOS)
    if size <= 48:
        return sharpen(resized, radius=0.5, percent=150)
    return resized


def write_png(image: Image.Image, path: Path) -> None:
    image.save(path, format="PNG", optimize=True)


def main() -> None:
    os.makedirs(PUBLIC, exist_ok=True)

    logo = Image.open(LOGO_PATH).convert("RGBA")
    icon = extract_icon(logo)
    master = logo_to_square(icon, MASTER_SIZE)

    sizes = [16, 32, 48, 64, 128, 180, 192, 256, 512]
    ico_images = [resize_logo(master, size) for size in sizes[:6]]

    for size in sizes:
        image = resize_logo(master, size)
        if size in {16, 32, 48, 192, 512}:
            write_png(image, PUBLIC / f"favicon-{size}x{size}.png")

    write_png(resize_logo(master, 32), PUBLIC / "favicon.png")
    write_png(resize_logo(master, 180), PUBLIC / "apple-touch-icon.png")
    write_png(logo, PUBLIC / "nevxora-logo.png")

    ico_images[0].save(
        PUBLIC / "favicon.ico",
        format="ICO",
        sizes=[(image.width, image.height) for image in ico_images],
        append_images=ico_images[1:],
    )

    print("Generated favicons from logo icon")


if __name__ == "__main__":
    main()
