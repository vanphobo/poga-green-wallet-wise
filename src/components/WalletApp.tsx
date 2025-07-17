import { useState } from 'react';
import SplashScreen from './SplashScreen';
import BottomNavigation from './BottomNavigation';
import HomeScreen from './HomeScreen';
import JarsScreen from './JarsScreen';
import JarDetailScreen from './JarDetailScreen';
import EditJarsScreen from './EditJarsScreen';
import CardsScreen from './CardsScreen';
import SettingsScreen from './SettingsScreen';
import AnalysisScreen from './AnalysisScreen';
import ProfileSettingsScreen from './ProfileSettingsScreen';
import QRScanScreen from './QRScanScreen';
import AIChat from './AIChat';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WalletApp = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedJar, setSelectedJar] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);

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
        return <AnalysisScreen onBack={handleBackToJars} />;
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
        if (selectedSetting === 'profile') {
          return <ProfileSettingsScreen onBack={() => setSelectedSetting(null)} />;
        }
        return <SettingsScreen onSettingSelect={setSelectedSetting} />;
      case 'qr':
        return <QRScanScreen onBack={() => setActiveTab('home')} />;
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
          setSelectedSetting(null); // Reset setting selection when changing tabs
        }}
      />
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default WalletApp;