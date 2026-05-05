// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: System Settings
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppState, AppAction } from "../types/domain";

interface SystemSettingsProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  navigate: (path: string) => void;
}

export function SystemSettings(props: SystemSettingsProps) {
  return (
    <>
      {/* SideNavBar (JSON Component) */}
      <nav className="fixed left-0 top-0 h-full flex flex-col pt-16 z-40 bg-slate-900 text-blue-600 font-inter text-xs font-medium uppercase tracking-wider h-screen w-64 border-r border-slate-700 hidden md:flex">
      <div className="px-6 pb-6 pt-4 border-b border-slate-700">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden shrink-0">
      <img alt="Greenhouse Module Alpha" className="w-full h-full object-cover" data-alt="A macro, highly detailed shot of a futuristic bio-reactor or greenhouse module's exterior hull. Dark aerospace metals contrast with glowing blue status lights. Corporate, industrial science fiction aesthetic. Low key lighting, moody atmosphere, sharp focus on mechanical details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6vWWUP-xrvrvmCsv77qJvY6Q6H33D5Qj9ix8P7UGpA5PzBAoRqP0T5wXHzSbt00vS2oD2RCo7rn6FwHMPTUQRnjfwXyGnISB828XPkOXcOdHfDYrfFskpdamD8A4dqSF0wMhXXbilyu-11LNSjU8VrgJ8I7EFzb6DsZtWFfN6GqoZzUlQHIvnhZbrTF5Gc-LoKuG2YVvAYWrPsFBOFMelAlqeGjLxOhUHN_7RYAqkMHhg_0TdtCpU2tkbk5lpVo36dn918gZfnik" />
      </div>
      <div>
      <h2 className="text-blue-600 font-bold font-h3 text-h3 tracking-tight">ORBITAL_GEN_1</h2>
      <p className="text-slate-400 font-label-caps text-label-caps lowercase">Sector 7G - Active</p>
      </div>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
      <ul className="flex flex-col gap-1">
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined">dashboard</span>
                              Dashboard
                          </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined">potted_plant</span>
                              Crop Bays
                          </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined">science</span>
                              Nutrient Mixes
                          </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined">warning</span>
                              Alerts
                          </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined">settings_suggest</span>
                              Maintenance
                          </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined">history</span>
                              Timeline
                          </a>
      </li>
      <li>
      <a aria-current="page" className="bg-slate-800 text-blue-400 border-l-4 border-blue-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
                              Settings
                          </a>
      </li>
      </ul>
      </div>
      <div className="border-t border-slate-700 p-4">
      <ul className="flex flex-col gap-1">
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined">help_outline</span>
                              Support
                          </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined">terminal</span>
                              Logs
                          </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-64 min-h-screen">
      {/* TopAppBar (JSON Component) */}
      <header className="flex justify-between items-center h-16 px-6 w-full sticky top-0 z-50 bg-slate-950 text-blue-600 font-inter tracking-tight text-sm font-semibold uppercase docked full-width top-0 border-b border-slate-700">
      <div className="flex items-center gap-4">
      <span className="text-lg font-black tracking-widest text-blue-600 font-h2 text-h2 md:hidden">ORBITAL_GRO_V4</span>
      {/* Search Bar Placeholder based on search_bar: "on_left" */}
      <div className="hidden md:flex items-center bg-slate-900 border border-slate-700 rounded-DEFAULT px-3 h-10 w-64 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-colors">
      <span className="material-symbols-outlined text-slate-400 mr-2 text-sm">search</span>
      <input className="bg-transparent border-none focus:ring-0 text-slate-200 font-mono-data text-mono-data w-full placeholder-slate-500" placeholder="QUERY SYSTEMS..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-4">
      <button className="hidden md:flex items-center justify-center h-touch_target px-4 border border-slate-700 text-slate-300 font-label-caps text-label-caps rounded-DEFAULT hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80">
                          System Status
                      </button>
      <button className="hidden md:flex items-center justify-center h-touch_target px-4 bg-primary-container text-on-primary-container font-label-caps text-label-caps rounded-DEFAULT hover:bg-blue-700 transition-colors duration-150 cursor-pointer active:opacity-80">
                          Sync Data
                      </button>
      <div className="flex items-center gap-2 border-l border-slate-700 pl-4 ml-2">
      <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80 rounded-DEFAULT relative">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80 rounded-DEFAULT">
      <span className="material-symbols-outlined">emergency_home</span>
      </button>
      <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 ml-2 overflow-hidden cursor-pointer">
      <img alt="Crew Member Profile" className="w-full h-full object-cover" data-alt="A tight, high-contrast portrait of an astronaut or scientist in a dark, moody environment. The lighting is harsh and dramatic, reflecting off a subtle uniform or tech gear. The color palette is dominated by deep blacks and cool grays. Corporate, serious, professional tone." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiLiJn-OMjFLyNZTokXRgnYN6XsAUKi9AYZwClIp_LxEUNlIvwEF6-jXpY-7-6WKuzw5QusGMeYprWDkxK0f1ctAoxlGz2ozLPMEOwJB--oWuOhLPbiBclznxYZ0z1HDQeet_eVcpRsVuRzSOaNPGkFJSK30PwPfJJI3wU----Wz8YIeXRApkzWRJus4oQYMdegka-DDdubDCU4TbRxxFcH_SQrbJ2CLJd2xK946eNxHdMqZf-D5RFHhbo6W4Ib9mW9KcQnoeJwvs" />
      </div>
      </div>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 p-gutter md:p-margin lg:p-xl overflow-y-auto">
      {/* Page Header */}
      <div className="mb-lg border-b border-surface-variant pb-md flex flex-col md:flex-row md:justify-between md:items-end gap-4">
      <div>
      <h1 className="font-h1 text-h1 text-on-background mb-xs">Global Settings</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Configure primary orbital operating parameters.</p>
      </div>
      <div className="flex gap-3">
      <button className="h-touch_target px-md flex items-center justify-center gap-2 border border-outline-variant text-on-surface rounded-DEFAULT hover:bg-surface-variant transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background outline-none">
      <span className="material-symbols-outlined text-[18px]">restart_alt</span>
      <span className="font-label-caps text-label-caps">Reset Defaults</span>
      </button>
      <button className="h-touch_target px-md flex items-center justify-center gap-2 bg-primary-container text-on-primary-container rounded-DEFAULT hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background outline-none">
      <span className="material-symbols-outlined text-[18px]">save</span>
      <span className="font-label-caps text-label-caps">Apply Changes</span>
      </button>
      </div>
      </div>
      {/* Settings Grid (Bento Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md">
      {/* System Preferences Module */}
      <section className="lg:col-span-8 bg-[#1E293B] border border-[#334155] rounded-xl flex flex-col">
      <header className="p-md border-b border-[#334155] flex items-center gap-3">
      <span className="material-symbols-outlined text-primary">display_settings</span>
      <h2 className="font-h3 text-h3 text-on-surface">System Preferences</h2>
      </header>
      <div className="p-md flex-1 flex flex-col gap-lg">
      {/* Interface Mode */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-md bg-surface-container-low border border-surface-variant rounded-lg">
      <div>
      <h3 className="font-body-lg text-body-lg text-on-background font-medium mb-1">Interface Mode</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Select visual environment density.</p>
      </div>
      <div className="flex bg-surface-container-highest rounded-lg p-1 border border-surface-variant">
      <label className="cursor-pointer">
      <input checked={true} className="sr-only peer" name="theme" type="radio" />
      <div className="px-4 py-2 rounded-DEFAULT font-label-caps text-label-caps text-on-surface-variant peer-checked:bg-[#334155] peer-checked:text-on-background transition-all flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px]">dark_mode</span>
                                              Dark (Active)
                                          </div>
      </label>
      <label className="cursor-pointer opacity-50 cursor-not-allowed" title="Light mode restricted in current sector">
      <input className="sr-only peer" disabled={true} name="theme" type="radio" />
      <div className="px-4 py-2 rounded-DEFAULT font-label-caps text-label-caps text-on-surface-variant transition-all flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px]">light_mode</span>
                                              Light
                                          </div>
      </label>
      </div>
      </div>
      {/* Language Designation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-md bg-surface-container-low border border-surface-variant rounded-lg">
      <div>
      <h3 className="font-body-lg text-body-lg text-on-background font-medium mb-1">Language Designation</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Primary operational dialect.</p>
      </div>
      <div className="relative w-full sm:w-64">
      <select className="w-full h-touch_target bg-[#0F172A] border border-[#334155] text-on-background font-body-md text-body-md rounded-DEFAULT px-md appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none">
      <option value="en">English (US) - Standard</option>
      <option value="en-gb">English (UK) - Orbital</option>
      <option value="es">Spanish - Station 4</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
      <span className="material-symbols-outlined text-[20px]">expand_more</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Data Management Module */}
      <section className="lg:col-span-4 bg-[#1E293B] border border-[#334155] rounded-xl flex flex-col">
      <header className="p-md border-b border-[#334155] flex items-center gap-3">
      <span className="material-symbols-outlined text-tertiary">database</span>
      <h2 className="font-h3 text-h3 text-on-surface">Data Management</h2>
      </header>
      <div className="p-md flex-1 flex flex-col gap-4">
      {/* Persistence Status */}
      <div className="p-md bg-surface-container-low border border-surface-variant rounded-lg">
      <div className="flex justify-between items-center mb-2">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Persistence Status</span>
      <span className="bg-primary-container/20 text-primary border border-primary/30 px-2 py-0.5 rounded font-mono-data text-[10px] uppercase tracking-wider">Syncing</span>
      </div>
      <div className="flex items-end gap-2 mb-2">
      <span className="font-h2 text-h2 text-on-background">4.2</span>
      <span className="font-body-md text-body-md text-on-surface-variant mb-1">GB Used</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden border border-surface-variant">
      <div className="bg-primary h-1.5 rounded-full" style={{width: "45%"}}></div>
      </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col gap-3 mt-auto pt-4">
      <button className="h-touch_target w-full flex items-center justify-center gap-2 border border-[#334155] text-on-surface rounded-DEFAULT hover:bg-surface-variant transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background outline-none">
      <span className="material-symbols-outlined text-[18px]">download</span>
      <span className="font-label-caps text-label-caps">Export CSV Log</span>
      </button>
      <button className="h-touch_target w-full flex items-center justify-center gap-2 border border-error/50 text-error rounded-DEFAULT hover:bg-error/10 transition-colors focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-background outline-none">
      <span className="material-symbols-outlined text-[18px]">delete_forever</span>
      <span className="font-label-caps text-label-caps">Clear Local Storage</span>
      </button>
      </div>
      </div>
      </section>
      {/* Notification Toggles Module */}
      <section className="lg:col-span-12 bg-[#1E293B] border border-[#334155] rounded-xl flex flex-col">
      <header className="p-md border-b border-[#334155] flex items-center gap-3">
      <span className="material-symbols-outlined text-secondary">notifications_active</span>
      <h2 className="font-h3 text-h3 text-on-surface">Telemetry &amp; Alerts</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-variant border-surface-variant">
      {/* Toggle 1 */}
      <div className="p-md flex items-center justify-between gap-4">
      <div className="flex-1">
      <h3 className="font-body-lg text-body-lg text-on-background font-medium mb-1">Critical Faults</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm">Bypass silent mode for hardware failures.</p>
      </div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input checked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-[#334155] appearance-none cursor-pointer transition-all duration-300 z-10 top-0 left-0" id="toggle1" name="toggle" style={{margin: "0", outline: "none"}} type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-[#0F172A] border border-[#334155] cursor-pointer transition-all duration-300" htmlFor="toggle1"></label>
      </div>
      </div>
      {/* Toggle 2 */}
      <div className="p-md flex items-center justify-between gap-4">
      <div className="flex-1">
      <h3 className="font-body-lg text-body-lg text-on-background font-medium mb-1">Yield Projections</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm">Daily digest of crop cycle estimations.</p>
      </div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-[#334155] appearance-none cursor-pointer transition-all duration-300 z-10 top-0 left-0" id="toggle2" name="toggle" style={{margin: "0", outline: "none"}} type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-[#0F172A] border border-[#334155] cursor-pointer transition-all duration-300" htmlFor="toggle2"></label>
      </div>
      </div>
      {/* Toggle 3 */}
      <div className="p-md flex items-center justify-between gap-4">
      <div className="flex-1">
      <h3 className="font-body-lg text-body-lg text-on-background font-medium mb-1">Atmospheric Shifts</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm">Notify on minor O2/CO2 fluctuations.</p>
      </div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input checked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-[#334155] appearance-none cursor-pointer transition-all duration-300 z-10 top-0 left-0" id="toggle3" name="toggle" style={{margin: "0", outline: "none"}} type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-[#0F172A] border border-[#334155] cursor-pointer transition-all duration-300" htmlFor="toggle3"></label>
      </div>
      </div>
      </div>
      </section>
      </div>
      </main>
      </div>
    </>
  );
}
