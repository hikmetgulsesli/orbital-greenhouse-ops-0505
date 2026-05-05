// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Configure Crop Bay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppState, AppAction } from "../types/domain";

interface ConfigureCropBayProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  navigate: (path: string) => void;
}

export function ConfigureCropBay(props: ConfigureCropBayProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-slate-900 h-screen w-64 border-r border-slate-700 flat no shadows tonal-layers fixed left-0 top-0 flex flex-col pt-16 z-40 hidden md:flex">
      {/* Brand / Header is handled by TopAppBar but we need spacing here if TopAppBar is sticky top */}
      <div className="px-6 py-6 border-b border-slate-700">
      <h2 className="text-blue-600 font-bold font-h2 text-h2 uppercase tracking-widest mb-1">ORBITAL_GEN_1</h2>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Sector 7G - Active</p>
      </div>
      <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-unit">
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>dashboard</span>
                      Dashboard
                  </a>
      {/* Active Tab: Crop Bays */}
      <a className="bg-slate-800 text-blue-400 border-l-4 border-blue-600 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>potted_plant</span>
                      Crop Bays
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>science</span>
                      Nutrient Mixes
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>warning</span>
                      Alerts
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>settings_suggest</span>
                      Maintenance
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>history</span>
                      Timeline
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
                      Settings
                  </a>
      </div>
      <div className="mt-auto border-t border-slate-700 py-4 flex flex-col gap-unit">
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>help_outline</span>
                      Support
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>terminal</span>
                      Logs
                  </a>
      </div>
      </nav>
      {/* Main Content Area Wrapper */}
      <div className="flex-1 flex flex-col md:ml-64 w-full h-full relative">
      {/* TopAppBar */}
      <header className="bg-slate-950 flex justify-between items-center h-16 px-6 w-full sticky top-0 z-50 docked full-width top-0 border-b border-slate-700 flat no shadows">
      {/* Left: Brand (Mobile) & Search */}
      <div className="flex items-center gap-md">
      {/* Mobile Logo */}
      <div className="md:hidden font-inter tracking-tight text-sm font-semibold uppercase text-lg font-black tracking-widest text-blue-600">
                          ORBITAL_GRO_V4
                      </div>
      {/* Search */}
      <div className="hidden md:flex relative h-touch_target items-center">
      <span className="material-symbols-outlined absolute left-3 text-slate-400 pointer-events-none">search</span>
      <input className="bg-surface-container-lowest border border-slate-700 rounded h-10 pl-10 pr-4 text-on-surface font-body-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors w-64" placeholder="Search parameters..." type="text" />
      </div>
      </div>
      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-md">
      {/* Secondary Action */}
      <button className="hidden lg:flex items-center gap-2 h-touch_target px-4 border border-slate-700 rounded text-slate-400 font-label-caps text-label-caps hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80">
                          System Status
                      </button>
      {/* Primary Action */}
      <button className="hidden lg:flex items-center gap-2 h-touch_target px-4 bg-primary-container text-on-primary-container rounded font-label-caps text-label-caps hover:bg-opacity-90 transition-colors duration-150 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>sync</span>
                          Sync Data
                      </button>
      {/* Icon Actions */}
      <div className="flex items-center gap-unit">
      <button className="h-touch_target w-touch_target flex items-center justify-center text-slate-400 hover:bg-slate-800 rounded transition-colors duration-150 cursor-pointer active:opacity-80 relative">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="h-touch_target w-touch_target flex items-center justify-center text-slate-400 hover:bg-slate-800 rounded transition-colors duration-150 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">emergency_home</span>
      </button>
      </div>
      {/* Profile */}
      <div className="h-touch_target flex items-center pl-md border-l border-slate-700 ml-xs">
      <img alt="Crew Member Profile" className="w-8 h-8 rounded-full border border-slate-700" data-alt="A stylized digital portrait of a crew member profile icon, minimalist and geometric, rendered in deep blues and slate gray. Clean, corporate aerospace aesthetic suitable for a high-tech dashboard interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGKKe-i5NCcnUbea6Lvv_7hFWc45eZ3BTokkXs_Jue8l8sATvlgMx0ygBLdnaDgdfjSetaN6CdP3lyqDpSujr7MkA5dEocVl3zcWEIlOGff67tTQkW6Bsa4N6lqZL0T49Vxwf7nRFpfZZUWtB2UWhe-pOdUXV_6AIY_CJwJ8U_wH7jiJgzp7rbbl8bQ_IsCyIZ8KOOG4Fpi78EbU5Ve3J24bTku-CJCSsYYAg8tv1Kcd45R7TeN0UcGC5KYyk5EOksxtOQrKic8p8" />
      </div>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 overflow-y-auto p-gutter md:p-margin bg-background relative">
      <div className="max-w-4xl mx-auto w-full">
      {/* Page Header */}
      <div className="mb-lg pb-md border-b border-surface-container-highest">
      <div className="flex items-center gap-sm text-on-surface-variant font-label-caps text-label-caps mb-xs">
      <a className="hover:text-primary transition-colors" href="#">CROP BAYS</a>
      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      <span className="text-primary">EDIT BAY</span>
      </div>
      <h1 className="font-h1 text-h1 text-on-surface">Configure Crop Bay</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Adjust environmental parameters and scheduling for optimal yield.</p>
      </div>
      {/* Form Container */}
      <form className="bg-surface-container-high border border-surface-container-highest rounded-xl shadow-none p-lg flex flex-col gap-lg">
      {/* Section: Identification */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant">Bay ID</label>
      <input className="h-touch_target bg-surface-container-lowest border border-surface-container-highest rounded px-md font-mono-data text-mono-data text-on-surface opacity-70 cursor-not-allowed" disabled={true} type="text" value="BAY-7G-Alpha-09" />
      <p className="font-body-md text-[12px] text-on-surface-variant mt-1">Auto-generated identifier. Immutable.</p>
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface">Status</label>
      <div className="h-touch_target flex items-center px-md border border-outline-variant bg-surface-container rounded">
      <span className="w-2 h-2 rounded-full bg-primary mr-sm"></span>
      <span className="font-mono-data text-mono-data text-primary">Active - Calibrating</span>
      </div>
      </div>
      </div>
      <hr className="border-surface-container-highest" />
      {/* Section: Core Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface">Crop Type <span className="text-error">*</span></label>
      <div className="relative">
      <select className="appearance-none w-full h-touch_target bg-surface-container-lowest border border-outline-variant rounded px-md pr-10 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors">
      <option>Microgreens (Arugula)</option>
      <option selected={true}>Dwarf Wheat (Apogee)</option>
      <option>Hydro-Tomatoes (Micro-Tina)</option>
      <option>Algae Culture (Spirulina)</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">arrow_drop_down</span>
      </div>
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface">Growth Medium</label>
      <div className="relative">
      <select className="appearance-none w-full h-touch_target bg-surface-container-lowest border border-outline-variant rounded px-md pr-10 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors">
      <option>Aeroponic Mist</option>
      <option selected={true}>Nutrient Film Technique (NFT)</option>
      <option>Clay Pebbles (Hydroton)</option>
      <option>Agar Gel</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">arrow_drop_down</span>
      </div>
      </div>
      <div className="flex flex-col gap-xs md:col-span-2">
      <label className="font-label-caps text-label-caps text-on-surface">Target Nutrient Mix</label>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">science</span>
      <input className="w-full h-touch_target bg-surface-container-lowest border border-outline-variant rounded pl-10 pr-md font-mono-data text-mono-data text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors" type="text" value="N-P-K: 5-3-4 + Trace Minerals" />
      </div>
      </div>
      </div>
      <hr className="border-surface-container-highest" />
      {/* Section: Environmental Thresholds */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Validation State Example */}
      <div className="flex flex-col gap-xs relative">
      <label className="font-label-caps text-label-caps text-on-surface">Humidity Threshold (%)</label>
      <div className="relative">
      <input className="w-full h-touch_target bg-surface-container-lowest border border-error rounded pl-md pr-10 font-mono-data text-mono-data text-on-surface focus:border-error focus:ring-1 focus:ring-error focus:outline-none transition-colors" type="number" value="85" />
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-error pointer-events-none">warning</span>
      </div>
      <p className="font-body-md text-[12px] text-error mt-1 flex items-center gap-1">
                                      Value exceeds safe operating limits (Max 80%).
                                  </p>
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface">Lighting Schedule</label>
      <div className="flex items-center gap-sm">
      <div className="relative flex-1">
      <input className="w-full h-touch_target bg-surface-container-lowest border border-outline-variant rounded px-md font-mono-data text-mono-data text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors" type="time" value="06:00" />
      </div>
      <span className="text-on-surface-variant font-mono-data">to</span>
      <div className="relative flex-1">
      <input className="w-full h-touch_target bg-surface-container-lowest border border-outline-variant rounded px-md font-mono-data text-mono-data text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors" type="time" value="22:00" />
      </div>
      </div>
      </div>
      </div>
      {/* Actions */}
      <div className="mt-md pt-lg border-t border-surface-container-highest flex justify-end gap-md">
      <button className="h-touch_target px-lg border border-outline-variant rounded text-on-surface font-label-caps text-label-caps hover:bg-surface-container-highest transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background outline-none" type="button">
                                  Cancel
                              </button>
      <button className="h-touch_target px-lg bg-primary-container text-on-primary-container rounded font-label-caps text-label-caps hover:bg-opacity-90 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background outline-none flex items-center gap-sm" type="submit">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>save</span>
                                  Save Bay
                              </button>
      </div>
      </form>
      </div>
      </main>
      </div>
    </>
  );
}
