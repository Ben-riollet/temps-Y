function setup() {
    createCanvas(1080, 1920);
    angleMode(DEGREES);
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
        [bl, 270, 45],
        [no, 45, 135],
        [ja, 135, 270]];

    }
    //1Y
    if (yeure == 1) {
      return [
        [bl, 270, 90],
        [ro, 90, 135],
        [ja, 135, 270]];

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
        [vj, 90, 135],
        [pk, 135, 315],
        [or, 315, 90]];

    }
    //12Y
    if (yeure == 12) {
      return [
        [vc, 90, 180],
        [pk, 180, 315],
        [or, 315, 90]];

    }
    //13Y
    if (yeure == 13) {
      return [
        [vc, 135, 180],
        [pk, 180, 315],
        [vj, 315, 135]];

    }
    //14Y
    if (yeure == 14) {
      return [
        [bc, 135, 225],
        [pk, 225, 315],
        [vj, 315, 135]];

    }
    //15Y
    if (yeure == 15) {
      return [
        [vi, 135, 270],
        [pk, 270, 315],
        [vj, 315, 135]];
    }

    //----------------------JOUR------------------------------

    //MIDI
    if (yeure == 16) {
      return [
        [ma, 180, 315],
        [no, 315, 45],
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
        [pk, 315, 45],
        [rs, 45, 225],
        [bc, 225, 315]];

    }
    //31Y
    if (yeure == 31) {
      return [
        [gr, 0, 45],
        [rs, 45, 225],
        [bc, 225, 0]];
    }
}


function draw() {
    stroke(238);
    translate(300, 300);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();

    let totalmin = hr * 60 + mn;
    let yeurelapse = totalmin % 45;
    let yeure = int(totalmin / 45);
    let yeure_completion_ratio = yeurelapse / 45;

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

    fill(currentyeure[0][0]);
    arc(0, 0, 500, 500, A1, B1);
    fill(currentyeure[1][0]);
    arc(0, 0, 500, 500, A2, B2);
    fill(currentyeure[2][0]);
    arc(0, 0, 500, 500, A3, B3);
}
