// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: No Active Modules
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppState, AppAction } from "../types/domain";

interface NoActiveModulesProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  navigate: (path: string) => void;
}

export function NoActiveModules({ state, dispatch, navigate }: NoActiveModulesProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-slate-900 h-screen w-64 border-r border-slate-700 flat no shadows tonal-layers fixed left-0 top-0 h-full flex flex-col pt-16 z-40 hidden md:flex">
      <div className="px-6 py-4 border-b border-slate-700">
      <h2 className="text-blue-600 font-bold font-h2 text-h2 tracking-tight">ORBITAL_GEN_1</h2>
      <p className="font-mono-data text-mono-data text-slate-400 mt-xs">Sector 7G - Active</p>
      </div>
      <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-unit">
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/')}>
      <span className="material-symbols-outlined text-lg" data-icon="dashboard">dashboard</span>
                      Dashboard
                  </a>
      <a className="bg-slate-800 text-blue-400 border-l-4 border-blue-600 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/crop-bays')}>
      <span className="material-symbols-outlined text-lg" data-icon="potted_plant">potted_plant</span>
                      Crop Bays
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/nutrient-mixes')}>
      <span className="material-symbols-outlined text-lg" data-icon="science">science</span>
                      Nutrient Mixes
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/alerts')}>
      <span className="material-symbols-outlined text-lg" data-icon="warning">warning</span>
                      Alerts
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/maintenance')}>
      <span className="material-symbols-outlined text-lg" data-icon="settings_suggest">settings_suggest</span>
                      Maintenance
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/timeline')}>
      <span className="material-symbols-outlined text-lg" data-icon="history">history</span>
                      Timeline
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/settings')}>
      <span className="material-symbols-outlined text-lg" data-icon="settings">settings</span>
                      Settings
                  </a>
      </div>
      <div className="border-t border-slate-700 py-4 flex flex-col gap-unit">
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/settings')}>
      <span className="material-symbols-outlined text-lg" data-icon="help_outline">help_outline</span>
                      Support
                  </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/maintenance')}>
      <span className="material-symbols-outlined text-lg" data-icon="terminal">terminal</span>
                      Logs
                  </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 md:ml-64 flex flex-col w-full min-h-screen bg-background">
      {/* TopAppBar */}
      <header className="bg-slate-950 docked full-width top-0 border-b border-slate-700 flat no shadows flex justify-between items-center h-16 px-6 w-full sticky top-0 z-50">
      <div className="flex items-center gap-6">
      <span className="text-lg font-black tracking-widest text-blue-600">ORBITAL_GRO_V4</span>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-slate-400 hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80 px-4 py-2 rounded h-touch_target flex items-center justify-center border border-[#334155] font-label-caps text-label-caps uppercase" onClick={() => navigate('/settings')}>
                          System Status
                      </button>
      <button className="bg-primary-container text-on-primary-container hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80 px-4 py-2 rounded h-touch_target flex items-center justify-center font-label-caps text-label-caps uppercase" onClick={() => dispatch({ type: 'SET_LAST_SYNC', payload: new Date().toISOString() })}>
                          Sync Data
                      </button>
      <div className="flex items-center gap-2 border-l border-slate-700 pl-4 ml-2">
      <button className="text-slate-400 hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80 w-touch_target h-touch_target rounded-full flex items-center justify-center" onClick={() => dispatch({ type: 'ADD_NOTIFICATION', payload: { id: Date.now().toString(), message: 'Button pressed' } })}>
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="text-slate-400 hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80 w-touch_target h-touch_target rounded-full flex items-center justify-center" onClick={() => dispatch({ type: 'ADD_NOTIFICATION', payload: { id: Date.now().toString(), message: 'Button pressed' } })}>
      <span className="material-symbols-outlined" data-icon="emergency_home">emergency_home</span>
      </button>
      <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden ml-2 flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="person">person</span>
      </div>
      </div>
      </div>
      </header>
      {/* Canvas Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-xl">
      <div className="max-w-2xl w-full flex flex-col items-center text-center">
      {/* Industrial Wireframe Placeholder */}
      <div className="w-48 h-48 mb-xl relative flex items-center justify-center">
      {/* Tech Ring Backing */}
      <div className="absolute inset-0 border-[1px] border-dashed border-outline-variant rounded-full opacity-50 animate-[spin_60s_linear_infinite]" style={{animationDuration: "120s"}}></div>
      <div className="absolute inset-4 border-[1px] border-solid border-surface-container-highest rounded-full"></div>
      {/* Center Icon */}
      <div className="w-24 h-24 bg-surface-container border border-outline-variant rounded flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <span className="material-symbols-outlined text-5xl text-outline-variant opacity-70" data-icon="potted_plant">potted_plant</span>
      </div>
      {/* Decorative Nodes */}
      <div className="absolute top-0 w-2 h-2 bg-outline-variant rounded-full -mt-1"></div>
      <div className="absolute bottom-0 w-2 h-2 bg-outline-variant rounded-full -mb-1"></div>
      <div className="absolute left-0 w-2 h-2 bg-outline-variant rounded-full -ml-1"></div>
      <div className="absolute right-0 w-2 h-2 bg-outline-variant rounded-full -mr-1"></div>
      </div>
      <h1 className="font-h1 text-h1 text-on-surface mb-sm">No Active Bays</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto mb-xl">
                          Initialize your first greenhouse module to begin monitoring crop health, environmental controls, and nutrient flow.
                      </p>
      <button className="bg-primary-container text-on-primary-container h-touch_target px-xl rounded font-label-caps text-label-caps inline-flex items-center justify-center gap-2 hover:bg-inverse-primary transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background uppercase border border-[#334155]" onClick={() => dispatch({ type: 'ADD_NOTIFICATION', payload: { id: Date.now().toString(), message: 'Button pressed' } })}>
      <span className="material-symbols-outlined text-lg" data-icon="add">add</span>
                          Initialize New Bay
                      </button>
      </div>
      </main>
      </div>
    </>
  );
}
