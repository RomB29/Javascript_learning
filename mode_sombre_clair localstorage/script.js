let btnMode  = document.getElementById("mode"); // let btnMode = document.querySelector('#mode');
let theme    = document.querySelector("div span");

if(localStorage.getItem("theme")){
  if (localStorage.getItem("theme") == "sombre") {
    modeSombre();
  }
}

btnMode.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.className = '';
    theme.textContent = "Thème sombre";
    localStorage.setItem("theme","clair"); 
  } 
  else {
    modeSombre();
  }
});

function modeSombre ()  {
  document.body.classList.add("dark");
  theme.textContent = "Thème clair";
  localStorage.setItem("theme","sombre");
}