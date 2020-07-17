// ***** ESERCIZIO LEZIONE 9 ***** //

// Partendo dall'esercizio della scorsa settimana aggiungiamo la parte visiva come da screenshot
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.


// ***** funzioni ***** //

// creo una funzione attiva al click sul bottone Genera

var genera = document.getElementById('genera');

genera.addEventListener('click', function(){

    // 1. compaia #recap
    var recap = document.getElementById('recap');
    recap.classList.add('display-block');
    recap.classList.remove('display-none');

    // 2. si implementi il campo nome-Cognome
    var nomeCognome = document.getElementById('nome-cognome').value;
    document.getElementById('recap-nome-cognome').innerHTML = nomeCognome;

    // 3. si generi il numero casuale della carrozza (da 1 a 9)
    var carrozza = generaRandom(1,10);
    document.getElementById('recap-carrozza').innerHTML = carrozza;

    // 4. si generi il codice del treno (da 90000 a 99999)
    var codice = generaRandom(90000,100000);
    document.getElementById('recap-codice').innerHTML = codice;

    // 5. si implementi il prezzo del biglietto
    var chilometri = document.getElementById('chilometri').value;
    var eta = document.getElementById('età').value;
    var prezzo = 0.21 * chilometri;
    var offerta = 'Biglietto standard';
    if (eta == 'minorenne'){
        prezzo -= prezzo * 0.2;
        prezzo = prezzo.toFixed(2);
        offerta = 'Biglietto scontato per minori di 18 anni';
    } else if (eta == 'over'){
        prezzo -= prezzo * 0.4;
        prezzo = prezzo.toFixed(2);
        offerta = 'Biglietto scontato per over 65';
    }
    document.getElementById('recap-costo').innerHTML = '€ ' + prezzo.toFixed(2);;
    document.getElementById('recap-offerta').innerHTML = offerta;
}
);

// creo una funzione per la generazione random dei numeri

function generaRandom(min,max){
    return Math.floor(Math.random()*(max - min) + min);
}

// creo una funzione che pulisca i dati al click sul bottone Annulla

var annulla = document.getElementById('annulla');

annulla.addEventListener('click', function(){
    var recap = document.getElementById('recap');                           // 1. compaia #recap
    recap.classList.add('display-none');
    recap.classList.remove('display-block');
    // location.reload();
}
);
