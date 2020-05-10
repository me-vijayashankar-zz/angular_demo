import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RForm2Component } from './r-form2.component';

describe('RForm2Component', () => {
  let component: RForm2Component;
  let fixture: ComponentFixture<RForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
