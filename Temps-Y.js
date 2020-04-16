function setup() {
  createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function getArcs(yeure) {

    // Blanc
    let wh = color(255);
    // Gris
    let gr = color(127);
    // Noir
    let no = color(0);
    // Rouge S
    let rs = color(127, 0, 0);
    // Rouge
    let ro = color(255, 0, 0);
    // Orange
    let or = color(255, 127, 0);
    // Jaune
    let ja = color(255, 255, 0);
    // Vert J
    let vj = color(127, 255, 0);
    // Vert
    let ve = color(0, 255, 0);
    // Vert C
    let vc = color(0, 255, 127);
    // Cyan
    let cy = color(0, 255, 255);
    // Bleu C
    let bc = color(0, 127, 255);
    // Bleu
    let bl = color(0, 0, 255);
    // Violet
    let vi = color(127, 0, 255);
    // Magenta
    let ma = color(255, 0, 255);
    // Rose
    let pk = color(255, 127, 255);
    yeure = yeure %32;
//-------------------------NUIT----------------------
//Minuit
    if (yeure == 0) {
      return [
        [[0, 0, 255], -90, 45],
        [[0,0,0], 45, 135],
        [[255, 255, 0], 135, -90]];

    }
    //1Y
    if (yeure == 1) {
      return [
        [[0, 0, 255], 270, 90],
        [[255, 0, 0], 90, 135],
        [[255, 255, 0], 135, 270]];

    }
    //2Y
    if (yeure == 2) {
      return [
        [bl, 270, 90],
        [ro, 90, 180],
        [ve, 180, 270]];

    }
    //3Y
    if (yeure == 3) {
      return [
        [bl, 270, 90],
        [ro, 90, 225],
        [cy, 225, 270]];

    }
    //4Y
    if (yeure == 4) {
      return [
        [ma, 270, 90],
        [ro, 90, 225],
        [cy, 225, 315]];
    }

    //5Y
    if (yeure == 5) {
      return [
        [ma, 270, 90],
        [ro, 90, 270],
        [bl, 270, 315]];

    }
    //6Y
    if (yeure == 6) {
      return [
        [wh, 0, 90],
        [ro, 90, 270],
        [bl, 270, 0]];

    }
    //7Y
    if (yeure == 7) {
      return [
        [no, 45, 90],
        [ro, 90, 270],
        [bl, 270, 45]];

    }
    //-------------------------MATIN----------------------
    //8Y
    if (yeure == 8) {
      return [
        [vi, 135, 270],
        [gr, 270, 0],
        [vj, 0, 135]];

    }
    //9Y
    if (yeure == 9) {
      return [
        [pk, 135, 315],
        [gr, 315, 0],
        [vj, 0, 135]];

    }
    //10Y
    if (yeure == 10) {
      return [
        [pk, 135, 315],
        [rs, 315, 45],
        [vj, 45, 135]];

    }
    //11Y
    if (yeure == 11) {
      return [
        [pk, 135, 315],
        [or, 315, 90],
        [vj, 90, 135]];

    }
    //12Y
    if (yeure == 12) {
      return [
        [pk, 180, 315],
        [or, 315, 90],
        [vc, 90, 180]];

    }
    //13Y
    if (yeure == 13) {
      return [
        [pk, 180, 315],
        [vj, 315, 135],
        [vc, 135, 180]];

    }
    //14Y
    if (yeure == 14) {
      return [
        [bc, 135, 225],
        [pk, 225, -45],
        [vj, -45, 135]];

    }
    //15Y
    if (yeure == 15) {
      return [
        [vi, 135, 270],
        [pk, 270, -45],
        [vj, -45, 135]];
    }

    //----------------------JOUR------------------------------

    //MIDI
    if (yeure == 16) {
      return [
        [ma, 180, -45],
        [no, -45, 45],
        [ve, 45, 180]];
    }

    //17Y
    if (yeure == 17) {
      return [
        [wh, 180, 0],
        [no, 0, 45],
        [ve, 45, 180]];

    }
    //18Y
    if (yeure == 18) {
      return [
        [wh, 180, 0],
        [ro, 0, 90],
        [ve, 90, 180]];

    }
    //19Y
    if (yeure == 19) {
      return [
        [wh, 180, 0],
        [ja, 0, 135],
        [ve, 135, 180]];

    }
    //20Y
    if (yeure == 20) {
      return [
        [wh, 225, 0],
        [ja, 0, 135],
        [cy, 135, 225]];
    }

    //21Y
    if (yeure == 21) {
      return [
        [wh, 225, 0],
        [ve, 0, 180],
        [cy, 180, 225]];

    }
    //22Y
    if (yeure == 22) {
      return [
        [wh, 270, 0],
        [ve, 0, 180],
        [bl, 180, 270]];

    }
    //23Y
    if (yeure == 23) {
      return [
        [wh, 315, 0],
        [ve, 0, 180],
        [ma, 180, 315]];
    }

    //---------------SOIR------------------

    //24Y
    if (yeure == 24) {
      return [
        [bc, 225, 0],
        [gr, 0, 90],
        [or, 90, 225]];
    }

    //25Y
    if (yeure == 25) {
      return [
        [bc, 225, 45],
        [rs, 45, 90],
        [or, 90, 225]];

    }
    //26Y
    if (yeure == 26) {
      return [
        [bc, 225, 45],
        [rs, 45, 135],
        [vj, 135, 225]];

    }
    //27Y
    if (yeure == 27) {
      return [
        [bc, 225, 45],
        [rs, 45, 180],
        [vc, 180, 225]];
    }

    //28Y
    if (yeure == 28) {
      return [
        [vi, 270, 45],
        [rs, 45, 180],
        [vc, 180, 270]];

    }
    //29Y
    if (yeure == 29) {
      return [
        [vi, 270, 45],
        [rs, 45, 225],
        [bc, 225, 270]];

    }
    //30Y
    if (yeure == 30) {
      return [
        [pk, -45, 45],
        [rs, 45, 225],
        [bc, 225, -45]];

    }
    // //31Y
    // if (yeure == 31) {
    //   return [
    //     [gr, 0, 45],
    //     [rs, 45, 225],
    //     [bc, 225, 0]];
    // }
    // 31Y
    if (yeure == 31) {
      return [
        [[127, 127, 127], 0, 45],
        [[127, 0, 0], 45, 225],
        [[0, 127, 255], 225, 0]];
    }
}

// function colorTransitions(){
//     if (yeure == 7 || yeure == 15 || yeure == 23 || 31) {

//     }
// }

function draw() {
    stroke(238);
    strokeWeight(2);
    translate(windowWidth/2, windowHeight/2);
    rotate(-90);


    let hr = hour();
    let mn = minute();
    let sc = second();

    let min_second = sc / 60;
    let totalmin = hr * 60 + mn + min_second;
    // let totalmin = hr * 60 + mn;
    // ex 9h * 60 + 16mn = 556
    let yeurelapse = totalmin % 45;
    // ex 556 % 45 = 16
    let yeure = int(totalmin / 45);
    // ex 12,355555556 = 12
    let yeure_completion_ratio = yeurelapse / 45;
    // ex 16 / 45 = 0,355555556
    let currentyeure = getArcs(yeure);
    let nextyeure = getArcs(yeure + 1);

// A=int(A2-A1)/2+A1;
// B=int(B2-B1)/2+B1;

    let currentA1 = currentyeure[0][1];
    let currentB1 = currentyeure[0][2];

    let currentA2 = currentyeure[1][1];
    let currentB2 = currentyeure[1][2];

    let currentA3 = currentyeure[2][1];
    let currentB3 = currentyeure[2][2];

    let nextA1 = nextyeure[0][1];
    let nextB1 = nextyeure[0][2];

    let nextA2 = nextyeure[1][1];
    let nextB2 = nextyeure[1][2];

    let nextA3 = nextyeure[2][1];
    let nextB3 = nextyeure[2][2];

    let A1 = int(nextA1-currentA1)*yeure_completion_ratio+currentA1;
    let B1 = int(nextB1-currentB1)*yeure_completion_ratio+currentB1;

    let A2 = int(nextA2-currentA2)*yeure_completion_ratio+currentA2;
    let B2 = int(nextB2-currentB2)*yeure_completion_ratio+currentB2;

    let A3 = int(nextA3-currentA3)*yeure_completion_ratio+currentA3;
    let B3 = int(nextB3-currentB3)*yeure_completion_ratio+currentB3;


    let radius = windowWidth;
    if (windowHeight < radius){
        radius = windowHeight;
    }




//     // let r1 = currentyeure[0][0][1];
//     // let g1 = currentyeure[0][0][2];
//     // let b1 = currentyeure[0][0][3];
//     // fill(color(r1, g1, b1);
    // fill(currentyeure[0][0]);
fill(color(currentyeure[0][0],
    currentyeure[0][1],
    currentyeure[0][2]));
    arc(0, 0, radius, radius, A1, B1);
    // fill(currentyeure[1][0]);
fill(color(currentyeure[1][0],
    currentyeure[1][1],
    currentyeure[1][2]));
    arc(0, 0, radius, radius, A2, B2);
    // fill(currentyeure[2][0]);
fill(color(currentyeure[2][0],
    currentyeure[2][1],
    currentyeure[2][2]));
    arc(0, 0, radius, radius, A3, B3);





    let minutes_as_degrees = (totalmin % 45);

    document.getElementById("yeure").innerHTML = yeure;
    document.getElementById("min").innerHTML = int(minutes_as_degrees);
    document.getElementById("sec").innerHTML = sc;
    // pop();
    // let minutes_as_degrees = int(mn /0.75);
    // let display_yeure = yeure + 'Y : ' + minutes_as_degrees +'° ' + sc;
    // rotate(90);
    // translate(-200, -200);
    // textSize(32);
    // fill(50);
    // text(display_yeure, -150, -150, 270, 280);
    // pop();



    // push();



    // rotate(90);
    // textSize(32);
    // text(yeure, -600, 20);
    // rotate(90);
    // text(':', -500, 10);
    // fill(0, 0, 0);

}