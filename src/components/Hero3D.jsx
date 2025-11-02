import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Leaf, Thermometer, Droplets } from 'lucide-react';

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-xl bg-white/70 backdrop-blur-md px-4 py-3 shadow-sm ring-1 ring-black/5">
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-sm font-semibold text-slate-800">{value}</div>
    </div>
  </div>
);

export default function Hero3D() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/30 via-cyan-400/20 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-16 pt-8 md:grid-cols-2 md:pt-16 lg:gap-14 lg:pb-24">
        {/* Copy */}
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-slate-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-indigo-600" />
            Climate-smart product suite
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Modern tools for smarter, more resilient farming
          </h1>
          <p className="mt-4 max-w-prose text-lg text-slate-600">
            Monitor microclimate, optimize resources, and improve yields with an interactive, playful toolkit designed for real-world farms.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
              Explore Products
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300">
              Learn More
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat icon={Leaf} label="Crop Health" value="+18%" />
            <Stat icon={Thermometer} label="Temp Range" value="18–32°C" />
            <Stat icon={Droplets} label="Water Saved" value="32%" />
            <Stat icon={Rocket} label="ROI" value="< 6 months" />
          </div>
        </div>

        {/* 3D scene */}
        <div className="relative h-[420px] w-full rounded-2xl border border-slate-200/60 bg-white/60 shadow-sm backdrop-blur md:h-[560px]">
          {/* Gradient overlay should not block interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-white/10" />
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
