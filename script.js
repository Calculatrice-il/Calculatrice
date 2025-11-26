let expression = "";

function ajouter(valeur) {
  expression += valeur;
  document.getElementById("resultat").value = expression;
}

function calculer() {
  try {
    expression = eval(expression);
    document.getElementById("resultat").value = expression;
  } catch (e) {
    document.getElementById("resultat").value = "Erreur";
    expression = "";
  }
}

function effacer() {
  expression = "";
  document.getElementById("resultat").value = "";
}
