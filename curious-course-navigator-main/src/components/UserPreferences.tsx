
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { UserProfile } from '@/data/courseData';
import { User, Target, Brain, Rocket } from 'lucide-react';

interface UserPreferencesProps {
  onSubmit: (profile: UserProfile) => void;
}

const UserPreferences = ({ onSubmit }: UserPreferencesProps) => {
  const [name, setName] = useState('');
  const [skillLevel, setSkillLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [goals, setGoals] = useState('');

  const availableInterests = [
    'Programming', 'Web Development', 'Mobile Development', 'Data Science',
    'Machine Learning', 'Design', 'UI/UX', 'Photography', 'Business',
    'Marketing', 'Finance', 'Project Management', 'Language Learning',
    'Music', 'Art', 'Writing', 'Health & Fitness', 'Cooking'
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && selectedInterests.length > 0) {
      const profile: UserProfile = {
        name,
        skillLevel,
        interests: selectedInterests,
        goals
      };
      onSubmit(profile);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
        <CardHeader className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full w-16 h-16 mx-auto mb-4">
            <User className="h-10 w-10 text-white" />
          </div>
          <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Personalize Your Learning Journey
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Tell us about yourself so we can recommend the perfect courses for you
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                What's your name?
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="bg-white/80"
              />
            </div>

            {/* Skill Level */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                <Target className="h-4 w-4" />
                <span>What's your current skill level?</span>
              </Label>
              <RadioGroup value={skillLevel} onValueChange={(value: any) => setSkillLevel(value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Beginner" id="beginner" />
                  <Label htmlFor="beginner" className="cursor-pointer">
                    <span className="font-medium">Beginner</span> - Just starting out
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Intermediate" id="intermediate" />
                  <Label htmlFor="intermediate" className="cursor-pointer">
                    <span className="font-medium">Intermediate</span> - Have some experience
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Advanced" id="advanced" />
                  <Label htmlFor="advanced" className="cursor-pointer">
                    <span className="font-medium">Advanced</span> - Looking to master skills
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Interests */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                <Brain className="h-4 w-4" />
                <span>What are you interested in learning? (Select multiple)</span>
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {availableInterests.map(interest => (
                  <Badge
                    key={interest}
                    variant={selectedInterests.includes(interest) ? "default" : "secondary"}
                    className={`cursor-pointer text-center p-2 transition-all duration-200 ${
                      selectedInterests.includes(interest)
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => toggleInterest(interest)}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
              {selectedInterests.length === 0 && (
                <p className="text-sm text-red-500">Please select at least one interest</p>
              )}
            </div>

            {/* Goals */}
            <div className="space-y-2">
              <Label htmlFor="goals" className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                <Rocket className="h-4 w-4" />
                <span>What are your learning goals? (Optional)</span>
              </Label>
              <Input
                id="goals"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                placeholder="e.g., Career change, skill improvement, personal interest..."
                className="bg-white/80"
              />
            </div>

            <Button
              type="submit"
              disabled={!name || selectedInterests.length === 0}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-medium"
            >
              Get My Personalized Recommendations
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserPreferences;
