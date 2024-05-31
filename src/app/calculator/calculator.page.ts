import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})

export class CalculatorPage implements OnInit {
  userName: any;
  calculationHistory: string = '';
  userInput: string = '';

  constructor() { }

  ngOnInit() {
    this.userName = localStorage.getItem('UserGotLogIn');
  }

  addToInput(value: string) {
    this.userInput += value;
  }
  
  performOperation(operator: string) {
    this.userInput += operator;
  }

  clearInput() {
    this.userInput = '';
    this.calculationHistory = '';
  }

  calculate() {
    try {
      this.calculationHistory = this.userInput;
      this.userInput = eval(this.userInput);
    } catch (error) {
      this.userInput = 'Error';
    }
  }
}
