// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Operations Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppState, AppAction } from "../types/domain";

interface OperationsDashboardProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  navigate: (path: string) => void;
}

export function OperationsDashboard(props: OperationsDashboardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-slate-950 flex justify-between items-center h-16 px-6 w-full sticky top-0 z-50 docked full-width border-b border-slate-700 flat no shadows">
      <div className="flex items-center gap-md">
      <span className="text-lg font-black tracking-widest text-blue-600 uppercase">ORBITAL_GRO_V4</span>
      </div>
      <div className="flex items-center gap-lg">
      <div className="flex items-center gap-sm">
      <button className="font-inter tracking-tight text-sm font-semibold uppercase text-slate-400 hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80 px-sm py-xs rounded">System Status</button>
      <button className="font-inter tracking-tight text-sm font-semibold uppercase text-blue-600 hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80 px-sm py-xs rounded">Sync Data</button>
      </div>
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-slate-400 hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80 p-xs rounded-full h-touch_target w-touch_target flex items-center justify-center" data-icon="notifications">notifications</span>
      <span className="material-symbols-outlined text-slate-400 hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80 p-xs rounded-full h-touch_target w-touch_target flex items-center justify-center" data-icon="emergency_home">emergency_home</span>
      <div className="h-8 w-8 rounded-full bg-surface-variant overflow-hidden border border-slate-700 ml-sm cursor-pointer hover:bg-slate-800 transition-colors duration-150">
      <img alt="Crew Member Profile" className="w-full h-full object-cover" data-alt="A detailed, hyper-realistic portrait of an astronaut crew member inside a dimly lit orbital station. The lighting is dramatic, with cool blue screens illuminating their face against the stark, dark background of the command module. The aesthetic is strictly modern sci-fi, emphasizing high-fidelity textures and functional corporate industrial design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI4QO64AVozv8B7jbr-Woac84if3Va15_ywRKh87r3lJ5poohg50cIXTPraCsyVi_c36xi6LcnZClikbc6-GURbFtwYHXuABPCdrgwZkMp7h_kcufZsWj6UHbO6dqymyGj1thYzWfpqjFN_snmBBI7gkPsMmNnyOAJOe0mZd_NFnDcoyzGPcSstJdHLCCL5NkpVQevGExgOTlDX4zOqIruYB2SrL780J20oHVk7BAtEs0B7VjxpBCgZIYvVzfCOIcZssh7kZ3Jhjo" />
      </div>
      </div>
      </div>
      </header>
      {/* App Container */}
      <div className="flex h-[calc(100vh-64px)]">
      {/* SideNavBar */}
      <nav className="bg-slate-900 h-screen w-64 border-r border-slate-700 flat no shadows tonal-layers fixed left-0 top-0 flex flex-col pt-16 z-40">
      <div className="px-md py-lg border-b border-slate-700 flex flex-col gap-xs">
      <span className="font-inter text-xs font-medium uppercase tracking-wider text-slate-400">Sector 7G - Active</span>
      <span className="text-blue-600 font-bold font-h3 text-h3">ORBITAL_GEN_1</span>
      <span className="font-mono-data text-mono-data text-slate-500">Greenhouse Module Alpha</span>
      </div>
      <div className="flex-1 overflow-y-auto py-sm flex flex-col gap-unit">
      <a className="bg-slate-800 text-blue-400 border-l-4 border-blue-600 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                          Dashboard
                      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" data-icon="potted_plant">potted_plant</span>
                          Crop Bays
                      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" data-icon="science">science</span>
                          Nutrient Mixes
                      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" data-icon="warning">warning</span>
                          Alerts
                      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" data-icon="settings_suggest">settings_suggest</span>
                          Maintenance
                      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" data-icon="history">history</span>
                          Timeline
                      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
                          Settings
                      </a>
      </div>
      <div className="border-t border-slate-700 py-sm flex flex-col gap-unit">
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
                          Support
                      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#">
      <span className="material-symbols-outlined" data-icon="terminal">terminal</span>
                          Logs
                      </a>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="flex-1 ml-64 overflow-y-auto bg-background p-margin flex flex-col gap-lg">
      {/* Context & Filters */}
      <div className="flex justify-between items-end w-full">
      <div className="flex flex-col gap-xs">
      <h1 className="font-h1 text-h1 text-on-surface">Operations Overview</h1>
      <span className="font-mono-data text-mono-data text-on-surface-variant">SYS_TIME: 2042.11.04-1844Z</span>
      </div>
      <div className="flex items-center gap-md">
      <div className="relative flex items-center">
      <span className="material-symbols-outlined absolute left-sm text-on-surface-variant text-[18px]">search</span>
      <input className="bg-surface-container-lowest border border-outline-variant text-on-surface rounded font-body-md text-body-md pl-xl pr-sm py-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition-all w-64 h-touch_target" placeholder="Search bays, crops..." type="text" />
      </div>
      <div className="flex gap-sm">
      <button className="bg-surface-container border border-outline-variant text-on-surface rounded px-md h-touch_target flex items-center justify-center font-label-caps text-label-caps hover:bg-surface-container-highest transition-colors">
                                  ALL STATUS
                              </button>
      <button className="bg-primary-container border border-primary-container text-on-primary-container rounded px-md h-touch_target flex items-center justify-center font-label-caps text-label-caps hover:brightness-110 transition-all">
                                  NEW YIELD
                              </button>
      </div>
      </div>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-gutter h-full">
      {/* Crop Bays Grid (Spans 8 columns) */}
      <div className="col-span-8 grid grid-cols-2 gap-gutter content-start">
      {/* Bay Card 1 */}
      <div className="bg-surface-container border border-surface-variant rounded-xl p-md flex flex-col gap-md hover:border-outline-variant transition-colors group">
      <div className="flex justify-between items-center border-b border-surface-variant pb-xs">
      <span className="font-mono-data text-mono-data text-primary-fixed">BAY-01A</span>
      <span className="material-symbols-outlined text-primary-fixed group-hover:text-primary transition-colors" data-icon="potted_plant" style={{fontVariationSettings: "'FILL' 1"}}>potted_plant</span>
      </div>
      <div className="flex flex-col gap-xs">
      <span className="font-h3 text-h3 text-on-surface">Micro-Algae V2</span>
      <span className="font-label-caps text-label-caps text-on-surface-variant">PHOTOSYNTHESIS ACTIVE</span>
      </div>
      <div className="flex justify-between items-end mt-sm">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-unit">HEALTH</span>
      <span className="font-h2 text-h2 text-on-surface">98%</span>
      </div>
      <div className="bg-[#2563eb]/20 border border-[#2563eb]/50 text-primary-fixed px-sm py-xs rounded">
      <span className="font-label-caps text-label-caps">MATURE</span>
      </div>
      </div>
      <div className="w-full h-1 bg-surface-container-highest mt-xs rounded-full overflow-hidden">
      <div className="h-full bg-primary-container w-[98%]"></div>
      </div>
      </div>
      {/* Bay Card 2 */}
      <div className="bg-surface-container border border-surface-variant rounded-xl p-md flex flex-col gap-md hover:border-outline-variant transition-colors group">
      <div className="flex justify-between items-center border-b border-surface-variant pb-xs">
      <span className="font-mono-data text-mono-data text-primary-fixed">BAY-02B</span>
      <span className="material-symbols-outlined text-primary-fixed group-hover:text-primary transition-colors" data-icon="grass" style={{fontVariationSettings: "'FILL' 1"}}>grass</span>
      </div>
      <div className="flex flex-col gap-xs">
      <span className="font-h3 text-h3 text-on-surface">Hydro-Lettuce X</span>
      <span className="font-label-caps text-label-caps text-on-surface-variant">NUTRIENT FLOW OPTIMAL</span>
      </div>
      <div className="flex justify-between items-end mt-sm">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-unit">HEALTH</span>
      <span className="font-h2 text-h2 text-on-surface">85%</span>
      </div>
      <div className="bg-[#2563eb]/20 border border-[#2563eb]/50 text-primary-fixed px-sm py-xs rounded">
      <span className="font-label-caps text-label-caps">VEGETATIVE</span>
      </div>
      </div>
      <div className="w-full h-1 bg-surface-container-highest mt-xs rounded-full overflow-hidden">
      <div className="h-full bg-primary-container w-[85%]"></div>
      </div>
      </div>
      {/* Bay Card 3 (Warning) */}
      <div className="bg-surface-container border border-tertiary/50 rounded-xl p-md flex flex-col gap-md hover:border-tertiary transition-colors group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-tertiary/10 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
      <div className="flex justify-between items-center border-b border-surface-variant pb-xs">
      <span className="font-mono-data text-mono-data text-tertiary">BAY-03C</span>
      <span className="material-symbols-outlined text-tertiary" data-icon="water_drop" style={{fontVariationSettings: "'FILL' 1"}}>water_drop</span>
      </div>
      <div className="flex flex-col gap-xs">
      <span className="font-h3 text-h3 text-on-surface">Soy Matrix Beta</span>
      <span className="font-label-caps text-label-caps text-tertiary">HYDRATION LOW</span>
      </div>
      <div className="flex justify-between items-end mt-sm">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-unit">HEALTH</span>
      <span className="font-h2 text-h2 text-tertiary">62%</span>
      </div>
      <div className="bg-tertiary/20 border border-tertiary/50 text-tertiary px-sm py-xs rounded">
      <span className="font-label-caps text-label-caps">SEEDLING</span>
      </div>
      </div>
      <div className="w-full h-1 bg-surface-container-highest mt-xs rounded-full overflow-hidden">
      <div className="h-full bg-tertiary w-[62%]"></div>
      </div>
      </div>
      {/* Bay Card 4 */}
      <div className="bg-surface-container border border-surface-variant rounded-xl p-md flex flex-col gap-md hover:border-outline-variant transition-colors group">
      <div className="flex justify-between items-center border-b border-surface-variant pb-xs">
      <span className="font-mono-data text-mono-data text-primary-fixed">BAY-04D</span>
      <span className="material-symbols-outlined text-primary-fixed group-hover:text-primary transition-colors" data-icon="forest" style={{fontVariationSettings: "'FILL' 1"}}>forest</span>
      </div>
      <div className="flex flex-col gap-xs">
      <span className="font-h3 text-h3 text-on-surface">Dwarf Tomato Z</span>
      <span className="font-label-caps text-label-caps text-on-surface-variant">FLOWERING STAGE</span>
      </div>
      <div className="flex justify-between items-end mt-sm">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-unit">HEALTH</span>
      <span className="font-h2 text-h2 text-on-surface">94%</span>
      </div>
      <div className="bg-[#2563eb]/20 border border-[#2563eb]/50 text-primary-fixed px-sm py-xs rounded">
      <span className="font-label-caps text-label-caps">FLOWERING</span>
      </div>
      </div>
      <div className="w-full h-1 bg-surface-container-highest mt-xs rounded-full overflow-hidden">
      <div className="h-full bg-primary-container w-[94%]"></div>
      </div>
      </div>
      </div>
      {/* Alerts Feed (Spans 4 columns) */}
      <div className="col-span-4 bg-surface-container border border-surface-variant rounded-xl p-md flex flex-col h-[calc(100%-24px)]">
      <div className="flex justify-between items-center border-b border-surface-variant pb-sm mb-md">
      <h2 className="font-h3 text-h3 text-on-surface">System Alerts</h2>
      <span className="bg-surface-container-highest text-on-surface-variant px-sm py-unit rounded font-mono-data text-mono-data">LIVE</span>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col gap-sm pr-xs">
      {/* Alert Item Error */}
      <div className="flex gap-md p-sm border border-error/20 bg-error/5 rounded-lg">
      <span className="material-symbols-outlined text-error mt-unit" data-icon="error">error</span>
      <div className="flex flex-col gap-unit">
      <span className="font-body-md text-body-md font-semibold text-error">O2 Scrubber Malfunction</span>
      <span className="font-body-md text-body-md text-on-surface-variant text-sm">Sector 7G ambient O2 dropped by 1.2%. Initiating backup cycle.</span>
      <span className="font-mono-data text-mono-data text-outline mt-xs">T-02:14:00</span>
      </div>
      </div>
      {/* Alert Item Warning */}
      <div className="flex gap-md p-sm border border-tertiary/20 bg-tertiary/5 rounded-lg">
      <span className="material-symbols-outlined text-tertiary mt-unit" data-icon="warning">warning</span>
      <div className="flex flex-col gap-unit">
      <span className="font-body-md text-body-md font-semibold text-tertiary">Nutrient Flow Variance</span>
      <span className="font-body-md text-body-md text-on-surface-variant text-sm">BAY-03C pump pressure below threshold. Inspection required.</span>
      <span className="font-mono-data text-mono-data text-outline mt-xs">T-04:45:12</span>
      </div>
      </div>
      {/* Alert Item Info */}
      <div className="flex gap-md p-sm border border-surface-variant rounded-lg">
      <span className="material-symbols-outlined text-primary-fixed mt-unit" data-icon="info">info</span>
      <div className="flex flex-col gap-unit">
      <span className="font-body-md text-body-md font-semibold text-on-surface">Harvest Cycle Complete</span>
      <span className="font-body-md text-body-md text-on-surface-variant text-sm">BAY-01A yield secured in stasis pod 4.</span>
      <span className="font-mono-data text-mono-data text-outline mt-xs">T-11:00:00</span>
      </div>
      </div>
      {/* Alert Item Info */}
      <div className="flex gap-md p-sm border border-surface-variant rounded-lg opacity-70">
      <span className="material-symbols-outlined text-outline mt-unit" data-icon="sync">sync</span>
      <div className="flex flex-col gap-unit">
      <span className="font-body-md text-body-md font-semibold text-on-surface">Data Sync Successful</span>
      <span className="font-body-md text-body-md text-on-surface-variant text-sm">Command center link established. Payload 45MB.</span>
      <span className="font-mono-data text-mono-data text-outline mt-xs">T-14:22:18</span>
      </div>
      </div>
      </div>
      </div>
      {/* Resource Consumption Chart (Spans 12 columns, below) */}
      <div className="col-span-12 bg-surface-container border border-surface-variant rounded-xl p-md flex flex-col gap-md mt-md">
      <div className="flex justify-between items-center border-b border-surface-variant pb-sm">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="monitoring">monitoring</span>
      <h2 className="font-h3 text-h3 text-on-surface">Resource Consumption (24H)</h2>
      </div>
      <div className="flex gap-md font-mono-data text-mono-data text-on-surface-variant">
      <div className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-primary-container"></span> Power (kW)</div>
      <div className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-[#10b981]"></span> Water (L)</div>
      <div className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-tertiary"></span> Nutrients (mL)</div>
      </div>
      </div>
      {/* Abstract Chart Representation using CSS Grid/Flex */}
      <div className="h-48 w-full flex items-end gap-sm py-sm relative">
      {/* Y-axis lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
      <div className="border-t border-surface-variant w-full h-0"></div>
      <div className="border-t border-surface-variant w-full h-0"></div>
      <div className="border-t border-surface-variant w-full h-0"></div>
      <div className="border-t border-surface-variant w-full h-0"></div>
      </div>
      {/* Data Bars (Simulated) */}
      <div className="flex-1 flex gap-unit justify-center items-end h-full z-10 group cursor-crosshair">
      <div className="w-1/3 bg-primary-container h-[40%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-[#10b981] h-[60%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-tertiary h-[30%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="flex-1 flex gap-unit justify-center items-end h-full z-10 group cursor-crosshair">
      <div className="w-1/3 bg-primary-container h-[45%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-[#10b981] h-[65%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-tertiary h-[35%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="flex-1 flex gap-unit justify-center items-end h-full z-10 group cursor-crosshair">
      <div className="w-1/3 bg-primary-container h-[55%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-[#10b981] h-[50%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-tertiary h-[40%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="flex-1 flex gap-unit justify-center items-end h-full z-10 group cursor-crosshair">
      <div className="w-1/3 bg-primary-container h-[70%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-[#10b981] h-[40%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-tertiary h-[50%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="flex-1 flex gap-unit justify-center items-end h-full z-10 group cursor-crosshair">
      <div className="w-1/3 bg-primary-container h-[80%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-[#10b981] h-[45%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-tertiary h-[60%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="flex-1 flex gap-unit justify-center items-end h-full z-10 group cursor-crosshair">
      <div className="w-1/3 bg-primary-container h-[65%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-[#10b981] h-[55%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-tertiary h-[45%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="flex-1 flex gap-unit justify-center items-end h-full z-10 group cursor-crosshair">
      <div className="w-1/3 bg-primary-container h-[50%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-[#10b981] h-[70%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-1/3 bg-tertiary h-[30%] rounded-t opacity-80 group-hover:opacity-100 transition-opacity"></div>
      </div>
      </div>
      <div className="flex justify-between font-mono-data text-mono-data text-outline px-sm">
      <span>00:00</span>
      <span>04:00</span>
      <span>08:00</span>
      <span>12:00</span>
      <span>16:00</span>
      <span>20:00</span>
      <span>24:00</span>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
