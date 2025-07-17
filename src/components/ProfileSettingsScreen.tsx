import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  ArrowLeft,
  Camera,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit
} from 'lucide-react';
import userAvatar from '@/assets/user-avatar.png';

interface ProfileSettingsScreenProps {
  onBack: () => void;
}

const ProfileSettingsScreen = ({ onBack }: ProfileSettingsScreenProps) => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, New York, NY 10001',
    dateOfBirth: '1990-05-15'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save to backend
    setIsEditing(false);
    console.log('Profile updated:', profileData);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 text-foreground">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="text-foreground hover:bg-white/10 mr-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold">Profile Settings</h1>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            className="text-foreground hover:bg-white/10"
          >
            <Edit className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-foreground/70">Manage your personal information</p>
      </div>

      {/* Profile Picture */}
      <div className="px-6 -mt-6 relative z-10">
        <Card className="shadow-medium">
          <CardContent className="p-6 text-center">
            <div className="relative inline-block">
              <Avatar className="w-24 h-24">
                <AvatarImage src={userAvatar} alt="Profile picture" />
                <AvatarFallback className="text-2xl font-semibold">
                  {profileData.firstName[0]}{profileData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button 
                  size="sm" 
                  className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              )}
            </div>
            <h2 className="text-xl font-bold mt-4">
              {profileData.firstName} {profileData.lastName}
            </h2>
            <p className="text-muted-foreground">ID: PG-2024-0789</p>
          </CardContent>
        </Card>
      </div>

      {/* Personal Information */}
      <div className="px-6 mt-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={profileData.firstName}
                  disabled={!isEditing}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={!isEditing ? 'bg-muted/30' : ''}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={profileData.lastName}
                  disabled={!isEditing}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={!isEditing ? 'bg-muted/30' : ''}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                disabled={!isEditing}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={!isEditing ? 'bg-muted/30' : ''}
              />
            </div>

            <div>
              <Label htmlFor="phone" className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                Phone Number
              </Label>
              <Input
                id="phone"
                value={profileData.phone}
                disabled={!isEditing}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={!isEditing ? 'bg-muted/30' : ''}
              />
            </div>

            <div>
              <Label htmlFor="address" className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Address
              </Label>
              <Input
                id="address"
                value={profileData.address}
                disabled={!isEditing}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className={!isEditing ? 'bg-muted/30' : ''}
              />
            </div>

            <div>
              <Label htmlFor="dateOfBirth" className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Date of Birth
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={profileData.dateOfBirth}
                disabled={!isEditing}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className={!isEditing ? 'bg-muted/30' : ''}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Information */}
      <div className="px-6 mt-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              disabled={!isEditing}
            >
              Change Password
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              disabled={!isEditing}
            >
              Update Security Questions
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              disabled={!isEditing}
            >
              Manage Two-Factor Authentication
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Save Changes */}
      {isEditing && (
        <div className="px-6 mt-6 mb-4">
          <div className="flex space-x-3">
            <Button 
              onClick={handleSave}
              className="flex-1"
            >
              Save Changes
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setIsEditing(false)}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSettingsScreen;