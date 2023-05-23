import { ExampleController } from './Controllers/ExampleController.js'


class App {
  exampleController = new ExampleController();
}

window["app"] = new App();
