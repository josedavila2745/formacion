import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diploma2Component } from './diploma2.component';

describe('Diploma2Component', () => {
  let component: Diploma2Component;
  let fixture: ComponentFixture<Diploma2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diploma2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diploma2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
