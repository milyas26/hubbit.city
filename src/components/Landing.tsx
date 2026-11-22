import { appUrl } from '@/content/appUrl'
import { dict, type Lang } from '@/content/dict'
import { LiftDemo } from './LiftDemo'

const primaryBtn =
  'inline-flex min-h-11 items-center justify-center rounded-md border-2 border-ink bg-accent px-5 font-semibold text-ink shadow-[3px_3px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5 active:translate-y-0'

export function Landing({ lang }: { lang: Lang }) {
  const t = dict[lang]
  const otherHref = lang === 'id' ? '/en' : '/'

  const sections = [
    { href: '#perjalanan', label: t.nav.journey, floor: t.journey.floor },
    { href: '#gedung', label: t.nav.buildings, floor: t.buildings.floor },
    { href: '#peran', label: t.nav.roles, floor: t.roles.floor },
    { href: '#fase', label: t.nav.phases, floor: t.phases.floor },
  ]

  return (
    <>
      <header className="sticky top-0 z-20 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5">
          <a href="#top" className="font-pixel text-xl font-bold whitespace-nowrap">
            Hubbit City
          </a>
          <nav aria-label={t.nav.label} className="ml-6 hidden gap-1 lg:flex">
            {sections.map((s) => (
              <a key={s.href} href={s.href} className="flex min-h-11 items-center gap-2 rounded-md px-3 hover:bg-paper-deep">
                <span className="font-pixel text-xs text-ink-soft">{s.floor}</span>
                {s.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <a
              href={otherHref}
              hrefLang={lang === 'id' ? 'en' : 'id'}
              aria-label={t.nav.switchLangLabel}
              className="flex min-h-11 items-center rounded-md px-2 text-sm font-medium whitespace-nowrap underline-offset-4 hover:underline"
            >
              {t.nav.switchLang}
            </a>
            <span className="hidden sm:block">
              <a href={appUrl('/')} className={primaryBtn}>
                {t.nav.openMap}
              </a>
            </span>
          </div>
        </div>
        <nav aria-label={t.nav.label} className="flex gap-1 overflow-x-auto px-2 pb-1.5 lg:hidden">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="flex min-h-11 shrink-0 items-center gap-1.5 rounded-md px-2.5 text-sm hover:bg-paper-deep"
            >
              <span className="font-pixel text-xs text-ink-soft">{s.floor}</span>
              {s.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* LOBBY: hero */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-10 pb-16 md:grid-cols-[1.1fr_1fr] md:items-center md:pt-16 md:pb-24">
          <div>
            <h1 className="font-pixel text-4xl leading-[1.1] font-bold text-balance sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-soft">{t.hero.lead}</p>
            <div className="mt-8">
              <a href={appUrl('/')} className={primaryBtn}>
                {t.hero.primary}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">{t.hero.guest}</p>
          </div>
          <LiftDemo {...t.lift} />
        </section>

        {/* LT 1: perjalanan */}
        <section id="perjalanan" className="border-y-2 border-ink bg-paper-deep">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <span className="floor-chip">{t.journey.floor}</span>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold text-balance md:text-4xl">{t.journey.title}</h2>
            <ol className="relative mt-10 grid gap-8 md:grid-cols-4 md:gap-6">
              <span aria-hidden className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-ink md:top-[7px] md:right-6 md:bottom-auto md:left-0 md:h-0.5 md:w-auto" />
              {t.journey.stops.map((s) => (
                <li key={s.title} className="relative pl-9 md:pt-9 md:pl-0">
                  <span aria-hidden className="absolute top-0.5 left-0 size-4 border-2 border-ink bg-accent md:top-0" />
                  <h3 className="font-pixel text-xl">{s.title}</h3>
                  <p className="mt-2 text-ink-soft">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* LT 2: direktori gedung */}
        <section id="gedung" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.3fr] md:py-24">
          <div>
            <span className="floor-chip">{t.buildings.floor}</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">{t.buildings.title}</h2>
            <p className="mt-4 text-ink-soft">{t.buildings.lead}</p>
            <div className="mt-10 rounded-xl border-2 border-ink p-5">
              <h3 className="font-pixel text-xl">{t.buildings.hall.name}</h3>
              <p className="mt-2 text-ink-soft">{t.buildings.hall.desc}</p>
            </div>
          </div>
          <div aria-label={t.buildings.boardLabel} role="region" className="rounded-xl border-4 border-ink-soft bg-ink p-4 text-paper sm:p-6">
            <ul className="divide-y divide-paper/15">
              {t.buildings.list.map((b) => (
                <li key={b.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-pixel text-lg text-glow">{b.name}</span>
                    <span aria-hidden className="mb-1 min-w-4 flex-1 border-b-2 border-dotted border-paper/30" />
                    <span className="text-sm">{b.category}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-paper/80">{b.tagline}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LT 3: warga & host */}
        <section id="peran" className="mx-auto max-w-6xl px-4 pb-16 md:pb-24">
          <span className="floor-chip">{t.roles.floor}</span>
          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1.25fr] md:items-start">
            <div className="md:pt-6">
              <h2 className="text-2xl font-bold md:text-3xl">{t.roles.citizen.title}</h2>
              <ul className="mt-5 space-y-3">
                {t.roles.citizen.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2 size-2 shrink-0 bg-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border-2 border-ink bg-paper-deep p-5 sm:p-7">
              <h2 className="text-2xl font-bold md:text-3xl">{t.roles.host.title}</h2>
              <ul className="mt-5 space-y-3">
                {t.roles.host.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2 size-2 shrink-0 bg-accent ring-1 ring-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t-2 border-dashed border-ink/30 pt-4 text-sm text-ink-soft">{t.roles.host.review}</p>
            </div>
          </div>
        </section>

        {/* LT 4: fase pembangunan. Fase aktif diberi bobot terbesar; fase rencana bergaris putus (perancah). */}
        <section id="fase" className="border-t-2 border-ink">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <span className="floor-chip">{t.phases.floor}</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">{t.phases.title}</h2>
            <p className="mt-4 max-w-2xl text-ink-soft">{t.phases.lead}</p>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
              <article className="rounded-xl border-2 border-ink bg-paper-deep p-5 shadow-[6px_6px_0_var(--color-ink)] sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-pixel text-lg">{t.phases.now.label}</span>
                  <span className="rounded-md border-2 border-ink bg-accent px-2 py-0.5 text-sm font-semibold">{t.phases.current}</span>
                </div>
                <h3 className="mt-3 text-2xl font-bold">{t.phases.now.name}</h3>
                <p className="mt-2 text-ink-soft">{t.phases.now.summary}</p>
                <h4 className="mt-6 font-pixel">{t.phases.now.readyTitle}</h4>
                <ul className="mt-3 space-y-2.5">
                  {t.phases.now.ready.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <div className="flex flex-col gap-6">
                {t.phases.next.map((p) => (
                  <article key={p.label} className="rounded-xl border-2 border-dashed border-ink-soft p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-pixel text-lg">{p.label}</span>
                      <span className="rounded-md border border-ink-soft px-2 py-0.5 text-sm text-ink-soft">{t.phases.planned}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{p.name}</h3>
                    <p className="mt-1 text-ink-soft">{p.summary}</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      {p.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span aria-hidden className="mt-1.5 size-2 shrink-0 border border-ink" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm text-ink-soft">{t.phases.note}</p>
          </div>
        </section>

        {/* ATAP: ajakan, kota di malam hari */}
        <section className="relative overflow-hidden bg-night text-paper">
          <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-48 md:pt-24 md:pb-56">
            <span className="floor-chip bg-paper/10">{t.roof.floor}</span>
            <h2 className="mt-4 font-pixel text-4xl font-bold md:text-5xl">{t.roof.title}</h2>
            <p className="mt-4 max-w-xl text-lg text-paper/85">{t.roof.lead}</p>
            <div className="mt-8">
              <a href={appUrl('/')} className={`${primaryBtn} border-paper shadow-[3px_3px_0_var(--color-paper)]`}>
                {t.roof.primary}
              </a>
            </div>
          </div>
          <Skyline />
        </section>
      </main>

      <footer className="border-t-2 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm">
          <p className="text-ink-soft">{t.footer.fiction}</p>
        </div>
      </footer>
    </>
  )
}

/** Siluet kota malam dari kode (tanpa aset gambar). Pola jendela menyala deterministik. */
const TOWERS = [38, 62, 46, 84, 52, 100, 42, 70, 58, 92, 44, 66, 50, 78, 40, 60]

function Skyline() {
  return (
    <div aria-hidden className="absolute inset-x-0 bottom-0 flex h-40 items-end gap-1.5 px-2 md:h-48">
      {TOWERS.map((h, i) => (
        <div
          key={i}
          className={`flex-1 border-x-2 border-t-2 border-paper/20 bg-night-tint p-1.5 ${i > 9 ? 'hidden sm:block' : ''}`}
          style={{ height: `${h}%` }}
        >
          <div className="grid grid-cols-2 gap-1">
            {Array.from({ length: Math.floor(h / 10) * 2 }, (_, w) => (
              <span key={w} className={`h-1.5 ${(i * 7 + w * 3) % 5 < 2 ? 'bg-glow' : 'bg-paper/10'}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
