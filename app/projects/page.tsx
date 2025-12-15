export default function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-slate-700">A few things I’ve built recently.</p>

      <ul className="mt-4 grid gap-4">
        <li className="p-4 border rounded-md">
          <h3 className="font-semibold">Personal portfolio</h3>
          <p className="text-sm text-slate-600 mt-2">Built with Next.js and Tailwind CSS.</p>
        </li>

        <li className="p-4 border rounded-md">
          <h3 className="font-semibold">Open-source tool</h3>
          <p className="text-sm text-slate-600 mt-2">Utilities for developer workflows.</p>
        </li>
      </ul>
    </section>
  );
}
