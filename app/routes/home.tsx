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
				A clean starting point. This is just CSS you control.
			</p>

			<div className="hero-actions">
				<a className="btn btn-primary" href="/contact">Book a consult</a>
				<a className="btn btn-ghost" href="/about">Learn more</a>
			</div>
		</div>

		<div className="hero-box stack">
			<p className="card-title">Quick notes</p>
			<p className="card-text">
				Edit <code>app/routes/home.tsx</code> to change this page.
			</p>
			<p className="card-text">
				Add pages in <code>app/routes.ts</code>.
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
				<div className="card-text">Photo/video that actually feels like you.</div>
			</div>
		</div>
	</div>
</section>

   
