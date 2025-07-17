import { useState } from 'react';
import SplashScreen from './SplashScreen';
import BottomNavigation from './BottomNavigation';
import HomeScreen from './HomeScreen';
import JarsScreen from './JarsScreen';
import JarDetailScreen from './JarDetailScreen';
import EditJarsScreen from './EditJarsScreen';
import CardsScreen from './CardsScreen';
import SettingsScreen from './SettingsScreen';
import AIChat from './AIChat';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WalletApp = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedJar, setSelectedJar] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  const handleJarSelect = (jarId: string) => {
    if (jarId === 'edit') {
      setSelectedJar('edit');
    } else if (jarId === 'analysis') {
      setSelectedJar('analysis');
    } else {
      setSelectedJar(jarId);
    }
  };

  const handleBackToJars = () => {
    setSelectedJar(null);
  };

  const renderScreen = () => {
    // Handle jar-related screens
    if (activeTab === 'jars') {
      if (selectedJar === 'edit') {
        return <EditJarsScreen onBack={handleBackToJars} />;
      } else if (selectedJar === 'analysis') {
        return (
          <div className="min-h-screen bg-background pb-20 p-6">
            <div className="bg-gradient-primary p-6 -m-6 mb-6 text-foreground rounded-b-3xl">
              <h1 className="text-2xl font-bold">Detailed Analysis</h1>
              <p className="text-foreground/70">Comprehensive financial overview</p>
            </div>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Coming Soon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Detailed analysis with charts and insights will be available soon.
                </p>
              </CardContent>
            </Card>
          </div>
        );
      } else if (selectedJar) {
        return <JarDetailScreen jarId={selectedJar} onBack={handleBackToJars} />;
      } else {
        return <JarsScreen onJarSelect={handleJarSelect} />;
      }
    }

    switch (activeTab) {
      case 'home':
        return (
          <HomeScreen 
            onChatOpen={() => setIsChatOpen(true)}
            onTabChange={setActiveTab}
          />
        );
      case 'cards':
        return <CardsScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'qr':
        return (
          <div className="min-h-screen bg-background pb-20 p-6">
            <div className="bg-gradient-primary p-6 -m-6 mb-6 text-foreground rounded-b-3xl">
              <h1 className="text-2xl font-bold">QR Scanner</h1>
              <p className="text-foreground/70">Scan QR codes for payments</p>
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
      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={(tab) => {
          setActiveTab(tab);
          setSelectedJar(null); // Reset jar selection when changing tabs
        }} 
      />
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default WalletApp;