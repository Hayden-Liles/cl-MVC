import { logger } from "../Utils/Logger.js";

export class ExampleController {
  constructor() {
    this.elements = {
      currentNumber: document.querySelector("#currentNumber"),
      previousNumber: document.querySelector("#previousNumber"),
      plusSymbol: document.querySelector("#plusSymbol"),
      minusSymbol: document.querySelector("#minusSymbol"),
      divideSymbol: document.querySelector("#divideSymbol"),
      multiplySymbol: document.querySelector("#multiplySymbol"),
    };
    this.previousNumber = "";
    this.currentNumber = "";
    this.operation = null;
  }

  InputCall(input) {
    const operations = {
      '+': () => this.operateNumbers('+'),
      '-': () => this.operateNumbers('-'),
      '÷': () => this.operateNumbers('÷'),
      'x': () => this.operateNumbers('x'),
      '=': () => this.equalFunction(),
      'clearAll': () => this.clearAll(),
      'backspace': () => this.backspace(),
      'plusMinus': () => this.plusMinus(),
      '.': () => this.addDecimal(),
    };

    if (operations[input]) {
      operations[input]();
    } else if (!isNaN(input)) {
      this.currentNumber += input;
      this.drawCurNumber();
    }
  }

  drawCurNumber() {
    this.elements.currentNumber.innerText = this.currentNumber || "0";
  }

  drawPrevNumber() {
    this.elements.previousNumber.innerText = this.previousNumber;
  }

  clearNumber() {
    this.elements.currentNumber.innerText = "0";
  }

  operateNumbers(operation) {
    const symbols = {
      '+': this.elements.plusSymbol,
      '-': this.elements.minusSymbol,
      '÷': this.elements.divideSymbol,
      'x': this.elements.multiplySymbol,
    };
    
    if(this.operation) {
      symbols[this.operation].classList.add('text-outline');
    }
    
    symbols[operation].classList.remove('text-outline');

    if(this.currentNumber !== '' && this.previousNumber !== '' && this.operation) {
      switch(this.operation){
        case '+':
          this.previousNumber = (Number(this.previousNumber) + Number(this.currentNumber));
          break;
        case '-':
          this.previousNumber = (Number(this.previousNumber) - Number(this.currentNumber));
          break;
        case '÷':
          this.previousNumber = (Number(this.previousNumber) / Number(this.currentNumber));
          break;
        case 'x':
          this.previousNumber = (Number(this.previousNumber) * Number(this.currentNumber));
          break;
      }
      this.currentNumber = '';
    } else if(this.previousNumber === '') {
      this.previousNumber = this.currentNumber;
      this.currentNumber = '';
    }
    
    this.drawCurNumber();
    this.drawPrevNumber();
    this.operation = operation;
}

  equalFunction() {
    if (this.operation) {
      this.operateNumbers(this.operation);
      const symbols = {
        '+': this.elements.plusSymbol,
        '-': this.elements.minusSymbol,
        '÷': this.elements.divideSymbol,
        'x': this.elements.multiplySymbol,
      };
      symbols[this.operation].classList.add('text-outline');
      this.operation = null;
    }
  }

  clearAll() {
    this.previousNumber = "";
    this.currentNumber = "";
    this.elements['plusSymbol'].classList.add('text-outline');
    this.elements['minusSymbol'].classList.add('text-outline');
    this.elements['divideSymbol'].classList.add('text-outline');
    this.elements['multiplySymbol'].classList.add('text-outline');
    this.operation = null;
    this.elements.previousNumber.innerText = '0';
    this.clearNumber();
  }

  backspace() {
    if (this.currentNumber.length > 0) {
      this.currentNumber = this.currentNumber.slice(0, -1);
      if(this.currentNumber == '-'){
        this.currentNumber = 0
      }
      this.drawCurNumber();
    }
  }

  plusMinus() {
    const check = this.currentNumber.charAt(0);
    if (check === "") {
      this.elements.currentNumber.innerText = "-0";
      this.currentNumber += "-";
    } else if (check === "-") {
      this.currentNumber = this.currentNumber.slice(1);
      this.drawCurNumber();
    } else {
      this.currentNumber = `-${this.currentNumber}`;
      this.drawCurNumber();
    }
  }

  addDecimal() {
    if (!this.currentNumber.includes(".")) {
      this.currentNumber += '.';
      this.drawCurNumber();
    }
  }
}
