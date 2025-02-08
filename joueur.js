class joueur {
  constructor() {
    this.DegreDeVitesse = 1;
    this.vitesse = 1;
    this.DegreVitesse1 = 1;
    this.DegreVitesse2 = 2;
    this.DegreVitesse3 = 3;
    this.DegreVitesse4 = 4;
    this.DegreVitesse5 = 5;
    this.SiVitesseReduite = false;
  }
  mouvement(BestioleJoueur, SiVitesseReduite) {
    this.SiVitesseReduite = SiVitesseReduite
    BestioleJoueur.x += BestioleJoueur.vx;
    BestioleJoueur.y += BestioleJoueur.vy;
    if (keyIsPressed === true) {
      if (BestioleJoueur) {
        if (SiVitesseReduite == true) {
          this.vitesse = this.DegreDeVitesse / 2;
        } else {
          this.vitesse = this.DegreDeVitesse;
        }
        if (key === "d" || key == "D") {
          if (BestioleJoueur) {
            BestioleJoueur.vx = this.vitesse;
          }
        }
        if (key === "q" || key == "Q") {
          if (BestioleJoueur) {
            BestioleJoueur.vx = -this.vitesse;
          }
        }
        if (key === "z" || key == "Z") {
          if (BestioleJoueur) {
            BestioleJoueur.vy = -this.vitesse;
          }
        }
        if (key === "s" || key == "S") {
          if (BestioleJoueur) {
            BestioleJoueur.vy = this.vitesse;
          }
        }
      }
    } else {
      BestioleJoueur.vy = 0;
      BestioleJoueur.vx = 0;
    }
    BestioleJoueur.x = constrain(BestioleJoueur.x, 0, width);
    BestioleJoueur.y = constrain(BestioleJoueur.y, 0, height);
  }
  uiaccelerateur(){
    if (this.SiVitesseReduite == true) {
      this.DegreVitesse1 = 0.5
      this.DegreVitesse2 = 1
      this.DegreVitesse3 = 1.5
      this.DegreVitesse4 = 2
      this.DegreVitesse5 = 2.5
    }else{
      this.DegreVitesse1 = 1
      this.DegreVitesse2 = 2
      this.DegreVitesse3 = 3
      this.DegreVitesse4 = 4
      this.DegreVitesse5 = 5
    }
    fill("grey");
    rect(5, 410, 150, 300);
    
    //----
    
    fill("white");
    rect(5, 410, 150, 35);
    
    textAlign(CENTER);
    textStyle(BOLD);
    fill("black");
    textSize(12);
    text("Accélérateur", 80, 430);
    
    //----
    
    fill("rgb(10,255,0)");
    rect(30, 452.5, 20, 250);
    
    fill("rgb(0,3,255)");
    ellipse(39.75, 452.5, 30);
    
    textAlign(CENTER);
    fill("black");
    textSize(12);
    text(this.DegreVitesse5, 39.75, 455.5);
    
    fill("rgb(0,3,255)");
    ellipse(39.75, 702.5, 30);
    
    textAlign(CENTER);
    fill("black");
    textSize(12);
    text(this.DegreVitesse4, 39.75, 455.5);
    
    fill("rgb(0,3,255)");
    ellipse(39.75, 577.5, 30);
    
    textAlign(CENTER);
    fill("black");
    textSize(12);
    text(this.DegreVitesse3, 39.75, 455.5);
    
    fill("rgb(0,3,255)");
    ellipse(39.75, 577.5 + (702.5 - 577.5)/2, 30);
    
    textAlign(CENTER);
    fill("black");
    textSize(12);
    text(this.DegreVitesse2, 39.75, 455.5);
    
    fill("rgb(0,3,255)");
    ellipse(39.75, 577.5 - (702.5 - 577.5)/2, 30);
    
    textAlign(CENTER);
    fill("black");
    textSize(12);
    text(this.DegreVitesse1, 39.75, 455.5);
    
    //----
    
    
  }
}
