import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Home | In Solace Times" },
  { name: "description", content: "In Solace Times website." },
];

export default function Home() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="stack">
          <p className="kicker">In Solace Times</p>
          <h1 className="h1">Transform events into experiences.</h1>
          <p className="lede">
            This is your homepage. Edit{" "}
            <code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">
              app/routes/home.tsx
            </code>{" "}
            to build it out.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="/contact">
              Book a consult
            </a>
            <a className="btn btn-ghost" href="/about">
              Learn more
            </a>
          </div>
        </div>

        <div className="hero-box stack">
          <p className="card-title">Quick notes</p>
          <p className="card-text">
            Pages live in <code>app/routes</code>.
          </p>
          <p className="card-text">
            Routes are registered in <code>app/routes.ts</code>.
          </p>
          <p className="card-text">
            Global layout is <code>app/root.tsx</code>.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="grid-3">
          <div className="card">
            <div className="card-title">Planning</div>
            <div className="card-text">Concept, logistics, timeline.</div>
          </div>
          <div className="card">
            <div className="card-title">Production</div>
            <div className="card-text">Vendors, setup, coordination.</div>
          </div>
          <div className="card">
            <div className="card-title">Story</div>
            <div className="card-text">
              Photo/video that actually feels like you.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
