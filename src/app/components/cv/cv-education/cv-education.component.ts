import { Component, Input } from '@angular/core';
import { CvEducation } from '../../../interfaces/cv.interface';

@Component({
  selector: 'app-cv-education',
  imports: [],
  templateUrl: './cv-education.component.html',
  styleUrl: './cv-education.component.css',
})
export class CvEducationComponent {
  @Input() education: CvEducation[] = [];
}