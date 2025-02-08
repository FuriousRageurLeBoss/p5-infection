class donneesjoueur {
  constructor(Joueur) {
    this.joueur = Joueur;
    this.Num = "?";
    this.DegreDeVitesse = 1;
    this.vitesse = 1;
  }
  miseajour(NewJoueur,num,DegreVitesse,Vitesse){
    this.Num = num
    this.joueur = NewJoueur
    this.DegreDeVitesse = DegreVitesse;
    this.vitesse = Vitesse;
    fill("red");
    rect(5, 300, 100, 100);
    
    textAlign(LEFT);
    fill("white");
    textSize(10);
    text("Données du joueur", 8, 350);
    this.sourisinter = dist(8, 350, mouseX, mouseY);
    if (this.sourisinter < 100) {
      textAlign(LEFT);
      text("Joueur :", 50, 60);
      text("Position x : " + this.joueur.x, 70, 80);
      text("Position y : " + this.joueur.y, 70, 100);
      text("Taille : " + this.joueur.taille, 70, 120);
      text("Couleur : " + this.joueur.couleur, 70, 140);
      text("Statut (en travaux) : " + this.joueur.statut, 70, 160);
      text("Numéro : " + this.Num, 70, 180);
      text("Vitesse : " + this.joueur.vitesse, 70, 200);
      text("NbBestiolesBleuesDiminue : " + this.joueur.NbBestiolesBleuesDiminue, 70, 220);
      text("Vitesse générale : " + this.vitesse, 70, 240);
      text("Degré de vitesse : " + this.DegreDeVitesse, 70, 260);
      text("Vitesse X : " + this.joueur.vx, 70, 280);
      text("Vitesse Y : " + this.joueur.vy, 70, 300);
    }
  }
}