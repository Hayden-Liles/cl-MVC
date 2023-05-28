import { appState } from "../AppState.js"
import { Calculator } from "../Models/Calculator.js"
import { logger } from "../Utils/Logger.js"
import { saveState } from "../Utils/Store.js"
import { Equation } from "../Models/Equation.js"

function save(){
  saveState('history', appState.history)
}

class CalculatorServices {
  constructor(){}

  addHistory(newHistory){
    
    appState.history = [...appState.history, new Equation(newHistory)]
    if(appState.history.length > 10){
      appState.history.splice(0, 1)
    }
    save()
  }

  getCalculator(){
    return Calculator.CalculatorBodyTemplate
  }
  getHistoryContainer(){
    return Calculator.CalculatorHistoryContainer
  }
  getHistoryTemplate(){
    let template = ''
    const historyCopy = [...appState.history]
    historyCopy.reverse().forEach(e => {
      template += e.equationTemplate
    });
    return template
  }

  
}

export const calculatorServices = new CalculatorServices()

