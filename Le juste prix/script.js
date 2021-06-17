// Etape 1 - Sélectionner nos éléments
let input      = document.querySelector("#prix");  
let error      = document.querySelector(".text-danger"); // tester avec .text-danger --> fonctionne ou small
let formulaire = document.querySelector("#formulaire");
// Etape 2 - Cacher l'erreur
error.style.display = "none"; 
// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * (1001)); // *((max - min + 1) + min)
let coups           = 0;
let nombreChoisi;

verifier = (nombre) => {
    let instruction = document.createElement('div'); // créer un élément
    if(nombre < nombreAleatoire) { // +
        instruction.innerHTML = "#" + coups + " ( " + nombre + " ) C'est plus !";
        instruction.className = "instruction plus"; 
    }
    else if (nombre > nombreAleatoire) { // -
        instruction.innerHTML = "#" + coups + " ( " + nombre + " ) C'est moins !";
        instruction.className = "instruction moins";
    }
    else {  // félicitation
        instruction.innerHTML = "#" + coups + " ( " + nombre + " ) " +
        "Félicitations ! un bonbon!";
        instruction.className = "instruction fini";
        nombreAleatoire = Math.floor(Math.random() * (1001)); // relance le jeu automatiquement
    }

    // Ajouter l'élément dans l'html
    document.querySelector("#instructions").prepend(instruction);
}
// Etape 6 - Créer la fonction vérifier




// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if (isNaN(input.value) == false) { // isNaN ==> is not a number
        error.style.display = "none";
    }
    else {
        error.style.display = "inline";
    }
});
// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault(); // permet d'enlever l'évènement par défault submit qui renvoie à une nouvelle page
    if (isNaN(input.value) || input.value == '') {
        input.style.borderColor = "red";
    }
    else {
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = ''   
        verifier(nombreChoisi);    
    }
});

