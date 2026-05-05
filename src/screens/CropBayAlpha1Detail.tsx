// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Crop Bay Alpha-1 Detail
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppState, AppAction } from "../types/domain";

interface CropBayAlpha1DetailProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  navigate: (path: string) => void;
}

function navLinkClasses(isActive: boolean) {
  return isActive
    ? "bg-slate-800 text-blue-400 border-l-4 border-blue-600 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600"
    : "text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600";
}
export function CropBayAlpha1Detail(props: CropBayAlpha1DetailProps) {
  const { state, dispatch, navigate } = props;
  const route = state.currentRoute;

  return (
    <>
      {/* SideNavBar (JSON Derived) */}
      <nav className="fixed left-0 top-0 h-full flex flex-col pt-16 z-40 bg-slate-900 border-r border-slate-700 w-64 hidden md:flex">
      {/* Header is handled by TopAppBar, but SideNav needs to clear it */}
      <div className="px-6 py-4 data-divider mb-4">
      <div className="text-blue-600 font-bold font-h2 text-h2 uppercase">ORBITAL_GEN_1</div>
      <div className="text-slate-400 font-body-md text-body-md mt-1">Sector 7G - Active</div>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
      {/* Dashboard */}
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600 font-inter text-xs font-medium uppercase tracking-wider" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span>Dashboard</span>
      </a>
      {/* Crop Bays (ACTIVE) */}
      <a className={navLinkClasses(route === '/crop-bays')} href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined" data-icon="potted_plant">potted_plant</span>
      <span>Crop Bays</span>
      </a>
      {/* Nutrient Mixes */}
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600 font-inter text-xs font-medium uppercase tracking-wider" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined" data-icon="science">science</span>
      <span>Nutrient Mixes</span>
      </a>
      {/* Alerts */}
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600 font-inter text-xs font-medium uppercase tracking-wider" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined" data-icon="warning">warning</span>
      <span>Alerts</span>
      </a>
      {/* Maintenance */}
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600 font-inter text-xs font-medium uppercase tracking-wider" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined" data-icon="settings_suggest">settings_suggest</span>
      <span>Maintenance</span>
      </a>
      {/* Timeline */}
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600 font-inter text-xs font-medium uppercase tracking-wider" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined" data-icon="history">history</span>
      <span>Timeline</span>
      </a>
      {/* Settings */}
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600 font-inter text-xs font-medium uppercase tracking-wider" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span>Settings</span>
      </a>
      </div>
      <div className="mt-auto py-4 data-divider border-t">
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600 font-inter text-xs font-medium uppercase tracking-wider" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
      <span>Support</span>
      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600 font-inter text-xs font-medium uppercase tracking-wider" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined" data-icon="terminal">terminal</span>
      <span>Logs</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 w-full h-full relative">
      {/* TopAppBar (JSON Derived) */}
      <header className="flex justify-between items-center h-16 px-6 w-full sticky top-0 z-50 bg-slate-950 border-b border-slate-700">
      {/* Brand/Search Area */}
      <div className="flex items-center gap-6">
      {/* Mobile Menu Toggle (Visible only on small screens) */}
      <button className="md:hidden text-slate-400 hover:bg-slate-800 transition-colors duration-150 p-2 rounded cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="menu">menu</span>
      </button>
      <div className="text-lg font-black tracking-widest text-blue-600 font-inter tracking-tight text-sm font-semibold uppercase">
                          ORBITAL_GRO_V4
                      </div>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-4">
      <button className="text-slate-400 hover:bg-slate-800 transition-colors duration-150 p-2 rounded-full cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="text-slate-400 hover:bg-slate-800 transition-colors duration-150 p-2 rounded-full cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="emergency_home">emergency_home</span>
      </button>
      <div className="hidden sm:flex items-center gap-2 border-l border-slate-700 pl-4 ml-2">
      <button onClick={() => navigate('/settings')} className="btn-secondary text-sm h-10 min-h-0">System Status</button>
      <button onClick={() => { dispatch({ type: 'SET_LAST_SYNC', payload: new Date().toISOString() }); }} className="btn-primary text-sm h-10 min-h-0">Sync Data</button>
      </div>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 overflow-y-auto p-gutter md:p-margin pb-24 md:pb-margin">
      {/* Page Header & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Crop Bay Alpha-7</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Strain: Lollo Bionda (Hydroponic) • Cycle Day: 24/45</p>
      </div>
      <div className="flex flex-wrap gap-2">
      <button onClick={() => navigate('/configure-crop-bay')} className="btn-secondary gap-2">
      <span className="material-symbols-outlined text-sm">water_drop</span>
                              Flush System
                          </button>
      <button onClick={() => navigate('/configure-crop-bay')} className="btn-secondary gap-2">
      <span className="material-symbols-outlined text-sm">edit</span>
                              Edit Configuration
                          </button>
      <button onClick={() => { dispatch({ type: 'ADD_NOTIFICATION', payload: { id: Date.now().toString(), message: 'Manual harvest triggered for Bay Alpha-7' } }); }} className="btn-primary gap-2">
      <span className="material-symbols-outlined text-sm">agriculture</span>
                              Trigger Manual Harvest
                          </button>
      </div>
      </div>
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Sensor Telemetry (Left Column / Top) */}
      <div className="lg:col-span-8 flex flex-col gap-gutter">
      {/* Primary Readouts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
      {/* Temp */}
      <div className="surface-card p-md flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">thermostat</span>
      <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Temperature</span>
      </div>
      <span className="bg-primary/10 text-primary border border-primary px-2 py-0.5 rounded text-xs font-semibold">Optimal</span>
      </div>
      <div className="flex items-end justify-between">
      <div>
      <span className="font-h1 text-[40px] leading-none text-on-surface font-semibold">22.4</span>
      <span className="font-body-md text-body-md text-outline ml-1">°C</span>
      </div>
      {/* Mock Sparkline */}
      <div className="w-24 h-8 flex items-end gap-1 opacity-70">
      <div className="w-1/6 bg-primary h-3/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-4/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-3/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-5/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-6/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-5/6 rounded-t-sm"></div>
      </div>
      </div>
      </div>
      {/* Humidity */}
      <div className="surface-card p-md flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">humidity_mid</span>
      <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Relative Humidity</span>
      </div>
      <span className="bg-primary/10 text-primary border border-primary px-2 py-0.5 rounded text-xs font-semibold">Optimal</span>
      </div>
      <div className="flex items-end justify-between">
      <div>
      <span className="font-h1 text-[40px] leading-none text-on-surface font-semibold">68</span>
      <span className="font-body-md text-body-md text-outline ml-1">%</span>
      </div>
      {/* Mock Sparkline */}
      <div className="w-24 h-8 flex items-end gap-1 opacity-70">
      <div className="w-1/6 bg-primary h-4/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-5/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-5/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-6/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-5/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-4/6 rounded-t-sm"></div>
      </div>
      </div>
      </div>
      {/* CO2 */}
      <div className="surface-card p-md flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">co2</span>
      <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">CO2 Concentration</span>
      </div>
      <span className="bg-error/10 text-error border border-error px-2 py-0.5 rounded text-xs font-semibold">Elevated</span>
      </div>
      <div className="flex items-end justify-between">
      <div>
      <span className="font-h1 text-[40px] leading-none text-error font-semibold">1250</span>
      <span className="font-body-md text-body-md text-outline ml-1">ppm</span>
      </div>
      {/* Mock Sparkline */}
      <div className="w-24 h-8 flex items-end gap-1 opacity-70">
      <div className="w-1/6 bg-error h-3/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-error h-4/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-error h-6/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-error h-full rounded-t-sm"></div>
      <div className="w-1/6 bg-error h-5/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-error h-full rounded-t-sm"></div>
      </div>
      </div>
      </div>
      {/* Nutrients */}
      <div className="surface-card p-md flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">experiment</span>
      <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Nutrient EC</span>
      </div>
      <span className="bg-primary/10 text-primary border border-primary px-2 py-0.5 rounded text-xs font-semibold">Optimal</span>
      </div>
      <div className="flex items-end justify-between">
      <div>
      <span className="font-h1 text-[40px] leading-none text-on-surface font-semibold">1.8</span>
      <span className="font-body-md text-body-md text-outline ml-1">mS/cm</span>
      </div>
      {/* Mock Sparkline */}
      <div className="w-24 h-8 flex items-end gap-1 opacity-70">
      <div className="w-1/6 bg-primary h-4/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-4/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-4/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-5/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-4/6 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-4/6 rounded-t-sm"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Live Video Feed / Image */}
      <div className="surface-card overflow-hidden relative min-h-[300px] flex items-end p-md">
      <img alt="Hydroponic Crop Bay Camera Feed" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" data-alt="A high-contrast, industrial, dark-mode perspective of an advanced hydroponic crop bay in an orbital station. Rows of vibrant green lettuce are illuminated by harsh, cool-toned LED grow lights, contrasting sharply with the deep shadows of the matte black metallic shelving units and life-support conduits. The scene feels clinical, silent, and technologically precise, emphasizing dense foliage and complex structural geometry." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9MOHP7qap7_JGz04WKgdq9Eq4cShcRqBRUWk27pzHm7UNS6BCws2w6q4bU1auJlhCazpvfxIMSXwCoB1iex_iWkkfAx5YfIHsNKl9HoFh79Y9FOmnCIf8UUIQ6Cq4sHpKokVh_6Quvoz72Iyqhggxg1lp0kF20KTM80b7EXVoCG7Wuky9q38G7NXyVdkOmaoNXb2M3DFi_NDcyD_IDGktYwgmz4T1Hqf2ZlKOD8ZQ3FY-Of1N3DHAx8dcon0B8qmn9JwCpoypTp8" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
      <div className="relative z-10 w-full flex justify-between items-end">
      <div>
      <div className="flex items-center gap-2 mb-1">
      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
      <span className="font-mono-data text-mono-data text-slate-300">CAM_04_LIVE</span>
      </div>
      <h3 className="font-h3 text-h3 text-on-surface">Visual Inspection Feed</h3>
      </div>
      <button onClick={() => { dispatch({ type: 'ADD_NOTIFICATION', payload: { id: Date.now().toString(), message: 'Expanded view opened for CAM_04' } }); }} className="btn-secondary bg-slate-900/80 backdrop-blur">Expand View</button>
      </div>
      </div>
      </div>
      {/* History Log (Right Column / Side) */}
      <div className="lg:col-span-4 h-full">
      <div className="surface-card flex flex-col h-full max-h-[800px]">
      <div className="p-md data-divider">
      <h2 className="font-h3 text-h3 text-on-surface">Bay Event History</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Last 24 Hours</p>
      </div>
      <div className="flex-1 overflow-y-auto p-md">
      <div className="relative border-l border-slate-700 ml-3 space-y-6 pb-4">
      {/* Event Item */}
      <div className="relative pl-6">
      <div className="absolute w-3 h-3 bg-slate-800 border-2 border-primary rounded-full -left-[6.5px] top-1"></div>
      <div className="font-mono-data text-mono-data text-outline mb-1">14:02:45 UTC</div>
      <div className="font-body-md text-body-md text-on-surface font-medium">CO2 Threshold Exceeded</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Levels reached 1250ppm. Automated ventilation sequence initiated by System Core.</div>
      </div>
      {/* Event Item */}
      <div className="relative pl-6">
      <div className="absolute w-3 h-3 bg-slate-800 border-2 border-slate-500 rounded-full -left-[6.5px] top-1"></div>
      <div className="font-mono-data text-mono-data text-outline mb-1">11:30:00 UTC</div>
      <div className="font-body-md text-body-md text-on-surface font-medium">Scheduled Nutrient Dosing</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Dispensed 50ml NPK Mix Beta into main reservoir. EC stabilized at 1.8.</div>
      </div>
      {/* Event Item */}
      <div className="relative pl-6">
      <div className="absolute w-3 h-3 bg-slate-800 border-2 border-slate-500 rounded-full -left-[6.5px] top-1"></div>
      <div className="font-mono-data text-mono-data text-outline mb-1">08:00:00 UTC</div>
      <div className="font-body-md text-body-md text-on-surface font-medium">Lighting Cycle Start (Day)</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Primary LED arrays powered to 100%. Spectrum balanced for vegetative growth.</div>
      </div>
      {/* Event Item */}
      <div className="relative pl-6">
      <div className="absolute w-3 h-3 bg-slate-800 border-2 border-slate-500 rounded-full -left-[6.5px] top-1"></div>
      <div className="font-mono-data text-mono-data text-outline mb-1">04:15:22 UTC</div>
      <div className="font-body-md text-body-md text-on-surface font-medium">Minor Pressure Fluctuation</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Bay seal integrity checked. Verified OK. Fluctuation within acceptable margins.</div>
      </div>
      {/* Event Item */}
      <div className="relative pl-6">
      <div className="absolute w-3 h-3 bg-slate-800 border-2 border-slate-500 rounded-full -left-[6.5px] top-1"></div>
      <div className="font-mono-data text-mono-data text-outline mb-1">00:00:00 UTC</div>
      <div className="font-body-md text-body-md text-on-surface font-medium">Daily Data Sync</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Telemetry package archived to Sector Server successfully.</div>
      </div>
      </div>
      </div>
      <div className="p-md data-divider border-t border-b-0 text-center">
      <button className="text-primary font-label-caps text-label-caps uppercase hover:underline">View Full Log</button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
