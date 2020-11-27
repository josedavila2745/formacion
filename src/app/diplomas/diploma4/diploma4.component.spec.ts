import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diploma4Component } from './diploma4.component';

describe('Diploma4Component', () => {
  let component: Diploma4Component;
  let fixture: ComponentFixture<Diploma4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diploma4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diploma4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
