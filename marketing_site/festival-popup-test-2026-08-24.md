# Festival offer popup test — 2026-08-24

The popup is present on initial load and uses a clear seasonal field-offer message without claiming a fabricated fixed discount. It asks farmers to confirm the current reduced booking price with the support team, which keeps the offer sample safe until an approved amount and dates are supplied.

## Mobile — 390 × 844
The popup anchors to the lower viewport with a cream surface, high-contrast dark green text, a 44px close button, and a 56px primary CTA. The card fits within the viewport without horizontal overflow. The backdrop visibly separates the popup from the hero and prevents accidental interaction with the underlying page while open.

## Desktop — 1440 × 900
The popup is centered with a readable max width, strong green/cream/terracotta hierarchy, visible close control, and a secondary “Continue to the site” dismissal. The backdrop blur and dark overlay establish focus without hiding the page context entirely.

## Interaction expectations
The close button, secondary dismissal, backdrop click, Escape key, and primary CTA dismissal are implemented. Body scrolling is locked while the popup is open and restored after dismissal. The dialog has `role="dialog"`, `aria-modal`, a labelled heading, and descriptive copy. Focus-visible outlines are defined for all popup actions.

## Result
The responsive presentation is acceptable on the captured mobile and desktop sizes. No horizontal overflow or contrast failure was observed in the popup. A future production pass should add focus trapping and return focus to the trigger if the popup becomes persistent or is opened from a user action; for this initial-load sample, the close and Escape paths are available.
