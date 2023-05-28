export class Equation {
  constructor(data) {
    this.equation = data.equation;
    this.total = data.total;
  }

  get equationTemplate(){
    return /*html*/`
    <div class="col-12 text-end">
    <div onclick="app.calculatorController.selectHistory('${this.total}')" class="border border-outline border-2 rounded-3 px-3 py-1 selectable">
      <p class="fs-5 hisText">${this.equation} =</p>
      <p class="fs-3 text-tertiary hisText">${this.total}</p>
    </div>
  </div>
  `
  }
}
