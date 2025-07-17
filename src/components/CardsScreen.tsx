import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard,
  Building2,
  Plus,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  MoreVertical
} from 'lucide-react';

const CardsScreen = () => {
  const banks = [
    {
      id: 'bank1',
      name: 'Chase Bank',
      accountNumber: '****1234',
      balance: 5240.50,
      type: 'Checking'
    },
    {
      id: 'bank2',
      name: 'Bank of America',
      accountNumber: '****5678',
      balance: 12847.30,
      type: 'Savings'
    }
  ];

  const cards = [
    {
      id: 'card1',
      name: 'Chase Freedom',
      cardNumber: '****4532',
      balance: 1250.00,
      limit: 5000.00,
      type: 'Credit',
      color: 'bg-gradient-to-r from-blue-600 to-blue-800'
    },
    {
      id: 'card2',
      name: 'Chase Debit',
      cardNumber: '****7890',
      balance: 5240.50,
      type: 'Debit',
      color: 'bg-gradient-to-r from-green-600 to-green-800'
    },
    {
      id: 'card3',
      name: 'Amex Platinum',
      cardNumber: '****1111',
      balance: 850.00,
      limit: 10000.00,
      type: 'Credit',
      color: 'bg-gradient-to-r from-gray-700 to-gray-900'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 text-foreground">
        <h1 className="text-2xl font-bold mb-2">Cards & Banks</h1>
        <p className="text-foreground/70">Manage your payment methods</p>
      </div>

      {/* Quick Actions */}
      <div className="px-6 -mt-6 relative z-10">
        <Card className="shadow-medium">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-auto py-3 flex-col space-y-1">
                <ArrowDownLeft className="w-5 h-5 text-success" />
                <span className="text-sm">Deposit</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 flex-col space-y-1">
                <ArrowUpRight className="w-5 h-5 text-destructive" />
                <span className="text-sm">Withdraw</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bank Accounts */}
      <div className="px-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Bank Accounts</h2>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Bank
          </Button>
        </div>

        <div className="space-y-4">
          {banks.map((bank) => (
            <Card key={bank.id} className="shadow-soft">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{bank.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {bank.type} • {bank.accountNumber}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-foreground">
                      ${bank.balance.toLocaleString()}
                    </p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Credit/Debit Cards */}
      <div className="px-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">My Cards</h2>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Card
          </Button>
        </div>

        <div className="space-y-4">
          {cards.map((card) => (
            <Card key={card.id} className="shadow-soft overflow-hidden">
              <div className={`${card.color} p-4 text-white relative`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-white/80 text-sm">{card.type} Card</p>
                    <h3 className="font-bold text-lg">{card.name}</h3>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {card.type}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-white/80 text-sm">Card Number</p>
                  <p className="font-mono text-lg tracking-wider">{card.cardNumber}</p>
                </div>

                <div className="absolute top-4 right-4">
                  <CreditCard className="w-8 h-8 text-white/60" />
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {card.type === 'Credit' ? 'Balance' : 'Available'}
                    </p>
                    <p className="font-bold text-lg text-foreground">
                      ${card.balance.toLocaleString()}
                    </p>
                    {card.limit && (
                      <p className="text-xs text-muted-foreground">
                        Limit: ${card.limit.toLocaleString()}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Wallet className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-6 mt-6 mb-4">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Recent Card Transactions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm">Starbucks Coffee</p>
                  <p className="text-xs text-muted-foreground">Chase Freedom • Jan 15</p>
                </div>
              </div>
              <p className="font-semibold text-destructive">-$5.40</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <ArrowDownLeft className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm">ATM Deposit</p>
                  <p className="text-xs text-muted-foreground">Chase Debit • Jan 14</p>
                </div>
              </div>
              <p className="font-semibold text-success">+$200.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardsScreen;