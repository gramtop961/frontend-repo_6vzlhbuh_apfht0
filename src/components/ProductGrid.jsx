import React from 'react';
import { Droplets, ThermometerSun, Wind, AlarmCheck } from 'lucide-react';

const products = [
  {
    icon: Droplets,
    name: 'HydroSense',
    tagline: 'Precision irrigation control',
    points: ['Soil moisture mapping', 'Auto-schedule watering', 'Water use analytics'],
    color: 'from-sky-500 to-cyan-500'
  },
  {
    icon: ThermometerSun,
    name: 'ClimaNode',
    tagline: 'Microclimate station',
    points: ['Temp & humidity sensors', 'Frost/heat alerts', '7-day forecast'],
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Wind,
    name: 'AeroGuard',
    tagline: 'Wind & drift safety',
    points: ['Real-time wind tracking', 'Spray drift modeling', 'Operational windows'],
    color: 'from-violet-500 to-indigo-500'
  },
  {
    icon: AlarmCheck,
    name: 'RiskIQ',
    tagline: 'Proactive risk alerts',
    points: ['Disease pressure index', 'Custom thresholds', 'SMS/WhatsApp push'],
    color: 'from-emerald-500 to-teal-500'
  }
];

function ProductCard({ icon: Icon, name, tagline, points, color }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">{tagline}</p>
      <ul className="mt-4 grid gap-2 text-sm text-slate-700">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <button className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50">Learn more</button>
      </div>
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-slate-900/5 blur-2xl transition group-hover:bg-slate-900/10" />
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="products" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Climate products</h2>
            <p className="mt-2 max-w-prose text-slate-600">End-to-end tools that turn weather uncertainty into confident action.</p>
          </div>
          <a href="#cta" className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">Get a demo</a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
