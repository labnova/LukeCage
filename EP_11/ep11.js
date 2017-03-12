var pianiTotali = ["Sotterranei", "PianoTerra", "PrimoPiano", "AtticoFinale"];

var pianoAttualeGlobale;

(function(){

 //dichiarare piano
  var Piano = function(idPiano) {

      this.idPiano = idPiano;
      pianoAttualeGlobale = idPiano;
      this.returnPianoAttuale = function() {
        return idPiano;
      }
      this.numeroStanze = function(){
        switch (this.idPiano) {
          case "Sotterranei":
              return Math.floor(Math.random() * 3) + 1
            break;
            case "PianoTerra":
              return Math.floor(Math.random() * 5) + 1
            break;
            case "PrimoPiano":
              return Math.floor(Math.random() * 6) + 1
            break;
            case "AtticoFinale":
              return Math.floor(Math.random() * 4) + 1
            break;
          default: break;
      };
    };
      this.numeroNemici = function() {

          switch (this.idPiano) {
            case "Sotterranei":
                return Math.floor(Math.random() * 4) + 1
              break;
              case "PianoTerra":
                return Math.floor(Math.random() * 8) + 1
              break;
              case "PrimoPiano":
                return Math.floor(Math.random() * 9) + 1
              break;
              case "AtticoFinale":
                return Math.floor(Math.random() * 12) + 4
              break;
            default: break;

          }
      };
  } //fine object piano


var potenzaNemici=0;

  function getPotenzaNemico(nomePiano) {


    var nemico = new Nemico(nomePiano)
    var nemicoPiano = nemico.randomNemicoGenerator();
    if(nemicoPiano == "zip") {
      var zip = new Zip(nomePiano);
      potenzaNemici = potenzaNemici + zip.potenza();
      return nemico.nome + " potenza singolo: " +  zip.potenza();

    } else {
      var sugar = new Sugar(nomePiano);
      potenzaNemici = potenzaNemici + sugar.potenza();
      return nemico.nome + " potenza singolo: " + sugar.potenza();
    }

  }

var pianoAttualeGlobale = new Piano();

  //CREARE NEMICI SULLA BASE DEI DATI INPUT
  var Nemico = function(numeroNemici) {
    this.nomePiano = pianoAttualeGlobale;
    this.numeroNemici = numeroNemici;
    this.creaGruppo = function(){
      var arrayDaRitornare = [];
      var conteggio = 1;

      while (this.numeroNemici-1 >= 0) {
        arrayDaRitornare.push("<p>n."+conteggio+":" + getPotenzaNemico(this.nomePiano) +"</p><br/>");
        conteggio = conteggio+1;

        this.numeroNemici  = this.numeroNemici  - 1;
      }
      console.log(this.nomePiano + arrayDaRitornare);
      return arrayDaRitornare;
    };
    this.randomNemicoGenerator = function() {
      var nemico = ["zip", "sugar"];

      var nomeNemico = nemico[Math.floor(Math.random()*nemico.length)]
      this.nome = nomeNemico;
      return nomeNemico;
    };


  } //fine object Nemico

  var Zip = function() {
    this.velocita = function(piano) {
      switch (piano) {
        case "Sotterranei":
            return -4000;
          break;
          case "PianoTerra":
            return -5000;
          break;
          case "PrimoPiano":
            return -6000;
          break;
          case "AtticoFinale":
            return -7000;
          break;
        default:   return -4000; break;

      }

    };
    this.potenza = function() {
      return 2000;
    };
    this.rabbia = function(piano) {
      return 3000;
    };
    this.paura = function() {
      return -2000;
    };
    this.foga = function() {
      return -1000;
    }
  } //fine object zip

  var Sugar = function(piano) {
    this.velocita = function() {
      return 4000;
    };
    this.potenza = function(piano) {
      return 6000;
    };
    this.rabbia = function(piano) {
      return 3000;
    };
    this.paura = function() {
      return -2000;
    };
    this.foga = function() {
      return -1000;
    }
  } //fine object sugar

for (var i = 0; i < pianiTotali.length; i++) {
  creaDatiPiano(pianiTotali[i]);
}

function creaDatiPiano(piano) {
  if(piano != undefined) {
    var pianoAttuale = new Piano(piano);
    var nomePiano = pianoAttuale.returnPianoAttuale();
    var numeroNemici = pianoAttuale.numeroNemici();
    var selectorPianoAttuale = "#pianoAttuale-"+nomePiano;
    var selectorNumeroStanze = "#numeroStanze-"+nomePiano;
    var selectorNumeroNemici = "#numeroNemici-"+nomePiano;
    $(selectorPianoAttuale).text(pianoAttuale.returnPianoAttuale());
    $(selectorNumeroStanze).text(pianoAttuale.numeroStanze());
    $(selectorNumeroNemici).text(numeroNemici);

    var nemicoPiano = new Nemico(numeroNemici);
    var creaGruppo = nemicoPiano.creaGruppo();



    }
    //inserire anche il nome dei nemici
    $("#nomeNemici-"+nomePiano).append(creaGruppo);

    //inserire anche la potenza complessiva
    $("#potenzaNemici-"+nomePiano).append(potenzaNemici);

    potenzaNemici = 0;

  } //fine function creaPiano




var LukeCage = function(piano){
  this.potenza = function() {
    return 2000;
  };
  this.velocita = function() {
    return this.potenza * 3;
  };
  this.sbaglioRabbia = function(piano) {

    switch (piano) {
      case "Sotterranei":
          return -144;
        break;
        case "PianoTerra":
          return -244;
        break;
        case "PrimoPiano":
          return -344;
        break;
        case "AtticoFinale":
          return -444;
        break;
      default:   return -144; break;

    }


    }

  };
  this.foga = function(piano) {
    switch (piano) {
      case "Sotterranei":
          return -133;
        break;
        case "PianoTerra":
          return -344;
        break;
        case "PrimoPiano":
          return -444;
        break;
        case "AtticoFinale":
          return -544;
        break;
      default:   return -133; break;

    }

  }




//far salire i valori in base al piano in cui si trovano i nemici

})();
