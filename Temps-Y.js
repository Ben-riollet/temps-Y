function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(230);
  noStroke(0);
  translate(200, 200);
  rotate(-90);


  let hr = hour();
  let mn = minute();
  let sc = second();

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

//-------------------------NUIT----------------------
//Minuit
    if (hr === 0 && mn <= 44) {
    fill(bl);
      arc(0, 0, 300, 300, 270, 45);
    fill(no);
      arc(0, 0, 300, 300, 45, 135);
    fill(ja);
      arc(0, 0, 300, 300, 135, 270);
  }
//1Y
    if (hr === 0 && mn >= 45) {
    fill(bl);
      arc(0, 0, 300, 300, 270, 90);
    fill(ro);
      arc(0, 0, 300, 300, 90, 135);
    fill(ja);
      arc(0, 0, 300, 300, 135, 270);
  }
//1Y
    if (hr === 1 && mn <= 29) {
    fill(bl);
      arc(0, 0, 300, 300, 270, 90);
    fill(ro);
      arc(0, 0, 300, 300, 90, 135);
    fill(ja);
      arc(0, 0, 300, 300, 135, 270);
  }
  //2Y
    if (hr === 1 && mn >= 30) {
    fill(bl);
      arc(0, 0, 300, 300, 270, 90);
    fill(ro);
      arc(0, 0, 300, 300, 90, 180);
    fill(ve);
      arc(0, 0, 300, 300, 180, 270);
  }
  //2Y
    if (hr === 2 && mn <= 14) {
    fill(bl);
      arc(0, 0, 300, 300, 270, 90);
    fill(ro);
      arc(0, 0, 300, 300, 90, 180);
    fill(ve);
      arc(0, 0, 300, 300, 180, 270);
  }
  //3Y
    if (hr === 2 && mn >= 15) {
    fill(bl);
      arc(0, 0, 300, 300, 270, 90);
    fill(ro);
      arc(0, 0, 300, 300, 90, 225);
    fill(cy);
      arc(0, 0, 300, 300, 225, 270);
  }
//4Y
    if (hr === 3 && mn >= 0) {
    fill(ma);
      arc(0, 0, 300, 300, 270, 90);
    fill(ro);
      arc(0, 0, 300, 300, 90, 225);
    fill(cy);
      arc(0, 0, 300, 300, 225, 315);
  }

//5Y
    if (hr === 3 && mn >= 45) {
    fill(ma);
      arc(0, 0, 300, 300, 270, 90);
    fill(ro);
      arc(0, 0, 300, 300, 90, 270);
    fill(bl);
      arc(0, 0, 300, 300, 270, 315);
  }
//5Y
    if (hr === 4 && mn <= 29) {
    fill(ma);
      arc(0, 0, 300, 300, 270, 90);
    fill(ro);
      arc(0, 0, 300, 300, 90, 270);
    fill(bl);
      arc(0, 0, 300, 300, 270, 315);
  }
//6Y
    if (hr === 4 && mn >= 30) {
    fill(wh);
      arc(0, 0, 300, 300, 0, 90);
    fill(ro);
      arc(0, 0, 300, 300, 90, 270);
    fill(bl);
      arc(0, 0, 300, 300, 270, 0);
  }
//6Y
    if (hr === 5 && mn <= 14) {
    fill(wh);
      arc(0, 0, 300, 300, 0, 90);
    fill(ro);
      arc(0, 0, 300, 300, 90, 270);
    fill(bl);
      arc(0, 0, 300, 300, 270, 0);
  }
//7Y
    if (hr === 5 && mn >= 15) {
    fill(no);
      arc(0, 0, 300, 300, 45, 90);
    fill(ro);
      arc(0, 0, 300, 300, 90, 270);
    fill(bl);
      arc(0, 0, 300, 300, 270, 45);
  }
//-------------------------MATIN----------------------
//8Y
    if (hr === 6 && mn <= 0) {
    fill(vj);
      arc(0, 0, 300, 300, 90, 135);
    fill(pk);
      arc(0, 0, 300, 300, 135, 315);
    fill(or);
      arc(0, 0, 300, 300, 315, 90);
  }
//9Y
    if (hr === 6 && mn <= 45) {
    fill(vc);
      arc(0, 0, 300, 300, 90, 180);
    fill(pk);
      arc(0, 0, 300, 300, 180, 315);
    fill(or);
      arc(0, 0, 300, 300, 315, 90);
    }

//9Y
    if (hr === 7 && mn <= 29) {
    fill(vc);
      arc(0, 0, 300, 300, 90, 180);
    fill(pk);
      arc(0, 0, 300, 300, 180, 315);
    fill(or);
      arc(0, 0, 300, 300, 315, 90);
    }

//10Y
    if (hr === 7 && mn >= 30) {
     fill(vc);
      arc(0, 0, 300, 300, 135, 180);
    fill(pk);
      arc(0, 0, 300, 300, 180, 315);
    fill(vj);
      arc(0, 0, 300, 300, 315, 135);
    }

