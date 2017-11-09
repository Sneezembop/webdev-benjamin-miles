import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDispHtmlComponent } from './widget-disp-html.component';

describe('WidgetDispHtmlComponent', () => {
  let component: WidgetDispHtmlComponent;
  let fixture: ComponentFixture<WidgetDispHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDispHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDispHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
