import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.scss']
})
export class CalculatorViewComponent implements OnInit {

  public operator: any;
  public activeString = '0';
  public setToZero = true;
  public activeOperatorinUse = false;
  public activeOperator = '';
  public num1 = 0;
  public num2 = 0;
  constructor() { }

  ngOnInit() {
  }

  addNumber(num1, num2) {
    return num1 + num2;
  }


  subtractNumber (num1, num2) {
    return num1 - num2;
  }


  multiplyNumber (num1, num2) {
    return num1 * num2;
  }


  divideNumber (num1, num2) {
    return num1 / num2;
  }

  createStringValue(num, type) {
      if (this.setToZero) {
        this.activeString = num;
        this.setToZero = false;
      } else {
        this.activeString += num.toString();
      }
  }

  handleOperator(operator) {
    if (this.activeOperatorinUse) {
      this.calculateResult();
    }
    switch (operator) {
      case 'add':
        this.activeOperator = '+';
        if (!this.activeOperatorinUse) {
          this.num1 = parseFloat(this.activeString);
          // this.activeString = '0';
          this.setToZero = true;
          this.activeOperatorinUse = true;
        } else {
          this.activeString = this.addNumber(this.num1, this.activeString).toString();
          this.setToZero = true;
          this.num1 = 0;
          this.activeOperatorinUse = false;
          this.activeOperator = '';
        }
        break;
      case 'subtract':
        this.activeOperator = '-';
        if (!this.activeOperatorinUse) {
          this.num1 = parseFloat(this.activeString);
          // this.activeString = '0';
          this.setToZero = true;
          this.activeOperatorinUse = true;
        } else {
          this.activeString = this.subtractNumber(this.num1, this.activeString).toString();
          this.setToZero = true;
          this.num1 = 0;
          this.activeOperatorinUse = false;
          this.activeOperator = '';
        }
        break;
    case 'multiply':
      this.activeOperator = '*';
        if (!this.activeOperatorinUse) {
          this.num1 = parseFloat(this.activeString);
          // this.activeString = '0';
          this.setToZero = true;
          this.activeOperatorinUse = true;
        } else {
          this.activeString = this.multiplyNumber(this.num1, this.activeString).toString();
          this.setToZero = true;
          this.num1 = 0;
          this.activeOperatorinUse = false;
          this.activeOperator = '';
        }
        break;
    case 'divide':
      this.activeOperator = '/';
        if (!this.activeOperatorinUse) {
          this.num1 = parseFloat(this.activeString);
          // this.activeString = '0';
          this.setToZero = true;
          this.activeOperatorinUse = true;
        } else {
          this.activeString = this.divideNumber(this.num1, this.activeString).toString();
          this.setToZero = true;
          this.num1 = 0;
          this.activeOperatorinUse = false;
          this.activeOperator = '';
        }
        break;
    }

  }

  calculateResult() {
    this.setToZero = true;
    if (!this.activeOperator) {
      this.activeString = '0';
    } else {
      this.activeOperatorinUse = false;

      switch (this.activeOperator) {
        case '+':
          this.activeString = this.addNumber(this.num1, parseFloat(this.activeString)).toString();
          break;
        case '-':
          this.activeString = this.subtractNumber(this.num1, parseFloat(this.activeString)).toString();
          break;
        case '*':
          this.activeString = this.multiplyNumber(this.num1, parseFloat(this.activeString)).toString();
          break;
        case '/':
          this.activeString = this.divideNumber(this.num1, parseFloat(this.activeString)).toString();
          break;
      }
    }
  }

  handleAc() {
    this.activeString = '0';
    this.activeOperator = '';
    this.setToZero = true;
  }

  handlePercent() {
    this.activeString = (parseFloat(this.activeString) / 100).toString();
  }
  reverseNumber() {
    this.activeString = (-(parseFloat(this.activeString))).toString();
  }
}
