'use client'

import { useState } from 'react'
import type { Floor } from '@/content/dict'

type Props = {
  title: string
  hint: string
  floorsLabel: string
  now: string
  note: string
  floors: Floor[]
}

/** Tinggi satu baris lantai + jarak antarbaris (px), dipakai untuk menggeser kabin lift. */
const ROW = 48
const GAP = 6

/**
 * Peraga konsep "gedung = komunitas, lantai = ruangan": pengunjung menekan tombol lantai,
 * kabin lift bergeser ke sana, dan isi template lantai itu tampil di bawah.
 */
export function LiftDemo({ title, hint, floorsLabel, now, note, floors }: Props) {
  const [active, setActive] = useState(floors.length - 1)
  const floor = floors[active]

  return (
    <div className="rounded-xl border-2 border-ink bg-sky p-4 shadow-[6px_6px_0_var(--color-ink)] sm:p-5">
      <p className="font-pixel text-xl">{title}</p>
      <p className="mt-1 text-sm text-ink-soft">{hint}</p>

      {/* Atap gedung: antena + lis atap */}
      <div aria-hidden className="mt-5 flex flex-col items-center">
        <span className="h-4 w-1 bg-ink" />
        <span className="h-3 w-24 border-2 border-b-0 border-ink bg-paper-deep" />
      </div>

      <div className="grid grid-cols-[2.75rem_1fr] gap-2 border-2 border-ink bg-paper-deep p-2">
        <div aria-hidden className="relative bg-ink/85" style={{ height: floors.length * (ROW + GAP) - GAP }}>
          <div
            className="absolute inset-x-1 flex justify-center border-2 border-ink bg-accent transition-transform duration-500 ease-out"
            style={{ height: ROW, transform: `translateY(${active * (ROW + GAP)}px)` }}
          >
            <span className="h-full w-0.5 bg-ink/60" />
          </div>
        </div>

        <div role="group" aria-label={floorsLabel} className="flex flex-col" style={{ gap: GAP }}>
          {floors.map((f, i) => {
            const on = i === active
            return (
              <button
                key={f.code}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(i)}
                style={{ height: ROW }}
                className={`flex items-center gap-3 border-2 border-ink px-2.5 text-left transition-colors ${
                  on ? 'bg-accent' : 'bg-paper hover:bg-paper-deep'
                }`}
              >
                <span className="w-8 shrink-0 rounded-sm bg-ink py-0.5 text-center font-pixel text-sm text-glow">
                  {f.code}
                </span>
                <span className="min-w-0 flex-1 truncate font-semibold">{f.name}</span>
                <span aria-hidden className="flex gap-1">
                  {[0, 1, 2].map((w) => (
                    <span key={w} className={`size-3 border border-ink ${on ? 'bg-glow' : 'bg-sky'}`} />
                  ))}
                </span>
              </button>
            )
          })}
        </div>
      </div>
      <div aria-hidden className="h-2 border-2 border-t-0 border-ink bg-ink-soft" />

      <div aria-live="polite" className="mt-4 rounded-lg bg-paper p-3">
        <p className="text-sm text-ink-soft">
          {now}{' '}
          <span className="font-pixel text-ink">
            {floor.code} · {floor.name}
          </span>
        </p>
        <p className="mt-1">{floor.desc}</p>
      </div>
      <p className="mt-3 text-sm text-ink-soft">{note}</p>
    </div>
  )
}
