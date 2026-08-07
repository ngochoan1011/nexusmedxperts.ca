"""Generate the 1200x630 Open Graph / Twitter share image.

Usage:  python3 scripts/generate-og.py     (requires: pip install pillow)

Writes src/app/opengraph-image.png and src/app/twitter-image.png, which
Next.js serves automatically via its file-based metadata convention.
"""
from PIL import Image, ImageDraw, ImageFont
import math, os, shutil, urllib.request

W, H = 1200, 630
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Plus Jakarta Sans (the site typeface), cached outside version control.
FONT = os.path.join(ROOT, ".cache", "PlusJakartaSans.ttf")
FONT_URL = ("https://github.com/google/fonts/raw/main/ofl/"
            "plusjakartasans/PlusJakartaSans%5Bwght%5D.ttf")
if not os.path.exists(FONT):
    os.makedirs(os.path.dirname(FONT), exist_ok=True)
    print("downloading Plus Jakarta Sans…")
    urllib.request.urlretrieve(FONT_URL, FONT)

NAVY   = (0, 40, 80)
NAVY_D = (0, 26, 53)
TEAL   = (22, 176, 184)
OCEAN  = (0, 144, 184)
NAVY_7 = (7, 58, 104)
MUTED  = (90, 107, 126)

def font(size, weight="Bold"):
    f = ImageFont.truetype(FONT, size)
    try:
        f.set_variation_by_name(weight)
    except Exception:
        pass
    return f

def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def brand_gradient(size):
    """Teal -> Ocean -> Navy diagonal gradient, matching .brand-gradient."""
    w, h = size
    g = Image.new("RGB", (w, h))
    px = g.load()
    for y in range(h):
        for x in range(w):
            t = (x / max(w - 1, 1)) * 0.75 + (y / max(h - 1, 1)) * 0.25
            if t < 0.45:
                c = lerp(TEAL, OCEAN, t / 0.45)
            else:
                c = lerp(OCEAN, NAVY_7, (t - 0.45) / 0.55)
            px[x, y] = c
    return g

def text_gradient(size):
    """Horizontal teal -> ocean -> navy600 for headline text.
    Resolves into navy so the right-hand words keep contrast on white."""
    w, h = size
    NAVY_6 = (14, 77, 132)
    g = Image.new("RGB", (w, h))
    px = g.load()
    for x in range(w):
        t = x / max(w - 1, 1)
        c = lerp(TEAL, OCEAN, t / 0.5) if t < 0.5 else lerp(OCEAN, NAVY_6, (t - 0.5) / 0.5)
        for y in range(h):
            px[x, y] = c
    return g

def radial_glow(size, color, alpha):
    """Soft circular glow as an RGBA layer."""
    d = size
    layer = Image.new("L", (d, d), 0)
    px = layer.load()
    r = d / 2
    for y in range(d):
        for x in range(d):
            dist = math.hypot(x - r, y - r) / r
            if dist < 1:
                v = (1 - dist) ** 2
                px[x, y] = int(255 * v * alpha)
    out = Image.new("RGBA", (d, d), color + (0,))
    out.putalpha(layer)
    return out

# ---------- canvas ----------
img = Image.new("RGB", (W, H), (255, 255, 255))

# subtle vertical wash toward surface colour
wash = Image.new("RGB", (1, H))
for y in range(H):
    wash.putpixel((0, y), lerp((255, 255, 255), (238, 246, 251), y / H))
img.paste(wash.resize((W, H)), (0, 0))

img = img.convert("RGBA")

# ambient brand glows (mirrors the hero backdrop)
img.alpha_composite(radial_glow(760, TEAL, 0.30), (W - 430, -300))
img.alpha_composite(radial_glow(680, OCEAN, 0.20), (-280, 180))

# faint grid
grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(grid)
step, gcol = 48, NAVY + (11,)
for x in range(0, W, step):
    gd.line([(x, 0), (x, H)], fill=gcol, width=1)
for y in range(0, H, step):
    gd.line([(0, y), (W, y)], fill=gcol, width=1)
img.alpha_composite(grid)

draw = ImageDraw.Draw(img)
M = 76  # left margin

# ---------- logo ----------
logo = Image.open(f"{ROOT}/public/brand/nexus-medxperts-logo.png").convert("RGBA")
# tight crop of the full lockup (icon + wordmark), from measured bounds
logo = logo.crop((615, 1409, 5470, 2761))
lw = 430
logo = logo.resize((lw, int(logo.height * lw / logo.width)), Image.LANCZOS)
img.alpha_composite(logo, (M, 74))

# ---------- headline ----------
f_head = font(56, "ExtraBold")
lines = [
    [("One trusted partner for", NAVY)],
    [("every stage of a ", NAVY), ("healthcare career", "GRAD")],
]
y = 218
for line in lines:
    x = M
    for text, colour in line:
        if colour == "GRAD":
            bbox = draw.textbbox((0, 0), text, font=f_head)
            tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
            mask = Image.new("L", (tw + 8, th + 30), 0)
            ImageDraw.Draw(mask).text((-bbox[0], -bbox[1]), text, font=f_head, fill=255)
            grad = text_gradient(mask.size).convert("RGBA")
            img.paste(grad, (int(x), int(y)), mask)
            x += tw
        else:
            draw.text((x, y), text, font=f_head, fill=colour)
            x += int(draw.textlength(text, font=f_head))
    y += 73

# ---------- divisions ----------
f_div = font(23, "SemiBold")
draw.text((M, 400), "Recruitment  ·  Consulting  ·  Staffing  ·  Management  ·  Virtual Care  ·  Real Estate",
          font=f_div, fill=MUTED)

# ---------- footer ----------
f_url = font(30, "Bold")
draw.text((M, 470), "nexusmedxperts.ca", font=f_url, fill=NAVY)

f_tag = font(21, "Medium")
draw.text((M, 512), "Canada's one-stop healthcare business ecosystem", font=f_tag, fill=MUTED)

# bottom brand bar
bar_h = 12
img.paste(brand_gradient((W, bar_h)), (0, H - bar_h))

out = img.convert("RGB")
dest = os.path.join(ROOT, "src", "app", "opengraph-image.png")
out.save(dest, quality=95)
# Twitter uses the same artwork (summary_large_image is also 1200x630).
twitter = os.path.join(ROOT, "src", "app", "twitter-image.png")
shutil.copyfile(dest, twitter)
print(f"saved {dest} and {twitter} — {out.size[0]}x{out.size[1]}, "
      f"{os.path.getsize(dest)} bytes")
