import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeHeaderComponent } from './landscape-header.component';

describe('LandscapeHeaderComponent', () => {
  let component: LandscapeHeaderComponent;
  let fixture: ComponentFixture<LandscapeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandscapeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
