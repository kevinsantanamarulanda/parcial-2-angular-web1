import { LearningTopic } from '../interfaces/learning-topic.interface';

export const LEARNING_TOPICS: LearningTopic[] = [
  {
    id: 1,
    title: 'HTML',
    description:
      'Estructura de páginas web, texto, listas, enlaces, imágenes, tablas, formularios, HTML semántico y multimedia.',
    icon: 'filetype-html',
    cut: 'Corte I',
    technologies: ['HTML5'],
    skills: ['Etiquetas semánticas', 'Formularios', 'Tablas'],
    projects: ['Dashboard-Courses', 'Monitoring-Center'],
    status: 'Completado',
  },
  {
    id: 2,
    title: 'CSS',
    description: 'Estilos y diseño de las páginas: colores, tipografía y maquetación.',
    icon: 'filetype-css',
    cut: 'Corte I',
    technologies: ['CSS3'],
    skills: ['Selectores', 'Layout', 'Diseño de interfaces'],
    projects: ['Dashboard-Courses', 'Monitoring-Center'],
    status: 'Completado',
  },
  {
    id: 3,
    title: 'JavaScript',
    description:
      'Variables, operadores, condicionales, ciclos, funciones, arrays, objetos y desestructuración.',
    icon: 'filetype-js',
    cut: 'Corte II',
    technologies: ['JavaScript ES6'],
    skills: ['Arrays y métodos', 'Objetos', 'Funciones'],
    projects: ['01-CalculatorApp'],
    status: 'Completado',
  },
  {
    id: 4,
    title: 'TypeScript',
    description:
      'Tipado estático: interfaces, union types, enums, clases, herencia y genéricos.',
    icon: 'filetype-tsx',
    cut: 'Corte II',
    technologies: ['TypeScript', 'Vite'],
    skills: ['Interfaces', 'Generics', 'Clases'],
    projects: ['02-AuthApp', '03-DynamicApp'],
    status: 'Completado',
  },
  {
    id: 5,
    title: 'Angular',
    description: 'Componentes, enrutamiento y renderizado dinámico con @for.',
    icon: 'diagram-3',
    cut: 'Corte III',
    technologies: ['Angular', 'Bootstrap 5', 'Git y GitHub'],
    skills: ['Router', 'Componentes', '@for y @if'],
    projects: ['Parcial 2'],
    status: 'En progreso',
  },
];