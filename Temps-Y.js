function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  let select_hours = document.getElementById("select_hours");
  for(var i=-1;i<24;i++){
      var opt = document.createElement("option");
      opt.innerHTML = i;
      opt.setAttribute("value", i);
      select_hours.appendChild(opt);
  }
  let select_mins = document.getElementById("select_mins");
  for(var i=-1;i<60;i++){
      var opt = document.createElement("option");
      opt.innerHTML = i;
      opt.setAttribute("value", i);
      select_mins.appendChild(opt);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function getArcs(yeure) {

    // Blanc
    let wh = [255, 255, 255];
    // Gris
    let gr = [127, 127, 127];
    // Noir
    let no = [0, 0, 0];
    // Rouge S
    let rs = [127, 0, 0];
    // Rouge
    let ro = [255, 0, 0];
    // Orange
    let or = [255, 127, 0];
    // Jaune
    let ja = [255, 255, 0];
    // Vert J
    let vj = [127, 255, 0];
    // Vert
    let ve = [0, 255, 0];
    // Vert C
    let vc = [0, 255, 127];
    // Cyan
    let cy = [0, 255, 255];
    // Bleu C
    let bc = [0, 127, 255];
    // Bleu
    let bl = [0, 0, 255];
    // Violet
    let vi = [127, 0, 255];
    // Magenta
    let ma = [255, 0, 255];
    // Rose
    let pk = [255, 127, 255];
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
        [ma, 315, 90],
        [ro, 90, 270],
        [bl, 270, 315]];

    }
    //6Y
    if (yeure == 6) {
      return [
        [wh, 360, 90],
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
        [vj, 0, 135],
        [vi, 135, 270],
        [gr, 270, 0]];

    }
    //9Y
    if (yeure == 9) {
      return [
        [vj, 0, 135],
        [pk, 135, 315],
        [gr, 315, 0]];

    }
    //10Y
    if (yeure == 10) {
      return [
        [vj, 45, 135],
        [pk, 135, 315],
        [rs, 315, 45]];

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
    // 31Y
    if (yeure == 31) {
      return [
        [gr, 0, 45],
        [rs, 45, 225],
        [bc, 225, 0]];
    }
}

// function colorTransitions(){
//     if (yeure == 7 || yeure == 15 || yeure == 23 || 31) {

//     }
// }

function getColor(current_rgb, next_rgb, yeure, yeure_completion_ratio) {
  let r = current_rgb[0];
  let g = current_rgb[1];
  let b = current_rgb[2];

  if (yeure===31 || yeure===7 || yeure===15 || yeure===23) {
    r = r + (next_rgb[0] - r) * yeure_completion_ratio;
    g = g + (next_rgb[1] - g) * yeure_completion_ratio;
    b = b + (next_rgb[2] - b) * yeure_completion_ratio;
  }

  return [r, g, b];
}

function print_debug_yeure(id, rgb, alpha, beta){
  let yeure_html = document.getElementById(id);
  let r = rgb[0];
  let g = rgb[1];
  let b = rgb[2];
  yeure_html.getElementsByClassName("color")[0].setAttribute("style", "height: 15px;width: 15px;background: rgb("+r+","+g+","+b+");float: left;");
  yeure_html.getElementsByClassName("a")[0].innerHTML = alpha;
  yeure_html.getElementsByClassName("b")[0].innerHTML = beta;
}

function draw() {
  stroke(238);
  strokeWeight(2);
  translate(windowWidth/2, windowHeight/2);
  rotate(270);


  let selected_hours = document.getElementById("select_hours").value;
  let selected_mins = document.getElementById("select_mins").value;
  
  let hr = selected_hours > -1? int(selected_hours) : hour();
  let mn = selected_mins > -1 ? int(selected_mins) : minute();
  let sc = second();
  
  document.getElementById("hour").innerHTML = hr;
  document.getElementById("min").innerHTML = mn;

  let totalmin = hr * 60 + mn;
  // ex 9h * 60 + 16mn = 556

  let yeure_min_lapse = totalmin % 45;
  // ex 556 % 45 = 16s

  let totalsec = parseFloat( (hr * 60 + mn) * 60 + sc);

  let yeure_sec_lapse = totalsec % ( 45 * 60);

  let yeure = int(totalmin / 45);
  // ex 12,355555556 = 12

  let yeure_min_completion_ratio = yeure_min_lapse / 45;
  // ex 16 / 45 = 0,355555556

  let yeure_sec_completion_ratio = yeure_sec_lapse / (45*60);

  let yeure_completion_ratio = yeure_sec_completion_ratio;

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

  let A1 = ((nextA1-currentA1)%360)*yeure_completion_ratio+currentA1;
  let B1 = int(nextB1-currentB1)*yeure_completion_ratio+currentB1;
  let [r1, g1, b1] = getColor(currentyeure[0][0], nextyeure[0][0], yeure, yeure_completion_ratio);

  let A2 = ((nextA2-currentA2)%360)*yeure_completion_ratio+currentA2;
  let B2 = ((nextB2-currentB2)%360)*yeure_completion_ratio+currentB2;
  let [r2, g2, b2] = getColor(currentyeure[1][0], nextyeure[1][0], yeure, yeure_completion_ratio);

  let A3 = ((nextA3-currentA3)%360)*yeure_completion_ratio+currentA3;
  let B3 = ((nextB3-currentB3)%360)*yeure_completion_ratio+currentB3;
  let [r3, g3, b3] = getColor(currentyeure[2][0], nextyeure[2][0], yeure, yeure_completion_ratio);

  print_debug_yeure("c_y1", currentyeure[0][0], currentA1, currentB1);
  print_debug_yeure("c_y2", currentyeure[1][0], currentA2, currentB2);
  print_debug_yeure("c_y3", currentyeure[2][0], currentA3, currentB3);
  
  print_debug_yeure("n_y1", nextyeure[0][0], nextA1, nextB1);
  print_debug_yeure("n_y2", nextyeure[1][0], nextA2, nextB2);
  print_debug_yeure("n_y3", nextyeure[2][0], nextA3, nextB3);

  let radius = windowWidth;
  if (windowHeight < radius){
    radius = windowHeight;
  }

  let margin = 100;

  fill(color(r1, g1, b1));
  arc(0, 0, radius-margin, radius-margin, A1, B1);
  fill(color(r2, g2, b2));
  arc(0, 0, radius-margin, radius-margin, A2, B2);
  fill(color(r3, g3, b3));
  arc(0, 0, radius-margin, radius-margin, A3, B3);


  let minutes_as_degrees = (totalmin % 45);

  document.getElementById("yeure").innerHTML = yeure;
  document.getElementById("min_yeure").innerHTML = int(minutes_as_degrees);
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
