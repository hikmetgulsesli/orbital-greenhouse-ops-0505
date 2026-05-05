import { useAppState } from './hooks/useAppState';
import { OperationsDashboard } from './screens/OperationsDashboard';
import { NoActiveModules } from './screens/NoActiveModules';
import { CropBayAlpha1Detail } from './screens/CropBayAlpha1Detail';
import { ConfigureCropBay } from './screens/ConfigureCropBay';
import { SystemSettings } from './screens/SystemSettings';
import { SystemError } from './screens/SystemError';
import { SystemInsights } from './screens/SystemInsights';
import { CrewMemberProfile } from './screens/CrewMemberProfile';

declare global {
  interface Window {
    app?: {
      state: ReturnType<typeof useAppState>['state'];
      dispatch: ReturnType<typeof useAppState>['dispatch'];
      navigate: ReturnType<typeof useAppState>['navigate'];
    };
  }
}

export default function App() {
  const { state, dispatch, navigate } = useAppState();

  if (typeof window !== 'undefined') {
    window.app = { state, dispatch, navigate };
  }

  const route = state.currentRoute;

  return (
    <div data-setfarm-root="app" className="min-h-screen bg-background text-on-background">
      {route === '/' && (
        <OperationsDashboard state={state} dispatch={dispatch} navigate={navigate} />
      )}
      {route === '/crop-bays' && (
        <NoActiveModules state={state} dispatch={dispatch} navigate={navigate} />
      )}
      {route === '/crop-bays/:id' && (
        <CropBayAlpha1Detail state={state} dispatch={dispatch} navigate={navigate} />
      )}
      {route === '/configure-crop-bay' && (
        <ConfigureCropBay state={state} dispatch={dispatch} navigate={navigate} />
      )}
      {route === '/settings' && (
        <SystemSettings state={state} dispatch={dispatch} navigate={navigate} />
      )}
      {route === '/alerts' && (
        <SystemError state={state} dispatch={dispatch} navigate={navigate} />
      )}
      {route === '/maintenance' && (
        <SystemInsights state={state} dispatch={dispatch} navigate={navigate} />
      )}
      {route === '/profile' && (
        <CrewMemberProfile state={state} dispatch={dispatch} navigate={navigate} />
      )}
      {route === '/nutrient-mixes' && (
        <NoActiveModules state={state} dispatch={dispatch} navigate={navigate} />
      )}
      {route === '/timeline' && (
        <SystemInsights state={state} dispatch={dispatch} navigate={navigate} />
      )}
    </div>
  );
}
