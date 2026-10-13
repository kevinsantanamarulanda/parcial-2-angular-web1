import { Component, Input } from '@angular/core';
import { CvSkill } from '../../../interfaces/cv.interface';

@Component({
  selector: 'app-cv-skills',
  imports: [],
  templateUrl: './cv-skills.component.html',
  styleUrl: './cv-skills.component.css',
})
export class CvSkillsComponent {
  @Input() skills: CvSkill[] = [];
}