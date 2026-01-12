import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";

import type { LinksFunction } from "react-router";
import "./app.css";

export const links: LinksFunction = () => {
	// If you add other css files later, you would return them here.
	// Example: return [{ rel: "stylesheet", href: otherCss }];
	return [];
};

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
				<div className="min-h-dvh">
					<header className="site-header">
						<div className="container">
							<nav className="nav">
								<a className="brand" href="/">
									In Solace Times
								</a>

								<div className="nav-links">
									<a href="/about">About</a>
									<a href="/contact">Contact</a>
								</div>
							</nav>
						</div>
					</header>

					<main>{children}</main>

					<footer className="site-footer">
						<div className="container">
							<div className="footer-text">
								© {new Date().getFullYear()} In Solace Times
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
