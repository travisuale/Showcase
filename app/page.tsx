import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16">
      <div className="rounded-[2rem] border border-line bg-white/75 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-dark">
          Event Portal
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-heading)] text-5xl uppercase tracking-[0.06em] text-slate-950 sm:text-7xl">
          High School Football Showcase
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Audience-specific showcase information for families and coaches.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/showcase"
            className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Players &amp; Parents
          </Link>
          <Link
            href="/showcase/coaches"
            className="rounded-full border border-slate-900/15 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900/30 hover:bg-slate-50"
          >
            High School Coaches
          </Link>
        </div>
      </div>
    </main>
  );
}
