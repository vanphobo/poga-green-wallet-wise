import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  ArrowLeft,
  Plus,
  Edit3,
  Trash2,
  Home,
  GraduationCap,
  Car,
  Heart,
  Gift,
  Target,
  PiggyBank,
  Briefcase,
  Coffee
} from 'lucide-react';

interface EditJarsScreenProps {
  onBack: () => void;
}

const EditJarsScreen = ({ onBack }: EditJarsScreenProps) => {
  const [jars, setJars] = useState([
    { 
      id: 'necessity', 
      name: 'Necessity', 
      icon: 'Home', 
      balance: 3420.50, 
      target: 4000, 
      color: 'bg-blue-500' 
    },
    { 
      id: 'education', 
      name: 'Education', 
      icon: 'GraduationCap', 
      balance: 1250.00, 
      target: 2000, 
      color: 'bg-purple-500' 
    },
    { 
      id: 'ltss', 
      name: 'Long Term Savings', 
      icon: 'Target', 
      balance: 2890.00, 
      target: 5000, 
      color: 'bg-green-500' 
    },
    { 
      id: 'play', 
      name: 'Play', 
      icon: 'Gift', 
      balance: 680.50, 
      target: 1000, 
      color: 'bg-orange-500' 
    },
    { 
      id: 'financial', 
      name: 'Financial Freedom', 
      icon: 'Car', 
      balance: 1560.00, 
      target: 3000, 
      color: 'bg-indigo-500' 
    },
    { 
      id: 'give', 
      name: 'Give', 
      icon: 'Heart', 
      balance: 340.00, 
      target: 500, 
      color: 'bg-pink-500' 
    }
  ]);

  const [editingJar, setEditingJar] = useState<any>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const iconOptions = [
    { name: 'Home', icon: Home },
    { name: 'GraduationCap', icon: GraduationCap },
    { name: 'Target', icon: Target },
    { name: 'Gift', icon: Gift },
    { name: 'Car', icon: Car },
    { name: 'Heart', icon: Heart },
    { name: 'PiggyBank', icon: PiggyBank },
    { name: 'Briefcase', icon: Briefcase },
    { name: 'Coffee', icon: Coffee }
  ];

  const colorOptions = [
    'bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500',
    'bg-indigo-500', 'bg-pink-500', 'bg-red-500', 'bg-yellow-500',
    'bg-teal-500', 'bg-cyan-500'
  ];

  const handleSaveJar = (jarData: any) => {
    if (editingJar) {
      setJars(jars.map(jar => jar.id === editingJar.id ? { ...jar, ...jarData } : jar));
    } else {
      const newJar = {
        ...jarData,
        id: Date.now().toString(),
        balance: 0
      };
      setJars([...jars, newJar]);
    }
    setEditingJar(null);
    setIsAddingNew(false);
  };

  const handleDeleteJar = (jarId: string) => {
    setJars(jars.filter(jar => jar.id !== jarId));
  };

  const JarForm = ({ jar, onSave, onCancel }: any) => {
    const [formData, setFormData] = useState({
      name: jar?.name || '',
      icon: jar?.icon || 'PiggyBank',
      color: jar?.color || 'bg-blue-500',
      target: jar?.target || 1000
    });

    return (
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Jar Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter jar name"
          />
        </div>

        <div>
          <Label>Icon</Label>
          <div className="grid grid-cols-5 gap-2 mt-2">
            {iconOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Button
                  key={option.name}
                  variant={formData.icon === option.name ? "default" : "outline"}
                  size="sm"
                  className="p-2"
                  onClick={() => setFormData({ ...formData, icon: option.name })}
                >
                  <Icon className="w-4 h-4" />
                </Button>
              );
            })}
          </div>
        </div>

        <div>
          <Label>Color</Label>
          <div className="grid grid-cols-5 gap-2 mt-2">
            {colorOptions.map((color) => (
              <Button
                key={color}
                variant="outline"
                size="sm"
                className={`p-2 ${color} ${formData.color === color ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setFormData({ ...formData, color })}
              >
                <div className="w-4 h-4 rounded bg-white/30" />
              </Button>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="target">Target Amount ($)</Label>
          <Input
            id="target"
            type="number"
            value={formData.target}
            onChange={(e) => setFormData({ ...formData, target: parseFloat(e.target.value) || 0 })}
            placeholder="Enter target amount"
          />
        </div>

        <div className="flex space-x-2">
          <Button onClick={() => onSave(formData)} className="flex-1">
            Save Jar
          </Button>
          <Button variant="outline" onClick={onCancel} className="flex-1">
            Cancel
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 text-foreground">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-foreground hover:bg-white/10 p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Edit Jars</h1>
              <p className="text-foreground/70">Manage your jar system</p>
            </div>
          </div>
          <Button 
            variant="secondary"
            onClick={() => setIsAddingNew(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Jar
          </Button>
        </div>
      </div>

      {/* Jars List */}
      <div className="px-6 mt-6 space-y-4">
        {jars.map((jar) => {
          const IconComponent = iconOptions.find(opt => opt.name === jar.icon)?.icon || PiggyBank;
          
          return (
            <Card key={jar.id} className="shadow-soft">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${jar.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{jar.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        ${jar.balance.toFixed(2)} / ${jar.target.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingJar(jar)}
                        >
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Jar</DialogTitle>
                        </DialogHeader>
                        <JarForm
                          jar={jar}
                          onSave={handleSaveJar}
                          onCancel={() => setEditingJar(null)}
                        />
                      </DialogContent>
                    </Dialog>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteJar(jar.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Add New Jar Dialog */}
      <Dialog open={isAddingNew} onOpenChange={setIsAddingNew}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Jar</DialogTitle>
          </DialogHeader>
          <JarForm
            jar={null}
            onSave={handleSaveJar}
            onCancel={() => setIsAddingNew(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditJarsScreen;