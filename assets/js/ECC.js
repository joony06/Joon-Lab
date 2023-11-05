const BOARDID = 'box'; // Insert your id here!

JXG.Options.axis.strokeColor = '#cccccc';
const board = JXG.JSXGraph.initBoard(BOARDID, {
    boundingbox: [-15, 10, 15, -10],
    axis: true
});

let a = board.create('slider', [[1, -3], [10, -3], [-10, 2.10, 10]], {name: 'a'});
let b = board.create('slider', [[1, -4], [10, -4], [-10, -9.52, 10]], {name: 'b'});

let c1 = board.create('functiongraph', [function(x) {
    return Math.sqrt(x * x * x + a.Value() * x + b.Value());
}], {strokeWidth: 3, strokeColor: 'black'});
let c2 = board.create('functiongraph', [function(x) {
    return -Math.sqrt(x * x * x + a.Value() * x + b.Value());
}], {strokeWidth: 3, strokeColor: 'black'});


let result = document.querySelector('#resultBox');


/* Object.defineProperty(a, "Value", {
    get() {
      return this.Value;
    },
    set(newValue) {
      this.Value = newValue;
      result.innerHTML = "<br> a = " + a.Value() + ", <br> b = " + b.Value();
    },
  }); */
