import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  DollarSign,
  Target,
  Calendar,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

interface AnalysisScreenProps {
  onBack: () => void;
}

const AnalysisScreen = ({ onBack }: AnalysisScreenProps) => {
  const analysisData = {
    totalJars: 6,
    totalSaved: 15847.50,
    monthlyGrowth: 12.5,
    savingsGoal: 20000,
    riskScore: 3.2,
    badTransactions: [
      { description: 'Unnecessary subscription fees', amount: 45.99, category: 'Entertainment' },
      { description: 'Impulse online shopping', amount: 234.50, category: 'Shopping' },
      { description: 'Expensive dining out', amount: 89.30, category: 'Food' }
    ],
    trends: [
      { month: 'Oct', income: 4500, expenses: 3200, savings: 1300 },
      { month: 'Nov', income: 4800, expenses: 3100, savings: 1700 },
      { month: 'Dec', income: 5200, expenses: 3400, savings: 1800 },
      { month: 'Jan', income: 4900, expenses: 2950, savings: 1950 }
    ],
    forecast: {
      nextMonth: 2100,
      next3Months: 6500,
      next6Months: 13200
    },
    risks: [
      { type: 'High Entertainment Spending', level: 'medium', description: 'Entertainment expenses increased by 25% this month' },
      { type: 'Emergency Fund Low', level: 'high', description: 'Emergency fund below recommended 3-month expenses' },
      { type: 'Credit Utilization', level: 'low', description: 'Credit card usage at 78% of limit' }
    ]
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-destructive';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getRiskBadgeVariant = (level: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (level) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 text-foreground">
        <div className="flex items-center mb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="text-foreground hover:bg-white/10 mr-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold">Detailed Analysis</h1>
        </div>
        <p className="text-foreground/70">Comprehensive financial overview and insights</p>
      </div>

      {/* Metadata Overview */}
      <div className="px-6 -mt-6 relative z-10">
        <Card className="shadow-medium">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-success">${analysisData.totalSaved.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Saved</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">+{analysisData.monthlyGrowth}%</p>
                <p className="text-sm text-muted-foreground">Monthly Growth</p>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Savings Goal Progress</span>
                <span>{Math.round((analysisData.totalSaved / analysisData.savingsGoal) * 100)}%</span>
              </div>
              <Progress value={(analysisData.totalSaved / analysisData.savingsGoal) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bad Transactions */}
      <div className="px-6 mt-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-warning" />
              Optimization Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {analysisData.badTransactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium text-sm">{transaction.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {transaction.category}
                  </Badge>
                </div>
                <p className="font-semibold text-destructive">-${transaction.amount}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Financial Trends */}
      <div className="px-6 mt-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-primary" />
              Financial Trends (Last 4 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analysisData.trends.map((trend, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{trend.month}</span>
                  </div>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-success">+${trend.income}</span>
                    <span className="text-destructive">-${trend.expenses}</span>
                    <span className="text-primary font-semibold">${trend.savings}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Future Cash Flow Forecast */}
      <div className="px-6 mt-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-success" />
              Cash Flow Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-lg font-bold text-primary">${analysisData.forecast.nextMonth}</p>
                <p className="text-xs text-muted-foreground">Next Month</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-primary">${analysisData.forecast.next3Months}</p>
                <p className="text-xs text-muted-foreground">3 Months</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-primary">${analysisData.forecast.next6Months}</p>
                <p className="text-xs text-muted-foreground">6 Months</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Alerts */}
      <div className="px-6 mt-6 mb-4">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="w-5 h-5 mr-2 text-warning" />
              Risk Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {analysisData.risks.map((risk, index) => (
              <div key={index} className="flex items-start justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-sm">{risk.type}</h4>
                    <Badge variant={getRiskBadgeVariant(risk.level)} className="text-xs">
                      {risk.level.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{risk.description}</p>
                </div>
                <AlertTriangle className={`w-4 h-4 ${getRiskColor(risk.level)}`} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalysisScreen;