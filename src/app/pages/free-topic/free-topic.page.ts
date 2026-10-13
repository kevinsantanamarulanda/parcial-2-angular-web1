import { Component } from '@angular/core';
import { FreeItem } from '../../interfaces/free-item.interface';
import { FREE_ITEMS } from '../../data/free-topic.data';

@Component({
  selector: 'app-free-topic-page',
  imports: [],
  templateUrl: './free-topic.page.html',
  styleUrl: './free-topic.page.css',
})
export class FreeTopicPage {
  items: FreeItem[] = FREE_ITEMS;
  stars: number[] = [1, 2, 3, 4, 5];
}