function setup() {
    // make canvas inside the homepage networkk
    let network = document.querySelector(".network");
    let canvas = createCanvas(network.clientWidth, network.clientHeight); // since not just one set size

    canvas.parent("network-canvas");
}

function draw() {
    // Clear the canvas so the HTML circles stay visible
    clear();

    // Test line between two points
    stroke(0);
    strokeWeight(2);
    line(100, 100, 300, 300);
}