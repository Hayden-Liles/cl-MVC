import { appState } from "../AppState.js"
import { Calculator } from "../Models/Calculator.js"
import { logger } from "../Utils/Logger.js"
import { saveState } from "../Utils/Store.js"

function save(){
  saveState('history', appState.history)
}

class CalculatorServices {
  constructor(){}

  getHistory(){
    logger.log(appState.history)
    return appState.history
  }

  addHistory(newHistory){
    appState.history = [...appState.history,  newHistory]
    save()
  }

  getCalculator(){
    return Calculator.CalculatorTemplate
  }

  
}

export const calculatorServices = new CalculatorServices()

