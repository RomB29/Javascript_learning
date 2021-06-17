class Animal {
    constructor(nombreDePattes, poids) {
        this.nombreDePattes = nombreDePattes;
        this.poids           = poids;
    }
    presentation() {
        console.log("Cet animal a " + this.nombreDePattes + " pattes avec un poids de " + this.poids);
    }
}

class Oiseau extends Animal{ // équivalent à Oiseau.prototype = Object.create(Animal.prototype)
    constructor(nombreDePattes, poids, longueurDesAiles) {
        super(nombreDePattes, poids); // Nous héritons de la classe Animal
        this.longueurDesAiles = longueurDesAiles;
    }
    voler () {
        console.log("L'oiseau vole");
    }
}

var perroquet = new Oiseau(2, "4kg", "grandes");
console.log(perroquet);
perroquet.presentation();
perroquet.voler()