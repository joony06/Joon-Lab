const BOARDID = 'box'; // Insert your id here!

JXG.Options.axis.strokeColor = '#cccccc';
const board = JXG.JSXGraph.initBoard(BOARDID, {
    boundingbox: [-20, 15, 20, -15],
    axis: true
});

let a = board.create('slider', [[5, -3.5], [14, -3.5], [-50, 0, 50]], {name: 'a'});
let b = board.create('slider', [[5, -5], [14, -5], [-50, 17, 50]], {name: 'b'});

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
