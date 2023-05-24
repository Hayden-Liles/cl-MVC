import { EventEmitter } from "./Utils/EventEmitter.js"
import { checkProp } from "./Utils/CheckProp.js"
import { loadState } from "./Utils/Store.js"
import { Equation } from "./Models/Equation.js"

class AppState extends EventEmitter {
  history = loadState('history', [Equation])
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    checkProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    checkProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
