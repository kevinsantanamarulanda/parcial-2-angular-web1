import { Component, Input } from '@angular/core';
import { CvExperience } from '../../../interfaces/cv.interface';

@Component({
  selector: 'app-cv-experience',
  imports: [],
  templateUrl: './cv-experience.component.html',
  styleUrl: './cv-experience.component.css',
})
export class CvExperienceComponent {
  @Input() experience: CvExperience[] = [];
}