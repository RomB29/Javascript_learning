const url = 'https://lesoublisdelinfo.com/api.php';

let requete = new XMLHttpRequest();
// GET 
// requete.open('GET', url);
// requete.responseType = 'json';
// requete.send();

// POST
requete.open('POST', url);
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // nécessaire lorsque l'on utilise la requete POST
requete.responseType = 'json';
requete.send('prenom=John'); // tout doit être attaché

requete.onload = function() {
  if (requete.readyState === XMLHttpRequest.DONE) {
    if (requete.status === 200) {
      let reponse = requete.response;
      console.log(reponse);
    }
    else {
      alert("Un problème est survenu, merci de revenir plus tard.");
    }
  }
  
  
}