import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDevelopersComponent } from './non-developers.component';

describe('ForNonDevelopersComponent', () => {
  let component: NonDevelopersComponent;
  let fixture: ComponentFixture<NonDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
