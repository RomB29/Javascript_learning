function addition(...nombres) { // ... permet de prendre dans ce cas de prendre tout les paramètres d'entrée comme un tableau
    let resultat = 0;
    nombres.forEach(nombre => {
        resultat += nombre;
    });
    console.log(resultat);
}

addition(4, 9, 5, 415, 78, 54);