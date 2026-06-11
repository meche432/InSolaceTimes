import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { LinksFunction } from "react-router";
import "./app.css";

export const links: LinksFunction = () => [];

const navigation = [
  { href: "/experiences", label: "Experiences" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <div className="site-shell">
          <header className="site-header">
            <div className="container">
              <nav className="nav" aria-label="Main navigation">
                <a className="brand" href="/" aria-label="In Solace Times home">
                  <span className="brand-mark">IST</span>
                  <span>In Solace Times</span>
                </a>

                <div className="nav-links">
                  {navigation.map((item) => (
                    <a key={item.href} href={item.href}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <div className="container footer-grid">
              <div>
                <div className="footer-brand">In Solace Times</div>
                <p className="footer-text">
                  Event experiences shaped with care, atmosphere, and memory in mind.
                </p>
              </div>
              <div className="footer-links">
                <a href="/experiences">Experiences</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
              </div>
            </div>
          </footer>
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
