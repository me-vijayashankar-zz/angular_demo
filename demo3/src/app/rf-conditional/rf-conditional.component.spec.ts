import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfConditionalComponent } from './rf-conditional.component';

describe('RfConditionalComponent', () => {
  let component: RfConditionalComponent;
  let fixture: ComponentFixture<RfConditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfConditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
