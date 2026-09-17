import React, { useState } from 'react';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import Marketplace from './pages/Marketplace';
import SmartMatch from './pages/SmartMatch';
import CombinedOrder from './pages/CombinedOrder';
import CropRescue from './pages/CropRescue';
import FarmerDashboard from './pages/FarmerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import Orders from './pages/Orders';
import Messages from './pages/Messages';
import Analytics from './pages/Analytics';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CropListing from './pages/CropListing';
import Requirements from './pages/Requirements';
import MapPage from './pages/MapPage';
import Settings from './pages/Settings';

type Page =
  | 'landing' | 'marketplace' | 'smart-match' | 'combined-order' | 'rescue'
  | 'farmer-dashboard' | 'buyer-dashboard' | 'crop-listing' | 'requirements'
  | 'orders' | 'messages' | 'analytics' | 'admin' | 'login' | 'signup'
  | 'map' | 'settings' | 'profile' | 'trusted-farmers' | 'how-it-works' | 'about';

export default function App() {
  const [page, setPage] = useState<Page>('landing');

  function navigate(p: string) {
    setPage(p as Page);
    window.scrollTo({ top: 0 });
  }

  const props = { onNavigate: navigate };

  const pageMap: Record<string, React.ReactElement> = {
    landing: <Landing {...props} />,
    marketplace: <Marketplace {...props} />,
    'smart-match': <SmartMatch {...props} />,
    'combined-order': <CombinedOrder {...props} />,
    rescue: <CropRescue {...props} />,
    'farmer-dashboard': <FarmerDashboard {...props} />,
    'buyer-dashboard': <BuyerDashboard {...props} />,
    'crop-listing': <CropListing {...props} />,
    requirements: <Requirements {...props} />,
    orders: <Orders {...props} />,
    messages: <Messages {...props} />,
    analytics: <Analytics {...props} />,
    admin: <Admin {...props} />,
    login: <Login {...props} />,
    signup: <Signup {...props} />,
    map: <MapPage {...props} />,
    settings: <Settings {...props} />,
    // Aliases
    'how-it-works': <Landing {...props} />,
    about: <Landing {...props} />,
    'trusted-farmers': <BuyerDashboard {...props} />,
    'admin-users': <Admin {...props} />,
    profile: <Profile {...props} />,
  };

  return pageMap[page] ?? <Landing {...props} />;
}
