import { Home, PiggyBank, CreditCard, Settings, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'jars', label: 'Jars', icon: PiggyBank },
    { id: 'qr', label: 'QR', icon: QrCode },
    { id: 'cards', label: 'Cards', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-strong">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const isQR = tab.id === 'qr';
          
          if (isQR) {
            return (
              <Button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                variant="gradient"
                size="sm"
                className="rounded-full w-12 h-12 p-0 -mt-6 shadow-strong"
              >
                <Icon className="w-6 h-6" />
              </Button>
            );
          }
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : ''}`} />
              <span className="text-xs mt-1 font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;