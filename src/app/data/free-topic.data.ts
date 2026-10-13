export type TopicStatus = 'Completado' | 'En progreso' | 'Pendiente';
export type Cut = 'Corte I' | 'Corte II' | 'Corte III';

export interface LearningTopic {
  id: number;
  title: string;
  description: string;
  icon: string;
  cut: Cut;
  technologies: string[];
  skills: string[];
  projects: string[];
  status: TopicStatus;
}