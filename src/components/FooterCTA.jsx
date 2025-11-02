import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section id="cta" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm sm:p-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -right-10 top-1/3 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20">
                <Sparkles className="h-3.5 w-3.5" />
                Ready to modernize your farm?
              </div>
              <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">Book a live walkthrough and see climate insights in action.</h3>
              <p className="mt-2 text-white/70">We’ll tailor a demo to your crops, fields, and goals.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-sm transition hover:bg-white/90">
                <MessageSquare className="h-5 w-5" />
                Talk to an expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
