import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDispImageComponent } from './widget-disp-image.component';

describe('WidgetDispImageComponent', () => {
  let component: WidgetDispImageComponent;
  let fixture: ComponentFixture<WidgetDispImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDispImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDispImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
