// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Crew Member Profile
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppState, AppAction } from "../types/domain";

interface CrewMemberProfileProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  navigate: (path: string) => void;
}

function navLinkClasses(isActive: boolean) {
  return isActive
    ? "bg-slate-800 text-blue-400 border-l-4 border-blue-600 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600"
    : "text-slate-400 px-4 py-3 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600";
}
export function CrewMemberProfile(props: CrewMemberProfileProps) {
  const { state, dispatch, navigate } = props;
  const route = state.currentRoute;

  return (
    <>
      {/* TopAppBar JSON Anchor */}
      <header className="bg-slate-950 flex justify-between items-center h-16 px-6 w-full sticky top-0 z-50 docked border-b border-slate-700">
      <div className="flex items-center gap-md">
      <span className="text-lg font-black tracking-widest text-blue-600">ORBITAL_GRO_V4</span>
      </div>
      <div className="flex items-center gap-lg">
      <span className="font-inter tracking-tight text-sm font-semibold uppercase text-slate-400">System Status</span>
      <button className="font-inter tracking-tight text-sm font-semibold uppercase text-blue-600 cursor-pointer active:opacity-80 hover:bg-slate-800 transition-colors duration-150 px-md py-sm rounded-DEFAULT border border-transparent">Sync Data</button>
      <div className="flex items-center gap-xs">
      <button className="text-slate-400 hover:bg-slate-800 transition-colors duration-150 p-sm rounded-full cursor-pointer active:opacity-80 flex items-center justify-center h-touch_target w-touch_target">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:bg-slate-800 transition-colors duration-150 p-sm rounded-full cursor-pointer active:opacity-80 flex items-center justify-center h-touch_target w-touch_target">
      <span className="material-symbols-outlined">emergency_home</span>
      </button>
      </div>
      <button className="h-10 w-10 rounded-full overflow-hidden border-2 border-blue-600 ml-sm cursor-pointer hover:opacity-80 transition-opacity">
      <img alt="Crew Member Profile" className="w-full h-full object-cover" data-alt="A striking portrait of a male astronaut or control room operator in a sleek, dark high-tech environment. The lighting is moody, with cool blue and stark white highlights reflecting off subtle metallic elements of his utilitarian dark uniform. His expression is serious, focused, and professional, embodying a calm, reliable interface aesthetic. The background is a blurred, deep slate-grey command center." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcZnr33XdupB9c8b2gnggDA5EDCaFtbjsDVciBVSGN8RFXHPUa2CpHlkkO6osq7W7Z4clg0w9T0NS0S0_1SMqCrQmS0YbrIAE31w1qq7MCX7TrdOZ1n3ZMRQ7N0p4PdUgXSErH6JB0T3awlMv0YJmbNOGrQqfDGhD6e7CYBrcfnytFHg_mXO0QIC6qbT24iIwWcvVYofGRCBFWvdhjOnAcD-YWoU0NMs1VP0dfvD2c3ag_4gGsiPGLHmVtwuKE1yfGKWnwRmYZ8zA" />
      </button>
      </div>
      </header>
      {/* SideNavBar JSON Anchor */}
      <nav className="bg-slate-900 fixed left-0 top-0 h-full flex flex-col pt-16 z-40 w-64 border-r border-slate-700">
      <div className="px-md py-md border-b border-slate-700 flex items-center gap-sm">
      <div className="h-8 w-8 rounded-DEFAULT bg-surface-container-high border border-outline-variant overflow-hidden shrink-0">
      <img alt="Greenhouse Module Alpha" className="w-full h-full object-cover grayscale opacity-70" data-alt="A stylized, high-contrast black and white macro shot of a complex circuit board or metallic industrial mesh. The image is cropped tightly, emphasizing rigid geometric patterns and structural alignment. The lighting creates sharp, low-contrast outlines against a deep shadow background, fitting an aerospace hardware aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtMLvBQBE_7_t6ZomwcQj6cIUviehBq_zB9eoZ5ZMY1rqtRHA7pQheDbOE3iwVNd_VGxdhBpw4X59UMOQRpg-oQgNGNFb_mQFzrKCB2agizEdOAHp0mKjQ3nNMF9T2o-skEFqHbBldpeJAkI0RwKX-Pu4yAVufYFlog9X8puWutvsN-MtJw0WNeSyVoO0WHyQJmEucT1LQksVmpATcwTDfBnJGb7I2UHpwdl7B9A2vEr_vcZ29qr2_DOhYJN56bOaeCrbdiztSuZA" />
      </div>
      <div>
      <div className="text-blue-600 font-bold font-inter text-xs font-medium uppercase tracking-wider">ORBITAL_GEN_1</div>
      <div className="text-slate-400 text-[10px] uppercase tracking-widest mt-xs">Sector 7G - Active</div>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto py-sm">
      {/* Active State Navigation */}
      <a className="bg-slate-800 text-blue-400 border-l-4 border-blue-600 px-4 py-3 flex items-center gap-3 focus-within:ring-2 focus-within:ring-blue-600" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
      <span className="font-inter text-xs font-medium uppercase tracking-wider">Dashboard</span>
      </a>
      {/* Inactive State Navigation */}
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined">potted_plant</span>
      <span className="font-inter text-xs font-medium uppercase tracking-wider">Crop Bays</span>
      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined">science</span>
      <span className="font-inter text-xs font-medium uppercase tracking-wider">Nutrient Mixes</span>
      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined">warning</span>
      <span className="font-inter text-xs font-medium uppercase tracking-wider">Alerts</span>
      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined">settings_suggest</span>
      <span className="font-inter text-xs font-medium uppercase tracking-wider">Maintenance</span>
      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined">history</span>
      <span className="font-inter text-xs font-medium uppercase tracking-wider">Timeline</span>
      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined">settings</span>
      <span className="font-inter text-xs font-medium uppercase tracking-wider">Settings</span>
      </a>
      </div>
      <div className="border-t border-slate-700 py-sm">
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined">help_outline</span>
      <span className="font-inter text-xs font-medium uppercase tracking-wider">Support</span>
      </a>
      <a className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200" href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      <span className="material-symbols-outlined">terminal</span>
      <span className="font-inter text-xs font-medium uppercase tracking-wider">Logs</span>
      </a>
      </div>
      </nav>
      {/* Main Canvas (Background context, visually suppressed) */}
      <main className="ml-64 pt-16 p-margin h-full overflow-hidden opacity-30 pointer-events-none transition-opacity filter blur-[2px]">
      <div className="grid grid-cols-12 gap-gutter h-full">
      <div className="col-span-8 bg-surface-container-high border border-outline-variant rounded-lg p-md">
      <div className="h-8 w-1/3 bg-surface-container-highest rounded-DEFAULT mb-md"></div>
      <div className="h-64 w-full bg-surface-container-highest rounded-DEFAULT"></div>
      </div>
      <div className="col-span-4 bg-surface-container-high border border-outline-variant rounded-lg p-md">
      <div className="h-8 w-1/2 bg-surface-container-highest rounded-DEFAULT mb-md"></div>
      <div className="space-y-sm">
      <div className="h-16 w-full bg-surface-container-highest rounded-DEFAULT"></div>
      <div className="h-16 w-full bg-surface-container-highest rounded-DEFAULT"></div>
      <div className="h-16 w-full bg-surface-container-highest rounded-DEFAULT"></div>
      </div>
      </div>
      </div>
      </main>
      {/* ========================================== */}
      {/* OVERLAY COMPONENT: CREW PROFILE PANEL */}
      {/* ========================================== */}
      <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop Dimmer */}
      <div className="absolute inset-0 bg-surface-container-lowest/60 backdrop-blur-[1px]"></div>
      {/* Panel Container */}
      <aside className="relative w-full max-w-[420px] bg-surface h-full border-l border-outline-variant flex flex-col shadow-2xl overflow-hidden transform transition-transform translate-x-0">
      {/* Panel Header */}
      <div className="flex justify-between items-center px-lg py-md border-b border-outline-variant bg-surface-container">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-on-surface-variant">badge</span>
      <h2 className="font-h3 text-h3 text-on-surface uppercase tracking-wide">Crew Data File</h2>
      </div>
      <button onClick={() => navigate('/')} className="h-touch_target w-touch_target flex items-center justify-center rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors border border-transparent focus:ring-2 focus:ring-primary focus:outline-none focus:border-primary">
      <span className="material-symbols-outlined">close</span>
      </button>
      </div>
      {/* Panel Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-lg flex flex-col gap-xl">
      {/* Identity Block */}
      <div className="flex flex-col items-center text-center">
      <div className="relative mb-md">
      <div className="h-28 w-28 rounded-full overflow-hidden border border-outline-variant ring-2 ring-primary ring-offset-4 ring-offset-surface bg-surface-container-high p-1">
      <img alt="Cmdr. J. Vance Profile" className="w-full h-full rounded-full object-cover" data-alt="A striking portrait of a male astronaut or control room operator in a sleek, dark high-tech environment. The lighting is moody, with cool blue and stark white highlights reflecting off subtle metallic elements of his utilitarian dark uniform. His expression is serious, focused, and professional, embodying a calm, reliable interface aesthetic. The background is a blurred, deep slate-grey command center." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDprEHIIIOvdSTlG_mdc-eWM9N27Mb4LhhWJPDNklmIK07Ts0Eo0KkJa0c5RWi2SlLT26uD40eKauHkJwulrhRY3qMkprJg2m5qWnPe5bJKyjvHX3a4ZQ6-xkMmxs8akRmgCHUB0GhtkwbQu2AuFG580EIlrisv_-YkIQD5pUbnvLoLQyfDOD4ZAzjz_WP-AaXU2edAgAHDLEzJhCHkp20qxsfchC0c-1SU6rCY1sxLXnHTtYZrsiMsFd8jCT-s2qu9el5YDMEJZSo" />
      </div>
      <div className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-green-500 border-2 border-surface flex items-center justify-center">
      <span className="block w-2 h-2 bg-white rounded-full"></span>
      </div>
      </div>
      <h1 className="font-h2 text-h2 text-on-surface">Cmdr. J. Vance</h1>
      <div className="font-mono-data text-mono-data text-on-surface-variant mt-xs flex items-center gap-2">
      <span>ID: 884-AX-9021</span>
      <span className="text-outline text-[10px]">|</span>
      <span>CLEARANCE: L4</span>
      </div>
      </div>
      {/* Bento Metrics */}
      <div className="grid grid-cols-2 gap-sm">
      <div className="bg-surface-container-high border border-outline-variant rounded-lg p-md flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs">Current Assignment</span>
      <div className="flex items-center gap-sm mt-auto">
      <span className="material-symbols-outlined text-primary text-xl">account_tree</span>
      <span className="font-body-md text-body-md text-on-surface font-medium">Sector 7G</span>
      </div>
      </div>
      <div className="bg-surface-container-high border border-outline-variant rounded-lg p-md flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs">Shift Duration</span>
      <div className="flex items-center gap-sm mt-auto">
      <span className="material-symbols-outlined text-secondary text-xl">timer</span>
      <span className="font-mono-data text-mono-data text-on-surface font-medium text-[15px]">08:42:15</span>
      </div>
      </div>
      </div>
      {/* Session History Timeline */}
      <div className="flex flex-col gap-md">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant border-b border-outline-variant pb-xs">Session Log</h3>
      <div className="relative pl-sm">
      {/* Vertical line */}
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-outline-variant"></div>
      {/* Timeline Item 1 */}
      <div className="relative flex gap-md pb-md">
      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 relative z-10 ring-4 ring-surface"></div>
      <div className="flex-1 flex flex-col gap-xs">
      <div className="flex justify-between items-start">
      <span className="font-body-md text-body-md text-on-surface">Biometrics Sync</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant text-[11px]">10:42Z</span>
      </div>
      <span className="font-body-md text-body-md text-on-surface-variant text-[13px]">Vitals baseline verified. Nominal.</span>
      </div>
      </div>
      {/* Timeline Item 2 */}
      <div className="relative flex gap-md pb-md">
      <div className="w-2 h-2 rounded-full bg-outline-variant mt-1.5 relative z-10 ring-4 ring-surface"></div>
      <div className="flex-1 flex flex-col gap-xs">
      <div className="flex justify-between items-start">
      <span className="font-body-md text-body-md text-on-surface">Sector Transfer</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant text-[11px]">06:15Z</span>
      </div>
      <span className="font-body-md text-body-md text-on-surface-variant text-[13px]">Relocated from Engineering to Hydroponics Bay 4.</span>
      </div>
      </div>
      {/* Timeline Item 3 */}
      <div className="relative flex gap-md">
      <div className="w-2 h-2 rounded-full bg-outline-variant mt-1.5 relative z-10 ring-4 ring-surface"></div>
      <div className="flex-1 flex flex-col gap-xs">
      <div className="flex justify-between items-start">
      <span className="font-body-md text-body-md text-on-surface">Shift Commenced</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant text-[11px]">04:00Z</span>
      </div>
      <span className="font-body-md text-body-md text-on-surface-variant text-[13px]">Authenticated via retinal scan.</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Panel Footer Actions */}
      <div className="p-lg bg-surface-container border-t border-outline-variant mt-auto">
      <button onClick={() => { dispatch({ type: 'UPDATE_PROFILE', payload: { status: 'off-duty' } }); navigate('/'); }} className="w-full h-touch_target bg-error/10 border border-error text-error rounded-DEFAULT flex items-center justify-center gap-sm font-label-caps text-label-caps hover:bg-error hover:text-on-error transition-colors focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface">
      <span className="material-symbols-outlined text-[18px]">logout</span>
                          END SHIFT &amp; LOGOUT
                      </button>
      </div>
      </aside>
      </div>
    </>
  );
}
