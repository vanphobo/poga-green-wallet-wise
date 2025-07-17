import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { 
  User,
  Lock,
  Bell,
  Shield,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
  Settings,
  Moon,
  Globe,
  Smartphone
} from 'lucide-react';
import userAvatar from '@/assets/user-avatar.png';

const SettingsScreen = () => {
  const settingsGroups = [
    {
      title: 'Account',
      items: [
        {
          icon: User,
          label: 'Profile Information',
          description: 'Update your personal details',
          action: () => console.log('Profile clicked')
        },
        {
          icon: Lock,
          label: 'Change Password',
          description: 'Update your account password',
          action: () => console.log('Password clicked')
        },
        {
          icon: Shield,
          label: 'Security Settings',
          description: 'Two-factor authentication, biometrics',
          action: () => console.log('Security clicked')
        }
      ]
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: Bell,
          label: 'Notifications',
          description: 'Manage your notification preferences',
          action: () => console.log('Notifications clicked'),
          toggle: true,
          enabled: true
        },
        {
          icon: Moon,
          label: 'Dark Mode',
          description: 'Switch between light and dark theme',
          action: () => console.log('Dark mode clicked'),
          toggle: true,
          enabled: false
        },
        {
          icon: Globe,
          label: 'Language',
          description: 'English',
          action: () => console.log('Language clicked')
        }
      ]
    },
    {
      title: 'Financial',
      items: [
        {
          icon: CreditCard,
          label: 'Payment Methods',
          description: 'Manage cards and bank accounts',
          action: () => console.log('Payment methods clicked')
        },
        {
          icon: Settings,
          label: 'Budget Settings',
          description: 'Configure your spending limits',
          action: () => console.log('Budget clicked')
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          icon: HelpCircle,
          label: 'Help & Support',
          description: 'FAQs, contact support',
          action: () => console.log('Help clicked')
        },
        {
          icon: Smartphone,
          label: 'About Poga Wallet',
          description: 'Version 1.0.0',
          action: () => console.log('About clicked')
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header with Profile */}
      <div className="bg-gradient-primary p-6 text-foreground">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <img 
                src={userAvatar} 
                alt="Profile" 
                className="w-16 h-16 rounded-full border-2 border-white/30"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground">John Doe</h2>
                <p className="text-foreground/70">john.doe@example.com</p>
                <p className="text-sm text-foreground/60">ID: PG-2024-0789</p>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-foreground hover:bg-white/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Settings Groups */}
      <div className="px-6 -mt-6 relative z-10 space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3 px-2">
              {group.title.toUpperCase()}
            </h3>
            
            <Card className="shadow-soft">
              <CardContent className="p-0">
                {group.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  
                  return (
                    <div 
                      key={itemIndex}
                      className={`p-4 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors ${
                        itemIndex !== group.items.length - 1 ? 'border-b border-border' : ''
                      }`}
                      onClick={item.action}
                    >
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{item.label}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      
                      {item.toggle ? (
                        <Switch checked={item.enabled} />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Logout Button */}
        <Card className="shadow-soft border-destructive/20">
          <CardContent className="p-4">
            <Button 
              variant="ghost" 
              className="w-full text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </Button>
          </CardContent>
        </Card>

        {/* App Version */}
        <div className="text-center py-4">
          <p className="text-sm text-muted-foreground">
            Poga Wallet v1.0.0
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © 2024 Poga Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;