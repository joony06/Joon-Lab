/*
This example is licensed under a 
Creative Commons Attribution 4.0 International License.
https://creativecommons.org/licenses/by/4.0/

Please note that you have to mention 
The Center of Mobile Learning with Digital Technology
in the credits.
*/

const BOARDID = 'jxgbox'; // Insert your id here!

const board = JXG.JSXGraph.initBoard(BOARDID, {
    axis: true,
    grid: false,
    boundingbox: [-5, 1.2, 100, -1.2],
    showNavigation: true,
    showCopyright: false,
});

// Turtles
const S = board.create('turtle', [], {
    strokeColor: 'blue',
    strokeWidth: 3
});
const I = board.create('turtle', [], {
    strokeColor: 'red',
    strokeWidth: 3
});
const R = board.create('turtle', [], {
    strokeColor: 'green',
    strokeWidth: 3
});

// Sliders
const s = board.create('slider', [
    [0, -0.6],
    [30, -0.6],
    [0, 0.03, 1]
], {
    name: 's'
}); 
board.create('text', [10, -0.3, "initially infected population rate (on load: I(0)=1.27E-6)"]);
const beta = board.create('slider', [
    [0, -0.7],
    [30, -0.7],
    [0, 0.21, 1]
], {
    name: 'β'
});
board.create('text', [45, -0.7, "β: infection rate"]);
const gamma = board.create('slider', [
    [0, -0.8],
    [30, -0.8],
    [0, 0.07, 1]
], {
    name: 'γ'
});
board.create('text', [45, -0.8, "γ: recovery rate = 1/(days of infection)"]);

let t = 0; // global

board.create('text', [10, -0.2,
    function() {
        return "Day " + t + ": infected=" + (7900000 * I.Y()).toFixed(1) + " recovered=" + (7900000 * R.Y()).toFixed(1);
    }
]);

// Reset the turtles
const clearTurtle = function () {
  S.cs();
  I.cs();
  R.cs();

  S.hideTurtle();
  I.hideTurtle();
  R.hideTurtle();
};

// Start the animation
const run = function() {
    S.setPos(0, 1.0 - s.Value());
    R.setPos(0, 0);
    I.setPos(0, s.Value());

    delta = 1; // global
    t = 0; // global
    loop();
};

const turtleMove = function (turtle, dx, dy) {
    turtle.moveTo([dx + turtle.X(), dy + turtle.Y()]);
};

// Animation
const loop = function() {
    const dS = -beta.Value() * S.Y() * I.Y();
    const dR = gamma.Value() * I.Y();
    const dI = -(dS + dR);
    turtleMove(S, delta, dS);
    turtleMove(R, delta, dR);
    turtleMove(I, delta, dI);

    t += delta;
    if (t < 365.0) {
        active = setTimeout(loop, 10);
    }
};

// Stop animation
const stop = function() {
    if (active) clearTimeout(active);
    active = null;
};

// Continue
const goOn = function() {
    if (t > 0) {
        if (active === null) {
            active = setTimeout(loop, 10);
        }
    } else {
        run();
    }
};

clearTurtle();
run();