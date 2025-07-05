
export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  students: number;
  price: number;
  tags: string[];
  instructor: string;
}

export interface UserProfile {
  name: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  interests: string[];
  goals: string;
}

export const courseData: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to become a full-stack developer.',
    category: 'Programming',
    skillLevel: 'Beginner',
    duration: '65 hours',
    rating: 4.8,
    students: 45320,
    price: 89,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    instructor: 'Dr. Angela Yu'
  },
  {
    id: '2',
    title: 'UI/UX Design Fundamentals',
    description: 'Master the principles of user interface and user experience design with hands-on projects.',
    category: 'Design',
    skillLevel: 'Beginner',
    duration: '28 hours',
    rating: 4.7,
    students: 23150,
    price: 69,
    tags: ['Figma', 'Design Thinking', 'Prototyping', 'User Research'],
    instructor: 'Sarah Johnson'
  },
  {
    id: '3',
    title: 'Data Science with Python',
    description: 'Comprehensive course covering pandas, numpy, matplotlib, and machine learning basics.',
    category: 'Data Science',
    skillLevel: 'Intermediate',
    duration: '42 hours',
    rating: 4.9,
    students: 18750,
    price: 129,
    tags: ['Python', 'Pandas', 'Machine Learning', 'Statistics'],
    instructor: 'Jose Portilla'
  },
  {
    id: '4',
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, social media marketing, Google Ads, and email marketing strategies.',
    category: 'Marketing',
    skillLevel: 'Beginner',
    duration: '32 hours',
    rating: 4.6,
    students: 31200,
    price: 79,
    tags: ['SEO', 'Social Media', 'Google Ads', 'Email Marketing'],
    instructor: 'Neil Patel'
  },
  {
    id: '5',
    title: 'Advanced React Development',
    description: 'Deep dive into React hooks, context, performance optimization, and testing.',
    category: 'Programming',
    skillLevel: 'Advanced',
    duration: '38 hours',
    rating: 4.8,
    students: 12400,
    price: 149,
    tags: ['React', 'Redux', 'Testing', 'Performance'],
    instructor: 'Maximilian Schwarzmüller'
  },
  {
    id: '6',
    title: 'Photography for Beginners',
    description: 'Learn camera basics, composition, lighting, and photo editing with practical exercises.',
    category: 'Photography',
    skillLevel: 'Beginner',
    duration: '25 hours',
    rating: 4.5,
    students: 19800,
    price: 59,
    tags: ['Camera Basics', 'Composition', 'Lightroom', 'Portrait'],
    instructor: 'Ted Forbes'
  },
  {
    id: '7',
    title: 'Business Strategy & Leadership',
    description: 'Develop strategic thinking and leadership skills for modern business challenges.',
    category: 'Business',
    skillLevel: 'Intermediate',
    duration: '35 hours',
    rating: 4.7,
    students: 15600,
    price: 99,
    tags: ['Strategy', 'Leadership', 'Management', 'Innovation'],
    instructor: 'Michael Porter'
  },
  {
    id: '8',
    title: 'Machine Learning A-Z',
    description: 'Complete hands-on machine learning course with Python and R programming.',
    category: 'Data Science',
    skillLevel: 'Advanced',
    duration: '45 hours',
    rating: 4.9,
    students: 28900,
    price: 159,
    tags: ['Machine Learning', 'Python', 'R', 'Deep Learning'],
    instructor: 'Kirill Eremenko'
  },
  {
    id: '9',
    title: 'Graphic Design Masterclass',
    description: 'Learn Adobe Creative Suite, typography, color theory, and brand design.',
    category: 'Design',
    skillLevel: 'Intermediate',
    duration: '40 hours',
    rating: 4.8,
    students: 22100,
    price: 89,
    tags: ['Photoshop', 'Illustrator', 'Typography', 'Branding'],
    instructor: 'Lindsay Marsh'
  },
  {
    id: '10',
    title: 'iOS App Development',
    description: 'Build iOS apps from scratch using Swift and Xcode with real-world projects.',
    category: 'Programming',
    skillLevel: 'Intermediate',
    duration: '52 hours',
    rating: 4.6,
    students: 16700,
    price: 119,
    tags: ['Swift', 'iOS', 'Xcode', 'Mobile Development'],
    instructor: 'Angela Yu'
  },
  {
    id: '11',
    title: 'Content Marketing Strategy',
    description: 'Create compelling content that drives engagement and converts visitors to customers.',
    category: 'Marketing',
    skillLevel: 'Intermediate',
    duration: '29 hours',
    rating: 4.7,
    students: 13400,
    price: 85,
    tags: ['Content Strategy', 'Copywriting', 'Analytics', 'Social Media'],
    instructor: 'Ann Handley'
  },
  {
    id: '12',
    title: 'JavaScript Algorithms & Data Structures',
    description: 'Master computer science fundamentals essential for technical interviews.',
    category: 'Programming',
    skillLevel: 'Advanced',
    duration: '48 hours',
    rating: 4.9,
    students: 9800,
    price: 139,
    tags: ['JavaScript', 'Algorithms', 'Data Structures', 'Interview Prep'],
    instructor: 'Colt Steele'
  }
];
