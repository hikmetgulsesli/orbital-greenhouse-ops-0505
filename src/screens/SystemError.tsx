// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: System Error
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppState, AppAction } from "../types/domain";

interface SystemErrorProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  navigate: (path: string) => void;
}

export function SystemError(props: SystemErrorProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-slate-900 h-screen w-64 border-r border-slate-700 flat no shadows tonal-layers fixed left-0 top-0 flex flex-col pt-16 z-40">
      {/* Header */}
      <div className="px-6 pb-8 pt-4">
      <div className="flex items-center gap-4 mb-2">
      <img alt="Greenhouse Module Alpha" className="w-10 h-10 rounded border border-outline-variant object-cover" data-alt="A highly detailed, macro shot of a glowing, translucent green synthetic leaf inside a high-tech orbital greenhouse module. The lighting is pristine white, contrasting starkly with the deep space black background. The mood is scientific, sterile, and advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAao1C93_qEs8Dq870oiKFiRSSJ2ySDC8lHXqJx_qitiQgkDqT6SpYZ9uwNCTWxE22OukyqWDxqIejVmkGGNCxkx4u4uRSbGlTmUFhgWAAHztPJaCiNp_Ja7YHobmTdCj9RUePClbY0vT9PJrUFmebjT_P1CqJrIcX9R1GLGVP4dTi_ns7RYNTsqY1urf_aiOop3m1jWAZYLGTfN2iAP7A0S-u1i-yHxxfKSmzwmLpumZoXcgGBkPtjqQWMawfBTx0vsdk8Jb9klSA" />
      <div>
      <h2 className="font-h3 text-h3 text-on-surface">ORBITAL_GEN_1</h2>
      <p className="font-mono-data text-mono-data text-on-surface-variant mt-1">Sector 7G - Active</p>
      </div>
      </div>
      </div>
      {/* Main Tabs */}
      <div className="flex flex-col flex-grow overflow-y-auto font-inter text-xs font-medium uppercase tracking-wider text-slate-400">
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
                      Dashboard
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined text-[20px]">potted_plant</span>
                      Crop Bays
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined text-[20px]">science</span>
                      Nutrient Mixes
                  </a>
      {/* Active Tab */}
      <a className="bg-slate-800 text-blue-400 border-l-4 border-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined text-[20px] fill">warning</span>
                      Alerts
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined text-[20px]">settings_suggest</span>
                      Maintenance
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined text-[20px]">history</span>
                      Timeline
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined text-[20px]">settings</span>
                      Settings
                  </a>
      </div>
      {/* Footer Tabs */}
      <div className="mt-auto border-t border-slate-700 font-inter text-xs font-medium uppercase tracking-wider text-slate-400 pb-4 pt-2">
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined text-[20px]">help_outline</span>
                      Support
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined text-[20px]">terminal</span>
                      Logs
                  </a>
      </div>
      </nav>
      {/* Main Workspace */}
      <div className="flex-grow flex flex-col ml-64 relative min-h-screen">
      {/* TopAppBar */}
      <header className="bg-slate-950 flex justify-between items-center h-16 px-6 w-full sticky top-0 z-50 docked full-width border-b border-slate-700 flat no shadows text-slate-400 font-inter tracking-tight text-sm font-semibold uppercase">
      {/* Brand & Search */}
      <div className="flex items-center gap-8 flex-1">
      <div className="text-lg font-black tracking-widest text-blue-600">
                          ORBITAL_GRO_V4
                      </div>
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px]">search</span>
      <input className="w-full bg-background border border-outline-variant text-on-surface text-xs h-8 pl-9 pr-3 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-outline" placeholder="SEARCH SYSTEM..." type="text" />
      </div>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-4">
      <button className="px-4 h-8 border border-outline-variant rounded flex items-center justify-center text-xs hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80">
                          System Status
                      </button>
      <button className="px-4 h-8 bg-primary-container text-on-primary-container rounded flex items-center justify-center text-xs hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80">
                          Sync Data
                      </button>
      <div className="h-6 w-px bg-slate-700 mx-2"></div>
      <div className="flex items-center gap-2">
      <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-800 transition-colors duration-150 rounded cursor-pointer active:opacity-80 text-blue-500 border-b-2 border-blue-600">
      <span className="material-symbols-outlined text-[20px]">notifications</span>
      </button>
      <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-800 transition-colors duration-150 rounded cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined text-[20px]">emergency_home</span>
      </button>
      </div>
      <img alt="Crew Member Profile" className="w-8 h-8 rounded-full border border-outline-variant ml-2 object-cover cursor-pointer hover:opacity-80 transition-opacity" data-alt="A tightly framed portrait of an astronaut inside a dimly lit orbital command module. The ambient light is a cool blue, reflecting off the visor of a sleek, dark helmet. The mood is serious, focused, and cinematic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC99OHbKyOJEoPoCJyncdPkJhCMrTuL_aGfxvoNGzU_-fEvmjaXsLBf8gzyQkwoXCJm5mn6WCLJoyqDPQfk4MMWMAO_HOh8m72rwBkqMGHuWdfnH3RROag48mcQ2OqrW0l_J7t-lYtL_f_8Er_-W4s2jT4dSxzyrgDCSR7ZDjWJL1H3I15aebGiV_EaZOBEJRpRUy1ozqSE4_jk_E7Er78oX-wt4cdbwoKLtHH7er2blMnEPiRkqrVtmIgdc_Zwvc5BZTQs1_dH3xs" />
      </div>
      </header>
      {/* Content Canvas (System Error State) */}
      <main className="flex-grow flex items-center justify-center p-md bg-background">
      <div className="w-full max-w-lg bg-surface-container-high border border-outline-variant rounded-xl p-xl flex flex-col items-center text-center shadow-2xl shadow-black/50">
      {/* Error Icon */}
      <div className="w-24 h-24 rounded-full bg-error-container/20 border border-error-container flex items-center justify-center mb-6">
      <span className="material-symbols-outlined text-[48px] text-error fill">error</span>
      </div>
      {/* Typography */}
      <h1 className="font-h2 text-h2 text-on-surface mb-3 tracking-tight">System Sync Failure</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-md">
                          Data persistence error detected in sector storage. Critical telemetry from Sector 7G cannot be written to the primary array.
                      </p>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
      <button className="h-touch_target px-8 bg-primary-container text-on-primary-container font-label-caps text-label-caps rounded flex items-center justify-center hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                              Retry Sync
                          </button>
      <button className="h-touch_target px-8 bg-transparent border border-outline-variant text-on-surface font-label-caps text-label-caps rounded flex items-center justify-center hover:bg-surface-bright transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                              Clear Local Cache &amp; Reset
                          </button>
      </div>
      {/* Diagnostic Code */}
      <div className="mt-10 pt-6 border-t border-outline-variant w-full flex justify-between items-center text-on-surface-variant font-mono-data text-mono-data">
      <span>ERR_CODE: 0x88F9_A</span>
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-error animate-pulse"></span> Offline</span>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
