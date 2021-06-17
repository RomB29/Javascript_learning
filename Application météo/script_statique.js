// Gestion boutton



// Récupérer les INFOS via l'API Météo

//let ville = "Plounevezel";


let villeChoisie; // = "Plounevezel"
//recevoirTemperature(villeChoisie);
if("geolocation" in navigator) {
  navigator.geolocation.watchPosition( (position) => {
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude); 
     
  });
  //recevoirTemperature(villeChoisie);
}
else {
  villeChoisie = "Plounevezel";
  recevoirTemperature(villeChoisie);
}
let btnChangeVille = document.getElementById('changer');
btnChangeVille.addEventListener('click', () => {
  villeChoisie = prompt("Ville à entrer");
  recevoirTemperature(villeChoisie);
});

function recevoirTemperature (ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=f0b2f2073aba8daa258a4268fef8522b&units=metric';
  let requete = new XMLHttpRequest();
  requete.open('GET',url);
  requete.responseType = 'json';
  requete.send();
  requete.onload = function() {
  if (requete.status === 200) {
    let response    = requete.response;
    let temperature = document.getElementById("temperature_label");
    let docVille    = document.getElementById("ville");
    //console.log(response)
    temperature.textContent = response.main.temp
    docVille.textContent    = response.name
  }
 }
}