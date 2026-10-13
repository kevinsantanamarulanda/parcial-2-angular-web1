import { Component } from '@angular/core';
import { CvProfileComponent } from '../../components/cv/cv-profile/cv-profile.component';
import { CvContactComponent } from '../../components/cv/cv-contact/cv-contact.component';
import { CvEducationComponent } from '../../components/cv/cv-education/cv-education.component';
import { CvSkillsComponent } from '../../components/cv/cv-skills/cv-skills.component';
import { CvExperienceComponent } from '../../components/cv/cv-experience/cv-experience.component';
import {
  CvContact,
  CvEducation,
  CvExperience,
  CvProfile,
  CvSkill,
} from '../../interfaces/cv.interface';

@Component({
  selector: 'app-cv-page',
  imports: [
    CvProfileComponent,
    CvContactComponent,
    CvEducationComponent,
    CvSkillsComponent,
    CvExperienceComponent,
  ],
  templateUrl: './cv.page.html',
  styleUrl: './cv.page.css',
})
export class CvPage {
  profile: CvProfile = {
    fullName: 'Kevin Santana Marulanda',
    title: 'Estudiante de Ingeniería de Sistemas',
    summary:
      'Soy una persona motivada, responsable y con ganas de aprender más cada día en el desarrollo web. Me interesa crear interfaces limpias y funcionales, y estoy en constante crecimiento en tecnologías como HTML, CSS, TypeScript y Angular.',
    photo: 'https://placehold.co/200x200',
  };

  contact: CvContact = {
    email: 'kevin.santana01@uceva.edu.co',
    phone: '3218933153',
    city: 'Tuluá',
    github: 'https://github.com/kevinsantanamarulanda',
  };

  education: CvEducation[] = [
    {
      institution: 'Unidad Central del Valle del Cauca',
      degree: 'Ingeniería de Sistemas',
      period: '2024 - Actualidad',
    },
  ];

  skills: CvSkill[] = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 88 },
    { name: 'TypeScript', level: 75 },
    { name: 'Angular', level: 60 },
    { name: 'Trabajo en equipo', level: 80 },
    { name: 'Aprendizaje continuo', level: 95 },
  ];

  experience: CvExperience[] = [
    {
      title: 'Desarrollador web en formación',
      place: 'Autónomo / Proyectos personales',
      period: '2025 - Actualidad',
      description:
        'He trabajado en proyectos prácticos de desarrollo web centrados en HTML, CSS y TypeScript, con gran interés en seguir aprendiendo y profundizando en Angular y buenas prácticas de programación.',
    },
  ];
}