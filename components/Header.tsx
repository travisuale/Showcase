import Link from "next/link";

type HeaderProps = {
  audience: string;
  title: string;
  description: string;
  titleTop?: string;
  titleBottom?: string;
  featuredTeams?: string[];
  facts?: Array<{
    label: string;
    value: string;
  }>;
};

const directTeamLogos: Record<string, string> = {
  Timpview: "/schools/timpview-orange.png",
  "Lone Peak": "/schools/lp-clean-transparent.png",
  Springville: "/schools/sv-clean.png",
  Skyline: "/schools/sl-clean-transparent.png",
  Westlake: "/schools/wl-clean-transparent.png",
  "Maple Mountain": "/schools/mm-clean-transparent.png",
};

const directTeamLogoSize: Record<string, string> = {
  Timpview: "h-[86%] w-[86%]",
  "Lone Peak": "h-[84%] w-[84%]",
  Springville: "h-[98%] w-[98%]",
  Skyline: "h-[98%] w-[98%]",
  Westlake: "h-[96%] w-[96%]",
  "Maple Mountain": "h-[98%] w-[98%]",
};

const teamLogoStyles: Record<
  string,
  {
    backgroundPosition: string;
    backgroundSize: string;
  }
> = {
  Timpview: {
    backgroundPosition: "9.35% 31.2%",
    backgroundSize: "500%",
  },
  "Lone Peak": {
    backgroundPosition: "48.35% 31.35%",
    backgroundSize: "500%",
  },
  Springville: {
    backgroundPosition: "87.45% 31.45%",
    backgroundSize: "495%",
  },
  Skyline: {
    backgroundPosition: "9.2% 60.95%",
    backgroundSize: "500%",
  },
  Westlake: {
    backgroundPosition: "48.35% 61.05%",
    backgroundSize: "505%",
  },
  "Maple Mountain": {
    backgroundPosition: "87.45% 61.05%",
    backgroundSize: "500%",
  },
};

export function Header({
  audience,
  title,
  description,
  titleTop,
  titleBottom,
  featuredTeams,
  facts,
}: HeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-surface px-6 py-8 text-white shadow-[0_28px_100px_rgba(0,0,0,0.34)] sm:px-10 sm:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,154,59,0.45),transparent_24%),linear-gradient(135deg,rgba(41,95,69,0.36),transparent_48%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.05),transparent_24%,transparent_76%,rgba(255,255,255,0.04))]" />
      <div className="absolute -right-12 top-10 h-36 w-36 rounded-full border border-white/10" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.34em] text-white/70 transition hover:text-white"
          >
            Showcase Home
          </Link>
        </div>
        <div className="mt-8">
          <div>
            {featuredTeams?.length ? (
              <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {featuredTeams.map((team) => (
                  <div
                    key={team}
                    className="rounded-[1.75rem] border border-white/10 bg-white/6 p-3 text-center backdrop-blur"
                  >
                    <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border-4 border-white/75 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] sm:h-20 sm:w-20">
                      {directTeamLogos[team] ? (
                        <img
                          src={directTeamLogos[team]}
                          alt={`${team} logo`}
                          className={`object-contain ${directTeamLogoSize[team] ?? "h-[88%] w-[88%]"}`}
                        />
                      ) : (
                        <div
                          aria-label={`${team} logo`}
                          className="h-[80%] w-[80%] rounded-full"
                          style={{
                            backgroundColor: "#ffffff",
                            backgroundImage: "url('/showcase-flyer-source.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition:
                              teamLogoStyles[team]?.backgroundPosition ?? "50% 50%",
                            backgroundSize: teamLogoStyles[team]?.backgroundSize ?? "500%",
                          }}
                        />
                      )}
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary-dark">
                      {team}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
            {titleTop || titleBottom ? (
              <div>
                {titleTop ? (
                  <h1 className="font-[family-name:var(--font-heading)] text-5xl uppercase leading-none tracking-[0.08em] sm:text-7xl">
                    {titleTop}
                  </h1>
                ) : null}
                {titleBottom ? (
                  <p className="mt-2 text-lg font-semibold uppercase tracking-[0.34em] text-slate-100/85 sm:text-2xl">
                    {titleBottom}
                  </p>
                ) : null}
              </div>
            ) : (
              <h1 className="font-[family-name:var(--font-heading)] text-5xl uppercase leading-none tracking-[0.08em] sm:text-7xl">
                {title}
              </h1>
            )}
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-100/86 sm:text-base">
              {description}
            </p>
            {facts?.length ? (
              <section className="mt-6 rounded-[2rem] border border-white/10 bg-slate-950/85 px-5 py-5 text-slate-100 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:px-6 sm:py-6">
                <dl className="grid gap-6 md:grid-cols-3">
                  {facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-sm font-bold uppercase tracking-[0.18em] text-primary-dark">
                        {fact.label}
                      </dt>
                      <dd className="mt-2 text-lg leading-8 sm:text-2xl">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
