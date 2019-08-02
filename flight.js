const vols = [{
  destination: 'Martinique',
  date_depart: '01/25/2019',
  compagnie_aerienne: 'Ryanair',
  numVol: 'xxxxx',
  prix: '350',
  dureeTrajet: '6'
},
{
  destination: 'Londres',
  date_depart: '07/25/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '150',
  dureeTrajet: '2'
},
{
  destination: 'Paris',
  date_depart: '08/12/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '50',
  dureeTrajet: '1'
},
{
  destination: 'Mexico',
  date_depart: '09/03/2019',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '1350',
  dureeTrajet: '8'
},
{
  destination: 'Tokyo',
  date_depart: '05/12/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '750',
  dureeTrajet: '14'
},
{
  destination: 'Tokyo',
  date_depart: '02/12/2020',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '850',
  dureeTrajet: '14'
},
{
  destination: 'Paris',
  date_depart: '03/13/2019',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '666',
  dureeTrajet: '14'
}
];

///////////////////////////////////////
//Exercice 1 - Afficher tous les vols//
///////////////////////////////////////


vols.forEach((vol) => {

  let contenu = '<div class="container"><ul><li>Destination : ' + vol.destination +'</li><li>Date de départ : ' + vol.date_depart +'</li><li>Compagnie aérienne : ' + vol.compagnie_aerienne +'</li><li>Numéro de vol : '+ vol.numVol +'</li><li>Prix : '+ vol.prix +'€</li><li>Durée du trajet : ' + vol.dureeTrajet +' heures</li></ul></div>';

  document.getElementById('all_flights').insertAdjacentHTML('beforeEnd', contenu);
});

///////////////////////////////////////////
//Exercice 2 - Durée du trajet < 7 heures//
///////////////////////////////////////////

vols.forEach((vol) => {

  let contenu = '<div class="container"><ul><li>Destination : ' + vol.destination +'</li><li>Date de départ : ' + vol.date_depart +'</li><li>Compagnie aérienne : ' + vol.compagnie_aerienne +'</li><li>Numéro de vol : '+ vol.numVol +'</li><li>Prix : '+ vol.prix +'€</li><li>Durée du trajet : ' + vol.dureeTrajet +' heures</li></ul></div>';

  let dureeTrajet = parseInt(vol.dureeTrajet);

  if(dureeTrajet < 7) {
     document.getElementById('under7hours').insertAdjacentHTML('beforeEnd', contenu);
  }

});

////////////////////////////////////
//Exercice 3 - Air France et Tokyo//
////////////////////////////////////

vols.forEach((vol) => {

  let contenu = '<div class="container"><ul><li>Destination : ' + vol.destination +'</li><li>Date de départ : ' + vol.date_depart +'</li><li>Compagnie aérienne : ' + vol.compagnie_aerienne +'</li><li>Numéro de vol : '+ vol.numVol +'</li><li>Prix : '+ vol.prix +'€</li><li>Durée du trajet : ' + vol.dureeTrajet +' heures</li></ul></div>';

  if(vol.destination === 'Tokyo' && vol.compagnie_aerienne === 'Air france') {
     document.getElementById('AFTokyo').insertAdjacentHTML('beforeEnd', contenu);
  }

});

//////////////////////////////////////////
//Exercice 4 - Tarif < 700€ + Air France//
//////////////////////////////////////////

vols.forEach((vol) => {

  let contenu = '<div class="container"><ul><li>Destination : ' + vol.destination +'</li><li>Date de départ : ' + vol.date_depart +'</li><li>Compagnie aérienne : ' + vol.compagnie_aerienne +'</li><li>Numéro de vol : '+ vol.numVol +'</li><li>Prix : '+ vol.prix +'€</li><li>Durée du trajet : ' + vol.dureeTrajet +' heures</li></ul></div>';

  let tarif = parseInt(vol.prix);

  if(vol.compagnie_aerienne === 'Air france' && tarif < 700) {
     document.getElementById('AF700').insertAdjacentHTML('beforeEnd', contenu);
  }

});

///////////////////////////////////////
//Exercice 5 - A partir d'aujourd'hui//
///////////////////////////////////////


vols.forEach((vol) => {

  let contenu = '<div class="container"><ul><li>Destination : ' + vol.destination +'</li><li>Date de départ : ' + vol.date_depart +'</li><li>Compagnie aérienne : ' + vol.compagnie_aerienne +'</li><li>Numéro de vol : '+ vol.numVol +'</li><li>Prix : '+ vol.prix +'€</li><li>Durée du trajet : ' + vol.dureeTrajet +' heures</li></ul></div>';

  let date_depart = vol.date_depart.split('/');

  let mois_depart = parseInt(date_depart[0]);
  let jour_depart = parseInt(date_depart[1]);
  let annee_depart = parseInt(date_depart[2]);

  
  const now = new Date(); 

  const annee = now.getFullYear();
  const mois = now.getMonth()+1;
  
  const jour = ('0'+now.getDate()   ).slice(-2);

  if(annee_depart > annee || (annee_depart === annee && mois_depart > mois) || (annee_depart === annee && mois_depart === mois && jour_depart >= jour)) {
    document.getElementById('date_apres_ajd').insertAdjacentHTML('beforeEnd', contenu);
  }


});

