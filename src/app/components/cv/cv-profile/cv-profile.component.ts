import { Component, Input } from '@angular/core';
import { CvProfile } from '../../../interfaces/cv.interface';

@Component({
  selector: 'app-cv-profile',
  imports: [],
  templateUrl: './cv-profile.component.html',
  styleUrl: './cv-profile.component.css',
})
export class CvProfileComponent {
  @Input() profile!: CvProfile;
}