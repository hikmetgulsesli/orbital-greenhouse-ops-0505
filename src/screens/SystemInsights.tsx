// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: System Insights
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppState, AppAction } from "../types/domain";

interface SystemInsightsProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  navigate: (path: string) => void;
}

export function SystemInsights({ state, dispatch, navigate }: SystemInsightsProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-slate-950 flex justify-between items-center h-16 px-6 w-full sticky top-0 z-50 border-b border-slate-700">
      <div className="flex items-center gap-4">
      <span className="text-lg font-black tracking-widest text-blue-600">ORBITAL_GRO_V4</span>
      </div>
      <div className="flex items-center gap-6">
      <div className="hidden md:flex gap-4">
      <button className="font-inter tracking-tight text-sm font-semibold uppercase text-slate-400 hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80 px-3 py-2 rounded" onClick={() => navigate('/settings')}>System Status</button>
      <button className="font-inter tracking-tight text-sm font-semibold uppercase text-slate-400 hover:bg-slate-800 transition-colors duration-150 cursor-pointer active:opacity-80 px-3 py-2 rounded border border-slate-700" onClick={() => dispatch({ type: 'SET_LAST_SYNC', payload: new Date().toISOString() })}>Sync Data</button>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-slate-400 hover:text-slate-100 transition-colors duration-150" onClick={() => dispatch({ type: 'ADD_NOTIFICATION', payload: { id: Date.now().toString(), message: 'Button pressed' } })}>
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-slate-100 transition-colors duration-150" onClick={() => dispatch({ type: 'ADD_NOTIFICATION', payload: { id: Date.now().toString(), message: 'Button pressed' } })}>
      <span className="material-symbols-outlined">emergency_home</span>
      </button>
      <img alt="Crew Member Profile" className="w-8 h-8 rounded-full border border-slate-700" data-alt="A close-up portrait of an astronaut or scientist in a high-tech orbital command center. The lighting is cool and blue-tinted, reflecting off sleek control panels. The mood is serious and professional. The background is slightly blurred to focus on the person. The overall aesthetic is sci-fi realism with a corporate space industry vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTkzGmd1mtB3RsjV9HuzaYtxz3uLMVMM8d_rSXiRaTcuJt3MRZ5wYr8BTsWnOFl8QW-nxVvMkXOyDbOByAjRNdDB0_KhGM5DxepkdjmK5urk_6-nbB78_MYJtxEK8ER9E2y_bGAltSFXuVlzQNUxUfngzDfjb94SJeKaRFZnAGPSY5QX7kZDKZwM0Vf6BNicHqtBRGx0MVgPX-1XUir9HhxWugxZdxjRQUvsKU7t58Itl1CTxT-mpng_Mi0y3AJ3dCl73fv-5l7HE" />
      </div>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="hidden md:flex bg-slate-900 border-r border-slate-700 h-[calc(100vh-64px)] w-64 flex-col fixed left-0 top-16 z-40">
      <div className="p-6 border-b border-slate-700">
      <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden">
      <img alt="Greenhouse Module Alpha" className="w-full h-full object-cover" data-alt="A highly detailed close-up of a futuristic hydroponic plant growing in a dark metallic container. Neon blue grow lights illuminate the green leaves against a pitch-black background. The mood is sterile, advanced, and industrial. The style is hyper-realistic sci-fi." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXKS7PCU8ijurEX67HOIGT_S2p7Zo5svXr_aJYwEpjnGXTRcJwDezQnqXxfMLMQOMX1O-WMAgXC0Pap2GDMeNk7CrCJdo8r-uYuGZ7PI5abNYQ46fmgVXwRB1EeqFYCPBWeUmYD4MCncrvmZc4RR4iqwxDGJCUoVbnEq00DGhOX5MSuTPjwcetTDS2GJA2OAgRqUhUVbqsspbVUc87RTpr5IWCtPECpwvZRdc84qlfbi8xYq1s235QXiZJ_TT2YfGxPzAp3tQ6c_s" />
      </div>
      <div>
      <h2 className="text-blue-600 font-bold text-sm tracking-wide">ORBITAL_GEN_1</h2>
      <p className="text-slate-400 text-xs">Sector 7G - Active</p>
      </div>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
      <ul className="space-y-1">
      <li>
      <a className="bg-slate-800 text-blue-400 border-l-4 border-blue-600 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/')}>
      <span className="material-symbols-outlined">dashboard</span>
                                  Dashboard
                              </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/crop-bays')}>
      <span className="material-symbols-outlined">potted_plant</span>
                                  Crop Bays
                              </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/nutrient-mixes')}>
      <span className="material-symbols-outlined">science</span>
                                  Nutrient Mixes
                              </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/alerts')}>
      <span className="material-symbols-outlined">warning</span>
                                  Alerts
                              </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/maintenance')}>
      <span className="material-symbols-outlined">settings_suggest</span>
                                  Maintenance
                              </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/timeline')}>
      <span className="material-symbols-outlined">history</span>
                                  Timeline
                              </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/settings')}>
      <span className="material-symbols-outlined">settings</span>
                                  Settings
                              </a>
      </li>
      </ul>
      </div>
      <div className="p-4 border-t border-slate-700">
      <ul className="space-y-1">
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/settings')}>
      <span className="material-symbols-outlined">help_outline</span>
                                  Support
                              </a>
      </li>
      <li>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#" onClick={() => navigate('/maintenance')}>
      <span className="material-symbols-outlined">terminal</span>
                                  Logs
                              </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-64 p-6 lg:p-8 overflow-y-auto w-full">
      <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-end pb-4 border-b border-surface-variant">
      <div>
      <h1 className="font-h1 text-h1 text-on-background">Operations Overview</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Real-time metrics for all active orbital crop sectors.</p>
      </div>
      <div className="hidden sm:flex gap-2">
      <button className="h-touch_target px-md rounded bg-surface border border-outline-variant text-on-surface font-label-caps text-label-caps hover:bg-surface-variant transition-colors flex items-center gap-2" onClick={() => dispatch({ type: 'ADD_NOTIFICATION', payload: { id: Date.now().toString(), message: 'Button pressed' } })}>
      <span className="material-symbols-outlined text-[18px]">download</span>
                                  Export
                              </button>
      </div>
      </div>
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* KPI 1: Yield */}
      <div className="col-span-1 md:col-span-4 bg-surface-container rounded-xl border border-outline-variant p-6 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Total Harvest Yield</h3>
      <span className="material-symbols-outlined text-primary">eco</span>
      </div>
      <div>
      <div className="font-h1 text-h1 text-on-background">1,428 kg</div>
      <div className="flex items-center gap-2 mt-2">
      <span className="bg-surface-variant border border-outline-variant text-primary px-2 py-1 rounded text-[10px] font-mono-data tracking-widest flex items-center gap-1">
      <span className="material-symbols-outlined text-[12px]">trending_up</span>
                                          +4.2%
                                      </span>
      <span className="font-mono-data text-mono-data text-on-surface-variant text-xs">vs last cycle</span>
      </div>
      </div>
      </div>
      {/* KPI 2: Water */}
      <div className="col-span-1 md:col-span-4 bg-surface-container rounded-xl border border-outline-variant p-6 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Water Efficiency</h3>
      <span className="material-symbols-outlined text-primary">water_drop</span>
      </div>
      <div>
      <div className="font-h1 text-h1 text-on-background">94.8%</div>
      <div className="flex items-center gap-2 mt-2">
      <span className="bg-surface-variant border border-outline-variant text-on-surface-variant px-2 py-1 rounded text-[10px] font-mono-data tracking-widest flex items-center gap-1">
      <span className="material-symbols-outlined text-[12px]">trending_flat</span>
                                          0.0%
                                      </span>
      <span className="font-mono-data text-mono-data text-on-surface-variant text-xs">optimal range</span>
      </div>
      </div>
      </div>
      {/* System Health Donut */}
      <div className="col-span-1 md:col-span-4 bg-surface-container rounded-xl border border-outline-variant p-6 flex items-center justify-between">
      <div className="flex-1">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-2">System Health</h3>
      <p className="font-mono-data text-mono-data text-on-surface-variant">Core systems nominal.</p>
      </div>
      <div className="relative w-24 h-24 flex items-center justify-center">
      {/* CSS simulated donut chart */}
      <div className="absolute inset-0 rounded-full border-8 border-surface-variant"></div>
      <div className="absolute inset-0 rounded-full border-8 border-primary border-t-transparent border-l-transparent rotate-45"></div>
      <div className="absolute inset-0 rounded-full border-8 border-primary border-t-transparent border-l-transparent rotate-135"></div>
      <div className="z-10 font-h2 text-h2 text-on-background">92<span className="text-sm">%</span></div>
      </div>
      </div>
      {/* Sector Comparison Table */}
      <div className="col-span-1 md:col-span-12 bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
      <div className="p-4 border-b border-surface-variant bg-surface-container-high flex justify-between items-center">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Sector Performance</h3>
      <button className="text-primary hover:text-primary-fixed transition-colors" onClick={() => dispatch({ type: 'ADD_NOTIFICATION', payload: { id: Date.now().toString(), message: 'Button pressed' } })}>
      <span className="material-symbols-outlined text-[20px]">more_horiz</span>
      </button>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="border-b border-surface-variant bg-surface-container">
      <th className="py-3 px-4 font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider w-1/4">Sector ID</th>
      <th className="py-3 px-4 font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider w-1/4">Crop Type</th>
      <th className="py-3 px-4 font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider w-1/4">Status</th>
      <th className="py-3 px-4 font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider text-right">Yield (kg)</th>
      </tr>
      </thead>
      <tbody>
      <tr className="border-b border-surface-variant hover:bg-surface-variant transition-colors">
      <td className="py-3 px-4 font-mono-data text-mono-data text-primary">SEC-Alpha-01</td>
      <td className="py-3 px-4 font-body-md text-body-md text-on-background">Microgreens</td>
      <td className="py-3 px-4">
      <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-mono-data bg-surface border border-outline-variant text-primary">Optimal</span>
      </td>
      <td className="py-3 px-4 font-mono-data text-mono-data text-on-background text-right">342.5</td>
      </tr>
      <tr className="border-b border-surface-variant hover:bg-surface-variant transition-colors">
      <td className="py-3 px-4 font-mono-data text-mono-data text-primary">SEC-Beta-02</td>
      <td className="py-3 px-4 font-body-md text-body-md text-on-background">Dwarf Tomatoes</td>
      <td className="py-3 px-4">
      <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-mono-data bg-surface border border-outline-variant text-on-surface-variant">Nominal</span>
      </td>
      <td className="py-3 px-4 font-mono-data text-mono-data text-on-background text-right">815.0</td>
      </tr>
      <tr className="hover:bg-surface-variant transition-colors">
      <td className="py-3 px-4 font-mono-data text-mono-data text-primary">SEC-Gamma-03</td>
      <td className="py-3 px-4 font-body-md text-body-md text-on-background">Soy Variants</td>
      <td className="py-3 px-4">
      <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-mono-data bg-error-container border border-error text-on-error-container">Attention</span>
      </td>
      <td className="py-3 px-4 font-mono-data text-mono-data text-on-background text-right">270.5</td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
