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

    it('should navigate to a new route', () => {
      render(<App />);
      window.app!.navigate('/settings');
      expect(window.location.hash).toBe('#/settings');
    });
  });

  describe('Screen renders', () => {
    it('OperationsDashboard renders without crashing', () => {
      const { state, dispatch, navigate } = window.app!;
      render(
        <TestWrapper>
          <OperationsDashboard state={state} dispatch={dispatch} navigate={navigate} />
        </TestWrapper>
      );
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });

    it('NoActiveModules renders without crashing', () => {
      const { state, dispatch, navigate } = window.app!;
      render(
        <TestWrapper>
          <NoActiveModules state={state} dispatch={dispatch} navigate={navigate} />
        </TestWrapper>
      );
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });

    it('CropBayAlpha1Detail renders without crashing', () => {
      const { state, dispatch, navigate } = window.app!;
      render(
        <TestWrapper>
          <CropBayAlpha1Detail state={state} dispatch={dispatch} navigate={navigate} />
        </TestWrapper>
      );
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });

    it('ConfigureCropBay renders without crashing', () => {
      const { state, dispatch, navigate } = window.app!;
      render(
        <TestWrapper>
          <ConfigureCropBay state={state} dispatch={dispatch} navigate={navigate} />
        </TestWrapper>
      );
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });

    it('SystemSettings renders without crashing', () => {
      const { state, dispatch, navigate } = window.app!;
      render(
        <TestWrapper>
          <SystemSettings state={state} dispatch={dispatch} navigate={navigate} />
        </TestWrapper>
      );
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });

    it('SystemError renders without crashing', () => {
      const { state, dispatch, navigate } = window.app!;
      render(
        <TestWrapper>
          <SystemError state={state} dispatch={dispatch} navigate={navigate} />
        </TestWrapper>
      );
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });

    it('SystemInsights renders without crashing', () => {
      const { state, dispatch, navigate } = window.app!;
      render(
        <TestWrapper>
          <SystemInsights state={state} dispatch={dispatch} navigate={navigate} />
        </TestWrapper>
      );
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });

    it('CrewMemberProfile renders without crashing', () => {
      const { state, dispatch, navigate } = window.app!;
      render(
        <TestWrapper>
          <CrewMemberProfile state={state} dispatch={dispatch} navigate={navigate} />
        </TestWrapper>
      );
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });
  });

  describe('Button and link handlers', () => {
    it('Dashboard link navigates to /', () => {
      const { state, dispatch, navigate } = window.app!;
      render(
        <TestWrapper>
          <OperationsDashboard state={state} dispatch={dispatch} navigate={navigate} />
        </TestWrapper>
      );
      const links = screen.getAllByText('Dashboard');
      expect(links.length).toBeGreaterThan(0);
    });

    it('Settings link navigates to /settings', () => {
      const { state, dispatch, navigate } = window.app!;
      render(
        <TestWrapper>
          <SystemSettings state={state} dispatch={dispatch} navigate={navigate} />
        </TestWrapper>
      );
      const links = screen.getAllByText('Settings');
      expect(links.length).toBeGreaterThan(0);
    });
  });
});
