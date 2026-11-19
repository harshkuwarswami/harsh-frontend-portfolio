export interface PersonalInfo {
  fullName: string;
  firstName: string;
  monogram: string;
  role: string;
  careerStage: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  headline: string;
  animatedRoles: string[];
  heroDescription: string;
  aboutSummary: string;
  academicSummary: string;
  profileImage: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    tag?: string;
    icon?: string;
    description: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string | null;
  status: 'Live Demo' | 'Deployment Reported' | 'Not Deployed';
  statusNote?: string;
  isRepoPrivate?: boolean;
  repoNote?: string;
  featured?: boolean;
  accentColor?: string;
  category: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  duration: string;
  summary: string;
  keyPoints: string[];
  certificateAvailable?: boolean;
  linkedinUrl: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  university: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  status: string;
  note?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  expiryDate: string;
  isVerified: boolean;
  credentialNote?: string;
}
