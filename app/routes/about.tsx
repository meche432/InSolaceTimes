import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "About | In Solace Times" },
  { name: "description", content: "About In Solace Times." },
];

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-4 text-gray-700 dark:text-gray-200">
        This is your About page. Edit{" "}
        <code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">
          app/routes/about.tsx
        </code>
        .
      </p>
    </section>
  );
}
