export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
};

export type ProjectItem = {
  id: string;
  name: string;
  description: string;
  outcomes: string[];
  technologies: string[];
  link?: string;
};

export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  period: string;
  location: string;
  highlights: string[];
};
