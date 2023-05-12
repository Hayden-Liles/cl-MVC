import { TestController } from './Controllers/TestController.js'

class App {
  testController = new TestController();
}

window["app"] = new App();