//////////////////////////////////
//Exercice 6 - Avant aujourd'hui//
//////////////////////////////////

vols.forEach((vol) => {

  let contenu = '<div class="container"><ul><li>Destination : ' + vol.destination +'</li><li>Date de départ : ' + vol.date_depart +'</li><li>Compagnie aérienne : ' + vol.compagnie_aerienne +'</li><li>Numéro de vol : '+ vol.numVol +'</li><li>Prix : '+ vol.prix +'€</li><li>Durée du trajet : ' + vol.dureeTrajet +' heures</li></ul></div>';

  let date_depart = vol.date_depart.split('/');

  let mois_depart = parseInt(date_depart[0]);
  let jour_depart = parseInt(date_depart[1]);
  let annee_depart = parseInt(date_depart[2]);

  
  const now = new Date(); 

  const annee = now.getFullYear();
  const mois = now.getMonth()+1;
  
  const jour = ('0'+now.getDate()   ).slice(-2);

  if(annee_depart < annee || (annee_depart === annee && mois_depart < mois) || (annee_depart === annee && mois_depart === mois && jour_depart <= jour)) {
    document.getElementById('date_avant_ajd').insertAdjacentHTML('beforeEnd', contenu);
  }


});

/////////////////////////////////
//Exercice 7 - Réduction de 20%//
/////////////////////////////////

vols.forEach((vol) => {

  reduction = vol.prix - (vol.prix * 0.2);

  let contenu = '<div class="container"><ul><li>Destination : ' + vol.destination +'</li><li>Date de départ : ' + vol.date_depart +'</li><li>Compagnie aérienne : ' + vol.compagnie_aerienne +'</li><li>Numéro de vol : '+ vol.numVol +'</li><li>Prix : '+ reduction +'€</li><li>Durée du trajet : ' + vol.dureeTrajet +' heures</li></ul></div>';

  document.getElementById('reduction').insertAdjacentHTML('beforeEnd', contenu);

});

////////////////////////////////////////////////////
//Exercice 8 - Paris entre 06/02/2019 & 09/06/2019//
////////////////////////////////////////////////////

vols.forEach((vol) => {

  let contenu = '<div class="container"><ul><li>Destination : ' + vol.destination +'</li><li>Date de départ : ' + vol.date_depart +'</li><li>Compagnie aérienne : ' + vol.compagnie_aerienne +'</li><li>Numéro de vol : '+ vol.numVol +'</li><li>Prix : '+ vol.prix +'€</li><li>Durée du trajet : ' + vol.dureeTrajet +' heures</li></ul></div>';

  let date_depart = vol.date_depart.split('/');

  let mois_depart = parseInt(date_depart[0]);
  let jour_depart = parseInt(date_depart[1]);
  let annee_depart = parseInt(date_depart[2]);

 if(vol.destination === 'Paris' && ((annee_depart > 2019 || (annee_depart === 2019 && mois_depart > 2) || (annee_depart === 2019 && mois_depart === 2 && jour_depart >= 6)) && (annee_depart < 2019 || (annee_depart === 2019 && mois_depart < 6) || (annee_depart === 2019 && mois_depart === 6 && jour_depart <= 9)))) {
    document.getElementById('intervalle').insertAdjacentHTML('beforeEnd', contenu);
 }

});

///////////////////////////////////////////////////////////
//Exercice 9 - Lufthansa, prix < 900 et durée < 15 heures//
///////////////////////////////////////////////////////////

vols.forEach((vol) => {

  let contenu = '<div class="container"><ul><li>Destination : ' + vol.destination +'</li><li>Date de départ : ' + vol.date_depart +'</li><li>Compagnie aérienne : ' + vol.compagnie_aerienne +'</li><li>Numéro de vol : '+ vol.numVol +'</li><li>Prix : '+ vol.prix +'€</li><li>Durée du trajet : ' + vol.dureeTrajet +' heures</li></ul></div>';


 if(vol.compagnie_aerienne === 'Lufthansa' && vol.prix < 900 && vol.dureeTrajet < 15) {
    document.getElementById('luft').insertAdjacentHTML('beforeEnd', contenu);
 }

});


//Affichez tous les vols (destination - Date de départ- compagnie aérienne -
//numero de vol - prix - durée du trajet)

//Afficher tous les vols dont le trajet est inférieur à 7h. (idem)

//Afficher les vols à destination de Tokyo et qui voyagent avec Air france (idem)

//Afficher tous les vols dont le tarif est inférieur à 700 euros et qui
//voyagent avec Air france

//Afficher tous les vols par date :
//à partir de la date d'aujourd'hui

//Afficher tous les vols par date :
//avant la date d'aujourd'hui

//Appliquer une reduc de 20% sur chaque vol organiser après 2019 et les afficher

//Afficher tous les vols pour Paris organisés entre le "06/02/2019" et le "09/06/2019".

//Afficher tous les vols qui voyagent avec 'Lufthansa' dont le prix est inférieur à 900 euros
//et dont la durée du trajet est inférieur à 15 heures



