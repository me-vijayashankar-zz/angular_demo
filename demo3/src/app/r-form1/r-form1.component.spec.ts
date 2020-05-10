import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RForm1Component } from './r-form1.component';

describe('RForm1Component', () => {
  let component: RForm1Component;
  let fixture: ComponentFixture<RForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
