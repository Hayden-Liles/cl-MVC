import { logger } from "../Utils/Logger.js";
import { calculatorServices } from '../Services/CalculatorServices.js'

function _drawCalculator(){
  document.getElementById('calculatorContainer').innerHTML = calculatorServices.getCalculator()
}
function _drawHistoryContainer(){
  document.getElementById('calculatorContainer').innerHTML += calculatorServices.getHistoryContainer()
}

export class CalculatorController {
  constructor() {
    _drawCalculator()
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
    this.historyToggle = false
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
      'history': () => this.drawHistory(),
    };

    if (operations[input]) {
      operations[input]();
    } else if (!isNaN(input)) {
      this.currentNumber += input;
      this.drawCurNumber();
    }
  }

  drawHistory(){
    if(this.historyToggle){
      _drawCalculator()
      this.historyToggle = false
      this.elements = {
        currentNumber: document.querySelector("#currentNumber"),
        previousNumber: document.querySelector("#previousNumber"),
        plusSymbol: document.querySelector("#plusSymbol"),
        minusSymbol: document.querySelector("#minusSymbol"),
        divideSymbol: document.querySelector("#divideSymbol"),
        multiplySymbol: document.querySelector("#multiplySymbol"),
      };
    }else{
      _drawHistoryContainer()
      document.querySelector('#mainCalculatorContainer').classList.remove('m-auto')
      document.querySelector('#calculatorContainer').classList.add('justify-content-around')
      document.querySelector('#historyContainer').innerHTML = calculatorServices.getHistoryTemplate()
      this.historyToggle = true
      this.elements = {
        currentNumber: document.querySelector("#currentNumber"),
        previousNumber: document.querySelector("#previousNumber"),
        plusSymbol: document.querySelector("#plusSymbol"),
        minusSymbol: document.querySelector("#minusSymbol"),
        divideSymbol: document.querySelector("#divideSymbol"),
        multiplySymbol: document.querySelector("#multiplySymbol"),
      };
    }
  }

  redrawHistory(){
      document.querySelector('#historyContainer').innerHTML = calculatorServices.getHistoryTemplate()
      this.elements = {
        currentNumber: document.querySelector("#currentNumber"),
        previousNumber: document.querySelector("#previousNumber"),
        plusSymbol: document.querySelector("#plusSymbol"),
        minusSymbol: document.querySelector("#minusSymbol"),
        divideSymbol: document.querySelector("#divideSymbol"),
        multiplySymbol: document.querySelector("#multiplySymbol"),
      };
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

    if(this.currentNumber != '' && this.previousNumber != '' && this.operation) {
      switch(this.operation){
        case '+':
          calculatorServices.addHistory({equation:`${this.previousNumber} + ${this.currentNumber}`, total:`${(Number(this.previousNumber) + Number(this.currentNumber))}` })
          if(this.historyToggle){
            this.redrawHistory()
          }
          this.previousNumber = (Number(this.previousNumber) + Number(this.currentNumber));
          break;
        case '-':
          calculatorServices.addHistory({equation:`${this.previousNumber} - ${this.currentNumber}`, total:`${(Number(this.previousNumber) - Number(this.currentNumber))}` })
          if(this.historyToggle){
            this.redrawHistory()
          }
          this.previousNumber = (Number(this.previousNumber) - Number(this.currentNumber));
          break;
        case '÷':
          calculatorServices.addHistory({equation:`${this.previousNumber} / ${this.currentNumber}`, total:`${(Number(this.previousNumber) / Number(this.currentNumber))}` })
          if(this.historyToggle){
            this.redrawHistory()
          }
          this.previousNumber = (Number(this.previousNumber) / Number(this.currentNumber));
          break;
        case 'x':
          calculatorServices.addHistory({equation:`${this.previousNumber} * ${this.currentNumber}`, total:`${(Number(this.previousNumber) * Number(this.currentNumber))}` })
          if(this.historyToggle){
            this.redrawHistory()
          }
          this.previousNumber = (Number(this.previousNumber) * Number(this.currentNumber));
          break;
      }
      this.currentNumber = '';
    } else if(this.previousNumber == '') {
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
    if (check == "") {
      this.elements.currentNumber.innerText = "-0";
      this.currentNumber += "-";
    } else if (check == "-") {
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

  selectHistory(total){
    this.previousNumber = `${total}`
    logger.log(this.previousNumber)
    this.currentNumber = ''
    this.drawCurNumber()
    this.drawPrevNumber()
  }
}
