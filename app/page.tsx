import Button from "../components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-12">
      {/* Hero */}
      <section className="pt-6 pb-4">
        <div className="max-w-3xl">
          <div className="glass-panel p-6 rounded-2xl shadow-sm">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 text-glass">Hi, I'm Varun 👋</h1>
            <p className="mt-3 text-slate-700">PNR Clean Room Technologies</p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <Button href="/contact">Contact Me</Button>

              <Button href="/projects" variant="secondary">View Projects</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="max-w-5xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <a href="/projects" className="text-sm text-slate-600 hover:underline">
              View all
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article className="p-4 border rounded-lg bg-white transition-transform motion-safe:transform-gpu hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-offset-2">
              <h3 className="font-semibold text-slate-900 text-glass">Personal Portfolio</h3>
              <p className="mt-2 text-sm text-slate-600">Built with Next.js and Tailwind CSS.</p>
              <div className="mt-4">
                <Button href="/projects" variant="secondary">See project →</Button>
              </div>
            </article>

            <article className="p-4 border rounded-lg bg-white transition-transform motion-safe:transform-gpu hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-offset-2">
              <h3 className="font-semibold text-slate-900 text-glass">Open-source Tool</h3>
              <p className="mt-2 text-sm text-slate-600">Utilities and workflows for developers.</p>
              <div className="mt-4">
                <Button href="/projects" variant="secondary">See project →</Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
