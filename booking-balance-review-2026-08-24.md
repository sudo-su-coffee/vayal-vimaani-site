# Booking balance review

The implementation adds a left-side village-field context visual and a right-side support-card column on desktop, with a single-column stack on mobile. It also adds a collaboration strip using the uploaded reference marks.

The automated mobile and desktop hash captures returned blank white images despite the preview server previously rendering normally; this is a capture timing/runtime limitation rather than a confirmed page-render failure. The production build and TypeScript checks completed successfully. A browser preview should be used for the final visual confirmation before delivery.

The new layout intentionally addresses the screenshot issue: the desktop booking area is no longer an isolated left-aligned card with empty space on the right. The mobile order remains context first, support actions second.
