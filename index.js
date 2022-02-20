/*1)script permettant de récupérer les données de cette page :
https://www.welcometothejungle.com/fr/jobs*/

function recuperer_data() {
	//url et  description json
    fetch("https://www.welcometothejungle.com/fr/jobs?page=1&query=designer&aroundQuery=",{
          method:"GET",
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },     
    })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
        //affichage  des resultats
      document
          .getElementById("id_resultat_jobs")
          .innerText = value.queryString.jobs
              .innerText = value.queryString.page
              .innerText = value.queryString.query
              .innerText = value.queryString.aroundQuery;
    })
    .catch(function(err) {
      // Une erreur est survenue
    });
  }
  
  //ajouter un evenement recuperer_data sur le bouton id_rechercher_jobs
  document
    .getElementById("id_rechercher_jobs")
    .addEventListener("click", recuperer_data);
  