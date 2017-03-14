var arrayFintiLuke = $('div.span_1_of_6');
var risultato = $('div.risultato');
var barraPericolo = $('div.barraPericolo');
var penalita = $('div.penalita');
var forzaPopolo = $('div.forzaPopolo');

var arrayValoriTotali = [];


//inizializzare un contatore
var conteggioFintiLuke = 0;

//contatore per la penalità
var penalita = 0;


(function(){

  $.each(arrayFintiLuke, function(index,element){

      function random() {
        var numero = Math.floor(Math.random() * 10) + 1

        //controllare che esista già il numero '10', ovvero Luke Cage
        if($.inArray(10, arrayValoriTotali) != -1) {
          return Math.floor(Math.random() * 9) + 1;
        } else {
          arrayValoriTotali.push(numero);
          return numero;
        }


      }

      var random = random();
      $(element).text(random);
    })



})();

function controllaBarraPunteggio() {
  if(conteggioFintiLuke < 5) {
    $(barraPericolo).css('background-color', 'green');
  } else if(conteggioFintiLuke == 5) {
      $(barraPericolo).css('background-color', 'yellow');
    } else if(conteggioFintiLuke > 5 &&  conteggioFintiLuke <= 7) {
      $(barraPericolo).css('background-color', 'orange');
    } else if(conteggioFintiLuke > 7) {
      $(barraPericolo).css('background-color', 'red');
    }
    console.debug(conteggioFintiLuke);
} //fine controllaBarraPunteggio

function visualizzaSoloFintiLuke() {

  var forzaPopolo = 0;

  $.each(arrayFintiLuke, function(index,element){

      if(!$(element).hasClass('fakeLuke')) {
        $(element).css('display','none');
      } else {
        var numero = $(element).text();
        forzaPopolo = forzaPopolo + parseInt(numero);
//TODO: CONTINUARE CON FORZA POPOLO
        $(forzaPopolo).text(forzaPopolo.toString());
      }
    })

    console.debug(forzaPopolo);
}

$(document).ready(function(){

  //assegnare l'onclick event ai div
  $(arrayFintiLuke).on("click", function(){
    if(!$(this).hasClass('fakeLuke')) {
      var numero = $(this).text();
      if(numero == 10) {
        $(risultato).text("hai trovato Luke!");
        visualizzaSoloFintiLuke();
      } else {
        $(risultato).text("HAI PERSO");
        $(this).addClass('fakeLuke');
        conteggioFintiLuke = conteggioFintiLuke + 1;
      }

        controllaBarraPunteggio();
    } else {
      $(risultato).text("HAI GIA' CONTROLLATO!");
      penalita = penalita + 1;
      //FIXME: SISTEMARE L'INSERIMENTO DI PENALITA'
      $(penalita).text(penalita.toString());

    }






  })
});
