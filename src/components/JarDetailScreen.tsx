import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft,
  Plus,
  Minus,
  TrendingUp,
  TrendingDown,
  PieChart,
  AlertTriangle,
  Target,
  Calendar
} from 'lucide-react';

interface JarDetailScreenProps {
  jarId: string;
  onBack: () => void;
}

const JarDetailScreen = ({ jarId, onBack }: JarDetailScreenProps) => {
  // Mock data for jar details
  const jarData = {
    necessity: {
      name: 'Necessity',
      balance: 3420.50,
      target: 4000,
      color: 'bg-blue-500',
      description: 'Essential expenses like rent, utilities, groceries'
    },
    education: {
      name: 'Education',
      balance: 1250.00,
      target: 2000,
      color: 'bg-purple-500',
      description: 'Learning, courses, books, skill development'
    },
    ltss: {
      name: 'Long Term Savings',
      balance: 2890.00,
      target: 5000,
      color: 'bg-green-500',
      description: 'Future investments and long-term goals'
    },
    play: {
      name: 'Play',
      balance: 680.50,
      target: 1000,
      color: 'bg-orange-500',
      description: 'Entertainment, hobbies, and fun activities'
    },
    financial: {
      name: 'Financial Freedom',
      balance: 1560.00,
      target: 3000,
      color: 'bg-indigo-500',
      description: 'Investment fund for financial independence'
    },
    give: {
      name: 'Give',
      balance: 340.00,
      target: 500,
      color: 'bg-pink-500',
      description: 'Charity, donations, and gifts to others'
    }
  };

  const jar = jarData[jarId as keyof typeof jarData];
  if (!jar) return null;

  const progress = (jar.balance / jar.target) * 100;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 text-foreground">
        <div className="flex items-center space-x-4 mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-foreground hover:bg-white/10 p-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{jar.name} Jar</h1>
            <p className="text-foreground/70">{jar.description}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <p className="text-foreground/70 text-sm">Current Balance</p>
            <h2 className="text-3xl font-bold text-foreground">${jar.balance.toFixed(2)}</h2>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-foreground/70">Target: ${jar.target.toFixed(2)}</span>
              <span className="text-foreground">{progress.toFixed(1)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          <div className="flex space-x-3 mt-6">
            <Button variant="secondary" className="flex-1">
              <Plus className="w-4 h-4 mr-2" />
              Deposit
            </Button>
            <Button variant="outline" className="flex-1">
              <Minus className="w-4 h-4 mr-2" />
              Withdraw
            </Button>
          </div>
        </div>
      </div>

      {/* Analysis Cards */}
      <div className="px-6 -mt-6 relative z-10 space-y-4">
        {/* Financial Trends */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-success" />
              Financial Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Growth</p>
                <p className="text-lg font-bold text-success">+12.5%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg. Monthly Add</p>
                <p className="text-lg font-bold text-foreground">$420</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary" />
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <Plus className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm">Monthly Allocation</p>
                  <p className="text-xs text-muted-foreground">Jan 15, 2024</p>
                </div>
              </div>
              <p className="font-semibold text-success">+$420.00</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                  <Minus className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm">Emergency Expense</p>
                  <p className="text-xs text-muted-foreground">Jan 10, 2024</p>
                </div>
              </div>
              <p className="font-semibold text-destructive">-$150.00</p>
            </div>
          </CardContent>
        </Card>

        {/* Future Forecast */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="w-5 h-5 mr-2 text-primary" />
              Future Cash Flow Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Projected balance (3 months)</span>
                <span className="font-semibold text-foreground">${(jar.balance + 1260).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Target completion</span>
                <span className="font-semibold text-success">4 months</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Alerts */}
        <Card className="shadow-soft border-l-4 border-warning">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-warning" />
              Risk Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your spending in this category has increased by 15% this month. Consider reviewing your budget allocation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JarDetailScreen;