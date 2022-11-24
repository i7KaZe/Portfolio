let affichage12h = true;

/**
 * Affiche la date du jour et l'heure
 */
function afficheHeure(){
    let date = new Date();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    let periode = affichage12h ? ' AM' : '';

    let annee = date.getFullYear();
    let mois = date.getMonth() + 1;
    let jour = date.getDate();
    let jourSemaine = date.getDay();
    let jourTexte = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
    ];

    let displayDate = document.getElementById('affichage-date');
    let displayHour = document.getElementById('affichage-heure');



    if (affichage12h) {
        // En mode 12h quand il est midi on doit afficher PM
        periode = heure >= 12 ? "PM" : periode;
        // L'heure doit être égale à 12 quand il est minuit
        heure = heure == 0 ? 12 : heure;
        // Quand on est en affichage sur 12h, on soustrait 12 à l'heure
        heure = heure > 12 ? heure - 12 : heure;
    }

    heure = ajouteZero(heure);
    minute = ajouteZero(minute);
    seconde = ajouteZero(seconde);
    mois = ajouteZero(mois);
    jour = ajouteZero(jour);

    displayHour.innerText = heure + ':' + minute +':' + seconde + periode;
    displayDate.innerText = jourTexte[jourSemaine] + ' ' + annee + '-' + mois + '-' + jour;

}

/**
 * Ajout d'un 0 quand la valeur est inférieur à 10
 * 
 * @param {number} nombre Le nombre à modifier selon ça valeur.
 * @returns Le nombre dont on a ajouté un 0 ou pas.
 */
 function ajouteZero(nombre){
    if(nombre < 10){
        nombre = '0' + nombre;
    }

    return nombre;
}


// Affiche l'heure au chargement de la page
afficheHeure();
// Affiche ensuite l'heure à toutes les secondes
setInterval(afficheHeure, 1000);



let iconePeriode = document.querySelector('#icon_periode');

mafonction = (texte) => console.log(texte);

// iconePeriode.addEventListener("click", () => {
//     this.classList.toggle("MAth");
// })

// iconePeriode.classList.add("Math");
// iconePeriode.classList.remove("far");