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
    var codice = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;
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
