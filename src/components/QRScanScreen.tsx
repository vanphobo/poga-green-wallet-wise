import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  ArrowLeft,
  QrCode,
  Scan,
  Upload,
  History,
  User,
  DollarSign,
  Clock
} from 'lucide-react';

interface QRScanScreenProps {
  onBack: () => void;
}

const QRScanScreen = ({ onBack }: QRScanScreenProps) => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [manualCode, setManualCode] = useState('');

  const recentScans = [
    {
      id: '1',
      type: 'Payment Request',
      user: 'Alice Johnson',
      amount: 45.50,
      timestamp: '2 hours ago',
      code: 'PG-PAY-ABC123'
    },
    {
      id: '2',
      type: 'Contact Share',
      user: 'Bob Wilson',
      timestamp: '1 day ago',
      code: 'PG-CONTACT-XYZ789'
    },
    {
      id: '3',
      type: 'Transfer',
      user: 'Carol Davis',
      amount: 120.00,
      timestamp: '3 days ago',
      code: 'PG-TRANSFER-DEF456'
    }
  ];

  const handleManualScan = () => {
    if (manualCode.trim()) {
      setScanResult(manualCode.trim());
    }
  };

  const handleScanFromCamera = () => {
    // Simulate QR scan
    setTimeout(() => {
      setScanResult('PG-PAY-SAMPLE123');
    }, 1000);
  };

  const processQRCode = (code: string) => {
    // Process the QR code based on its type
    if (code.startsWith('PG-PAY-')) {
      return { type: 'Payment Request', action: 'Pay $25.00 to Sarah Chen' };
    } else if (code.startsWith('PG-CONTACT-')) {
      return { type: 'Contact Share', action: 'Add Mike Rodriguez to contacts' };
    } else if (code.startsWith('PG-TRANSFER-')) {
      return { type: 'Transfer', action: 'Accept transfer from Emma Stone' };
    }
    return { type: 'Unknown', action: 'Invalid QR code format' };
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
          <h1 className="text-2xl font-bold">QR Scanner</h1>
        </div>
        <p className="text-foreground/70">Scan QR codes for payments and transfers</p>
      </div>

      {/* Scanner Interface */}
      <div className="px-6 -mt-6 relative z-10">
        <Card className="shadow-medium">
          <CardContent className="p-6">
            {!scanResult ? (
              <div className="text-center space-y-6">
                {/* Mock Camera View */}
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Point camera at QR code</p>
                  </div>
                </div>

                {/* Scan Button */}
                <Button 
                  onClick={handleScanFromCamera}
                  className="w-full"
                  size="lg"
                >
                  <Scan className="w-5 h-5 mr-2" />
                  Start Scanning
                </Button>

                <div className="flex items-center space-x-4">
                  <div className="flex-1 h-px bg-border"></div>
                  <span className="text-sm text-muted-foreground">OR</span>
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                {/* Manual Input */}
                <div className="space-y-3">
                  <Label htmlFor="manualCode">Enter QR Code Manually</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="manualCode"
                      placeholder="PG-PAY-ABC123"
                      value={manualCode}
                      onChange={(e) => setManualCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleManualScan}
                      variant="outline"
                    >
                      Scan
                    </Button>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload QR Image
                </Button>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto">
                  <QrCode className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-success">QR Code Detected!</h3>
                  <p className="text-sm text-muted-foreground">Code: {scanResult}</p>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <p className="font-medium">{processQRCode(scanResult).type}</p>
                      <p className="text-sm text-muted-foreground">
                        {processQRCode(scanResult).action}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex space-x-3">
                  <Button className="flex-1">
                    Process
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setScanResult(null)}
                    className="flex-1"
                  >
                    Scan Again
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Scans */}
      <div className="px-6 mt-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <History className="w-5 h-5 mr-2" />
              Recent Scans
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentScans.map((scan) => (
              <div key={scan.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    {scan.type === 'Payment Request' ? (
                      <DollarSign className="w-5 h-5 text-white" />
                    ) : (
                      <User className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{scan.type}</p>
                    <p className="text-xs text-muted-foreground">
                      {scan.user} • {scan.timestamp}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  {scan.amount && (
                    <p className="font-semibold text-sm">${scan.amount}</p>
                  )}
                  <p className="text-xs text-muted-foreground">{scan.code}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mt-6 mb-4">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-auto py-3 flex-col space-y-1">
                <QrCode className="w-5 h-5" />
                <span className="text-sm">Show My QR</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 flex-col space-y-1">
                <Upload className="w-5 h-5" />
                <span className="text-sm">From Gallery</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QRScanScreen;