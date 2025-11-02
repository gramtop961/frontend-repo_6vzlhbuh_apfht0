import React from 'react';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500" />
            <span className="text-lg font-bold tracking-tight">AgriClimate</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
            <a className="hover:text-slate-900" href="#features">Features</a>
            <a className="hover:text-slate-900" href="#products">Products</a>
            <a className="hover:text-slate-900" href="#cta">Contact</a>
          </nav>
          <a href="#cta" className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">Get Demo</a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero3D />
        <Features />
        <ProductGrid />
        <FooterCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} AgriClimate. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
