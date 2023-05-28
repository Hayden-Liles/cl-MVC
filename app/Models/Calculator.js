export class Calculator {
  static CalculatorBodyTemplate = 
    `
          <!-- NOTE CONTAINER FOR CALCULATOR -->
          <div class="col-10 col-md-4 m-auto" id='mainCalculatorContainer'>
            <!-- AREA 1 -->
            <div class="row border border-secondary border-2" id="cArea1">
              <div class="col-7 ps-3 py-3 pe-0">
                <p class="fs-2 fw-bold" id="currentNumber">0</p>
              </div>
              <div class="col-4 py-3 d-flex align-items-end text-end justify-content-end text-end">
                <p class="fs-4 text-tertiary fw-bold" id="previousNumber">0</p>
              </div>
              <div class="col-1 px-1 d-flex justify-content-end">
                <div class="my-auto pe-1 fs-5 fw-bold">
                  <p class="py-1 text-outline" id="plusSymbol">+</p>
                  <p class="py-1 text-outline" id="minusSymbol">-</p>
                  <p class="py-1 text-outline" id="divideSymbol">÷</p>
                  <p class="py-1 text-outline" id="multiplySymbol">x</p>
                </div>
              </div>
            </div>
            <!-- AREA 2 -->
            <div class="row">
              <!-- TODO ADD HISTORY -->
              <div onclick="app.calculatorController.InputCall('history')" class="col-3 selectable selectable border-start border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><i class="mdi mdi-history cfont"></i></div>
              <div onclick="app.calculatorController.InputCall('clearAll')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>CE</p></div>
              <div onclick="app.calculatorController.InputCall('backspace')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><i class="mdi mdi-backspace cfont text-center"></i></div>
              <div onclick="app.calculatorController.InputCall('+')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>+</p></div>
            </div>
            <!-- AREA 3 -->
            <div class="row">
              <div onclick="app.calculatorController.InputCall('1')" class="col-3 selectable border-start border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>1</p></div>
              <div onclick="app.calculatorController.InputCall('2')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>2</p></div>
              <div onclick="app.calculatorController.InputCall('3')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>3</p></div>
              <div onclick="app.calculatorController.InputCall('-')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>-</p></div>
            </div>
            <!-- AREA 4 -->
            <div class="row">
              <div onclick="app.calculatorController.InputCall('4')" class="col-3 selectable border-start border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>4</p></div>
              <div onclick="app.calculatorController.InputCall('5')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>5</p></div>
              <div onclick="app.calculatorController.InputCall('6')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>6</p></div>
              <div onclick="app.calculatorController.InputCall('÷')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>÷</p></div>
            </div>
            <!-- AREA 5 -->
            <div class="row">
              <div onclick="app.calculatorController.InputCall('7')" class="col-3 selectable border-start border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>7</p></div>
              <div onclick="app.calculatorController.InputCall('8')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>8</p></div>
              <div onclick="app.calculatorController.InputCall('9')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>9</p></div>
              <div onclick="app.calculatorController.InputCall('x')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>X</p></div>
            </div>
            <!-- AREA 6 -->
            <div class="row">
              <div onclick="app.calculatorController.InputCall('plusMinus')" class="col-3 selectable border-start border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><i class='mdi mdi-plus-minus-variant cfont text-center'></i></div>
              <div onclick="app.calculatorController.InputCall('0')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>0</p></div>
              <div onclick="app.calculatorController.InputCall('.')" class="col-3 selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center'>.</p></div>
              <div onclick="app.calculatorController.InputCall('=')" class="col-3 bg-tertiary selectable border-end border-bottom border-secondary border-2 square d-flex align-items-center justify-content-center"><p class='cfont text-center fw-bold'>=</p></div>
            </div>
          </div>
    `;

  static CalculatorHistoryContainer =
  `
  <div class="col-4">
    <div class="row" id="historyContainer">
    </div>
  </div>
  `
}
