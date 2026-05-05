import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

// Mock storage before importing modules
vi.mock('./utils/storage', () => ({
  loadState: vi.fn(() => null),
  saveState: vi.fn(),
  clearState: vi.fn(),
}));

import { useAppState } from './hooks/useAppState';
import App from './App';
import { OperationsDashboard } from './screens/OperationsDashboard';
import { NoActiveModules } from './screens/NoActiveModules';
import { SystemSettings } from './screens/SystemSettings';
import { SystemError } from './screens/SystemError';
import { CrewMemberProfile } from './screens/CrewMemberProfile';
import { CropBayAlpha1Detail } from './screens/CropBayAlpha1Detail';
import { SystemInsights } from './screens/SystemInsights';
import { ConfigureCropBay } from './screens/ConfigureCropBay';

function TestWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

describe('QA-FIX-002: Runtime verification', () => {
  beforeEach(() => {
    window.location.hash = '';
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('useAppState', () => {
    it('should initialize with default route', () => {
      let result: ReturnType<typeof useAppState> | null = null;
      function TestComponent() {
        result = useAppState();
        return <div data-testid="test">test</div>;
      }
      render(<TestComponent />);
      expect(result).not.toBeNull();
      expect(result!.state.currentRoute).toBe('/');
    });

    it('should expose state, dispatch and navigate on window.app', () => {
      render(<App />);
      expect(window.app).toBeDefined();
      expect(window.app!.state).toBeDefined();
      expect(window.app!.dispatch).toBeDefined();
      expect(window.app!.navigate).toBeDefined();
    });

    it('should change route when navigate is called', () => {
      function TestComponent() {
        const { state, navigate } = useAppState();
        return (
          <div>
            <div data-testid="route">{state.currentRoute}</div>
            <button data-testid="nav" onClick={() => navigate('/settings')}>Go</button>
          </div>
        );
      }
      render(<TestComponent />);
      expect(screen.getByTestId('route').textContent).toBe('/');
      fireEvent.click(screen.getByTestId('nav'));
      expect(screen.getByTestId('route').textContent).toBe('/settings');
    });
  });

  describe('Screen components render without crashing', () => {
    const mockState = {
      currentRoute: '/',
      cropBays: [],
      alerts: [],
      settings: {
        temperatureUnit: 'C' as const,
        humidityUnit: '%' as const,
        notificationsEnabled: true,
        autoSync: false,
        darkMode: true,
      },
      profile: {
        id: 'crew-001',
        name: 'Alex Chen',
        role: 'Botanical Engineer',
        sector: '7G',
        avatarUrl: '',
        status: 'active' as const,
      },
      notifications: [],
      lastSync: null,
      systemStatus: 'online' as const,
    };

    const mockDispatch = vi.fn();
    const mockNavigate = vi.fn();

    const screens = [
      { name: 'OperationsDashboard', Component: OperationsDashboard, route: '/' },
      { name: 'NoActiveModules', Component: NoActiveModules, route: '/crop-bays' },
      { name: 'CropBayAlpha1Detail', Component: CropBayAlpha1Detail, route: '/crop-bays/:id' },
      { name: 'ConfigureCropBay', Component: ConfigureCropBay, route: '/configure-crop-bay' },
      { name: 'SystemSettings', Component: SystemSettings, route: '/settings' },
      { name: 'SystemError', Component: SystemError, route: '/alerts' },
      { name: 'SystemInsights', Component: SystemInsights, route: '/maintenance' },
      { name: 'CrewMemberProfile', Component: CrewMemberProfile, route: '/profile' },
    ];

    for (const { name, Component, route } of screens) {
      it(`${name} renders without throwing`, () => {
        const state = { ...mockState, currentRoute: route };
        expect(() =>
          render(
            <TestWrapper>
              <Component state={state} dispatch={mockDispatch} navigate={mockNavigate} />
            </TestWrapper>
          )
        ).not.toThrow();
      });
    }
  });

  describe('Navigation links have functional handlers', () => {
    const mockState = {
      currentRoute: '/',
      cropBays: [],
      alerts: [],
      settings: {
        temperatureUnit: 'C' as const,
        humidityUnit: '%' as const,
        notificationsEnabled: true,
        autoSync: false,
        darkMode: true,
      },
      profile: {
        id: 'crew-001',
        name: 'Alex Chen',
        role: 'Botanical Engineer',
        sector: '7G',
        avatarUrl: '',
        status: 'active' as const,
      },
      notifications: [],
      lastSync: null,
      systemStatus: 'online' as const,
    };

    const mockDispatch = vi.fn();
    const mockNavigate = vi.fn();

    it('OperationsDashboard links trigger navigate', () => {
      render(<OperationsDashboard state={mockState} dispatch={mockDispatch} navigate={mockNavigate} />);
      const cropBaysLink = screen.getByText('Crop Bays');
      fireEvent.click(cropBaysLink);
      expect(mockNavigate).toHaveBeenCalledWith('/crop-bays');
    });

    it('NoActiveModules initialize button triggers navigate', () => {
      render(<NoActiveModules state={{ ...mockState, currentRoute: '/crop-bays' }} dispatch={mockDispatch} navigate={mockNavigate} />);
      const btn = screen.getByText('Initialize New Bay');
      fireEvent.click(btn);
      expect(mockNavigate).toHaveBeenCalledWith('/configure-crop-bay');
    });

    it('SystemError retry button triggers dispatch', () => {
      render(<SystemError state={{ ...mockState, currentRoute: '/alerts' }} dispatch={mockDispatch} navigate={mockNavigate} />);
      const btn = screen.getByText('Retry Sync');
      fireEvent.click(btn);
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('SystemSettings apply button triggers dispatch', () => {
      render(<SystemSettings state={{ ...mockState, currentRoute: '/settings' }} dispatch={mockDispatch} navigate={mockNavigate} />);
      const btn = screen.getByText('Apply Changes');
      fireEvent.click(btn);
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('CrewMemberProfile close button triggers navigate', () => {
      render(<CrewMemberProfile state={{ ...mockState, currentRoute: '/profile' }} dispatch={mockDispatch} navigate={mockNavigate} />);
      const closeBtn = screen.getByText('close');
      fireEvent.click(closeBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
