import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diploma3Component } from './diploma3.component';

describe('Diploma3Component', () => {
  let component: Diploma3Component;
  let fixture: ComponentFixture<Diploma3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diploma3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diploma3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
