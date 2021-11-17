    // Pour saisir la modale
var modal = document.getElementById('simpleModal');
    //Pour saisir le bouton
var modalBtn = document.getElementById('modalBtn');
    
                      /* Ecouteur d'evenemnts*/

    //ecouteur pour l'ouverture
modalBtn.addEventListener('click', openModal);
    //ecouteur pour fermeture = clique hors de la Modale
window.addEventListener('click', clickHorsModal);

                     /*  Fonctions*/

//La fonction openModal executé au clic
function openModal(){
    modal.style.display = 'block';
}
//condition et target pour bien s assurer de bien cibler
function clickHorsModal(e){
    if(e.target==modal){
        modal.style.display = 'none';
    }
}
