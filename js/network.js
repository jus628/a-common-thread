function setup() {
    // make canvas inside the homepage networkk
    let network = document.querySelector(".network");
    let canvas = createCanvas(network.clientWidth, network.clientHeight); // since not just one set size

    canvas.parent("network-canvas");
}

function draw() {
    // Clear the canvas so the HTML circles stay visible
    clear();

    // Test two circles
        let chipboard = document.getElementById("chipboard");
        let fidget = document.getElementById("fidget");

        // Get their positions
        let a = chipboard.getBoundingClientRect();
        let b = fidget.getBoundingClientRect();

        // Get the position of the network area
        let network = document.querySelector(".network");
        let area = network.getBoundingClientRect();

        // Find the center of each circle
        let x1 = a.left + a.width / 2 - area.left;
        let y1 = a.top + a.height / 2 - area.top;

        let x2 = b.left + b.width / 2 - area.left;
        let y2 = b.top + b.height / 2 - area.top;

        // Draw the line
        line(x1, y1, x2, y2);
}