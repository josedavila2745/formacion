import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diploma1Component } from './diploma1.component';

describe('Diploma1Component', () => {
  let component: Diploma1Component;
  let fixture: ComponentFixture<Diploma1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diploma1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diploma1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
