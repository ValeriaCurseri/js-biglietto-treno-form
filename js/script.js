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

document.getElementById('genera').addEventListener('click', function(){
    var button = document.getElementById('genera');                         // 1. compaia #recap
    var recap = document.getElementById('recap');
    recap.classList.add('display-block');
    recap.classList.remove('display-none');
    var nomeCognome = document.getElementById('nome-cognome').value;        // 2. si implementi il campo nome-Cognome
    document.getElementById('recap-nome-cognome').innerHTML = nomeCognome;
    var carrozza = Math.floor(Math.random() * 10);                          // 3. si generi il numero casuale della carrozza (da 1 a 9)
    document.getElementById('recap-carrozza').innerHTML = carrozza;
    var codice = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;   // 4. si generi il codice del treno (da 90000 a 99999)
    document.getElementById('recap-codice').innerHTML = codice;
    var chilometri = document.getElementById('chilometri').value;           // 5. si implementi il prezzo del biglietto
    var eta = document.getElementById('età').value;
    var prezzo = 0.21 * chilometri;
    prezzo = prezzo.toFixed(2);
    var offerta = 'Biglietto standard';
    if (eta == 'minorenne'){
        prezzo *= 0.8;
        prezzo = prezzo.toFixed(2);
        document.getElementById('recap-costo').innerHTML = '€ ' + prezzo;
        offerta = 'Biglietto scontato per minori di 18 anni';
        document.getElementById('recap-offerta').innerHTML = offerta;
    } else if (eta == 'over'){
        prezzo *= 0.6;
        prezzo = prezzo.toFixed(2);
        document.getElementById('recap-costo').innerHTML = '€ ' + prezzo;
        offerta = 'Biglietto scontato per over 65';
        document.getElementById('recap-offerta').innerHTML = offerta;
    } else {
        document.getElementById('recap-costo').innerHTML = '€ ' + prezzo;
        document.getElementById('recap-offerta').innerHTML = offerta;
    }
}
);

// creo una funzione che pulisca i dati al click sul bottone Annulla

document.getElementById('annulla').addEventListener('click', function(){
    location.reload();
}
);
