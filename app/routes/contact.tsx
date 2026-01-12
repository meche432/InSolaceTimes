import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Contact | In Solace Times" },
  { name: "description", content: "Contact In Solace Times." },
];

export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 text-gray-700 dark:text-gray-200">
        This is your Contact page. Edit{" "}
        <code className="rounded bg-black/5 px-2 py-1 dark:bg-white/10">
          app/routes/contact.tsx
        </code>
        .
      </p>
    </section>
  );
}
