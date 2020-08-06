var nome = prompt("Come ti chiami? ");
var sesso = prompt("Inserire il sesso(maschio/femmina): ");

if(sesso == "maschio" || sesso == "Maschio" || sesso == "MASCHIO"){
  document.getElementById('sesso').className = "blue";
}else if(sesso == "femmina" || sesso == "Femmina" || sesso == "FEMMINA"){
  document.getElementById('sesso').className = "red";
}else {
  alert("Inserimento del sesso errato");
}

document.getElementById('sesso').innerHTML = nome;
