let Bestioles = [];

let NbBestioles = 60;
let NbBestiolesBleues = NbBestioles - 1;
let taille;
let vitesse;
let NbBestiolesBleuesTempo = 0;
let count = 0;
let pause = false;
let pausejeu = false;
let Reponse;
let BestioleJoueur;
let rectx;
let recty;
let joueurvrai;
let DonneesJoueur;
let NumJoueur;

function setup() {
  createCanvas(800, 800);
  joueurvrai = new joueur();
  DonneesJoueur = new donneesjoueur();
  
  rectx = width / 2 - 50;
  recty = height / 2 / 2 + 50;

  taille = 15;

  for (let i = 0; i < NbBestioles; i++) {
    vitesse = random(1, 5);

    let x = random(width);
    let y = random(width);
    if (i == NbBestioles - 1) {
      Bestioles[i] = new bestiole(x, y, taille, vitesse, "red");
    } else {
      Bestioles[i] = new bestiole(x, y, taille, vitesse, "blue");
    }
  }
  for (let i = 0; i < Bestioles.length; i++) {
    if (Bestioles[i].couleur == "blue") {
      BestioleJoueur = Bestioles[i];
      NumJoueur = i
    }
  }
  
  noStroke();
}

function draw() {
  if (pausejeu == true) {
    fill("blue");
    textSize(30);
    textAlign(CENTER);
    text("Partie terminée ! Veux-tu rejouer ?", width / 2, height / 2 / 2);

    fill("red");
    rect(rectx, recty, 100, 100);

    fill("white");
    textSize(20);
    text("REJOUER", width / 2, height / 2 / 2 + 100);

    if (Reponse == "Rejouer") {
      Reponse = "";
      for (let i = 0; i < Bestioles.length; i++) {
        if (i == NbBestioles - 1) {
          Bestioles[i].couleur = "red";
        } else {
          Bestioles[i].couleur = "blue";
        }
        NbBestiolesBleues = NbBestioles - 1;
      }
      pausejeu = false;
      loop();
    }
  } else {
    if (pause == true) {
      count++;
      if (count > 180) {
        pause = false;
        pausejeu = true;
      }
    } else {
      //------------{
      
      background("goldenrod");
      
      DonneesJoueur.miseajour(BestioleJoueur,NumJoueur,joueurvrai.DegreDeVitesse,joueurvrai.vitesse)
      
      for (let i = 0; i < Bestioles.length; i++) {
        for (let a = 0; a < Bestioles.length; a++) {
          if (a != i) {
            Bestioles[i].touche(Bestioles[a]);
          }
        }
      }

      for (let i = 0; i < Bestioles.length; i++) {
        if (Bestioles[i].couleur == "blue") {
          NbBestiolesBleuesTempo = NbBestiolesBleuesTempo + 1;
        }
        Bestioles[i].afficher("red", false);
        if (NbBestiolesBleues <= 3) {
          if (BestioleJoueur == Bestioles[i]) {
            Bestioles[i].mouvement(true, true);
            joueurvrai.mouvement(BestioleJoueur, true);
            joueurvrai.uiaccelerateur();
          } else {
            if (BestioleJoueur != Bestioles[i]) {
              Bestioles[i].mouvement(true, false);
            }
          }
        } else {
          if (NbBestiolesBleues > 3) {
            if (BestioleJoueur == Bestioles[i]) {
              Bestioles[i].mouvement(false, true);
              joueurvrai.mouvement(BestioleJoueur, false);
              joueurvrai.uiaccelerateur();
            } else {
              if (BestioleJoueur != Bestioles[i]) {
                Bestioles[i].mouvement(false, false);
              }
            }
          }
        }
      }
      NbBestiolesBleues = NbBestiolesBleuesTempo;

      if (BestioleJoueur.couleur == "red") {
        if (NbBestiolesBleues > 0) {
          for (let i = 0; i < Bestioles.length; i++) {
            if (Bestioles[i].couleur == "blue") {
              BestioleJoueur = Bestioles[i];
              NumJoueur = i
            }
          }
        }
      }
      fill("black");
      triangle(BestioleJoueur.x + 10,BestioleJoueur.y - 32,BestioleJoueur.x,(BestioleJoueur.y - BestioleJoueur.taille/2) - 2,BestioleJoueur.x - 10,BestioleJoueur.y - 32);

      NbBestiolesBleuesTempo = 0;

      console.log(NbBestiolesBleues);

      //---------}

      if (NbBestiolesBleues == 0) {
        pause = true;
        count = 0;

        textSize(35);
        textAlign(CENTER);
        text("𓆩😈𓆪", width / 2, height / 2);
      }
      
      fill("black");
      textStyle(BOLD);
      stroke("blue")
      textSize(20);
      textAlign(CENTER);
      text("Non-infectés : " + NbBestiolesBleues, 110, 25);
      noStroke();
      
      fill("black");
      textStyle(BOLD);
      stroke("red")
      textSize(20);
      textAlign(CENTER);
      text("Infectés : " + (NbBestioles - NbBestiolesBleues), width - 90, 25);
      noStroke();
    }
  }
}

//---------------{

function mouseClicked() {
  sourisinter = dist(rectx, recty, mouseX, mouseY);
  if (sourisinter < 100) {
    if (pausejeu == true) {
      Reponse = "Rejouer";
    }
  }
}

//--------------}{

function keyPressed() {
  console.log("ea")
  if (key === "a" || key == "A") {
      console.log("eb")
    if (BestioleJoueur) {
        console.log("ec")
      if (joueurvrai.DegreDeVitesse < 5) {
          console.log("ed")
        joueurvrai.DegreDeVitesse = joueurvrai.DegreDeVitesse + 1;
      }
    }
  }
  if (key === "e" || key == "E") {
    if (BestioleJoueur) {
      if (joueurvrai.DegreDeVitesse > 1) {
        joueurvrai.DegreDeVitesse = joueurvrai.DegreDeVitesse - 1;
      }
    }
  }
}

//--------------}
