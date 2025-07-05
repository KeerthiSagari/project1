
import { useState } from 'react';
import { Star, Clock, Users, BookOpen, Play, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Course } from '@/data/courseData';

interface CourseCardProps {
  course: Course;
  isRecommended?: boolean;
}

const CourseCard = ({ course, isRecommended = false }: CourseCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnroll = () => {
    setIsEnrolled(true);
  };

  const skillLevelColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-white/20 ${
      isRecommended ? 'ring-2 ring-purple-200 shadow-lg' : ''
    }`}>
      {isRecommended && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium z-10">
          Recommended
        </div>
      )}
      
      <CardHeader className="p-0">
        <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 p-4 rounded-full shadow-lg">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          {/* Like button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </button>

          {/* Skill level badge */}
          <div className="absolute top-4 left-4">
            <Badge className={skillLevelColors[course.skillLevel]}>
              {course.skillLevel}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="mb-3">
          <Badge variant="secondary" className="text-xs">
            {course.category}
          </Badge>
        </div>

        <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {course.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            {course.price === 0 ? 'Free' : `$${course.price}`}
          </div>
          <Button
            onClick={handleEnroll}
            disabled={isEnrolled}
            className={`${
              isEnrolled
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
            } text-white transition-all duration-200`}
          >
            {isEnrolled ? (
              <>
                <Play className="h-4 w-4 mr-2" />
                Continue
              </>
            ) : (
              'Enroll Now'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
