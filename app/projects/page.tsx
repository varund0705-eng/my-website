import Button from "../../components/Button";

export default function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-slate-700">A few things I’ve built recently.</p>

      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li className="p-4 border rounded-lg glass-panel transition-transform motion-safe:transform-gpu hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-offset-2">
          <h3 className="font-semibold text-glass">Personal portfolio</h3>
          <p className="text-sm text-slate-600 mt-2">Built with Next.js and Tailwind CSS.</p>
          <div className="mt-4">
            <Button href="#" variant="secondary">View details</Button>
          </div>
        </li>

        <li className="p-4 border rounded-lg glass-panel transition-transform motion-safe:transform-gpu hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-offset-2">
          <h3 className="font-semibold text-glass">Open-source tool</h3>
          <p className="text-sm text-slate-600 mt-2">Utilities for developer workflows.</p>
          <div className="mt-4">
            <Button href="#" variant="secondary">View details</Button>
          </div>
        </li>
      </ul>
    </section>
  );
}
