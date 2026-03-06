"use client";

export default function PackagesPage() {
  const BOOKING_URL = "https://calendly.com/louisfortin97/30min";
  const ACCENT = "#7CC4FF";

  const packages = [
    {
      name: "Launch-Ready Ad",
      price: "$2,500",
      note: "starting at",
      description:
        "A premium 20–30 second animated SaaS ad built to explain your product fast and make it feel more valuable.",
      features: [
        "Strategy + messaging direction",
        "20–30 second premium product ad",
        "Sound design",
        "2 rounds of revisions",
        "Launch-ready delivery",
        "Built for SaaS / AI positioning",
      ],
      video: "https://www.youtube.com/embed/JPZEPhoE0co",
    },
    {
      name: "Performance Bundle",
      price: "$4,500",
      note: "starting at",
      description:
        "A stronger package for teams that want more than one angle, more testing flexibility, and a more campaign-ready deliverable.",
      features: [
        "Everything in Launch-Ready",
        "3 hook variations",
        "3 copy directions",
        "9 testable combinations",
        "Priority turnaround",
        "Best for paid acquisition teams",
      ],
      video: "https://www.youtube.com/embed/Jdy6sCt7gHw",
    },
  ];

  return (
    <>
      <main className="pkg-page">
        <section className="pkg-top">
          <div className="pkg-container">
            <div className="pkg-header">
              <a href="/" className="pkg-back">
                ← Back to Home
              </a>
              <a href={BOOKING_URL} target="_blank" className="pkg-btn pkg-btn-primary">
                Book a Call →
              </a>
            </div>

            <div className="pkg-hero">
              <p className="pkg-kicker">PACKAGES</p>
              <h1>
                Choose the package that fits your
                <span style={{ color: ACCENT }}> product and growth stage.</span>
              </h1>
              <p>
                A clean pricing page inspired by the structure you liked — white background,
                black text, dark package cards, and your light blue accent.
              </p>
            </div>

            <div className="pkg-grid">
              <div className="pkg-mainCard">
                <h2>{packages[1].name}</h2>

                <div className="pkg-priceRow">
                  <span className="pkg-price">{packages[1].price}</span>
                  <span className="pkg-note">{packages[1].note}</span>
                </div>

                <p className="pkg-description">{packages[1].description}</p>

                <ul className="pkg-list">
                  {packages[1].features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="pkg-actions">
                  <a href={BOOKING_URL} target="_blank" className="pkg-btn pkg-btn-primary">
                    Book a Call →
                  </a>
                </div>
              </div>

              <div className="pkg-sideCol">
                <div className="pkg-videoCard">
                  <div className="pkg-videoMeta">
                    <span>Package Reel</span>
                    <h3>Sample project beside the offer</h3>
                  </div>
                  <div className="pkg-embedWrap">
                    <iframe
                      src={packages[1].video}
                      title="Performance Bundle Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="pkg-lightCard">
                  <h3>{packages[0].name}</h3>
                  <div className="pkg-lightPrice">{packages[0].price}</div>
                  <p>{packages[0].description}</p>

                  <ul className="pkg-lightList">
                    {packages[0].features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pkg-bottomGrid">
              <div className="pkg-infoCard">
                <h3>Best for</h3>
                <p>
                  SaaS founders and product teams that want a premium hero ad or launch video
                  without hiring a full agency.
                </p>
              </div>

              <div className="pkg-infoCard">
                <h3>Custom scopes</h3>
                <p>
                  Need more variants, multiple videos, homepage assets, or campaign cutdowns?
                  Custom scopes can be quoted separately.
                </p>
              </div>

              <div className="pkg-infoCard">
                <h3>Next step</h3>
                <p>
                  Book a call, show me the product, and I’ll help you figure out which package
                  actually makes sense.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .pkg-page {
          min-height: 100vh;
          background: #f7f8fa;
          color: #111111;
        }

        .pkg-top {
          padding: 28px 0 72px;
        }

        .pkg-container {
          width: min(1280px, calc(100% - 32px));
          margin: 0 auto;
        }

        .pkg-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 34px;
        }

        .pkg-back {
          text-decoration: none;
          color: #111;
          font-weight: 700;
          font-size: 14px;
        }

        .pkg-btn {
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

        .pkg-btn-primary {
          background: ${ACCENT};
          color: #111111;
        }

        .pkg-btn-primary:hover {
          transform: translateY(-1px);
          opacity: 0.96;
        }

        .pkg-kicker {
          font-size: 13px;
          letter-spacing: 0.18em;
          font-weight: 800;
          color: #2e82d9;
          margin: 0 0 14px;
        }

        .pkg-hero {
          text-align: center;
          margin-bottom: 38px;
        }

        .pkg-hero h1 {
          margin: 0 auto;
          max-width: 900px;
          font-size: 64px;
          line-height: 1.03;
          letter-spacing: -0.04em;
        }

        .pkg-hero p {
          margin: 18px auto 0;
          max-width: 780px;
          font-size: 19px;
          line-height: 1.8;
          color: rgba(17, 17, 17, 0.64);
        }

        .pkg-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 24px;
          align-items: stretch;
        }

        .pkg-mainCard {
          background: #111111;
          color: white;
          border-radius: 36px;
          padding: 40px;
          box-shadow: 0 16px 46px rgba(0, 0, 0, 0.16);
        }

        .pkg-mainCard h2 {
          margin: 0;
          font-size: 42px;
          line-height: 1.05;
        }

        .pkg-priceRow {
          display: flex;
          align-items: end;
          gap: 12px;
          margin-top: 22px;
        }

        .pkg-price {
          font-size: 82px;
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.05em;
        }

        .pkg-note {
          padding-bottom: 10px;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.72);
          font-weight: 700;
        }

        .pkg-description {
          margin-top: 18px;
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.74);
        }

        .pkg-list {
          list-style: none;
          padding: 0;
          margin: 28px 0 0;
          display: grid;
          gap: 14px;
        }

        .pkg-list li {
          position: relative;
          padding-left: 28px;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.94);
        }

        .pkg-list li::before {
          content: "•";
          position: absolute;
          left: 0;
          top: 0;
          color: ${ACCENT};
          font-size: 24px;
          line-height: 1;
        }

        .pkg-actions {
          margin-top: 28px;
        }

        .pkg-sideCol {
          display: grid;
          gap: 24px;
        }

        .pkg-videoCard,
        .pkg-lightCard,
        .pkg-infoCard {
          background: white;
          border: 1px solid rgba(17, 17, 17, 0.06);
          border-radius: 32px;
          padding: 20px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.05);
        }

        .pkg-videoMeta {
          padding: 6px 4px 16px;
        }

        .pkg-videoMeta span {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: #2e82d9;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .pkg-videoMeta h3,
        .pkg-lightCard h3,
        .pkg-infoCard h3 {
          margin: 0;
          font-size: 26px;
          line-height: 1.15;
        }

        .pkg-embedWrap {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          overflow: hidden;
          border-radius: 24px;
          background: #111111;
        }

        .pkg-embedWrap iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .pkg-lightPrice {
          margin-top: 14px;
          font-size: 54px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .pkg-lightCard p,
        .pkg-infoCard p {
          margin: 14px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: rgba(17, 17, 17, 0.64);
        }

        .pkg-lightList {
          margin: 18px 0 0;
          padding-left: 18px;
          display: grid;
          gap: 10px;
        }

        .pkg-lightList li {
          color: rgba(17, 17, 17, 0.8);
          line-height: 1.7;
          font-size: 15px;
        }

        .pkg-bottomGrid {
          margin-top: 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1100px) {
          .pkg-grid,
          .pkg-bottomGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .pkg-container {
            width: min(1280px, calc(100% - 20px));
          }

          .pkg-hero h1 {
            font-size: 42px;
          }

          .pkg-hero p,
          .pkg-description {
            font-size: 16px;
          }

          .pkg-mainCard,
          .pkg-videoCard,
          .pkg-lightCard,
          .pkg-infoCard {
            border-radius: 28px;
            padding: 24px;
          }

          .pkg-price {
            font-size: 56px;
          }

          .pkg-lightPrice {
            font-size: 42px;
          }
        }
      `}</style>
    </>
  );
}