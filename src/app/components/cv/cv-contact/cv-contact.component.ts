import { Component, Input } from '@angular/core';
import { CvContact } from '../../../interfaces/cv.interface';

@Component({
  selector: 'app-cv-contact',
  imports: [],
  templateUrl: './cv-contact.component.html',
  styleUrl: './cv-contact.component.css',
})
export class CvContactComponent {
  @Input() contact!: CvContact;
}