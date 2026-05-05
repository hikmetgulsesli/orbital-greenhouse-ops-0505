import { useReducer, useCallback, useEffect } from 'react';
import type { AppState, AppAction } from '../types/domain';
import { loadState, saveState } from '../utils/storage';

const defaultProfile: AppState['profile'] = {
  id: 'crew-001',
  name: 'Alex Chen',
  role: 'Botanical Engineer',
  sector: '7G',
  avatarUrl: '',
  status: 'active',
};

const defaultSettings: AppState['settings'] = {
  temperatureUnit: 'C',
  humidityUnit: '%',
  notificationsEnabled: true,
  autoSync: false,
  darkMode: true,
};

function getInitialState(): AppState {
  const saved = loadState();
  const route = typeof window !== 'undefined' ? window.location.hash.replace('#', '') || '/' : '/';
  return {
    currentRoute: route,
    cropBays: [],
    alerts: [],
    settings: defaultSettings,
    profile: defaultProfile,
    notifications: [],
    lastSync: null,
    systemStatus: 'online',
    ...(saved || {}),
    currentRoute: route,
  };
}

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, currentRoute: action.payload };
    case 'SET_CROP_BAYS':
      return { ...state, cropBays: action.payload };
    case 'ADD_CROP_BAY':
      return { ...state, cropBays: [...state.cropBays, action.payload] };
    case 'UPDATE_CROP_BAY':
      return {
        ...state,
        cropBays: state.cropBays.map((b) => (b.id === action.payload.id ? action.payload : b)),
      };
    case 'REMOVE_CROP_BAY':
      return {
        ...state,
        cropBays: state.cropBays.filter((b) => b.id !== action.payload),
      };
    case 'SET_ALERTS':
      return { ...state, alerts: action.payload };
    case 'ACKNOWLEDGE_ALERT':
      return {
        ...state,
        alerts: state.alerts.map((a) =>
          a.id === action.payload ? { ...a, acknowledged: true } : a
        ),
      };
    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.payload } };
    case 'UPDATE_PROFILE':
      return { ...state, profile: { ...state.profile, ...action.payload } };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [
          ...state.notifications,
          { id: action.payload.id, message: action.payload.message, read: false },
        ],
      };
    case 'MARK_NOTIFICATION_READ':
      return {
        ...state,
        notifications: state.notifications.map((n) =>
          n.id === action.payload ? { ...n, read: true } : n
        ),
      };
    case 'SET_SYSTEM_STATUS':
      return { ...state, systemStatus: action.payload };
    case 'SET_LAST_SYNC':
      return { ...state, lastSync: action.payload };
    case 'HYDRATE':
      return { ...action.payload };
    default:
      return state;
  }
}

export function useAppState() {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);

  const navigate = useCallback((path: string) => {
    if (typeof window !== 'undefined') {
      window.location.hash = path;
    }
    dispatch({ type: 'NAVIGATE', payload: path });
  }, []);

  useEffect(() => {
    const handler = () => {
      const route = window.location.hash.replace('#', '') || '/';
      dispatch({ type: 'NAVIGATE', payload: route });
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  useEffect(() => {
    saveState(state);
  }, [state]);

  return { state, dispatch, navigate };
}
