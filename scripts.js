function interetsComposes(capitalInitial, tauxInteretAnnuel, frequenceComposition, dureeInvestissement) {
    var tauxComposition = tauxInteretAnnuel / frequenceComposition;
    var nombreComposition = frequenceComposition * dureeInvestissement;
    var montantCalculer = capitalInitial * Math.pow(1 + tauxComposition / 100, nombreComposition);
    return montantCalculer;
    //return montantCalculer.toFixed(2); pour s'arrêter à deux chiffres aprês la virgule.
}

var boutonCalculer = document.getElementById('calculer');
boutonCalculer.addEventListener("click",(e)=>{e.preventDefault();});

function calculerInterets() {
    var capitalInitial = parseFloat(document.getElementById('p').value);
    var tauxInteretAnnuel = parseFloat(document.getElementById('r').value);
    var frequenceComposition = 1;
    var dureeInvestissement = parseFloat(document.getElementById('t').value);
    var resultContainer = document.getElementById('result');
    var resultat = interetsComposes(capitalInitial, tauxInteretAnnuel, frequenceComposition, dureeInvestissement);
    resultContainer.innerHTML = resultat+"  "+"FCFA";
}