import { useState } from 'react';
import SplashScreen from './SplashScreen';
import BottomNavigation from './BottomNavigation';
import HomeScreen from './HomeScreen';
import JarsScreen from './JarsScreen';
import AIChat from './AIChat';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WalletApp = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeScreen 
            onChatOpen={() => setIsChatOpen(true)}
            onTabChange={setActiveTab}
          />
        );
      case 'jars':
        return <JarsScreen onJarSelect={(jarId) => console.log('Selected jar:', jarId)} />;
      case 'cards':
        return (
          <div className="min-h-screen bg-background pb-20 p-6">
            <div className="bg-gradient-primary p-6 -m-6 mb-6 text-white rounded-b-3xl">
              <h1 className="text-2xl font-bold">Cards & Banks</h1>
              <p className="text-white/80">Manage your payment methods</p>
            </div>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Coming Soon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bank and card management features will be available in the next update.
                </p>
              </CardContent>
            </Card>
          </div>
        );
      case 'settings':
        return (
          <div className="min-h-screen bg-background pb-20 p-6">
            <div className="bg-gradient-primary p-6 -m-6 mb-6 text-white rounded-b-3xl">
              <h1 className="text-2xl font-bold">Settings</h1>
              <p className="text-white/80">Customize your experience</p>
            </div>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Settings and account management features coming soon.
                </p>
              </CardContent>
            </Card>
          </div>
        );
      case 'qr':
        return (
          <div className="min-h-screen bg-background pb-20 p-6">
            <div className="bg-gradient-primary p-6 -m-6 mb-6 text-white rounded-b-3xl">
              <h1 className="text-2xl font-bold">QR Scanner</h1>
              <p className="text-white/80">Scan QR codes for payments</p>
            </div>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>QR Code Scanner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  QR code scanning functionality will be implemented soon.
                </p>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return <HomeScreen onChatOpen={() => setIsChatOpen(true)} onTabChange={setActiveTab} />;
    }
  };

  return (
    <>
      {renderScreen()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default WalletApp;