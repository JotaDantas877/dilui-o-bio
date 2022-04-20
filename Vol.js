const calcular = document.getElementById('diluicao');

var calculate    = document.getElementById("calculate");
var result       = document.getElementById("result");

function calculatePercentage() {
  var n1 = parseFloat(document.getElementById("first").value);
  var n2 = parseFloat(document.getElementById("second").value);
  var n3 = parseFloat(document.getElementById("terce").value);  
  var v1 =  (n3 * n2) / n1;
  
  result.innerHTML = "O volume inical corresponde a " + v1.toFixed(2) + "ml da concentração inical.";
}

calculate.addEventListener('click', calculatePercentage);