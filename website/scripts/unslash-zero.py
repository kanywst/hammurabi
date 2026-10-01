#!/usr/bin/env python3
"""
Build the site's text face: Atkinson Hyperlegible Next with an open zero.

Atkinson draws its zero with a slash so it cannot be mistaken for a capital O.
That is the right call for code and serial numbers, and the wrong one for a
codex whose body text is years, percentages and page counts. In running prose
"2013" set with slashed zeros reads as a code. The face has no unslashed
alternate, so this script makes one: the zero's counter is drawn in two halves
on either side of the slash, and this replaces the two halves with a single
counter. That counter is the outer contour scaled into the same bounding box
the halves occupied, so the stroke weight is unchanged.

The Open Font License requires a modified font to ship under another name, so
the output is renamed "Hammurabi Text". Nothing else in the font is touched.

Usage (needs `pip install fonttools brotli`):

    python3 scripts/unslash-zero.py <in.ttf>... --out src/fonts
"""

import argparse
from pathlib import Path

from fontTools.ttLib import TTFont

FAMILY = "Hammurabi Text"


def contours(glyph, glyf):
    coords, ends, flags = glyph.getCoordinates(glyf)
    out, start = [], 0
    for end in ends:
        out.append((list(coords[start : end + 1]), list(flags[start : end + 1])))
        start = end + 1
    return out


def bbox(points):
    xs = [x for x, _ in points]
    ys = [y for _, y in points]
    return min(xs), min(ys), max(xs), max(ys)


def unslash(font, name):
    glyf = font["glyf"]
    glyph = glyf[name]
    if glyph.isComposite():
        return  # built from the plain zero, which is fixed on its own
    if glyph.numberOfContours != 3:
        raise SystemExit(f"{name}: expected 3 contours, found {glyph.numberOfContours}")

    (outer, outer_flags), *halves = contours(glyph, glyf)
    ox0, oy0, ox1, oy1 = bbox(outer)
    ix0, iy0, ix1, iy1 = bbox([p for half, _ in halves for p in half])

    sx = (ix1 - ix0) / (ox1 - ox0)
    sy = (iy1 - iy0) / (oy1 - oy0)
    counter = [
        (round(ix0 + (x - ox0) * sx), round(iy0 + (y - oy0) * sy)) for x, y in outer
    ]
    # A counter winds the other way from the contour around it.
    counter.reverse()
    counter_flags = list(reversed(outer_flags))

    glyph.coordinates = type(glyph.coordinates)(outer + counter)
    glyph.flags = bytearray(outer_flags + counter_flags)
    glyph.endPtsOfContours = [len(outer) - 1, len(outer) + len(counter) - 1]
    glyph.numberOfContours = 2
    glyph.program = type(glyph.program)()
    glyph.program.fromBytecode(b"")
    glyph.recalcBounds(glyf)


def rename(font):
    style = font["name"].getDebugName(2) or "Regular"
    for record in font["name"].names:
        text = record.toUnicode()
        if record.nameID in (1, 16):
            record.string = FAMILY
        elif record.nameID in (3, 4):
            record.string = f"{FAMILY} {style}"
        elif record.nameID == 6:
            record.string = f"{FAMILY.replace(' ', '')}-{style.replace(' ', '')}"
        elif record.nameID == 0:
            record.string = (
                f"{text} Modified 2026 for kanywst/hammurabi: unslashed zero."
            )


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("fonts", nargs="+", type=Path)
    parser.add_argument("--out", type=Path, required=True)
    args = parser.parse_args()
    args.out.mkdir(parents=True, exist_ok=True)

    for path in args.fonts:
        font = TTFont(path)
        for name in ("zero", "zero.tf"):
            if name in font["glyf"]:
                unslash(font, name)
        rename(font)
        style = font["name"].getDebugName(2).replace(" ", "")
        target = args.out / f"HammurabiText-{style}.woff2"
        font.flavor = "woff2"
        font.save(target)
        print(f"wrote {target}")


if __name__ == "__main__":
    main()
