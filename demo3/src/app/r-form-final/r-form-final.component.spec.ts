import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFormFinalComponent } from './r-form-final.component';

describe('RFormFinalComponent', () => {
  let component: RFormFinalComponent;
  let fixture: ComponentFixture<RFormFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFormFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFormFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