//10Y
    if (hr === 8 && mn <= 14) {
    fill(vc);
      arc(0, 0, 300, 300, 135, 180);
    fill(pk);
      arc(0, 0, 300, 300, 180, 315);
    fill(vj);
      arc(0, 0, 300, 300, 315, 135);
    }

//11Y
    if (hr === 8 && mn >= 15) {
    fill(bc);
      arc(0, 0, 300, 300, 135, 225);
    fill(pk);
      arc(0, 0, 300, 300, 225, 315);
    fill(vj);
      arc(0, 0, 300, 300, 315, 135);
    }
//12Y
    if (hr === 9 && mn >= 0) {
    fill(vi);
      arc(0, 0, 300, 300, 135, 270);
    fill(pk);
      arc(0, 0, 300, 300, 270, 315);
    fill(vj);
      arc(0, 0, 300, 300, 315, 135);
    }

//13Y
    if (hr === 9 && mn >= 45) {
    fill(vi);
      arc(0, 0, 300, 300, 135, 270);
    fill(gr);
      arc(0, 0, 300, 300, 270, 0);
    fill(vj);
      arc(0, 0, 300, 300, 0, 135);
    }
//13Y
    if (hr === 10 && mn <= 29) {
    fill(vi);
      arc(0, 0, 300, 300, 135, 180);
      arc(0, 0, 300, 300, 180, 225);
      arc(0, 0, 300, 300, 225, 270);
    fill(gr);
      arc(0, 0, 300, 300, 270, 315);
      arc(0, 0, 300, 300, 315, 0);
    fill(vj);
      arc(0, 0, 300, 300, 0, 45);
      arc(0, 0, 300, 300, 45, 90);
      arc(0, 0, 300, 300, 90, 135);
    }
//14Y
    if (hr === 10 && mn >= 30) {
    fill(pk);
      arc(0, 0, 300, 300, 135, 315);
    fill(gr);
      arc(0, 0, 300, 300, 315, 0);
    fill(vj);
      arc(0, 0, 300, 300, 0, 135);
    }
//14Y
    if (hr === 11 && mn <= 14) {
    fill(pk);
      arc(0, 0, 300, 300, 135, 315);
    fill(gr);
      arc(0, 0, 300, 300, 315, 0);
    fill(vj);
      arc(0, 0, 300, 300, 0, 135);
    }
//15Y
    if (hr === 11 && mn >= 15) {
    fill(pk);
    arc(0, 0, 300, 300, 135, 315);
  fill(rs);
    arc(0, 0, 300, 300, 315, 45);
  fill(vj);
    arc(0, 0, 300, 300, 45, 135);
    }

//----------------------JOUR------------------------------

//MIDI
    if (hr === 12 && mn >= 0) {
    fill(ma);
    arc(0, 0, 300, 300, 180, 315);
  fill(no);
    arc(0, 0, 300, 300, 315, 45);
  fill(ve);
    arc(0, 0, 300, 300, 45, 180);
    }

//17Y
    if (hr === 12 && mn >= 45) {
    fill(wh);
    arc(0, 0, 300, 300, 180, 0);
  fill(no);
    arc(0, 0, 300, 300, 0, 45);
  fill(ve);
    arc(0, 0, 300, 300, 45, 180);
    }

//17Y
    if (hr === 13 && mn <= 29) {
    fill(wh);
    arc(0, 0, 300, 300, 180, 0);
  fill(no);
    arc(0, 0, 300, 300, 0, 45);
  fill(ve);
    arc(0, 0, 300, 300, 45, 180);
    }


//18Y
    if (hr === 13 && mn >= 30) {
    fill(wh);
    arc(0, 0, 300, 300, 180, 0);
  fill(ro);
    arc(0, 0, 300, 300, 0, 90);
  fill(ve);
    arc(0, 0, 300, 300, 90, 180);
    }


//18Y
    if (hr === 14 && mn <= 14) {
    fill(wh);
    arc(0, 0, 300, 300, 180, 0);
  fill(ro);
    arc(0, 0, 300, 300, 0, 90);
  fill(ve);
    arc(0, 0, 300, 300, 90, 180);
    }

//19Y
    if (hr === 14 && mn >= 15) {
    fill(wh);
    arc(0, 0, 300, 300, 180, 0);
  fill(ja);
    arc(0, 0, 300, 300, 0, 135);
  fill(ve);
    arc(0, 0, 300, 300, 135, 180);
    }
//20Y
    if (hr === 15 && mn >= 0) {
    fill(wh);
    arc(0, 0, 300, 300, 225, 0);
  fill(ja);
    arc(0, 0, 300, 300, 0, 135);
  fill(cy);
    arc(0, 0, 300, 300, 135, 225);
    }

