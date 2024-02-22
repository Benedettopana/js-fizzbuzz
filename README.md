FizzBuzz
===
**Consegna:**
Scrivi un programma che **stampi in console** i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()` oppure concatenando un template literal con innerHTML) un elemento html con il numero o la stringa corretta da mostrare.

**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
## Logica:
1. Creo un ciclo for che esegua 100 cicli.
1. Stampo il contatore del ciclo in console.
1. Creo un if che controlli se il mio contatore dei cicli sia divisibile per 3.
1. Faccio stampare in console "Fizz" invece del numero.
1. Creo un if che controlli se il mio contatore dei cicli sia divisibile per 5.
1. Faccio stampare in console "Buzz" invece del numero.
1. Non annidando le `if` se le condizioni saranno entrambi vere stamperò in console sia "Fizz" che "Buzz".


## BONUS 1
1. Creo un container nell'HTML.
1. Creo un box nel js che vada a stamparsi nella pagina HTML col contenuto del ciclo, seguendo sempre la "logica" precedente dei multipli dei 3 e 5 o entrambi.

## BONUS 2
1. Aggiungo nelle `if` degli stili che rendono più riconoscibili i "Fizz", "Buzz" o entrambi.