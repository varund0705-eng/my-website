export default function Contact() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-slate-700">Want to work together or say hi? Reach out below.</p>

      <div className="mt-4 space-y-4">
        <a
          href="mailto:example@example.com"
          className="inline-block px-4 py-2 bg-slate-900 text-white rounded-md"
        >
          Email me
        </a>

        <p className="text-sm text-slate-600">Or find me on GitHub/LinkedIn</p>
      </div>
    </section>
  );
}
