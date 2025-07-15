import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Send, 
  Download, 
  User, 
  Bell, 
  TrendingUp, 
  PiggyBank, 
  History,
  CreditCard,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import userAvatar from '@/assets/user-avatar.png';
import homeBg from '@/assets/home-bg.png';

interface HomeScreenProps {
  onChatOpen: () => void;
  onTabChange: (tab: string) => void;
}

const HomeScreen = ({ onChatOpen, onTabChange }: HomeScreenProps) => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Section */}
      <div 
        className="relative bg-gradient-primary rounded-b-3xl p-6"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="flex justify-end mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onTabChange('settings')}
            className="text-foreground hover:bg-white/10"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-foreground/70 text-sm">Total Balance</p>
            <h1 className="text-3xl font-bold text-foreground">$12,847.50</h1>
          </div>
          
          <div className="flex justify-between">
            <div>
              <p className="text-foreground/70 text-xs">Uncategorized</p>
              <p className="font-semibold text-foreground">$2,340.00</p>
            </div>
            <div>
              <p className="text-foreground/70 text-xs">Remaining Credit</p>
              <p className="font-semibold text-foreground">$5,000.00</p>
            </div>
          </div>

          {/* User Info at Bottom */}
          <div className="flex items-center space-x-4 mt-8">
            <img 
              src={userAvatar} 
              alt="User Avatar" 
              className="w-16 h-16 rounded-full border-3 border-white/30"
            />
            <div>
              <h2 className="text-xl font-semibold text-foreground">Hello, John!</h2>
              <p className="text-foreground/70 text-sm">ID: PG-2024-0789</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Actions */}
      <div className="px-6 -mt-6 relative z-10">
        <Card className="shadow-medium">
          <CardContent className="p-4">
            <div className="grid grid-cols-4 gap-4">
              <button className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-muted transition-colors">
                <Send className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">Transfer</span>
              </button>
              <button className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-muted transition-colors">
                <Download className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">Request</span>
              </button>
              <button className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-muted transition-colors">
                <User className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">Account</span>
              </button>
              <button className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-muted transition-colors">
                <Bell className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">News</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Analysis Section */}
      <div className="px-6 mt-6 space-y-4">
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">Financial Health</h3>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-success">8.5</p>
                <p className="text-xs text-muted-foreground">Health Score</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">$3,450</p>
                <p className="text-xs text-muted-foreground">Saved</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-warning">750</p>
                <p className="text-xs text-muted-foreground">Credit Score</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">Recent Activity</h3>
              <History className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Send className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Coffee Shop</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <p className="font-semibold text-destructive">-$4.50</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                    <Download className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Salary Payment</p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
                <p className="font-semibold text-success">+$2,800.00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">AI Financial Advice</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={onChatOpen}
                className="p-0 h-auto"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-sm font-medium text-foreground mb-1">Smart Spending Alert</p>
                <p className="text-xs text-muted-foreground">
                  You're spending 23% more on dining out this month. Consider allocating more to your "Fun" jar.
                </p>
              </div>
              <div className="p-3 bg-success/5 rounded-lg border-l-4 border-success">
                <p className="text-sm font-medium text-foreground mb-1">Savings Goal Progress</p>
                <p className="text-xs text-muted-foreground">
                  Great job! You're on track to reach your emergency fund goal by next month.
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onChatOpen}
              className="w-full mt-4"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with AI Assistant
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Floating Chat Button */}
      <Button
        onClick={onChatOpen}
        variant="gradient"
        className="fixed bottom-24 right-6 rounded-full w-14 h-14 p-0 shadow-strong"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default HomeScreen;