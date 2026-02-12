export default function Home() {
  const BOOKING_URL = "https://calendly.com/louisfortin97/30min?month=2026-02"; // TODO
  const EMAIL = "louisfortin97@gmail.com"; // optional

  const work = [
    {
      kicker: "Featured",
      title: "Dev Tools Launch Ad",
      goal: "Explain a complex workflow in under 30 seconds with UI clarity and a strong hook.",
      url: "https://www.youtube.com/embed/JPZEpHoe0CQ",
      bullets: ["Engineered hook structure", "UI-led transformation storytelling", "Modular scenes for variations"],
    },
    {
      kicker: "Case Study",
      title: "AI SaaS Feature Drop",
      goal: "Highlight 3 new features with clean UI transitions and tight pacing for paid social.",
      url: "https://www.youtube.com/embed/Jdy6sCt7gHw",
      bullets: ["Feature clarity", "Fast pacing, no fluff", "Conversion-ready structure"],
    },
    {
      kicker: "Case Study",
      title: "SaaS Product Workflow",
      goal: "Make complex product value feel obvious in seconds.",
      url: "https://www.youtube.com/embed/d4MsKyg8y2o",
      bullets: ["Outcome-led copy", "Clean UI focus", "Strong CTA framing"],
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="sec secHero">
        <div className="container center">
          <div className="pillRow">
            <span className="pill">Built for paid acquisition teams</span>
            <span className="pill">20–30s ads</span>
            <span className="pill">3 hook variations</span>
            <span className="pill">A/B test ready</span>
          </div>

          <h1 className="heroTitle">
            Performance-Driven Animated Ads for <span className="accent">Growth-Stage SaaS</span>
          </h1>

          <p className="heroSub">
            We help B2B SaaS companies lower CPC, increase CTR, and turn cold traffic into demo bookings — in 30 seconds.
          </p>

          <div className="actions center">
            <a className="btn btnPrimary" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book a Strategy Call
            </a>
            <a className="btn" href="#work">
              See Work
            </a>
          </div>


        </div>
      </section>

      {/* PROBLEM */}
      <section className="sec secDark">
        <div className="container">
          <div className="sectionHead">
            <span className="pill pillSoft">The problem</span>
            <h2 className="bigTitle">Your creative is the bottleneck.</h2>
            <p className="lead">
              In 2026, everyone has access to the same targeting tools. Meta optimizes delivery. Google optimizes placement.
              The only real variable left is your ad creative.
            </p>
          </div>

          <div className="grid3">
            <div className="card">
              <div className="kicker">Outcome</div>
              <h3 className="cardTitle">Higher CPC</h3>
              <p className="fine">If your ad doesn’t stop the scroll, you pay more for every click.</p>
            </div>
            <div className="card">
              <div className="kicker">Outcome</div>
              <h3 className="cardTitle">Lower CTR</h3>
              <p className="fine">Weak hooks mean more impressions needed per result.</p>
            </div>
            <div className="card">
              <div className="kicker">Outcome</div>
              <h3 className="cardTitle">Expensive scaling</h3>
              <p className="fine">When creative plateaus, scaling becomes a budget problem.</p>
            </div>
          </div>

          <div className="metrics">
            <div className="metric">
              <div className="metricNum">↓ 20–40%</div>
              <div className="metricLabel">Lower CPC</div>
            </div>
            <div className="metric">
              <div className="metricNum">↑ 30–60%</div>
              <div className="metricLabel">Higher CTR</div>
            </div>
            <div className="metric">
              <div className="metricNum">30 sec</div>
              <div className="metricLabel">Cold → Warm</div>
            </div>
          </div>

          <p className="fine" style={{ marginTop: 14 }}>
            Creative isn’t decoration. It’s performance infrastructure.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="sec secGlow">
        <div className="container">
          <div className="sectionHead">
            <span className="pill pillSoft">The solution</span>
            <h2 className="bigTitle">Performance-engineered SaaS creative.</h2>
            <p className="lead">
              We don’t create generic brand videos. Every ad is designed for cold paid traffic — not vanity metrics.
            </p>
          </div>

          <div className="grid2">
            <div className="card">
              <div className="kicker">Built around what wins</div>
              <ul className="list">
                <li>Precise persona call-outs</li>
                <li>Scroll-stopping hooks</li>
                <li>Visual product transformation</li>
                <li>Outcome-driven messaging</li>
                <li>Structured A/B testing</li>
              </ul>
            </div>

            <div className="card">
              <div className="kicker">Fast collaboration</div>
              <h3 className="cardTitle">You send</h3>
              <p className="fine">Figma screens (or UI exports), your target persona, and key claims.</p>

              <div style={{ height: 12 }} />

              <h3 className="cardTitle">I deliver</h3>
              <p className="fine">
                Hook concepts, storyboard direction, motion production, and final ad exports built for paid distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="sec secDark" id="work">
        <div className="container">
          <div className="sectionHead center">
            <span className="pill pillSoft">Work</span>
            <h2 className="bigTitle">A few examples.</h2>
            {/* <p className="lead">Keep these tight: goal, what was built, and what it optimizes for.</p> */}
          </div>

          <div className="workGrid">
            {work.map((item) => (
              <article className="workCard" key={item.title}>
                <div className="workTop">
                  <div className="kicker">{item.kicker}</div>
                  <h3 className="cardTitle">{item.title}</h3>
                  <p className="fine">{item.goal}</p>
                </div>

                <div className="embed">
                  <iframe
                    src={item.url}
                    title={item.title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <ul className="list">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="center" style={{ marginTop: 26 }}>
            <a className="btn btnPrimary" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="sec secGlow">
        <div className="container">
          <div className="sectionHead center">
            <span className="pill pillSoft">Client feedback</span>
            <h2 className="bigTitle">Simple, reliable execution.</h2>
          </div>

          <div className="testimonial">
            <p>
              “Louis is one of the best editors I’ve worked with — fast turnaround, great communication, and consistently
              strong creative decisions. He improves the pacing and clarity of every video.”
            </p>
            <span>— Client, YouTube Creator</span>
            <div className="micro" style={{ marginTop: 10 }}>
              Editing engagement (not a paid ads project).
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec secDark">
        <div className="container">
          <div className="sectionHead center">
            <span className="pill pillSoft">How it works</span>
            <h2 className="bigTitle">
              How our <span className="accent">production</span> works
            </h2>
            <p className="lead">A simple, repeatable system built for speed and performance.</p>
          </div>

          <div className="processGrid">
            <div className="step">
              <div className="stepNum">1</div>
              <h3>Strategy</h3>
              <p>Define persona, hook angle, and desired outcome.</p>
            </div>
            <div className="step">
              <div className="stepNum">2</div>
              <h3>Storyboard</h3>
              <p>Script + UI-driven scene plan for approval.</p>
            </div>
            <div className="step">
              <div className="stepNum">3</div>
              <h3>Production</h3>
              <p>Animation, sound design, and exports.</p>
            </div>
            <div className="step">
              <div className="stepNum">4</div>
              <h3>Test & Scale</h3>
              <p>Hook variations structured for A/B testing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="sec secGlow" id="offer">
        <div className="container">
          <div className="sectionHead center">
            <span className="pill pillSoft">Offer</span>
            <h2 className="bigTitle">Everything you need to launch.</h2>
            <p className="lead">A focused package designed for paid acquisition teams.</p>
          </div>

          <div className="offerGrid">
            <div className="offerCard featuredOffer">
              <div className="kicker">Primary package</div>
              <h3 className="offerTitle">SaaS Ad Package</h3>
              <p className="fine">Performance-driven creative built for cold traffic.</p>

              <div className="offerLine" />

              <ul className="list">
                <li>1× 20–30 second animated SaaS ad</li>
                <li>3× hook variations (first 2–3 seconds)</li>
                <li>Built from your Figma screens/UI export</li>
                <li>Structured for paid distribution</li>
                <li>A/B testing guidance</li>
              </ul>

              <div className="offerLine" />

              <div className="priceRow">
                <span className="price">$4,000–$5,000</span>
                <span className="priceNote">per package</span>
              </div>

              <a className="btn btnPrimary full" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book a Strategy Call
              </a>
            </div>

            <div className="offerCard">
              <div className="kicker">Good to know</div>
              <h3 className="offerTitle">Timeline</h3>
              <p className="fine">Typical turnaround: 7–14 days depending on scope and feedback speed.</p>

              <div className="offerLine" />

              <ul className="list">
                <li>Storyboard approval</li>
                <li>Motion pass</li>
                <li>Revisions</li>
                <li>Final exports</li>
              </ul>

              <div className="offerLine" />

              <h3 className="offerTitle">Contact</h3>
              <p className="fine">Prefer email? {EMAIL}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec secDark" id="faq">
        <div className="container">
          <div className="sectionHead center">
            <span className="pill pillSoft">FAQ</span>
            <h2 className="bigTitle">Everything you need to know.</h2>
          </div>

          <div className="faq">
            <details className="faqItem">
              <summary>How do we get started?</summary>
              <p>Book a call. If it’s a fit, we’ll align on the goal, hook angles, and UI screens to build from.</p>
            </details>

            <details className="faqItem">
              <summary>What do you need from us?</summary>
              <p>Figma screens (or UI export), target persona, key claims, and any references you like.</p>
            </details>

            <details className="faqItem">
              <summary>Do you do retainers?</summary>
              <p>Available after an initial project when it’s a fit and you’re actively testing creative.</p>
            </details>

            <details className="faqItem">
              <summary>Do you also take general motion work?</summary>
              <p>Yes — but this funnel is focused on performance SaaS ads because that’s my primary positioning.</p>
            </details>

            <details className="faqItem">
              <summary>What if performance doesn’t improve?</summary>
              <p>We’ll iterate on the hooks and pacing. The goal is to create assets that support scalable testing.</p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sec secGlow">
        <div className="container center">
          <h2 className="finalTitle">
            Your SaaS deserves better than <span className="accent">expensive ads</span>.
          </h2>
          <p className="lead center" style={{ maxWidth: 70 + "ch" }}>
            Book a quick strategy call. If there’s a fit, we’ll map the first ad and hook variations.
          </p>

          <div className="actions center" style={{ marginTop: 22 }}>
            <a className="btn btnPrimary" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book a Strategy Call
            </a>
            <a className="btn" href="#work">
              View Work
            </a>
          </div>

          <div className="micro" style={{ marginTop: 14 }}>
            Limited monthly capacity.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footerRow">
          <div>© {new Date().getFullYear()} Louis Fortin Studio</div>
          <div className="footerLinks">
            <a href="#work">Work</a>
            <a href="#offer">Offer</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
