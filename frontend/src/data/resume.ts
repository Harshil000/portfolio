import { Skill, Learning, Project, Education, Achievement, Hobby } from '../types';

export const personalInfo = {
  name: 'Harshil Upadhyay',
  title: 'Full Stack Developer',
  email: 'harshilu01@gmail.com',
  phone: '+91 7778965050',
  github: 'https://github.com/Harshil000',
  linkedin: 'https://www.linkedin.com/in/harshil-upadhyay-4285b2315/',
  location: 'Gujarat, India',
  intro: 'Passionate and detail-oriented full stack developer with a focus on the MERN stack and mobile development. Currently pursuing Computer Science and Engineering at Adani University.',
  about: 'I am a dedicated Computer Science student with a strong foundation in both frontend and backend technologies. My journey in tech started with C programming and has expanded to include JavaScript, Python, and various modern frameworks. I enjoy building interactive web applications and mobile experiences, with a particular interest in AI and machine learning applications.'
};

export const skills: Skill[] = [
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'Nodejs', level: 4, category: 'backend' },
  { name: 'Express', level: 4, category: 'backend' },
  { name: 'MongoDB', level: 4, category: 'backend' },
  { name: 'ReactNative', level: 2, category: 'mobile' },
  { name: 'JavaScript', level: 5, category: 'language' },
  { name: 'TypeScript', level: 3, category: 'language' },
  { name: 'Python', level: 4, category: 'language' },
  { name: 'Django', level: 3, category: 'backend' },
  { name: 'NumPy', level: 3, category: 'other' },
  { name: 'TailwindCSS', level: 4, category: 'frontend' },
  { name: 'Auth0', level: 3, category: 'other' },
  { name: 'C', level: 4, category: 'language' },
];

export const currentLearning: Learning[] = [
  {
    title: 'Advanced React Patterns',
    description: 'Studying advanced component patterns and state management techniques in React',
    startDate: '2023-09-01',
    current: true,
  },
  {
    title: 'Machine Learning with Python',
    description: 'Exploring machine learning algorithms and their applications using Python and TensorFlow',
    startDate: '2023-10-15',
    current: true,
  }
];

export const learnedSkills: Learning[] = [
  {
    title: 'MERN Stack Development',
    description: 'Completed comprehensive training in MongoDB, Express, React, and Node.js',
    startDate: '2022-01-01',
    endDate: '2022-06-30',
    current: false,
  },
  {
    title: 'React Native Mobile Development',
    description: 'Learned cross-platform mobile development with React Native',
    startDate: '2022-07-01',
    endDate: '2022-12-31',
    current: false,
  },
];

export const projects: Project[] = [
  {
    title: 'AI Based Crop Disease Detection',
    description: 'Developed an application that uses machine learning to identify plant diseases from images, helping farmers detect problems early and implement appropriate interventions.',
    features: [
      'Image processing for disease detection',
      'Disease classification algorithm',
      'Treatment recommendations',
      'User-friendly interface'
    ],
    technologies: ['Python', 'TensorFlow', 'NumPy', 'OpenCV', 'React'],
    category: 'academic',
  },
  {
    title: 'Balloon POP Game',
    description: 'Created an engaging browser-based game where players pop balloons to score points within a time limit.',
    features: [
      'Real-time scoring system',
      'Timer-based gameplay',
      'Dynamic difficulty levels',
      'Responsive design'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
    githubUrl: 'https://github.com/harshilupadhyay/balloon-pop',
    liveUrl: 'https://balloon-pop-game.example.com',
    category: 'personal',
  }
];

export const education: Education[] = [
  {
    institution: 'Adani University',
    degree: 'Bachelor of Technology',
    fieldOfStudy: 'Computer Science and Engineering',
    startDate: '2024',
    endDate: '2028',
    location: 'Ahmedabad, Gujarat',
    description: 'Focusing on software development, algorithms, and data structures. Participating in coding competitions and technical clubs.',
  },
  {
    institution: 'Tripada Day School',
    degree: 'Higher Secondary Education',
    fieldOfStudy: 'Science (PCM)',
    startDate: '2019',
    endDate: '2024',
    location: 'Gujarat',
  }
];

export const achievements: Achievement[] = [
  {
    title: 'Runner-up in CodeCharades',
    description: 'Secured second place in a competitive coding competition hosted by the university',
    date: '2022',
  },
  {
    title: 'Karate Awards',
    description: 'Earned brown belt in Karate and won multiple medals in state-level competitions',
    date: '2018-2020',
  },
  {
    title: 'Olympiad Awards',
    description: 'Received recognition in various national-level Science and Mathematics Olympiads',
    date: '2017-2019',
  }
];

export const hobbies: Hobby[] = [
  {
    name: 'Music',
    description: 'Enjoy listening to various genres of music during leisure time',
    icon: 'Music',
  },
  {
    name: 'Casio',
    description: 'Playing keyboard/Casio as a recreational activity',
    icon: 'Piano',
  },
  {
    name: 'Coding',
    description: 'Working on personal projects and solving programming challenges',
    icon: 'Code2',
  }
];