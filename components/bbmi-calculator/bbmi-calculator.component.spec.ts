import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbmiCalculatorComponent } from './bbmi-calculator.component';

describe('BbmiCalculatorComponent', () => {
  let component: BbmiCalculatorComponent;
  let fixture: ComponentFixture<BbmiCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbmiCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbmiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
