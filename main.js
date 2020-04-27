//Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.
// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50
do {
    var lv = parseInt(prompt('Inserisci il livello di gioco: 0(facile), 1(intermedio); 2(difficile))'));
} while (isNaN(lv) || lv < 0 || lv > 2);
if (lv == 0) {
    lv = 100;
} else if (lv == 1) {
    lv = 80;
} else if (lv == 2) {
    lv = 50;
}

var bombe = genera_bombe(lv);
console.log(bombe);
var utente = [];
var vinto = true;
while (utente.length < lv - 16 && vinto) {
    do {
        var giocata = parseInt(prompt('Inserisci un numero compreso tra 1 e ' + lv));
    } while (isNaN(giocata) || giocata < 1 || giocata > lv);
    if (bombe.includes(giocata)) {
        vinto = false;
    } else if (utente.includes(giocata)) {
            alert('numero già giocato');
        } else {
            utente.push(giocata);
        }
    }

    if (vinto) {
        alert('HAI VINTO!');
    } else {
        alert('HAI PERSO! Hai totalizzato: ' + utente.length + 'punti');
    }

function genera_bombe(lv) {
    var bombe = [];
    for (var i = 0; i < 16; i++) {
        bombe.push(Math.floor(Math.random() * lv));
    }
    return bombe;
}
