import type { MetaFunction } from "react-router";

const fields = [
  "Your name",
  "Email address",
  "Event type",
  "Estimated date",
  "What are you imagining?",
];

export const meta: MetaFunction = () => [
  { title: "Contact | In Solace Times" },
  {
    name: "description",
    content:
      "Contact In Solace Times to begin planning a thoughtful event experience.",
  },
];

export default function Contact() {
  return (
    <>
      <section className="page-hero section-glow">
        <div className="container narrow stack">
          <p className="kicker">Contact</p>
          <h1 className="h1">Tell us what you’re hoping people will feel.</h1>
          <p className="lede">
            Start with the idea, the date, or even just the mood. We can shape the rest from there.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="feature-card stack">
            <p className="mini-label">Start a conversation</p>
            <h2>Planning begins with clarity.</h2>
            <p>
              Replace this section with your business email, phone number, booking link, or embedded form when you are ready.
            </p>
            <div className="contact-detail">
              <span>Email</span>
              <a href="mailto:hello@insolacetimes.com">hello@insolacetimes.com</a>
            </div>
            <div className="contact-detail">
              <span>Based in</span>
              <p>Maryland / Washington, DC area</p>
            </div>
          </div>

          <div className="form-card">
            <p className="mini-label">Sample inquiry form</p>
            <div className="fake-form">
              {fields.map((field) => (
                <div className="fake-field" key={field}>
                  {field}
                </div>
              ))}
              <a className="btn btn-primary" href="mailto:hello@insolacetimes.com">
                Send inquiry
              </a>
            </div>
            <p className="form-note">
              This is a visual form for now. Later, connect it to Formspree, Tally, Google Forms, or a custom action.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
