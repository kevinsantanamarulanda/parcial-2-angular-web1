import { Component } from '@angular/core';
import { LearningTopic } from '../../interfaces/learning-topic.interface';
import { LEARNING_TOPICS } from '../../data/learning.data';

@Component({
  selector: 'app-learning-page',
  imports: [],
  templateUrl: './learning.page.html',
  styleUrl: './learning.page.css',
})
export class LearningPage {
  topics: LearningTopic[] = LEARNING_TOPICS;
}