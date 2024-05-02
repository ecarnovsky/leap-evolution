document.getElementById('start-pause-btn').addEventListener('click', togglePause);
var canvas = document.querySelector('canvas');
canvas.height = 730;
canvas.width = 730;
var ctx = canvas.getContext('2d');
var paused = true;
var frogs = [];
var food = [];
var numberOfTicks = 0;
startNewSimulation();
function togglePause() {
    if (paused) {
        this.innerText = "Pause";
        paused = false;
    }
    else {
        this.innerText = "Resume";
        paused = true;
    }
}
function startNewSimulation() {
    var INITIAL_POPULATION = 10;
    var INITIAL_FOOD = 20;
    for (var i = 0; i < INITIAL_POPULATION; i++) {
        var newFrog = Frog.generateStarterFrog();
        frogs.push(newFrog);
    }
    for (var i = 0; i < INITIAL_FOOD; i++) {
        var newFood = new Food();
        food.push(newFood);
    }
    runSimulation();
}
function runSimulation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < frogs.length; i++) {
        frogs[i].doAction();
        var position = frogs[i].getPosition();
        ctx.arc(position.x, position.y, Frog.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = 'green';
        ctx.fill();
    }
}
