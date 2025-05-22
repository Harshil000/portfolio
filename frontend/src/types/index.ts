export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'mobile' | 'language' | 'other';
}

export interface Learning {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  current: boolean;
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'academic' | 'personal' | 'professional';
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}

export interface Hobby {
  name: string;
  description?: string;
  icon?: string;
}