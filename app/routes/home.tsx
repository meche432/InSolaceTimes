import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Home | In Solace Times" },
  { name: "description", content: "In Solace Times website." },
];

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <div className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
          In Solace Times
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Transform events into experiences.
        </h1>
        <p className="mt-2 max-w-2xl text-gray-700 dark:text-gray-200">
          This is your new homepage. Edit{" "}
          <code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">
            app/routes/home.tsx
          </code>{" "}
          to build it out.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
          <h2 className="font-semibold">What you do</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Add your services: planning, production, photo/video, whatever the
            package actually includes.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
          <h2 className="font-semibold">Why you</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Put your differentiator here. No fluff, no “bespoke”, just the real
            reason someone should pick you.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
          <h2 className="font-semibold">Next step</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Link to Contact, a booking form, or a calendar once you add it.
          </p>
        </div>
      </div>
    </section>
  );
}
