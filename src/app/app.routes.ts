import { Routes } from '@angular/router';
import { CvPage } from './pages/cv/cv.page';
import { LearningPage } from './pages/learning/learning.page';
import { FreeTopicPage } from './pages/free-topic/free-topic.page';

export const routes: Routes = [
  { path: 'cv', component: CvPage },
  { path: 'learning', component: LearningPage },
  { path: 'free-topic', component: FreeTopicPage },
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  { path: '**', redirectTo: 'cv' },
];