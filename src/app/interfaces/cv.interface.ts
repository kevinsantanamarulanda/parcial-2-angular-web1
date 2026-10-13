export interface CvProfile {
  fullName: string;
  title: string;
  summary: string;
  photo: string;
}

export interface CvContact {
  email: string;
  phone: string;
  city: string;
  github: string;
}

export interface CvEducation {
  institution: string;
  degree: string;
  period: string;
}

export interface CvSkill {
  name: string;
  level: number; // de 0 a 100
}

export interface CvExperience {
  title: string;
  place: string;
  period: string;
  description: string;
}