//21Y
    if (hr === 15 && mn >= 45) {
    fill(wh);
    arc(0, 0, 300, 300, 225, 0);
  fill(ve);
    arc(0, 0, 300, 300, 0, 180);
  fill(cy);
    arc(0, 0, 300, 300, 180, 225);
    }
//21Y
    if (hr === 16 && mn <= 29) {
    fill(wh);
    arc(0, 0, 300, 300, 225, 0);
  fill(ve);
    arc(0, 0, 300, 300, 0, 180);
  fill(cy);
    arc(0, 0, 300, 300, 180, 225);
    }
//22Y
    if (hr === 16 && mn >= 30) {
    fill(wh);
    arc(0, 0, 300, 300, 270, 0);
  fill(ve);
    arc(0, 0, 300, 300, 0, 180);
  fill(bl);
    arc(0, 0, 300, 300, 180, 270);
    }

//22Y
    if (hr === 17 && mn <= 14) {
    fill(wh);
    arc(0, 0, 300, 300, 270, 0);
  fill(ve);
    arc(0, 0, 300, 300, 0, 180);
  fill(bl);
    arc(0, 0, 300, 300, 180, 270);
    }

//23Y
    if (hr === 17 && mn >= 15) {
    fill(wh);
    arc(0, 0, 300, 300, 315, 0);
  fill(ve);
    arc(0, 0, 300, 300, 0, 180);
  fill(ma);
    arc(0, 0, 300, 300, 180, 315);
    }


//24Y
    if (hr === 18 && mn >= 0) {
    fill(gr);
    arc(0, 0, 300, 300, 0, 45);
  fill(rs);
    arc(0, 0, 300, 300, 45, 225);
  fill(bc);
    arc(0, 0, 300, 300, 225, 0);
    }

//25Y
    if (hr === 18 && mn >= 45) {
    fill(pk);
    arc(0, 0, 300, 300, 315, 45);
  fill(rs);
    arc(0, 0, 300, 300, 45, 225);
  fill(bc);
    arc(0, 0, 300, 300, 225, 315);
    }
//25Y
    if (hr === 19 && mn <= 29) {
    fill(pk);
    arc(0, 0, 300, 300, 315, 45);
  fill(rs);
    arc(0, 0, 300, 300, 45, 225);
  fill(bc);
    arc(0, 0, 300, 300, 225, 315);
    }
//26Y
    if (hr === 19 && mn >= 30) {
    fill(vi);
    arc(0, 0, 300, 300, 270, 45);
  fill(rs);
    arc(0, 0, 300, 300, 45, 225);
  fill(bc);
    arc(0, 0, 300, 300, 225, 270);
    }
//26Y
    if (hr === 20 && mn <= 14) {
    fill(vi);
    arc(0, 0, 300, 300, 270, 45);
  fill(rs);
    arc(0, 0, 300, 300, 45, 225);
  fill(bc);
    arc(0, 0, 300, 300, 225, 270);
    }

//27Y
    if (hr === 20 && mn >= 15) {
    fill(vi);
    arc(0, 0, 300, 300, 270, 45);
  fill(rs);
    arc(0, 0, 300, 300, 45, 180);
  fill(vc);
    arc(0, 0, 300, 300, 180, 270);
    }

//28Y
    if (hr === 21 && mn >= 0) {
  fill(bc);
    arc(0, 0, 300, 300, 225, 45);
  fill(rs);
    arc(0, 0, 300, 300, 45, 180);
  fill(vc);
    arc(0, 0, 300, 300, 180, 225);
    }
//29Y
    if (hr === 21 && mn >= 45) {
  fill(bc);
    arc(0, 0, 300, 300, 225, 45);
  fill(rs);
    arc(0, 0, 300, 300, 45, 135);
  fill(vj);
    arc(0, 0, 300, 300, 135, 225);
    }
//29Y
    if (hr === 22 && mn <= 29) {
  fill(bc);
    arc(0, 0, 300, 300, 225, 45);
  fill(rs);
    arc(0, 0, 300, 300, 45, 135);
  fill(vj);
    arc(0, 0, 300, 300, 135, 225);
    }

//30Y
    if (hr === 22 && mn >= 30) {
  fill(bc);
    arc(0, 0, 300, 300, 225, 45);
  fill(rs);
    arc(0, 0, 300, 300, 45, 90);
  fill(or);
    arc(0, 0, 300, 300, 90, 225);
    }
//30Y
    if (hr === 23 && mn <= 14) {
  fill(bc);
    arc(0, 0, 300, 300, 225, 45);
 fill(rs);
    arc(0, 0, 300, 300, 45, 90);
  fill(or);
    arc(0, 0, 300, 300, 90, 225);;
    }
//31Y
    if (hr === 23 && mn >= 15) {
  fill(bc);
    arc(0, 0, 300, 300, 225, 0);
  fill(gr);
    arc(0, 0, 300, 300, 0, 90);
  fill(or);
    arc(0, 0, 300, 300, 90, 225); }
}