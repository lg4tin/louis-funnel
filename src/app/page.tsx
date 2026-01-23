const BOOKING_URL = "https://calendly.com/louisfortin97/30min"; // TODO: replace
const REEL_EMBED_URL = "https://www.youtube.com/watch?v=A0nLSHv_6Xg"; // TODO: replace (Vimeo/YouTube embed)

type FAQItem = { q: string; a: string };

const faqs: FAQItem[] = [
  {
    q: "How much does it cost?",
    a: "Projects start at $2,000 per 15 seconds. Most clients choose 30–45 seconds (30s = $4,000 · 45s = $6,000).",
  },
  { q: "Do we need a script already?", a: "No — scripting and structure are included." },
  {
    q: "How long does it take?",
    a: "First cut in 48–72 hours. Final delivery typically within a week.",
  },
  {
    q: "What if we need revisions?",
    a: "One revision round is included. Additional changes can be scoped if needed.",
  },
  { q: "Is this for paid ads or organic?", a: "Both. Built for performance, but great for launches and homepages too." },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="navInner">
          <div className="brand">Louis Fortin / Motion Design</div>
          <nav className="navLinks">
            <a href="#work">Work</a>
            <a href="#offer">Launch Ad</a>
            <a className="btn btnPrimary" href={BOOKING_URL}>
              Book a call
            </a>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <section className="hero" id="top">
          <div className="heroGrid">
            <div>
              <div className="kicker">SaaS Motion Ads</div>
              <h1>High-converting SaaS ads, built for clarity and clicks.</h1>
              <p className="sub">
                UI-first motion ads that turn complex SaaS products into clear, compelling 15–45 second videos — ready for
                paid social, launches, and landing pages.
              </p>

              <div className="row">
                <a className="btn btnPrimary" href={BOOKING_URL}>
                  Book a call
                </a>
                <a className="btn" href="#reel">
                  Watch reel (30s)
                </a>
              </div>

              <div className="chips">
                <span className="chip">From $2,000 / 15s</span>
                <span className="chip">SaaS-focused motion design</span>
                <span className="chip">Script → Design → Animation</span>
              </div>
            </div>

            <aside className="card" id="reel" aria-label="Showreel section">
              <div className="kicker">Reel</div>
              <h2>See the work</h2>
              <div className="embed">
                <iframe
                  src={REEL_EMBED_URL}
                  title="Showreel"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="fine" style={{ marginTop: 12 }}>
                Messaging-first structure • Clean UI motion • Built for performance
              </p>
            </aside>
          </div>
        </section>

        <div className="divider" />

        <section id="offer">
          <div className="kicker">Offer</div>
          <h2>The Launch Ad</h2>
          <p className="fine">
            Everything you need to launch or promote your product with a clear, high-impact motion ad.
          </p>

          <div className="grid" style={{ marginTop: 16 }}>
            <div className="card">
              <div className="kicker">What’s included</div>
              <ul>
                <li>15–45 second SaaS motion ad</li>
                <li>Script & storyboard (done for you)</li>
                <li>UI-driven design + animation</li>
                <li>Music & basic sound design</li>
                <li>1 round of revisions</li>
              </ul>

              <div className="offerPrice">$2,000 per 15 seconds</div>
              <div className="fine">30s = $4,000 · 45s = $6,000</div>
              <div className="fine" style={{ marginTop: 8 }}>
                First cut in 48–72 hours
              </div>

              <div className="row" style={{ marginTop: 14 }}>
                <a className="btn btnPrimary" href={BOOKING_URL}>
                  Book a call
                </a>
                <a className="btn" href="#faq">
                  FAQ
                </a>
              </div>
            </div>

            <div className="card">
              <div className="kicker">Best for</div>
              <ul>
                <li>Launch day hero ads</li>
                <li>Paid social (Meta, X, LinkedIn)</li>
                <li>Homepage hero sections</li>
                <li>Product reveals & feature drops</li>
              </ul>

              <div className="divider" style={{ margin: "14px 0" }} />

              <div className="kicker">Founders like</div>
              <ul>
                <li>Clear message before heavy animation</li>
                <li>Fast iteration and tight pacing</li>
                <li>Deliverables built for testing</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="work">
          <div className="kicker">Work</div>
          <h2>Example projects</h2>
          <p className="fine">
            Add 2–3 case studies. Keep them tight: goal, what you made, what it optimizes for.
          </p>

          <div className="grid" style={{ marginTop: 16 }}>
            <div className="card">
              <div className="kicker">Case study</div>
              <h3 className="cardTitle">Dev Tools Launch Ad</h3>
              <p className="fine">
                Goal: explain a complex workflow in under 30 seconds with UI clarity and a strong hook.
              </p>
              <div className="mediaPlaceholder" />
              <ul>
                <li>Immediate product understanding</li>
                <li>Scroll-stopping opening hook</li>
                <li>Clear value communication</li>
              </ul>
            </div>

            <div className="card">
              <div className="kicker">Case study</div>
              <h3 className="cardTitle">AI SaaS Feature Drop</h3>
              <p className="fine">
                Goal: highlight 3 new features with clean UI transitions and tight pacing for paid social.
              </p>
              <div className="mediaPlaceholder" />
              <ul>
                <li>Feature clarity</li>
                <li>Fast pacing, no fluff</li>
                <li>Conversion-ready structure</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section>
          <div className="kicker">Process</div>
          <h2>Simple, founder-friendly process</h2>

          <div className="steps" style={{ marginTop: 14 }}>
            <div className="card step">
              <h3>1) Discovery (15 min)</h3>
              <p>Audience, product angle, references.</p>
            </div>
            <div className="card step">
              <h3>2) Script & storyboard</h3>
              <p>You approve direction before animation.</p>
            </div>
            <div className="card step">
              <h3>3) Design & animation</h3>
              <p>Clean UI motion in AE/Blender.</p>
            </div>
            <div className="card step">
              <h3>4) Delivery</h3>
              <p>Exports ready for ads + landing pages.</p>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="faq" className="faq">
          <div className="kicker">FAQ</div>
          <h2>Quick answers</h2>

          <div className="faqList">
            {faqs.map((item) => (
              <details key={item.q} className="faqItem">
                <summary>{item.q}</summary>
                <p className="fine">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="divider" />

        <section className="card finalCta">
          <div className="finalCtaInner">
            <div>
              <div className="kicker">Ready?</div>
              <h2 style={{ margin: "8px 0 6px" }}>Launch your SaaS with a high-impact ad.</h2>
              <p className="fine" style={{ margin: 0 }}>
                Book a short call to see if the Launch Ad is a fit.
              </p>
            </div>
            <a className="btn btnPrimary" href={BOOKING_URL}>
              Book a call
            </a>
          </div>
        </section>
      </main>

      <a className="stickyCta" href={BOOKING_URL}>
        Book a call
      </a>
    </>
  );
}
