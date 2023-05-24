import { CalculatorController } from './Controllers/CalculatorController.js'


class App {
  calculatorController = new CalculatorController();
}

window["app"] = new App();
