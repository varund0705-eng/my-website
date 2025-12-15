export default function About() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-slate-700">
        A HYDERABAD BASED COMPANY
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold">Interests</h3>
          <p className="text-sm text-slate-600 mt-2">UI, performance, tooling</p>
        </div>
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold">Currently</h3>
          <p className="text-sm text-slate-600 mt-2">Exploring TypeScript patterns</p>
        </div>
      </div>
    </section>
  );
}
