import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTopicPage } from './free-topic.page';

describe('FreeTopicPage', () => {
  let component: FreeTopicPage;
  let fixture: ComponentFixture<FreeTopicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeTopicPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeTopicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
