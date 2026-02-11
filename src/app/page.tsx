export default function Home() {
  const BOOKING_URL = "https://calendly.com/louisfortin97/30min?month=2026-02"; // TODO: replace (Calendly/SavvyCal)

  return (
    <main>
      {/* HERO */}
      <section className="section hero">
        <div className="container">
          <div className="pillRow">
            <span className="pill">Built for paid acquisition teams</span>
            <span className="pill">20–30s ads</span>
            <span className="pill">3 hook variations</span>
            <span className="pill">A/B test ready</span>
          </div>

          <h1 className="h1">Performance-Driven Animated Ads for Growth-Stage SaaS</h1>
          <p className="sub">
            We help B2B SaaS companies lower CPC, increase CTR, and turn cold traffic into demo bookings — in 20 seconds.
          </p>

          <div className="actions">
            <a className="btn btnPrimary" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book a Strategy Call
            </a>
            <a className="btn" href="#work">
              See Featured Work
            </a>
          </div>

          {/* VSL placeholder */}
          <p className="micro">
            Text-only for now. VSL will be added here later (90 seconds, placed directly under the hero).
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="container">
          <h2 className="h2">Your Creative Is the Bottleneck.</h2>
          <p className="fine">
            In 2025, everyone has access to the same targeting tools. Meta optimizes delivery. Google optimizes placement.
            The only real variable left is your ad creative.
          </p>

          <div className="grid3" style={{ marginTop: 16 }}>
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
              <h3 className="cardTitle">Expensive Scaling</h3>
              <p className="fine">When creative plateaus, scaling becomes a budget problem.</p>
            </div>
          </div>

          <p className="fine" style={{ marginTop: 14 }}>
            Creative isn’t decoration. It’s performance infrastructure.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="section">
        <div className="container">
          <h2 className="h2">Performance-Engineered SaaS Creative</h2>
          <p className="fine">
            We don’t create generic brand videos. Every ad is designed for cold paid traffic — not vanity metrics.
          </p>

          <div className="grid2" style={{ marginTop: 16 }}>
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
              <p className="fine">Hook concepts, storyboard direction, motion, and final ad exports built for paid distribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section" id="work">
        <div className="container">
          <h2 className="h2">Featured Work</h2>
          <p className="fine">Keep these tight: goal, what you made, what it optimizes for.</p>

          {/* FEATURED: make the first one your strongest */}
          <div className="featured" style={{ marginTop: 16 }}>
            <div className="card">
              <div className="kicker">Featured</div>
              <h3 className="cardTitle">Dev Tools Launch Ad</h3>
              <p className="fine">
                Goal: explain a complex workflow in under 30 seconds with UI clarity and a strong hook.
              </p>

              <div className="embed">
                <iframe
                  src="https://www.youtube.com/embed/=JPZEpHoe0CQ"
                  title="Featured Work"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <ul className="list">
                <li>Engineered hook structure</li>
                <li>UI-led transformation storytelling</li>
                <li>Modular scenes for variations</li>
              </ul>
            </div>

            <div className="stack">
              <div className="card">
                <div className="kicker">Goal</div>
                <p className="fine">
                  Lower CPC • Increase CTR • Improve demo bookings
                </p>
              </div>
              <div className="card">
                <div className="kicker">Format</div>
                <p className="fine">20–30s paid social ad</p>
              </div>
              <div className="card">
                <div className="kicker">Built for</div>
                <p className="fine">Cold traffic + scalable testing</p>
              </div>

              <a className="btn btnPrimary" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book a Strategy Call
              </a>
            </div>
          </div>

          {/* OPTIONAL: keep 1–2 more, not a giant gallery */}
          <div className="grid2" style={{ marginTop: 16 }}>
            <div className="card">
              <div className="kicker">Case study</div>
              <h3 className="cardTitle">AI SaaS Feature Drop</h3>
              <p className="fine">Goal: highlight 3 new features with clean UI transitions and tight pacing for paid social.</p>
              <div className="embed">
                <iframe
                  src="https://www.youtube.com/embed/QUanGuJMYys"
                  title="Case Study 2"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <ul className="list">
                <li>Feature clarity</li>
                <li>Fast pacing, no fluff</li>
                <li>Conversion-ready structure</li>
              </ul>
            </div>

            <div className="card">
              <div className="kicker">Case study</div>
              <h3 className="cardTitle">SaaS Product Workflow</h3>
              <p className="fine">Goal: make complex product value feel obvious in seconds.</p>
              <div className="embed">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                  title="Case Study 3"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <ul className="list">
                <li>Outcome-led copy</li>
                <li>Clean UI focus</li>
                <li>Strong CTA framing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="section" id="offer">
        <div className="container">
          <h2 className="h2">What You Get</h2>
          <p className="fine">A complete ad package designed for paid distribution — plus hooks you can A/B test.</p>

          <div className="grid3" style={{ marginTop: 16 }}>
            <div className="card">
              <div className="kicker">Deliverable</div>
              <h3 className="cardTitle">1× 20–30s SaaS Ad</h3>
              <p className="fine">Performance-first creative built from your product UI and positioning.</p>
            </div>
            <div className="card">
              <div className="kicker">Testing</div>
              <h3 className="cardTitle">3× Hook Variations</h3>
              <p className="fine">Different first 2–3 seconds to test for higher CTR.</p>
            </div>
            <div className="card">
              <div className="kicker">Delivery</div>
              <h3 className="cardTitle">Ad-Ready Exports</h3>
              <p className="fine">Sized and structured for paid channels.</p>
            </div>
          </div>

          <div className="grid2" style={{ marginTop: 16 }}>
            <div className="card">
              <div className="kicker">Inputs</div>
              <h3 className="cardTitle">Built from your Figma</h3>
              <p className="fine">Send UI screens, core claims, and your target persona. I handle storyboard → motion.</p>
            </div>
            <div className="card">
              <div className="kicker">Investment</div>
              <h3 className="cardTitle">$4,000–$5,000</h3>
              <p className="fine">Per ad package. Best for teams actively running paid acquisition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RISK + CTA */}
      <section className="section" id="book">
        <div className="container">
          <div className="card callout">
            <h2 className="h2">Reduce Your Risk.</h2>
            <p className="fine">
              Start by redirecting just 10% of your existing ad spend to this creative. If performance improves, scale it.
              If it underperforms, we optimize.
            </p>

            <div className="actions" style={{ marginTop: 14 }}>
              <a className="btn btnPrimary" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book a Strategy Call
              </a>
              <a className="btn" href="#work">
                View Work
              </a>
            </div>

            <p className="micro" style={{ marginTop: 10 }}>
              Limited monthly capacity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
