export type AppRoute =
  | '/'
  | '/crop-bays'
  | '/crop-bays/:id'
  | '/nutrient-mixes'
  | '/alerts'
  | '/maintenance'
  | '/timeline'
  | '/settings'
  | '/profile'
  | '/configure-crop-bay';

export interface CropBay {
  id: string;
  name: string;
  cropType: string;
  status: 'active' | 'inactive' | 'error';
  nutrientMix: string;
  temperature: number;
  humidity: number;
  createdAt: string;
}

export interface Alert {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  message: string;
  module: string;
  acknowledged: boolean;
  timestamp: string;
}

export interface SystemSettings {
  temperatureUnit: 'C' | 'F';
  humidityUnit: '%' | 'dewpoint';
  notificationsEnabled: boolean;
  autoSync: boolean;
  darkMode: boolean;
}

export interface CrewProfile {
  id: string;
  name: string;
  role: string;
  sector: string;
  avatarUrl: string;
  status: 'active' | 'off-duty' | 'medical';
}

export interface AppState {
  currentRoute: string;
  cropBays: CropBay[];
  alerts: Alert[];
  settings: SystemSettings;
  profile: CrewProfile;
  notifications: { id: string; message: string; read: boolean }[];
  lastSync: string | null;
  systemStatus: 'online' | 'degraded' | 'offline';
}

export type AppAction =
  | { type: 'NAVIGATE'; payload: string }
  | { type: 'SET_CROP_BAYS'; payload: CropBay[] }
  | { type: 'ADD_CROP_BAY'; payload: CropBay }
  | { type: 'UPDATE_CROP_BAY'; payload: CropBay }
  | { type: 'REMOVE_CROP_BAY'; payload: string }
  | { type: 'SET_ALERTS'; payload: Alert[] }
  | { type: 'ACKNOWLEDGE_ALERT'; payload: string }
  | { type: 'UPDATE_SETTINGS'; payload: Partial<SystemSettings> }
  | { type: 'UPDATE_PROFILE'; payload: Partial<CrewProfile> }
  | { type: 'ADD_NOTIFICATION'; payload: { id: string; message: string } }
  | { type: 'MARK_NOTIFICATION_READ'; payload: string }
  | { type: 'SET_SYSTEM_STATUS'; payload: 'online' | 'degraded' | 'offline' }
  | { type: 'SET_LAST_SYNC'; payload: string }
  | { type: 'HYDRATE'; payload: AppState };
