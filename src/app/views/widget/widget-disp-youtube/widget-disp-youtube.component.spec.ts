import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDispYoutubeComponent } from './widget-disp-youtube.component';

describe('WidgetDispYoutubeComponent', () => {
  let component: WidgetDispYoutubeComponent;
  let fixture: ComponentFixture<WidgetDispYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDispYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDispYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
