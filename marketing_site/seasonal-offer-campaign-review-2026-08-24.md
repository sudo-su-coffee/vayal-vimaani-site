# Seasonal offer campaign review — 2026-08-24

The offer popup now supports three visual campaign moments: Pongal harvest season, Tamil New Year / fresh crop cycle, and a general festival-season field offer. Each slide uses a separate agricultural visual, seasonal label, concise offer copy, and the same safe support CTA.

## Responsive review

At 390 × 844px, the popup remains mobile-safe with a compact image area, readable seasonal headline, numbered selectors, visible CTA, and close control. At 1440 × 900px, the popup stays centered with a wider image crop and balanced content hierarchy.

## Interaction review

The numbered selectors use buttons with `aria-label` and `aria-pressed`, allowing keyboard and touch selection without relying on the image. The existing close button, Escape dismissal, backdrop dismissal, and CTA dismissal remain available. Body scroll locking remains active while the dialog is open.

## Image generation state

The captured preview showed the platform's temporary “Generating image…” placeholder for the newly reserved seasonal image URLs. These placeholders are automatically replaced by the generated assets at the reserved persistent URLs when generation completes; the component is already wired to those URLs.

## Result

The campaign structure is ready for the generated Pongal, Tamil New Year, and general festive visuals. No fixed discount amount or unapproved offer dates were invented. The support team can confirm the active reduced booking price per crop and location.
