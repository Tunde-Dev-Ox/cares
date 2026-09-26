const swatches = [
  { name: "Primary", value: "#1E4544", className: "swatch-primary" },
  { name: "Red accent", value: "#DE232B", className: "swatch-red" },
  { name: "Blue accent", value: "#5CC3E6", className: "swatch-blue" },
  { name: "Green accent", value: "#39A452", className: "swatch-green" },
];

export default function StyleGuidePage() {
  return (
    <main className="style-guide">
      <p className="eyebrow">APC CARES / internal reference</p>
      <h1>Style guide</h1>
      <p className="intro">
        A grounded, civic visual system with a warm off-white canvas, confident
        teal structure, and clear accent colors for action and progress.
      </p>

      <section className="guide-section">
        <p className="eyebrow">01 / palette</p>
        <div className="swatch-grid">
          {swatches.map((swatch) => (
            <div className="swatch" key={swatch.name}>
              <div className={`swatch-color ${swatch.className}`} />
              <strong>{swatch.name}</strong>
              <span>{swatch.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="guide-section type-sample">
        <p className="eyebrow">02 / type scale</p>
        <h2>Rooted in people. Ready for progress.</h2>
        <h3>Clear information, practical participation.</h3>
        <p>
          Body copy should feel direct, welcoming, and easy to scan. Use short
          paragraphs, strong labels, and generous breathing room.
        </p>
      </section>

      <section className="guide-section">
        <p className="eyebrow">03 / actions</p>
        <div className="action-row">
          <a className="button button-primary" href="/get-involved">
            Get involved <span aria-hidden="true">-&gt;</span>
          </a>
          <a className="button button-secondary" href="/about">
            Learn about us
          </a>
          <a className="text-link" href="/our-work">
            Explore our work <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </section>
    </main>
  );
}