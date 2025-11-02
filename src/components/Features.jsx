import React from 'react';
import { CloudSun, Shield, Gauge, Satellite } from 'lucide-react';

const items = [
  {
    icon: CloudSun,
    title: 'Microclimate Monitoring',
    desc: 'High-resolution sensors and forecasts to track temperature, humidity, and wind in real-time.'
  },
  {
    icon: Gauge,
    title: 'Smart Irrigation',
    desc: 'Data-driven watering schedules that save water while keeping crops at peak health.'
  },
  {
    icon: Satellite,
    title: 'Field Intelligence',
    desc: 'Satellite and ground insights combined for early issue detection and precision actions.'
  },
  {
    icon: Shield,
    title: 'Risk & Alerts',
    desc: 'Early warnings for heat stress, frost, and disease pressure delivered to your devices.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Climate-ready features</h2>
          <p className="mt-3 text-slate-600">A modern stack that makes complex farm decisions simple and actionable.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-500/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
