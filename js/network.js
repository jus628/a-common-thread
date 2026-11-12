function setup() {
    // make canvas inside the homepage networkk
    let network = document.querySelector(".network");
    let canvas = createCanvas(network.clientWidth, network.clientHeight); // since not just one set size

    canvas.parent("network-canvas");
}

function draw() {
    clear();

    stroke(0);
    strokeWeight(2);

    // Connections to chipboard
    connectCircles("chipboard", "fidget");
    connectCircles("chipboard", "suitcase");
    connectCircles("chipboard", "purse");
    connectCircles("chipboard", "packaging");

    // Connections to acrylic
    connectCircles("acrylic", "glasses");
    connectCircles("acrylic", "bracelet");
    connectCircles("acrylic", "letter-exchange");

    // Connections to wood
    connectCircles("wood", "glasses");

    // Connection between Eterna projects
    connectCircles("bracelet", "packaging");

    // Dotted lines for related projects
    connectCircles("suitcase", "luggage-tags", true);
    connectCircles("posters", "letter-exchange", true);
}

// p5 built in fucitonfor canvas when the browser window changes size
function windowResized() {
    let network = document.querySelector(".network");
    resizeCanvas(network.clientWidth, network.clientHeight);
}

// Draw line btwn two HTML circles
function connectCircles(firstId, secondId, dotted = false) {

    // Find the circles
    let first = document.getElementById(firstId);
    let second = document.getElementById(secondId);

    // Get their positions
    let a = first.getBoundingClientRect();
    let b = second.getBoundingClientRect();

    // Get the network's position
    let network = document.querySelector(".network");
    let area = network.getBoundingClientRect();

    // Find the center of each circle
    let x1 = a.left + a.width / 2 - area.left;
    let y1 = a.top + a.height / 2 - area.top;

    let x2 = b.left + b.width / 2 - area.left;
    let y2 = b.top + b.height / 2 - area.top;

    // Solid vs dotted depdenidng on connection type
    if(dotted){
        drawingContext.setLineDash([4,4]);
    }
    else{
        drawingContext.setLineDash([])
    }
    // Draw the line
    line(x1, y1, x2, y2);
}