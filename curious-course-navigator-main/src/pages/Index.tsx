
import { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, Star, Clock, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CourseCard from '@/components/CourseCard';
import UserPreferences from '@/components/UserPreferences';
import { courseData, type Course, type UserProfile } from '@/data/courseData';

const Index = () => {
  const [courses, setCourses] = useState<Course[]>(courseData);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courseData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showPreferences, setShowPreferences] = useState(true);
  const [recommendedCourses, setRecommendedCourses] = useState<Course[]>([]);

  const categories = ['All', 'Programming', 'Design', 'Business', 'Data Science', 'Marketing', 'Photography'];

  useEffect(() => {
    let filtered = courses;

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory, courses]);

  const generateRecommendations = (profile: UserProfile) => {
    const recommended = courses
      .filter(course => 
        profile.interests.includes(course.category) ||
        course.skillLevel === profile.skillLevel ||
        course.tags.some(tag => profile.interests.some(interest => 
          interest.toLowerCase().includes(tag.toLowerCase())
        ))
      )
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);
    
    setRecommendedCourses(recommended);
  };

  const handlePreferencesSubmit = (profile: UserProfile) => {
    setUserProfile(profile);
    setShowPreferences(false);
    generateRecommendations(profile);
  };

  if (showPreferences) {
    return <UserPreferences onSubmit={handlePreferencesSubmit} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LearnSmart
                </h1>
                <p className="text-sm text-gray-600">Personalized Learning Recommendations</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowPreferences(true)}
              className="border-purple-200 text-purple-700 hover:bg-purple-50"
            >
              Update Preferences
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        {userProfile && (
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Welcome back, {userProfile.name}! 👋
            </h2>
            <p className="text-gray-600">
              Based on your interests in {userProfile.interests.join(', ')}, we've curated some perfect courses for you.
            </p>
          </div>
        )}

        {/* Recommended Courses */}
        {recommendedCourses.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedCourses.map((course) => (
                <CourseCard key={course.id} course={course} isRecommended={true} />
              ))}
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 border-gray-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Category:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* All Courses */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">All Courses</h2>
            <span className="text-sm text-gray-600">
              Showing {filteredCourses.length} of {courses.length} courses
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
