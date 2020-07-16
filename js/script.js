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

// creo una serie di funzioni attive al click sul bottone Genera

document.getElementById('genera').addEventListener('click', function(){     // 1. compaia #recap
    var button = document.getElementById('genera');
    var recap = document.getElementById('recap');
    recap.classList.add('display-block');
    recap.classList.remove('display-none');
}
);

document.getElementById('genera').addEventListener('click', function(){     // 2. si implementi il campo nome-Cognome
    var nomeCognome = document.getElementById('nome-cognome').value;
    document.getElementById('recap-nome-cognome').innerHTML = nomeCognome;
}
);

document.getElementById('genera').addEventListener('click', function(){     // 3. si generi il numero casuale della carrozza (da 1 a 9)
    var carrozza = Math.floor(Math.random() * 10);
    document.getElementById('recap-carrozza').innerHTML = carrozza;
}
);

document.getElementById('genera').addEventListener('click', function(){     // 4. si generi il codice del treno (da 90000 a 99999)
    var codice = Math.floor((Math.random() * 99999) + 90000);
    document.getElementById('recap-codice').innerHTML = codice;
}
);

document.getElementById('genera').addEventListener('click', function(){     // 5. si implementi il prezzo del biglietto
    var chilometri = document.getElementById('chilometri').value;
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




// ***** ESERCIZIO LEZIONE 3 ***** //

// // Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// // il prezzo del biglietto è definito in base ai km (0.21 € al km)
// // va applicato uno sconto del 20% per i minorenni
// // va applicato uno sconto del 40% per gli over 65
//
// // chiedere all'utente il numero di chilometri che vuole percorrere
// var chilometri = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
//
// // chiedere all'utente l'età
// var eta = parseInt(prompt('Quanti anni hai?'));
//
// // calcolare prezzo del biglietto (0.21 € al km)
// var prezzoKm = 0.21;
// // var prezzoStandard = chilometri * prezzoKm;
// // document.getElementById('prezzo-standard').innerHTML = 'Il costo della tratta è € ' + prezzoStandard;
// //
// // if (eta < 18){ // se età < 18 applicare sconto del 20%
// //     var prezzoMinorenni = prezzoStandard / 100 * 80;
// //     document.getElementById('prezzo-minorenni').innerHTML = 'Ma dato che hai meno di 18 anni, per te costerà € ' + prezzoMinorenni;
// // } else if (eta > 65){ // se età >= 65 applicare sconto del 40%
// //     var prezzoOver = prezzoStandard / 100 * 60;
// //     document.getElementById('prezzo-over').innerHTML = 'Ma dato che hai più di 65 anni, per te costerà € ' + prezzoOver;
// // }
//
// // OPPURE
//
// var prezzo = chilometri * prezzoKm;
//
// if (eta < 18){ // se età < 18 applicare sconto del 20%
//     prezzo -= prezzo * 0.2;
// } else if (eta > 65){ // se età >= 65 applicare sconto del 40%
//     prezzo -= prezzo * 0.4;
// }
//
// prezzo = prezzo.toFixed(2); // per dare un limite ai decimali , ma trasforma il numero in stringa
//
// document.getElementById('prezzo').innerHTML = 'Il tuo biglietto costa € ' + prezzo;
