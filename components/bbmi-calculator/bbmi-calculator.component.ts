import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bbmi-calculator.component.html',
  styleUrls: ['./bbmi-calculator.component.css']
})
export class BbmiCalculatorComponent implements OnInit {
  height: number = 0;
  weight: number = 0;
  bmi: number | null = null;
  bmiCategory: string = '';

  constructor() { }

  ngOnInit(): void {}

  calculateBMI(): void {
    if (this.height > 0 && this.weight > 0) {
      const heightInMeters = this.height / 100;
      this.bmi = this.weight / (heightInMeters * heightInMeters);
      this.setBMICategory(this.bmi);
    } else {
      this.bmi = null;
      this.bmiCategory = '';
    }
  }

  setBMICategory(bmi: number): void {
    if (bmi < 18.5) {
      this.bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      this.bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      this.bmiCategory = 'Overweight';
    } else if (bmi >= 30) {
      this.bmiCategory = 'Obesity';
    }
  }
}
