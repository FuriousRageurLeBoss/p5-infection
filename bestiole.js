class bestiole {
  constructor(x, y, taille, vitesse, couleur) {
    this.x = x;
    this.y = y;
    this.taille = taille;
    this.couleur = couleur;
    this.statut = "blue";
    this.vitesse = vitesse;
    this.NbBestiolesBleuesDiminue = false;

    this.vx = 0;
    this.vy = 0;
  }

  afficher(CouleurMiseàJour, SiMiseàJour) {
    if (SiMiseàJour == true) {
      fill(CouleurMiseàJour);
      this.couleur = CouleurMiseàJour;
      SiMiseàJour = false;
    } else {
      fill(this.couleur);
    }
    ellipse(this.x, this.y, this.taille);
  }

  mouvement(SiVitesseReduite,SiContrôleDeJoueur) {
    if (SiContrôleDeJoueur == false){
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;

      if (random(100) < 5) {
        this.vx = random(-this.vitesse, this.vitesse);
        this.vy = random(-this.vitesse, this.vitesse);

        if (SiVitesseReduite == true){
          this.vx = this.vx/2
          this.vy = this.vy/2
        }
      }
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
    }
  }

  touche(autre) {
    this.NbBestiolesBleuesDiminue = false;
    this.distance = dist(this.x, this.y, autre.x, autre.y);
    if (this.distance < autre.taille / 2 + this.taille / 2) {
      if (this.couleur == "red" || autre.couleur == "red") {
        if (this.couleur == "blue") {
          this.NbBestiolesBleuesDiminue = true;
        }
        this.afficher("red", true);
        autre.afficher("red", true);
      }
      return true;
    } else {
      return false;
    }
  }
}
