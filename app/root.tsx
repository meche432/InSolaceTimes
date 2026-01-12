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
        <div className="min-h-dvh bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
          <header className="border-b border-gray-200 dark:border-gray-800">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
              <a href="/" className="font-semibold tracking-tight">
                In Solace Times
              </a>
              <div className="flex gap-4 text-sm">
                <a className="hover:underline" href="/about">
                  About
                </a>
                <a className="hover:underline" href="/contact">
                  Contact
                </a>
              </div>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-5xl px-6 py-6 text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} In Solace Times
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
