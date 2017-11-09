import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDispTextComponent } from './widget-disp-text.component';

describe('WidgetDispTextComponent', () => {
  let component: WidgetDispTextComponent;
  let fixture: ComponentFixture<WidgetDispTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDispTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDispTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
