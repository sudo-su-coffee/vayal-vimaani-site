/* STYLE REMINDER — Vayal Vimaani: farmer-first, optimistic, practical, readable, and warm. Use field green, soil terracotta, harvest gold, cream surfaces, clear CTAs, and accessible motion. */
import { ArrowRight, Check, ChevronDown, Leaf, MapPinned, Menu, MessageCircle, Phone, ShieldCheck, Sprout, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const VAYAL_LOGO = "/manus-storage/vayal-vimaani-logo_a1343ffe.webp";
const HERO_IMAGE = "/manus-storage/vayal-hero-field-spray_0fb54e0f.jpg";
const FARMER_IMAGE = "/manus-storage/vayal-farmer-consult_07cda33c.jpg";
const DRONE_IMAGE = "/manus-storage/vayal-drone-detail_54eb4606.jpg";
const APP_IMAGE = "/manus-storage/vayal-app-spray_b1e3338e.jpg";
const BOOKING_IMAGE = "/manus-storage/vayal-booking-journey_8ba9e6b6.png";

const services = [
  { number: "01", title: "Crop spraying", text: "Drone-based application support for pesticides, nutrients, and crop-care windows." },
  { number: "02", title: "Field work", text: "Practical aerial support for farms, plots, mapping, and everyday field operations." },
  { number: "03", title: "Subsidy guidance", text: "A clear starting point to understand eligible government schemes and next steps." },
];

const steps = [
  ["01", "Tell us about your field", "Share your crop, village, acreage, and preferred spray date."],
  ["02", "We plan the visit", "Our team matches the work with the right drone and trained pilot."],
  ["03", "Your field gets covered", "We arrive, fly safely, and keep the process simple."],
];

export default function Vayal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ta">("en");

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
            <a href="#subsidy" onClick={() => setMenuOpen(false)}>Subsidy guidance</a>
            <a href="#booking" onClick={() => setMenuOpen(false)} className="vayal-nav-book">Book a spray <ArrowRight size={15} /></a>
          </nav>
          <div className="vayal-nav-tools">
            <button className="vayal-lang" type="button" onClick={() => setLanguage(language === "en" ? "ta" : "en")} aria-label="Change language">{language === "en" ? "தமிழ்" : "EN"}</button>
            <a className="vayal-call-mini" href="tel:+918667676987" aria-label="Call Vayal Vimaani"><Phone size={16} /></a>
            <button className="vayal-menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="vayal-hero">
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

        <section className="vayal-stats" aria-label="Vayal Vimaani highlights"><div className="vayal-container vayal-stat-grid"><div><strong>Up to 90%</strong><span>less water used</span></div><div><strong>50%+</strong><span>pesticide reduction potential</span></div><div><strong>~7 min</strong><span>per acre average</span></div><div><strong>₹500</strong><span>precision-farming reference / acre</span></div></div></section>

        <section id="about" className="vayal-section vayal-about"><div className="vayal-container vayal-two-col"><div className="vayal-photo-frame"><img src={FARMER_IMAGE} alt="Farmer and drone pilot discussing a field plan" loading="lazy" decoding="async" /><span>Field conversation / 01</span></div><div className="vayal-section-copy"><div className="vayal-kicker">About Vayal Vimaani</div><h2>Bringing the sky<br /><em>to your vayal.</em></h2><p>Vayal Vimaani means “field aircraft”. It is a farmer-first drone service that brings practical crop care and trained field support closer to growers.</p><p>Tell us what you grow and where you farm. We will help you understand the next practical step for spraying, field work, and eligible scheme guidance.</p><a className="vayal-button vayal-button-dark" href="#booking">Plan a field visit <ArrowRight size={17} /></a></div></div></section>

        <section id="services" className="vayal-section vayal-services"><div className="vayal-container"><div className="vayal-section-intro"><div><div className="vayal-kicker">Farmer-first / 03 ways we help</div><h2>Useful in the field.<br /><em>Easy to begin.</em></h2></div><p>Start with the work you need today. Our team can guide the right drone-based support for your field.</p></div><div className="vayal-service-list">{services.map((service) => <article key={service.number} className="vayal-service-card"><div className="vayal-service-index"><span>{service.number}</span><i>{service.number === "01" ? <Sprout size={18} /> : service.number === "02" ? <MapPinned size={18} /> : <ShieldCheck size={18} />}</i></div><div><h3>{service.title}</h3><p>{service.text}</p></div><ArrowRight size={18} /></article>)}</div><div className="vayal-field-proof"><img src={DRONE_IMAGE} alt="Agricultural drone flying over crop rows during a field operation" loading="lazy" decoding="async" /><div className="vayal-field-proof-caption"><span>FIELD PROOF / 02</span><strong>Right drone.<br />Right timing.</strong><small>Planned for your crop and conditions.</small></div></div></div></section>

        <section id="how-it-works" className="vayal-section vayal-how"><div className="vayal-container vayal-two-col"><div className="vayal-section-copy"><div className="vayal-kicker">A simple booking flow</div><h2>From your call<br /><em>to your crop.</em></h2><p>No complicated process. Share a few details, speak with the team, and get a field visit planned around your work.</p><div className="vayal-booking-visual"><img src={BOOKING_IMAGE} alt="Farmer selecting a field on a phone while a coordinator plans a drone visit over crop rows" loading="lazy" decoding="async" /><div className="vayal-booking-visual-shade" /><div className="vayal-booking-visual-label"><span>FIELD VISIT / SIMPLE FLOW</span><strong>Choose your field.<br />We handle the next step.</strong></div><div className="vayal-booking-path" aria-hidden="true"><span>01</span><i /><span>02</span><i /><span>03</span></div></div></div><div className="vayal-step-list">{steps.map(([number, title, text]) => <div className="vayal-step" key={number}><div className="vayal-step-icon">{number === "01" ? <Phone size={19} /> : number === "02" ? <MapPinned size={19} /> : <ShieldCheck size={19} />}<b>{number}</b></div><div className="vayal-step-body"><h3>{title}</h3><p>{text}</p></div><Check size={17} /></div>)}</div></div></section>

        <section id="subsidy" className="vayal-section vayal-subsidy"><div className="vayal-container vayal-subsidy-grid"><div className="vayal-subsidy-copy"><div className="vayal-kicker">Government scheme guidance</div><h2>Understand support<br /><em>before you apply.</em></h2><p>Government support and subsidy eligibility can change by scheme, location, farmer category, and application window. We help you understand where to begin and what to ask next.</p><div className="vayal-guidance-points"><span><Sprout size={17} /> Know the scheme</span><span><ShieldCheck size={17} /> Check eligibility</span><span><ArrowRight size={17} /> Take the next step</span></div></div><div className="vayal-subsidy-card"><div className="vayal-card-mark"><Leaf size={19} /><span>Support desk / 03</span></div><strong>Bring your questions.</strong><p>Our team can help you prepare for a conversation with the relevant local or government office. Final approval always depends on the official scheme and authority.</p><a href="#booking" className="vayal-button vayal-button-dark">Ask about support <ArrowRight size={16} /></a></div></div></section>

        <section className="vayal-section vayal-app"><div className="vayal-container vayal-app-grid"><div className="vayal-app-image"><img src={APP_IMAGE} alt="Mobile booking concept for agricultural drone spraying" loading="lazy" decoding="async" /></div><div className="vayal-section-copy"><div className="vayal-kicker">Vayal Vimaani / Mobile-first</div><h2>Book support<br /><em>from your phone.</em></h2><p>When the app is ready, farmers can share field details, request a spray visit, and follow the next step from one simple place.</p><div className="vayal-store-placeholder"><a href="#" onClick={(event) => { event.preventDefault(); toast("Android app link coming soon"); }} aria-label="Vayal Vimaani Android app"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 3.9a1.3 1.3 0 0 0-.5 1v14.2a1.3 1.3 0 0 0 .5 1l8-8.1-8-8.1Z" fill="currentColor"/><path d="m13 11.1 2.4-2.4 4.7 2.7c.8.5.8 1.7 0 2.2l-4.7 2.7-2.4-2.4-1.2-1.4 1.2-1.4Z" fill="currentColor"/><path d="m3.9 3.5 8.7 8.8-1.2 1.4-8-8.1c.1-.8.2-1.4.5-2.1Z" fill="currentColor" opacity=".65"/><path d="m3.9 20.5 8-8.1 1.2 1.4-8.7 8.8c-.3-.7-.4-1.3-.5-2.1Z" fill="currentColor" opacity=".45"/></svg>Google Play</a><a href="#" onClick={(event) => { event.preventDefault(); toast("iPhone app link coming soon"); }} aria-label="Vayal Vimaani iPhone app"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.9 12.6c0-2 1.7-3 1.8-3.1-1-.1-2.1-1.1-3.5-1.1-1.3 0-2.4.8-3 .8-.7 0-1.6-.8-2.7-.8-1.4 0-2.7.8-3.4 2.1-1.5 2.6-.4 6.4 1 8.5.7 1 1.5 2.2 2.6 2.2 1 0 1.4-.7 2.7-.7s1.7.7 2.7.7c1.1 0 1.8-1 2.5-2.1.8-1.1 1.1-2.2 1.1-2.3-.1 0-1.8-.7-1.8-2.2ZM14.8 7c.6-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.2-.5 2.8-1.3Z" fill="currentColor"/></svg>App Store</a></div></div></div></section>

        <section id="booking" className="vayal-section vayal-booking"><div className="vayal-container vayal-booking-grid"><div className="vayal-booking-lead"><div className="vayal-kicker">Ready when your field is</div><h2>Tell us about<br /><em>your field.</em></h2><p>Share the essentials. We will help match your crop with the right field support and timing.</p><div className="vayal-support-panel" aria-label="Connect with Vayal Vimaani support"><div className="vayal-support-panel-head"><div className="vayal-support-mark"><Sprout size={22} /></div><div><div className="vayal-kicker">One simple next step</div><h3>Book through the Vayal support team.</h3></div></div><p>Open the app to share your field details and request a visit. If you prefer, our team is one tap away on phone or WhatsApp.</p><div className="vayal-support-actions"><a className="vayal-support-action vayal-support-action-primary" href="#" onClick={(event) => { event.preventDefault(); toast("Official app booking link will be added soon"); }}><span className="vayal-support-action-icon"><MapPinned size={19} /></span><span><b>Book in the app</b><small>Choose your field and service</small></span><ArrowRight size={17} /></a><a className="vayal-support-action" href="tel:+918667676987"><span className="vayal-support-action-icon"><Phone size={19} /></span><span><b>Talk to support</b><small>+91 86676 76987</small></span><ArrowRight size={17} /></a><a className="vayal-support-action" href="https://wa.me/918667676987" target="_blank" rel="noreferrer"><span className="vayal-support-action-icon"><MessageCircle size={19} /></span><span><b>Message on WhatsApp</b><small>Send your crop and village</small></span><ArrowRight size={17} /></a></div><div className="vayal-support-note"><ShieldCheck size={16} /><span>Trained support · Clear next steps · No complicated form</span></div></div></div></div></section>
      </main>

      <footer className="vayal-footer"><div className="vayal-container vayal-footer-grid"><div className="vayal-footer-brand"><img src={VAYAL_LOGO} alt="Vayal Vimaani" /><p>Farmer-first drone spraying.<br />Modern technology, traditional care.</p><a className="vayal-footer-cta" href="#booking">Plan a field visit <ArrowRight size={15} /></a></div><div><span className="vayal-footer-label">Explore</span><a href="#about">About Vayal</a><a href="#services">What we do</a><a href="#how-it-works">How it works</a><a href="#booking">Book a spray</a></div><div><span className="vayal-footer-label">Stay connected</span><a href="tel:+918667676987">+91 86676 76987</a><a href="https://wa.me/918667676987" target="_blank" rel="noreferrer">WhatsApp chat</a><a href="mailto:vimanivayal@gmail.com">vimanivayal@gmail.com</a><a href="https://in.linkedin.com/company/raphael-drones-and-gis-services" target="_blank" rel="noreferrer">LinkedIn</a></div></div><div className="vayal-container vayal-footer-bottom"><span>© 2026 Vayal Vimaani</span><span>Tamil Nadu, India · Built for the field</span></div></footer>
    </div>
  );
}
