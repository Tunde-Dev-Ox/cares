export const metadata = {
  title: "Our Work | APC CARES | Grassroots Mobilisation & Community Impact",
  description:
    "Learn how APC CARES turns grassroots energy, civic engagement, and local partnerships into practical community impact across Nigeria.",
  alternates: {
    canonical: "/our-work",
  },
};

const focusAreas = [
  {
    title: "Grassroots mobilisation",
    text: "Building relationships, encouraging local participation, and helping supporters act together.",
  },
  {
    title: "Ideas into conversation",
    text: "Making the Party's ideals and programmes easier to understand, discuss, and connect to everyday life.",
  },
  {
    title: "Community access",
    text: "Creating clearer pathways for people to find information, resources, and support close to home.",
  },
  {
    title: "Empowerment",
    text: "Supporting opportunities that help citizens build confidence, skills, agency, and a stronger future.",
  },
];

export default function OurWorkPage() {
  return (
    <main className="page-wrap">
      <section className="page-intro">
        <div>
          <p className="page-kicker">Our work</p>
          <h1>Turning shared purpose into local action.</h1>
        </div>
        <div className="page-intro-aside">
          <p>
            APC CARES is new. These are the focus areas that will shape our
            work as the foundation grows with communities and supporters.
          </p>
        </div>
      </section>

      <section className="plain-section">
        <div className="section-heading">
          <h2>Four ways we create connection.</h2>
          <p>
            Our focus is deliberately practical: better information, stronger
            relationships, and more ways for people to participate.
          </p>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <article className="focus-card" key={area.title}>
              <span className="pillar-number">0{index + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <h2>The next chapter is built together.</h2>
          <p>
            As APC CARES develops, this page will grow with approved programme
            details, community initiatives, and empowerment opportunities.
          </p>
        </div>
        <a className="button button-secondary" href="/get-involved">
          Find your place <span aria-hidden="true">-&gt;</span>
        </a>
      </section>
    </main>
  );
}