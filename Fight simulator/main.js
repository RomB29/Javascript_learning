class Personnage {
    constructor(pseudo, classe, sante, attaque) {
        this.pseudo  = pseudo;
        this.classe  = classe;
        this.sante   = sante;
        this.attaque = attaque;
        this.niveau  = 1;
    }

    evoluer() {
        this.niveau+=1
        console.log(this.pseudo + " passe au niveau " + this.niveau + " !!");
    }
    verifierSante() {
        if (this.sante <= 0){
            this.sante = 0;
            console.log(this.pseudo + " a perdu, déso mon bro");
        }
    }
    // getter (accesseur) permet de récupérer une propriété
    get informations() {
        console.log(this.pseudo + ": " + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau);
    }
}

class Magicien extends Personnage {
    constructor(pseudo) {
        super(pseudo, "magicien", 170, 90); // niveau = 1 ici ?
    }
    
    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant un sort de " + this.attaque + " dégats"); 
        this.evoluer();
        personnage.verifierSante();
    }
    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes " + personnage.pseudo + " en lançant un sort de " + this.attaque*5 + " dégats"); 
        this.evoluer();
        personnage.verifierSante();
    }
}

class Guerrier extends Personnage {
    constructor(pseudo) {
        super(pseudo, "guerrier", 350, 50); // niveau = 1 ici ?
    }
    
    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son épée faisant "  + this.attaque + " dégats"); 
        this.evoluer();
        personnage.verifierSante();
    }
    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial rattatinator faisant  " + this.attaque*5 + " dégats"); 
        this.evoluer();
        personnage.verifierSante();
    }
}

var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);