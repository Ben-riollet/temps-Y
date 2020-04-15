function setup() {
  createCanvas(400, 400);
}
function draw(){
background(0);

    let hr = hour();
    let mn = minute();
    let sc = second();

    fill(0);
    noStroke();
    text(hr + ':' mn ':' + sc, 10, 200);
}