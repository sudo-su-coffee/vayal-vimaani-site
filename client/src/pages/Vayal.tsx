/* STYLE REMINDER — Vayal Vimaani: farmer-first, optimistic, practical, readable, and warm. Use field green, soil terracotta, harvest gold, cream surfaces, clear CTAs, and accessible motion. */
import { ArrowRight, Check, ChevronDown, Leaf, MapPinned, Menu, MessageCircle, Phone, ShieldCheck, Sprout, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const VAYAL_LOGO = "/manus-storage/vayal-vimaani-logo_a1343ffe.webp";
const HERO_IMAGE = "/manus-storage/vayal-hero-field-spray_0fb54e0f.jpg";
const ABOUT_CEO_IMAGE = "/manus-storage/vayal-ceo-about-full-natural_7b84bc07.png";
const DRONE_IMAGE = "/manus-storage/vayal-drone-detail_54eb4606.jpg";
const APP_IMAGE = "/manus-storage/vayal-ceo-phone-booking_26a47a65.jpg";
const FIELD_PLAN_IMAGE = "/manus-storage/vayal-ceo-field-plan_f6e74394.jpg";
const FESTIVAL_IMAGE = "/manus-storage/vayal-festival-offer_6247d92f.png";
const REF_PROCESS_IMAGE = "/manus-storage/reference-promo-booking_45f00711.jpg";
const REF_LAND_IMAGE = "/manus-storage/reference-land_55d6cf0c.webp";
const REF_PILOT_IMAGE = "/manus-storage/vayal-ceo-field-operation-natural_ee226ef6.png";
const DGCA_LOGO = "/manus-storage/dgca-mark_73e6352b.png";
const MEITY_LOGO = "/manus-storage/meity-dic-mark_f5c3d2a5.png";
const RAPHAEL_MARK = "/manus-storage/raphael-drones-mark_63857838.png";

const seasonalOffers = [
  { label: "Pongal season / Field offer", title: ["Harvest less cost.", "More care for every field."], copy: "During the Pongal season, ask the Vayal support team about the current reduced booking price for your next crop-spraying visit.", image: "/manus-storage/vayal-pongal-offer_a374831a.png", alt: "Pongal harvest details beside a green rice field with a drone in the distance" },
  { label: "Tamil New Year / Fresh crop cycle", title: ["Start the season.", "Plan the field well."], copy: "For a fresh crop cycle, share your field details with the Vayal support team and ask about the current seasonal booking offer.", image: "/manus-storage/vayal-tamil-new-year-offer_e0abad56.png", alt: "Tamil New Year field preparation beside a green crop field with a drone in the distance" },
  { label: "Festival season / Field offer", title: ["A little less cost.", "A lot more field."], copy: "Book your next crop-spraying visit through the Vayal support team and ask about the current reduced booking price for your crop and location.", image: FESTIVAL_IMAGE, alt: "Agricultural drone flying above a green crop field while a farmer checks a booking phone" },
];

const steps = [
  { number: "01", title: "Register in the app", text: "Create your farmer profile through the Vayal mobile app so support starts with the right details.", image: REF_PROCESS_IMAGE, alt: "Farmer using a mobile phone to begin a drone service request" },
  { number: "02", title: "Register your land", text: "Share your land details, location, acreage, and crop so the team can plan the right field visit.", image: REF_LAND_IMAGE, alt: "Green agricultural land prepared for mapping and crop support" },
  { number: "03", title: "Spray with confidence", text: "The trained pilot completes the planned crop-care visit while you stay informed about the next step.", image: DRONE_IMAGE, alt: "Agricultural drone working above crop rows" },
];

export default function Vayal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ta">("en");
  const [offerOpen, setOfferOpen] = useState(false);
  const [offerIndex, setOfferIndex] = useState(0);
  const offer = seasonalOffers[offerIndex];

  useEffect(() => {
    if (!offerOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOfferOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = ""; };
  }, [offerOpen]);

  const copy = language === "ta" ? {
    eyebrow: "விவசாயிகளுக்கான ட்ரோன் சேவை",
    title: "சிறந்த தெளிப்பு.\nவலுவான வளர்ச்சி.",
    description: "உங்கள் வயலுக்கான எளிய, நம்பகமான ட்ரோன் தெளிப்பு மற்றும் கள சேவை.",
    cta: "தெளிப்பை முன்பதிவு செய்யுங்கள்",
  } : {
    eyebrow: "Precision agriculture for every field",
    title: "Spray smarter.\nGrow stronger.",
    description: "Farmer-first drone spraying and practical field support, planned around your crop, your time, and your field.",
    cta: "Book a spray",
  };

  return (
    <div className="vayal-site">
      <a className="vayal-skip" href="#main-content">Skip to content</a>
      <header className="vayal-header">
        <div className="vayal-container vayal-nav">
          <a className="vayal-logo" href="#top" aria-label="Vayal Vimaani home"><img src={VAYAL_LOGO} alt="Vayal Vimaani" /></a>
          <nav className={`vayal-nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#booking" onClick={() => setMenuOpen(false)} className="vayal-nav-book">Book a spray <ArrowRight size={15} /></a>
          </nav>
          <div className="vayal-nav-tools">
            <button className="vayal-lang" type="button" onClick={() => setLanguage(language === "en" ? "ta" : "en")} aria-label="Change language">{language === "en" ? "தமிழ்" : "EN"}</button>
            <a className="vayal-call-mini" href="tel:+918667676987" aria-label="Call Vayal Vimaani"><Phone size={16} /></a>
            <button className="vayal-menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
      </header>

      {offerOpen && <div className="vayal-offer-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setOfferOpen(false); }}><section className="vayal-offer" role="dialog" aria-modal="true" aria-labelledby="vayal-offer-title" aria-describedby="vayal-offer-copy"><button className="vayal-offer-close" type="button" onClick={() => setOfferOpen(false)} aria-label="Close seasonal offer"><X size={20} /></button><div className="vayal-offer-mark"><Sprout size={22} /></div><div className="vayal-offer-image"><img src={offer.image} alt={offer.alt} fetchPriority="high" decoding="async" /></div><div className="vayal-kicker">{offer.label}</div><h2 id="vayal-offer-title">{offer.title[0]}<br /><em>{offer.title[1]}</em></h2><p id="vayal-offer-copy">{offer.copy}</p><div className="vayal-offer-note"><ShieldCheck size={16} /><span>Offer details are confirmed by the support team for your crop and location.</span></div><div className="vayal-offer-dots" aria-label="Choose a seasonal offer">{seasonalOffers.map((item, index) => <button key={item.label} type="button" className={index === offerIndex ? "is-active" : ""} aria-label={`Show ${item.label}`} aria-pressed={index === offerIndex} onClick={() => setOfferIndex(index)}><span>{String(index + 1).padStart(2, "0")}</span></button>)}</div><a className="vayal-button vayal-button-primary vayal-offer-cta" href="#booking" onClick={() => setOfferOpen(false)}>Ask about this offer <ArrowRight size={17} /></a><button className="vayal-offer-dismiss" type="button" onClick={() => setOfferOpen(false)}>Continue to the site</button></section></div>}

      <main id="main-content"><section id="top" className="vayal-hero">
          <div className="vayal-hero-image"><img src={HERO_IMAGE} alt="Agricultural drone spraying a lush green crop field" fetchPriority="high" decoding="async" /><div className="vayal-hero-shade" /></div>
          <div className="vayal-container vayal-hero-inner">
            <div className="vayal-hero-copy">
              <div className="vayal-eyebrow"><span />{copy.eyebrow}</div>
              <h1>{copy.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h1>
              <p>{copy.description}</p>
              <div className="vayal-hero-actions"><a className="vayal-button vayal-button-primary" href="#booking">{copy.cta} <ArrowRight size={17} /></a><a className="vayal-text-link" href="#how-it-works">See how it works <ArrowRight size={16} /></a></div>
              <div className="vayal-hero-note"><ShieldCheck size={16} /> Trained pilots · Practical field support · Tamil Nadu</div>
            </div>
            <div className="vayal-hero-proof"><span>FIELD SERVICE / 01</span><strong>Every drop<br />has a job.</strong><small>Low-volume application<br />planned for your crop.</small></div>
          </div>
        </section>

        <section className="vayal-collaboration" aria-label="Institutional collaboration"><div className="vayal-container vayal-collaboration-inner"><span className="vayal-collaboration-label">In collaboration with</span><div className="vayal-collaboration-logos"><img src={DGCA_LOGO} alt="Directorate General of Civil Aviation" loading="lazy" decoding="async" /><img src={MEITY_LOGO} alt="Ministry of Electronics and Information Technology and Digital India" loading="lazy" decoding="async" /><img src={RAPHAEL_MARK} alt="Raphael Drones" loading="lazy" decoding="async" /></div></div></section>

        <section className="vayal-stats" aria-label="Vayal Vimaani highlights"><div className="vayal-container vayal-stat-grid"><div><strong>Up to 90%</strong><span>less water used</span></div><div><strong>50%+</strong><span>pesticide reduction potential</span></div><div><strong>~7 min</strong><span>per acre average</span></div><div><strong>₹500</strong><span>precision-farming reference / acre</span></div></div></section>

        <section id="about" className="vayal-section vayal-about"><div className="vayal-container vayal-two-col"><div className="vayal-photo-frame"><img src={ABOUT_CEO_IMAGE} alt="Raphael Drones founder naturally integrated into a crop field beside an agricultural drone" loading="lazy" decoding="async" /><span>Field conversation / 01</span></div><div className="vayal-section-copy"><div className="vayal-kicker">About Vayal Vimaani</div><h2>Bringing the sky<br /><em>to your vayal.</em></h2><p>Vayal Vimaani means “field aircraft”. It brings practical aerospace support closer to growers through drone spraying, field work, and crop-care guidance planned around local farming realities.</p><p>Tell us what you grow and where you farm. Our team helps match the right service, trained pilot, timing, and next practical step for your field.</p><a className="vayal-button vayal-button-dark" href="#booking">Plan a field visit <ArrowRight size={17} /></a></div></div></section>

        <section id="services" className="vayal-section vayal-services"><div className="vayal-container"><div className="vayal-service-bridge"><div className="vayal-service-bridge-image"><img src={FIELD_PLAN_IMAGE} alt="Raphael Drones founder and a farmer reviewing a field plan before a drone visit" loading="lazy" decoding="async" /></div><div className="vayal-service-bridge-copy"><span>FIELD PLAN / BEFORE THE SPRAY</span><strong>One clear plan<br />for every field.</strong><small>Choose the crop, location, and timing before the team takes the next step.</small></div></div></div></section>

        <section id="app" className="vayal-section vayal-app"><div className="vayal-container vayal-app-grid"><div className="vayal-app-image"><img src={APP_IMAGE} alt="Close view of Raphael Drones founder confirming a crop-spraying booking on a phone beside a field" loading="lazy" decoding="async" /></div><div className="vayal-section-copy"><div className="vayal-kicker">Vayal Vimaani / Mobile-first</div><h2>The farm<br /><em>in your pocket.</em></h2><p>Manage your field details, request a drone spray visit, and follow the next step from one simple place. When the official app is published, these buttons will open the live store listings.</p><div className="vayal-store-placeholder"><a href="#" onClick={(event) => { event.preventDefault(); toast("Android app link coming soon"); }} aria-label="Vayal Vimaani Android app"><img src="/manus-storage/vayal-google-play-badge_3bfb5d0b.svg" alt="Get it on Google Play" loading="lazy" decoding="async" /></a><a href="#" onClick={(event) => { event.preventDefault(); toast("iPhone app link coming soon"); }} aria-label="Vayal Vimaani iPhone app"><img src="/manus-storage/vayal-app-store-badge_3059af4c.svg" alt="Download on the App Store" loading="lazy" decoding="async" /></a></div></div></div></section>

        <section id="how-it-works" className="vayal-section vayal-how"><div className="vayal-container"><div className="vayal-process-heading"><div><div className="vayal-kicker">Seamless 3-step process</div><h2>From your app<br /><em>to your crop.</em></h2></div><p>Book your drone spray service in seconds. Register once, share your land details, and let the support team plan the right visit.</p></div><div className="vayal-process-grid">{steps.map((step) => <article className="vayal-process-card" key={step.number}><div className="vayal-process-card-top"><span>{step.number}</span><Check size={18} /></div><div className="vayal-process-media"><img src={step.image} alt={step.alt} loading="lazy" decoding="async" /></div><div className="vayal-process-body"><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div><div className="vayal-process-footer"><strong>Book your drone spray service in seconds.</strong><span>Clear steps. Practical support. Built around your field.</span></div></div></section>

        <section id="pilot" className="vayal-section vayal-pilot"><div className="vayal-container vayal-two-col"><div className="vayal-photo-frame"><img src={REF_PILOT_IMAGE} alt="Raphael Drones founder looking toward a sharp flying agricultural drone while holding its controller in a crop field" loading="lazy" decoding="async" /><span>Pilot pathway / 04</span></div><div className="vayal-section-copy"><div className="vayal-kicker">Join as pilot / Field-ready training</div><h2>Take your skills<br /><em>to the field.</em></h2><p>Interested in agricultural drone work? Speak with the team about pilot training, RPTO pathways, practical field readiness, and the next approved step for your licence journey.</p><div className="vayal-pilot-points"><span><ShieldCheck size={16} /> Training pathway</span><span><MapPinned size={16} /> Field operations</span><span><Sprout size={16} /> Agriculture focus</span></div><a className="vayal-button vayal-button-dark" href="#pilot-support">Ask about pilot training <ArrowRight size={17} /></a></div></div></section>

        <section id="booking" className="vayal-section vayal-booking"><div className="vayal-container vayal-booking-grid"><div className="vayal-booking-context"><div className="vayal-kicker">Ready when your field is</div><h2>Tell us about<br /><em>your field.</em></h2><p>Share the essentials. We will help match your crop with the right field support and timing.</p></div><div className="vayal-booking-lead"><div className="vayal-support-panel" aria-label="Connect with Vayal Vimaani support"><div className="vayal-support-panel-head"><div className="vayal-support-mark"><Sprout size={22} /></div><div><div className="vayal-kicker">One simple next step</div><h3>Book through the Vayal support team.</h3></div></div><p>Open the app to share your field details and request a visit. If you prefer, our team is one tap away on phone or WhatsApp.</p><div className="vayal-support-actions"><a className="vayal-support-action vayal-support-action-primary" href="#" onClick={(event) => { event.preventDefault(); toast("Official app booking link will be added soon"); }}><span className="vayal-support-action-icon"><MapPinned size={19} /></span><span><b>Book in the app</b><small>Choose your field and service</small></span><ArrowRight size={17} /></a><a className="vayal-support-action" href="tel:+918667676987"><span className="vayal-support-action-icon"><Phone size={19} /></span><span><b>Talk to support</b><small>+91 86676 76987</small></span><ArrowRight size={17} /></a><a className="vayal-support-action" href="https://wa.me/918667676987" target="_blank" rel="noreferrer"><span className="vayal-support-action-icon"><MessageCircle size={19} /></span><span><b>Message on WhatsApp</b><small>Send your crop and village</small></span><ArrowRight size={17} /></a><a id="pilot-support" className="vayal-support-action vayal-support-action-pilot" href="tel:+918667676987"><span className="vayal-support-action-icon"><ShieldCheck size={19} /></span><span><b>Join as a pilot</b><small>Ask about training and field work</small></span><ArrowRight size={17} /></a></div><div className="vayal-support-note"><ShieldCheck size={16} /><span>Trained support · Clear next steps · No complicated form</span></div></div></div></div></section></main>

      <footer className="vayal-footer"><div className="vayal-container vayal-footer-grid"><div className="vayal-footer-brand"><img src={VAYAL_LOGO} alt="Vayal Vimaani" /><p>Farmer-first drone spraying.<br />Modern technology, traditional care.</p><a className="vayal-footer-cta" href="#booking">Plan a field visit <ArrowRight size={15} /></a></div><div><span className="vayal-footer-label">Explore</span><a href="#about">About Vayal</a><a href="#services">What we do</a><a href="#how-it-works">How it works</a><a href="#pilot">Join as pilot</a><a href="#booking">Book a spray</a></div><div><span className="vayal-footer-label">Stay connected</span><a href="tel:+918667676987">+91 86676 76987</a><a href="https://wa.me/918667676987" target="_blank" rel="noreferrer">WhatsApp chat</a><a href="mailto:vimanivayal@gmail.com">vimanivayal@gmail.com</a><a href="https://in.linkedin.com/company/raphael-drones-and-gis-services" target="_blank" rel="noreferrer">LinkedIn</a></div></div><div className="vayal-container vayal-footer-bottom"><span>© 2026 Vayal Vimaani</span><span>Tamil Nadu, India · Built for the field</span></div></footer>
    </div>
  );
}
