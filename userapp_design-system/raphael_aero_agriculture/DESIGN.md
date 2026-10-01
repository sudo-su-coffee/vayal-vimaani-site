---
name: Raphael Aero-Agriculture
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#414845'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#717974'
  outline-variant: '#c1c8c3'
  surface-tint: '#426558'
  primary: '#00150e'
  on-primary: '#ffffff'
  primary-container: '#062c21'
  on-primary-container: '#719586'
  inverse-primary: '#a9cfbe'
  secondary: '#446900'
  on-secondary: '#ffffff'
  secondary-container: '#b2f746'
  on-secondary-container: '#496f00'
  tertiary: '#00160f'
  on-tertiary: '#ffffff'
  tertiary-container: '#002d21'
  on-tertiary-container: '#689785'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c4ebda'
  primary-fixed-dim: '#a9cfbe'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#2a4d41'
  secondary-fixed: '#b2f746'
  secondary-fixed-dim: '#98da27'
  on-secondary-fixed: '#121f00'
  on-secondary-fixed-variant: '#334f00'
  tertiary-fixed: '#bbedd8'
  tertiary-fixed-dim: '#a0d1bd'
  on-tertiary-fixed: '#002117'
  on-tertiary-fixed-variant: '#204f40'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-display:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The brand personality is authoritative, precise, and visionary. It bridges the gap between traditional agricultural grit and cutting-edge aerospace technology. The target audience includes large-scale commercial farmers and enterprise agricultural consultants who require reliable, data-driven insights to manage vast crop lands.

The design system adopts a **Corporate Modern** style with **Minimalist** data density. It prioritizes clarity and legibility, using significant whitespace to ensure that complex telemetry and NDVI (Normalized Difference Vegetation Index) data do not overwhelm the user. The aesthetic is "Industrial Premium"—clean enough for the boardroom, but functional enough for the field. High-tech reliability is signaled through rigorous alignment, subtle technical details, and a palette that evokes both nature and technology.

## Colors
The palette is grounded in the environment it serves. 
- **Primary (Deep Forest Green):** Used for core branding, primary navigation, and heavy text. It provides a sense of established stability and depth.
- **Secondary (Electric Lime):** An "active" accent used for call-to-actions, status indicators (optimal health), and highlighting key data points. It provides high-visibility contrast against the dark greens.
- **Tertiary (Subtle Pine):** Used for secondary UI elements and surface variations to create depth without relying on shadows.
- **Neutral (Slate Gray):** Used for auxiliary text and interface borders to maintain a professional, tech-focused tone.
- **Whites/Grays:** The canvas is a crisp `Slate-50`, ensuring the "Premium" feel and allowing data visualizations to pop.

## Typography
The typography system uses a tri-font strategy to differentiate between brand, content, and data.
- **Hanken Grotesk** is used for headlines. Its contemporary geometry feels engineered and modern.
- **Inter** provides high legibility for body text, critical for reading long-form crop reports and field logs.
- **JetBrains Mono** is utilized for telemetry, GPS coordinates, and technical labels. This monospaced font reinforces the "high-tech" drone persona and ensures numerical data remains vertically aligned in tables.

## Layout & Spacing
The design system employs a **Fluid Grid** for mobile and a **Fixed Max-Width Grid** (1440px) for desktop to maintain data legibility. 
- **Grid:** A 12-column system is used for desktop dashboards, while mobile defaults to a single-column stack with 16px side margins.
- **Rhythm:** A 4px baseline grid ensures consistent vertical rhythm.
- **Data Density:** Large margins (64px) on desktop prevent "dashboard fatigue." Components are grouped into logical clusters using 32px of separation to define distinct field sectors or drone fleets.

## Elevation & Depth
Depth is conveyed primarily through **Tonal Layers** rather than heavy shadows to keep the interface looking "flat-premium."
- **Level 0 (Background):** Slate-50.
- **Level 1 (Cards/Containers):** Pure White with a subtle 1px border in Slate-200.
- **Level 2 (Dropdowns/Popovers):** Pure White with a soft, ambient shadow (10% opacity, Deep Green tint) to suggest it is floating above the map or dashboard.
- **Map Overlays:** Use a subtle backdrop blur (12px) for glassmorphism panels that sit atop live satellite feeds, ensuring text remains readable over varied terrain textures.

## Shapes
The shape language is **Soft (0.25rem)**. This choice reflects the precision of drone hardware. While corners are not sharp (avoiding an overly aggressive "military" look), they are not overly rounded either, which would appear too consumer-oriented. Buttons and input fields use a consistent 4px radius. Action-oriented chips (e.g., "In Flight") may use 100px (Pill) to distinguish them from structural containers.

## Components
- **Buttons:** Primary buttons are Solid Deep Forest Green with White text. Secondary buttons use a Lime Green outline. Ghost buttons are used for utility actions over maps.
- **Status Chips:** High-visibility indicators for drone health and crop status. Use Lime for "Optimal," Amber for "Attention," and Red for "Critical."
- **Data Cards:** Containers for NDVI charts and soil moisture levels. They must feature a monospaced "Label-sm" header and a large "Data-display" value.
- **Input Fields:** Clean, underlined or lightly boxed Slate-200 frames that turn Deep Green on focus.
- **Telemetry Bars:** Horizontal progress bars showing battery life and signal strength, utilizing the Secondary Lime Green to indicate "Full/Strong."
- **Map Controls:** Floating translucent circles containing icons for zoom, layer toggle (Heatmap vs. Satellite), and flight path plotting.