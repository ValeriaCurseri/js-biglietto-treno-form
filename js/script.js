// ***** ESERCIZIO LEZIONE 9 ***** //

// Partendo dall'esercizio della scorsa settimana aggiungiamo la parte visiva come da screenshot
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.



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
