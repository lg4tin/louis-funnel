"use client";

export default function HomePage() {
  const BOOKING_URL = "https://calendly.com/louisfortin97/30min";
  const EMAIL = "louisfortin97@gmail.com";
  const ACCENT = "#7CC4FF";

  const featuredVideos = [
    {
      label: "Featured",
      title: "AI-Native CRM Built for Speed",
      description:
        "A premium SaaS ad built to make a complex product feel clear, modern, and instantly valuable.",
      embedUrl: "https://www.youtube.com/embed/JPZEpHoe0CQ",
    },
    {
      label: "Case Study",
      title: "Ship Faster. Deploy Instantly.",
      description:
        "Structured for paid social and product clarity, with tight pacing and outcome-first messaging.",
      embedUrl: "https://www.youtube.com/embed/Jdy6sCt7gHw",
    },
    {
      label: "Case Study",
      title: "From Manual Processing to Flow",
      description:
        "A before/after transformation ad designed to turn product complexity into something obvious.",
      embedUrl: "https://www.youtube.com/embed/d4MsKyg8y2o",
    },
  ];

  const testimonialVideos = [
    {
      name: "Client Testimonial 01",
      role: "Founder / Marketing Lead",
      embedUrl: "https://www.youtube.com/embed/c88hK0_r7Dc",
    },
    {
      name: "Client Testimonial 02",
      role: "Growth / Product Team",
      embedUrl: "https://www.youtube.com/embed/Jdy6sCt7gHw",
    },
  ];

  return (
    <>
      <main className="lf-page">
        <header className="lf-headerWrap">
          <div className="lf-header">
            <a href="#top" className="lf-logo">
              <div className="lf-logoMark">LF</div>
              <div className="lf-logoText">
                <span className="lf-logoTop">LOUIS FORTIN</span>
                <span className="lf-logoBottom">Studio</span>
              </div>
            </a>

            <nav className="lf-nav">
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#faq">FAQ</a>
            </nav>

            <div className="lf-headerActions">
              <a href="/packages" className="lf-btn lf-btn-secondary">
                Look at Packages
              </a>
              <a href={BOOKING_URL} target="_blank" className="lf-btn lf-btn-primary">
                Book a Call →
              </a>
            </div>
          </div>
        </header>

        <section id="top" className="lf-hero">
          <div className="lf-container lf-heroGrid">
            <div className="lf-card lf-heroCard">
              <div className="lf-pillRow">
                <span className="lf-pill">Built for SaaS teams</span>
                <span className="lf-pill">20–30 sec ads</span>
                <span className="lf-pill">Hook variations</span>
                <span className="lf-pill">Launch-ready creative</span>
              </div>

              <p className="lf-kicker">PREMIUM SAAS ADS</p>

              <h1 className="lf-heroTitle">
                Animated SaaS ads that make your product feel{" "}
                <span style={{ color: ACCENT }}>clear, premium, and worth clicking.</span>
              </h1>

              <p className="lf-heroSub">
                I help SaaS, Tech, and AI companies turn complex products into sharp launch videos,
                homepage videos, and paid social ads that explain the value fast.
              </p>

              <div className="lf-heroActions">
                <a href={BOOKING_URL} target="_blank" className="lf-btn lf-btn-primary">
                  Book a Call →
                </a>
                <a href="/packages" className="lf-btn lf-btn-secondary">
                  Look at Packages
                </a>
              </div>

              <div className="lf-statGrid">
                <div className="lf-statCard">
                  <strong>SaaS-first</strong>
                  <span>Built for software, AI tools, and B2B products.</span>
                </div>
                <div className="lf-statCard">
                  <strong>Clear process</strong>
                  <span>Strategy, concept, animation, revisions, delivery.</span>
                </div>
                <div className="lf-statCard">
                  <strong>Premium style</strong>
                  <span>Clean visuals, modern UI framing, and sharp pacing.</span>
                </div>
              </div>
            </div>

            <div className="lf-sideStack">
              <div className="lf-card">
                <p className="lf-kicker">VSL PLACEHOLDER</p>
                <h3 className="lf-sideTitle">Put your VSL here when you record it</h3>

                <div className="lf-videoPlaceholder">
                  <div className="lf-play">▶</div>
                  <div>
                    <strong>Video Sales Letter Placeholder</strong>
                    <p>
                      Replace this block later with your Loom, YouTube embed, or hosted video.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lf-accentCard" style={{ background: ACCENT }}>
                <p className="lf-kicker lf-kicker-dark">BEST FIT</p>
                <h3>
                  AI tools, B2B SaaS, and product teams that need better creative than generic
                  dashboard ads.
                </h3>
                <div className="lf-tagRow">
                  <span>Paid social ads</span>
                  <span>Launch videos</span>
                  <span>Homepage videos</span>
                  <span>Spec-style creative</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lf-logoStripWrap">
          <div className="lf-container">
            <div className="lf-logoStrip">
              <span>AI PRODUCTS</span>
              <span>B2B SAAS</span>
              <span>STARTUPS</span>
              <span>LAUNCH CAMPAIGNS</span>
              <span>HOMEPAGE VIDEO</span>
              <span>PAID SOCIAL</span>
            </div>
          </div>
        </section>

        <section id="work" className="lf-section">
          <div className="lf-container">
            <p className="lf-kicker">FEATURED WORK</p>
            <div className="lf-sectionHead">
              <h2>
                The homepage should feel like a real offer page, not just a portfolio dump.
              </h2>
              <a href="/packages" className="lf-btn lf-btn-secondary">
                View Packages
              </a>
            </div>

            <div className="lf-workGrid">
              <div className="lf-videoCard lf-videoCard-large">
                <div className="lf-videoMeta">
                  <span>{featuredVideos[0].label}</span>
                  <h3>{featuredVideos[0].title}</h3>
                  <p>{featuredVideos[0].description}</p>
                </div>
                <div className="lf-embedWrap">
                  <iframe
                    src={featuredVideos[0].embedUrl}
                    title={featuredVideos[0].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="lf-stackCol">
                {featuredVideos.slice(1).map((video) => (
                  <div className="lf-videoCard" key={video.title}>
                    <div className="lf-videoMeta">
                      <span>{video.label}</span>
                      <h3>{video.title}</h3>
                      <p>{video.description}</p>
                    </div>
                    <div className="lf-embedWrap">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lf-section">
          <div className="lf-container">
            <div className="lf-offerGrid">
              <div className="lf-offerCard">
                <p className="lf-kicker">DISCOVER THE OFFER</p>
                <h2>Launch-Ready SaaS Ad</h2>

                <div className="lf-priceRow">
                  <span className="lf-price">$2,500</span>
                  <span className="lf-priceSub">starting at</span>
                </div>

                <p className="lf-offerCopy">
                  In 20–30 seconds, your product becomes easier to understand and more
                  memorable—perfect for paid social, landing pages, and outreach.
                </p>

                <ul className="lf-featureList">
                  <li>Strategy + messaging direction</li>
                  <li>20–30 second premium product ad</li>
                  <li>Sound design</li>
                  <li>2 rounds of revisions</li>
                  <li>Launch-ready delivery</li>
                  <li>Built for SaaS and AI positioning</li>
                </ul>

                <div className="lf-offerActions">
                  <a href={BOOKING_URL} target="_blank" className="lf-btn lf-btn-primary">
                    Book a Call →
                  </a>
                  <a href="/packages" className="lf-btn lf-btn-secondary">
                    Full Packages
                  </a>
                </div>
              </div>

              <div className="lf-offerVideos">
                <div className="lf-videoCard">
                  <div className="lf-videoMeta">
                    <span>Hero Video</span>
                    <h3>Main featured project</h3>
                  </div>
                  <div className="lf-embedWrap">
                    <iframe
                      src={featuredVideos[0].embedUrl}
                      title="Hero Project"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="lf-videoCard">
                  <div className="lf-videoMeta">
                    <span>Proof</span>
                    <h3>Testimonial or case-study video</h3>
                  </div>
                  <div className="lf-embedWrap">
                    <iframe
                      src={testimonialVideos[0].embedUrl}
                      title="Testimonial Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="lf-section">
          <div className="lf-container">
            <div className="lf-card lf-processWrap">
              <p className="lf-kicker">PROCESS</p>
              <h2>From kickoff to launch in a simple, premium workflow.</h2>

              <div className="lf-processGrid">
                <div className="lf-processCard">
                  <span>01</span>
                  <h3>Strategy</h3>
                  <p>We clarify the audience, offer, angle, and what the ad needs to do.</p>
                </div>
                <div className="lf-processCard">
                  <span>02</span>
                  <h3>Concept</h3>
                  <p>Messaging, script structure, and visual direction get aligned first.</p>
                </div>
                <div className="lf-processCard">
                  <span>03</span>
                  <h3>Production</h3>
                  <p>The ad gets designed and animated with a clean, modern SaaS feel.</p>
                </div>
                <div className="lf-processCard">
                  <span>04</span>
                  <h3>Delivery</h3>
                  <p>You get final files ready for launch, plus a cleaner client experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="lf-section">
          <div className="lf-container">
            <p className="lf-kicker">TESTIMONIALS</p>
            <div className="lf-sectionHead">
              <h2>Give warm traffic trust signals with video proof, not just text.</h2>
            </div>

            <div className="lf-testimonialGrid">
              <div className="lf-quoteCard">
                <p className="lf-quoteMark">“</p>
                <p className="lf-quote">
                  Louis made the product feel more premium and much easier to understand in
                  under 30 seconds.
                </p>
                <div className="lf-quoteMeta">
                  <strong>Future Client Name</strong>
                  <span>Founder / Head of Marketing</span>
                </div>
              </div>

              <div className="lf-stackCol">
                {testimonialVideos.map((video) => (
                  <div className="lf-videoCard" key={video.name}>
                    <div className="lf-videoMeta">
                      <span>{video.role}</span>
                      <h3>{video.name}</h3>
                    </div>
                    <div className="lf-embedWrap">
                      <iframe
                        src={video.embedUrl}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lf-section">
          <div className="lf-container">
            <div className="lf-ctaBand" style={{ background: ACCENT }}>
              <div>
                <p className="lf-kicker lf-kicker-dark">READY TO LAUNCH?</p>
                <h2>Need a homepage video, launch ad, or premium SaaS creative package?</h2>
                <p>
                  You don’t need a giant agency. You need a clear offer, strong motion design,
                  and a site that makes the right clients want to talk.
                </p>
              </div>

              <div className="lf-ctaActions">
                <a href={BOOKING_URL} target="_blank" className="lf-btn lf-btn-dark">
                  Book a Call →
                </a>
                <a href={`mailto:${EMAIL}`} className="lf-btn lf-btn-light">
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="lf-section lf-faqSection">
          <div className="lf-container">
            <div className="lf-card">
              <p className="lf-kicker">FAQ</p>
              <h2>Keep the site simple, clear, and easy to trust.</h2>

              <div className="lf-faqGrid">
                <details>
                  <summary>What kinds of companies do you work with?</summary>
                  <p>
                    Mostly SaaS, AI, and B2B software companies that need paid social ads,
                    launch videos, or homepage product videos.
                  </p>
                </details>

                <details>
                  <summary>Do you help with scripting and messaging?</summary>
                  <p>
                    Yes. The goal is not just pretty motion. The messaging has to make the
                    product feel clear and valuable.
                  </p>
                </details>

                <details>
                  <summary>Can I start with one video?</summary>
                  <p>
                    Yes. Start with one flagship video, then expand into more variants later.
                  </p>
                </details>

                <details>
                  <summary>Do you have a pricing page?</summary>
                  <p>
                    Yes. The header button can take people to a separate packages page at
                    <strong> /packages</strong>.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .lf-page {
          background: #f7f8fa;
          color: #111111;
          min-height: 100vh;
        }

        .lf-container {
          width: min(1280px, calc(100% - 32px));
          margin: 0 auto;
        }

        .lf-headerWrap {
          position: sticky;
          top: 0;
          z-index: 50;
          padding: 16px 0 0;
          background: linear-gradient(to bottom, rgba(247, 248, 250, 0.92), rgba(247, 248, 250, 0));
          backdrop-filter: blur(8px);
        }

        .lf-header {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(17, 17, 17, 0.06);
          border-radius: 28px;
          padding: 16px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .lf-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: inherit;
          min-width: fit-content;
        }

        .lf-logoMark {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: ${ACCENT};
          display: grid;
          place-items: center;
          font-weight: 800;
          color: #111;
        }

        .lf-logoText {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .lf-logoTop {
          font-size: 11px;
          letter-spacing: 0.18em;
          font-weight: 700;
          color: rgba(17, 17, 17, 0.5);
        }

        .lf-logoBottom {
          font-size: 22px;
          font-weight: 700;
          margin-top: 4px;
        }

        .lf-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .lf-nav a {
          text-decoration: none;
          color: rgba(17, 17, 17, 0.82);
          font-size: 15px;
          font-weight: 600;
        }

        .lf-headerActions {
          display: flex;
          gap: 12px;
        }

        .lf-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 999px;
          padding: 14px 22px;
          font-size: 14px;
          font-weight: 700;
          transition: 0.2s ease;
          white-space: nowrap;
        }

        .lf-btn-primary {
          background: ${ACCENT};
          color: #111111;
        }

        .lf-btn-primary:hover {
          transform: translateY(-1px);
          opacity: 0.95;
        }

        .lf-btn-secondary {
          background: #ffffff;
          color: #111111;
          border: 1px solid rgba(17, 17, 17, 0.1);
        }

        .lf-btn-secondary:hover {
          background: #f2f2f2;
        }

        .lf-btn-dark {
          background: #111111;
          color: #ffffff;
        }

        .lf-btn-light {
          background: rgba(255, 255, 255, 0.85);
          color: #111111;
          border: 1px solid rgba(17, 17, 17, 0.08);
        }

        .lf-hero {
          padding: 26px 0 0;
        }

        .lf-heroGrid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
          align-items: stretch;
        }

        .lf-card {
          background: #ffffff;
          border: 1px solid rgba(17, 17, 17, 0.06);
          border-radius: 36px;
          padding: 34px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.05);
        }

        .lf-heroCard {
          padding: 42px;
        }

        .lf-pillRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 22px;
        }

        .lf-pill {
          padding: 10px 14px;
          border-radius: 999px;
          background: #f3f5f7;
          border: 1px solid rgba(17, 17, 17, 0.06);
          font-size: 13px;
          font-weight: 700;
          color: rgba(17, 17, 17, 0.74);
        }

        .lf-kicker {
          font-size: 13px;
          letter-spacing: 0.18em;
          font-weight: 800;
          color: #2e82d9;
          margin: 0 0 14px;
        }

        .lf-kicker-dark {
          color: rgba(17, 17, 17, 0.65);
        }

        .lf-heroTitle {
          font-size: 68px;
          line-height: 1.02;
          letter-spacing: -0.04em;
          font-weight: 700;
          margin: 0;
          max-width: 900px;
        }

        .lf-heroSub {
          margin: 22px 0 0;
          font-size: 20px;
          line-height: 1.7;
          color: rgba(17, 17, 17, 0.64);
          max-width: 760px;
        }

        .lf-heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .lf-statGrid {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .lf-statCard {
          background: #f7f8fa;
          border: 1px solid rgba(17, 17, 17, 0.05);
          border-radius: 24px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .lf-statCard strong {
          font-size: 16px;
        }

        .lf-statCard span {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(17, 17, 17, 0.6);
        }

        .lf-sideStack {
          display: grid;
          gap: 24px;
        }

        .lf-sideTitle {
          font-size: 30px;
          line-height: 1.15;
          margin: 0 0 18px;
        }

        .lf-videoPlaceholder {
          min-height: 320px;
          background: #111111;
          border-radius: 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          gap: 18px;
          padding: 28px;
        }

        .lf-videoPlaceholder p {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.7;
        }

        .lf-play {
          width: 72px;
          height: 72px;
          border-radius: 999px;
          background: white;
          color: #111;
          display: grid;
          place-items: center;
          font-size: 26px;
          padding-left: 4px;
        }

        .lf-accentCard {
          border-radius: 36px;
          padding: 34px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
        }

        .lf-accentCard h3 {
          font-size: 34px;
          line-height: 1.15;
          margin: 0;
          color: #111111;
        }

        .lf-tagRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .lf-tagRow span {
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(17, 17, 17, 0.06);
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
        }

        .lf-logoStripWrap {
          padding: 24px 0 0;
        }

        .lf-logoStrip {
          background: white;
          border: 1px solid rgba(17, 17, 17, 0.06);
          border-radius: 30px;
          padding: 24px 28px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 18px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        }

        .lf-logoStrip span {
          color: rgba(17, 17, 17, 0.38);
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .lf-section {
          padding: 72px 0 0;
        }

        .lf-sectionHead {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }

        .lf-sectionHead h2,
        .lf-card h2,
        .lf-ctaBand h2 {
          font-size: 52px;
          line-height: 1.06;
          letter-spacing: -0.035em;
          margin: 0;
          max-width: 820px;
        }

        .lf-workGrid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 24px;
        }

        .lf-stackCol {
          display: grid;
          gap: 24px;
        }

        .lf-videoCard {
          background: white;
          border: 1px solid rgba(17, 17, 17, 0.06);
          border-radius: 32px;
          padding: 18px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.05);
        }

        .lf-videoCard-large {
          padding: 20px;
        }

        .lf-videoMeta {
          padding: 10px 6px 18px;
        }

        .lf-videoMeta span {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: #2e82d9;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .lf-videoMeta h3 {
          margin: 0;
          font-size: 28px;
          line-height: 1.15;
        }

        .lf-videoMeta p {
          margin: 10px 0 0;
          color: rgba(17, 17, 17, 0.62);
          line-height: 1.7;
          font-size: 15px;
        }

        .lf-embedWrap {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          overflow: hidden;
          border-radius: 24px;
          background: #111111;
        }

        .lf-embedWrap iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .lf-offerGrid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 24px;
          align-items: stretch;
        }

        .lf-offerCard {
          background: #111111;
          color: white;
          border-radius: 36px;
          padding: 40px;
          box-shadow: 0 16px 46px rgba(0, 0, 0, 0.16);
        }

        .lf-offerCard h2 {
          font-size: 44px;
          line-height: 1.05;
          margin: 0;
        }

        .lf-priceRow {
          display: flex;
          align-items: end;
          gap: 12px;
          margin-top: 20px;
        }

        .lf-price {
          font-size: 84px;
          line-height: 0.95;
          font-weight: 800;
          letter-spacing: -0.05em;
        }

        .lf-priceSub {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.7);
          padding-bottom: 10px;
          font-weight: 700;
        }

        .lf-offerCopy {
          margin: 18px 0 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 18px;
          line-height: 1.8;
          max-width: 720px;
        }

        .lf-featureList {
          list-style: none;
          padding: 0;
          margin: 28px 0 0;
          display: grid;
          gap: 14px;
        }

        .lf-featureList li {
          position: relative;
          padding-left: 28px;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.92);
        }

        .lf-featureList li:before {
          content: "•";
          position: absolute;
          left: 0;
          top: 0;
          color: ${ACCENT};
          font-size: 24px;
          line-height: 1;
        }

        .lf-offerActions {
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .lf-offerVideos {
          display: grid;
          gap: 24px;
        }

        .lf-processWrap {
          padding: 38px;
        }

        .lf-processGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 28px;
        }

        .lf-processCard {
          background: #f7f8fa;
          border: 1px solid rgba(17, 17, 17, 0.05);
          border-radius: 26px;
          padding: 22px;
        }

        .lf-processCard span {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: #2e82d9;
          margin-bottom: 10px;
        }

        .lf-processCard h3 {
          font-size: 24px;
          margin: 0 0 10px;
        }

        .lf-processCard p {
          margin: 0;
          color: rgba(17, 17, 17, 0.6);
          line-height: 1.7;
          font-size: 15px;
        }

        .lf-testimonialGrid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 24px;
        }

        .lf-quoteCard {
          background: #111111;
          color: white;
          border-radius: 36px;
          padding: 36px;
          box-shadow: 0 16px 46px rgba(0, 0, 0, 0.16);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .lf-quoteMark {
          font-size: 72px;
          color: ${ACCENT};
          margin: 0;
          line-height: 1;
        }

        .lf-quote {
          font-size: 28px;
          line-height: 1.5;
          margin: 10px 0 0;
        }

        .lf-quoteMeta {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .lf-quoteMeta span {
          color: rgba(255, 255, 255, 0.65);
        }

        .lf-ctaBand {
          border-radius: 40px;
          padding: 40px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 24px;
          align-items: center;
          box-shadow: 0 16px 46px rgba(0, 0, 0, 0.08);
        }

        .lf-ctaBand p {
          margin: 14px 0 0;
          font-size: 18px;
          line-height: 1.8;
          color: rgba(17, 17, 17, 0.74);
          max-width: 760px;
        }

        .lf-ctaActions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: flex-end;
        }

        .lf-faqSection {
          padding-bottom: 72px;
        }

        .lf-faqGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 28px;
        }

        .lf-faqGrid details {
          background: #f7f8fa;
          border: 1px solid rgba(17, 17, 17, 0.05);
          border-radius: 24px;
          padding: 18px 20px;
        }

        .lf-faqGrid summary {
          cursor: pointer;
          font-size: 16px;
          font-weight: 700;
          list-style: none;
        }

        .lf-faqGrid summary::-webkit-details-marker {
          display: none;
        }

        .lf-faqGrid p {
          margin: 12px 0 0;
          color: rgba(17, 17, 17, 0.64);
          line-height: 1.75;
          font-size: 15px;
        }

        @media (max-width: 1100px) {
          .lf-nav {
            display: none;
          }

          .lf-heroGrid,
          .lf-workGrid,
          .lf-offerGrid,
          .lf-testimonialGrid,
          .lf-ctaBand,
          .lf-processGrid,
          .lf-faqGrid,
          .lf-statGrid {
            grid-template-columns: 1fr;
          }

          .lf-sectionHead {
            flex-direction: column;
            align-items: start;
          }

          .lf-ctaActions {
            justify-content: flex-start;
          }

          .lf-header {
            flex-wrap: wrap;
          }

          .lf-headerActions {
            width: 100%;
          }

          .lf-headerActions a {
            flex: 1;
          }
        }

        @media (max-width: 720px) {
          .lf-container {
            width: min(1280px, calc(100% - 20px));
          }

          .lf-card,
          .lf-offerCard,
          .lf-accentCard,
          .lf-quoteCard,
          .lf-ctaBand {
            padding: 24px;
            border-radius: 28px;
          }

          .lf-header {
            padding: 14px;
            border-radius: 22px;
          }

          .lf-heroTitle {
            font-size: 42px;
          }

          .lf-sectionHead h2,
          .lf-card h2,
          .lf-ctaBand h2,
          .lf-offerCard h2 {
            font-size: 34px;
          }

          .lf-price {
            font-size: 56px;
          }

          .lf-sideTitle,
          .lf-accentCard h3,
          .lf-quote {
            font-size: 24px;
          }

          .lf-heroSub,
          .lf-ctaBand p,
          .lf-offerCopy {
            font-size: 16px;
          }

          .lf-headerActions {
            flex-direction: column;
          }

          .lf-logoBottom {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}