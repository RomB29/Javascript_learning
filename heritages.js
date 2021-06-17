// Constructeur de base
// les fonctions fléches ne fonctionnent pas pour créer les objets ou même utiliser l'atribut this
// un constructeur de base se nomme par convention avec une première lettre majuscule
function Animal(nombreDePattes, poids)  {
  this.nombreDePattes = nombreDePattes;
  this.poids          = poids;
}

Animal.prototype.presentation = function () {
    console.log("Cet animal possède " + this.nombreDePattes + " pattes et fait " + this.poids);
}

function Oiseau(nombreDePattes, poids, longueurDesAiles) {
  Animal.call(this, nombreDePattes, poids);
  // La fonction Call() appelle une fonction constructeur: en premier paramètre this donne l'objet actuel
  this.longueurDesAiles = longueurDesAiles;
}
Oiseau.prototype = Object.create(Animal.prototype); // permet de lié notre constructeur Oiseau au constructeur père Animal
Oiseau.prototype.constructor = Oiseau;
function Mammifere(typeDePoils) {
    Animal.call(this, nombreDePattes, poids);
    this.typeDePoils = typeDePoils;
}

var perroquet = new Oiseau(2,"5kg","grandes");
perroquet.presentation();
