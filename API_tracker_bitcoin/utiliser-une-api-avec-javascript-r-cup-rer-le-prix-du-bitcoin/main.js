var XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest;
const url = 'https://blockchain.info/ticker';


let requete = new XMLHttpRequest(); // Créer un objet
requete.open('GET', url); // Premier paramètre GET / POST
requete.responseType = 'json'; // Nous attendons du JSON
requete.send(); // Nous envoyons notre requête

// Dès qu'on reçoit une réponse, cette fonction est executée
requete.onload = function() {
    //if (requete.readyState === XMLHttpRequest.DONE) { // === Pour vérifier si la valeur est identique et également du même type
        if (requete.status === 200) {
            let response = requete.responses; // On stock la réponse
            console.log(response);
        }
    //}
}