import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome({ message }: { message: string }) {
	return (
		<main className="min-h-dvh bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
			<section className="mx-auto max-w-5xl px-6 py-14">
				<header className="flex flex-col gap-8">
					<div className="flex items-center justify-between gap-6">
						<div className="w-[240px] max-w-[55vw]">
							<img
								src={logoLight}
								alt="React Router"
								className="block w-full dark:hidden"
							/>
							<img
								src={logoDark}
								alt="React Router"
								className="hidden w-full dark:block"
							/>
						</div>

						<div className="text-right">
							<p className="text-sm text-gray-600 dark:text-gray-300">
								Starter template, now with fewer mysteries
							</p>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								React Router + Cloudflare Workers + Tailwind
							</p>
						</div>
					</div>

					<div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900/40">
						<h1 className="text-3xl font-semibold tracking-tight">
							Welcome. This is your home page.
						</h1>
						<p className="mt-3 max-w-2xl text-gray-700 dark:text-gray-200">
							If you edit <code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">app/routes/home.tsx</code>,
							this screen will change. If you add new pages, you’ll register them in{" "}
							<code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">app/routes.ts</code>.
							That’s basically the game. Everything else is plumbing.
						</p>

						<div className="mt-6 flex flex-wrap gap-3">
							<a
								href="https://reactrouter.com/docs"
								target="_blank"
								rel="noreferrer"
								className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:underline dark:border-gray-800 dark:bg-gray-950 dark:text-blue-400"
							>
								React Router docs
							</a>
							<a
								href="https://developers.cloudflare.com/workers/"
								target="_blank"
								rel="noreferrer"
								className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:underline dark:border-gray-800 dark:bg-gray-950 dark:text-blue-400"
							>
								Cloudflare Workers docs
							</a>
							<a
								href="https://tailwindcss.com/docs"
								target="_blank"
								rel="noreferrer"
								className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:underline dark:border-gray-800 dark:bg-gray-950 dark:text-blue-400"
							>
								Tailwind docs
							</a>
						</div>
					</div>
				</header>

				<section className="mt-10 grid gap-6 md:grid-cols-2">
					<div className="rounded-3xl border border-gray-200 p-7 dark:border-gray-800">
						<h2 className="text-lg font-semibold">Where to start editing</h2>

						<ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-200">
							<li>
								<span className="font-medium">Home page UI:</span>{" "}
								<code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">
									app/routes/home.tsx
								</code>
							</li>
							<li>
								<span className="font-medium">Route registry:</span>{" "}
								<code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">
									app/routes.ts
								</code>
							</li>
							<li>
								<span className="font-medium">Global layout shell:</span>{" "}
								<code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">
									app/root.tsx
								</code>
							</li>
							<li>
								<span className="font-medium">Global CSS:</span>{" "}
								<code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">
									app/app.css
								</code>
							</li>
						</ul>

						<p className="mt-5 text-xs text-gray-500 dark:text-gray-400">
							You don’t need to touch config files until you’re changing build/deploy behaviour.
						</p>
					</div>

					<div className="rounded-3xl border border-gray-200 p-7 dark:border-gray-800">
						<h2 className="text-lg font-semibold">Proof your loader works</h2>
						<p className="mt-3 text-sm text-gray-700 dark:text-gray-200">
							This value comes from your Cloudflare Worker env via the route loader.
							In your current setup, it’s set in{" "}
							<code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">
								wrangler.json
							</code>{" "}
							as <code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">
								VALUE_FROM_CLOUDFLARE
							</code>{" "}
							and read in <code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">
								app/routes/home.tsx
							</code>.
						</p>

						<div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/40">
							<p className="text-xs text-gray-500 dark:text-gray-400">Loader message</p>
							<p className="mt-1 font-mono text-sm">{message}</p>
						</div>

						<p className="mt-5 text-xs text-gray-500 dark:text-gray-400">
							If this renders, you’re successfully doing server data loading and SSR is alive.
						</p>
					</div>
				</section>

				<section className="mt-10 rounded-3xl border border-gray-200 p-7 dark:border-gray-800">
					<h2 className="text-lg font-semibold">Next tiny wins</h2>

					<ol className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-200">
						<li>
							1) Replace this welcome component usage with your real homepage layout in{" "}
							<code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">
								app/routes/home.tsx
							</code>.
						</li>
						<li>
							2) Add <code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">app/routes/about.tsx</code> and
							register it in <code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">app/routes.ts</code>.
						</li>
						<li>
							3) Put a simple nav/footer around the <code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">&lt;Outlet /&gt;</code> in{" "}
							<code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">app/root.tsx</code>.
						</li>
					</ol>
				</section>
			</section>
		</main>
	);
}
