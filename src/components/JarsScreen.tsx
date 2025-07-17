import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  PiggyBank, 
  TrendingUp, 
  Plus, 
  Minus, 
  Eye,
  Edit3,
  ChevronRight,
  Target,
  Home,
  GraduationCap,
  Car,
  Heart,
  Gift
} from 'lucide-react';

interface JarsScreenProps {
  onJarSelect: (jarId: string) => void;
}

const JarsScreen = ({ onJarSelect }: JarsScreenProps) => {
  const jars = [
    { 
      id: 'necessity', 
      name: 'Necessity', 
      icon: Home, 
      balance: 3420.50, 
      target: 4000, 
      color: 'bg-blue-500',
      description: 'Essential expenses'
    },
    { 
      id: 'education', 
      name: 'Education', 
      icon: GraduationCap, 
      balance: 1250.00, 
      target: 2000, 
      color: 'bg-purple-500',
      description: 'Learning & growth'
    },
    { 
      id: 'ltss', 
      name: 'Long Term Savings', 
      icon: Target, 
      balance: 2890.00, 
      target: 5000, 
      color: 'bg-green-500',
      description: 'Future investments'
    },
    { 
      id: 'play', 
      name: 'Play', 
      icon: Gift, 
      balance: 680.50, 
      target: 1000, 
      color: 'bg-orange-500',
      description: 'Entertainment & fun'
    },
    { 
      id: 'financial', 
      name: 'Financial Freedom', 
      icon: Car, 
      balance: 1560.00, 
      target: 3000, 
      color: 'bg-indigo-500',
      description: 'Investment fund'
    },
    { 
      id: 'give', 
      name: 'Give', 
      icon: Heart, 
      balance: 340.00, 
      target: 500, 
      color: 'bg-pink-500',
      description: 'Charity & gifts'
    }
  ];

  const totalBalance = jars.reduce((sum, jar) => sum + jar.balance, 0);
  const totalTarget = jars.reduce((sum, jar) => sum + jar.target, 0);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">6-Jar System</h1>
        <p className="text-white/80">Organize your money wisely</p>
      </div>

      {/* Analysis Overview */}
      <div className="px-6 -mt-6 relative z-10">
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Jars Analysis</span>
              <TrendingUp className="w-5 h-5 text-success" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Total in Jars</p>
                <p className="text-xl font-bold text-foreground">${totalBalance.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Target Progress</p>
                <p className="text-xl font-bold text-primary">
                  {Math.round((totalBalance / totalTarget) * 100)}%
                </p>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Progress</span>
                <span>{Math.round((totalBalance / totalTarget) * 100)}%</span>
              </div>
              <Progress value={(totalBalance / totalTarget) * 100} className="h-2" />
            </div>

            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => onJarSelect('analysis')}
              >
                <Eye className="w-4 h-4 mr-2" />
                Analysis
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => onJarSelect('edit')}
              >
                <Edit3 className="w-4 h-4 mr-2" />
                Edit Jars
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Jars List */}
      <div className="px-6 mt-6 space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Your Jars</h2>
        
        {jars.map((jar) => {
          const Icon = jar.icon;
          const progress = (jar.balance / jar.target) * 100;
          
          return (
            <Card key={jar.id} className="shadow-soft">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${jar.color} rounded-full flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{jar.name}</h3>
                      <p className="text-xs text-muted-foreground">{jar.description}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onJarSelect(jar.id)}
                    className="p-0 h-auto"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">
                      ${jar.balance.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      of ${jar.target.toFixed(2)}
                    </span>
                  </div>
                  
                  <Progress value={progress} className="h-2" />
                  
                  <div className="flex space-x-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Plus className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Minus className="w-4 h-4 mr-1" />
                      Withdraw
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Transactions */}
      <div className="px-6 mt-6 mb-4">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Recent Jar Transactions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Plus className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm">Added to Necessity</p>
                  <p className="text-xs text-muted-foreground">Salary allocation</p>
                </div>
              </div>
              <p className="font-semibold text-success">+$420.00</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Minus className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm">Play Fund Used</p>
                  <p className="text-xs text-muted-foreground">Movie night</p>
                </div>
              </div>
              <p className="font-semibold text-destructive">-$45.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JarsScreen;