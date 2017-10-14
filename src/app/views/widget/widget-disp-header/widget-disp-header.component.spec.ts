import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDispHeaderComponent } from './widget-disp-header.component';

describe('WidgetDispHeaderComponent', () => {
  let component: WidgetDispHeaderComponent;
  let fixture: ComponentFixture<WidgetDispHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDispHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDispHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
