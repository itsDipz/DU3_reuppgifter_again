
/*

Webbresursen https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=X
är ett random ord (ganska få ord att välja mellan) av typen X, där X kan vara:
  adjektiv. Då får man ett ord som: "fina", "sura", etc.
  adverb. Då får man ett ord som: "fort", "säkert", etc
  omstandighet. Då får man ett ord som: "på gatan", "hemma", etc.
  pronom. Då får man ett ord som: "de", "mina", "dina", etc.
  substantiv. Då får man ett ord som: "hundarna", "katterna", etc
  verb. Då får man ett ord som: "gick", "vandrade", etc

Resursen är av typen "text".

Studera HTML-koden. Det finns fyra divs med klassen ".showdiv". De har olika id.
Funktionerna nedan (showdiv1, showdiv2, etc) kan användas för att skriva ut på var och en av 
divsen.


*/

function showdiv1 (a) { document.querySelector("#showdiv1").textContent = a; }
function showdiv2 (a) { document.querySelector("#showdiv2").textContent = a; }
function showdiv3 (a) { document.querySelector("#showdiv3").textContent = a; }

/*
    1)  Skriv en function f1 som, när den anropas, skickar en förfrågan om ett adjektiv.
        När resursen (ordet) har kommit ska det stå på showdiv1.
        Du MÅSTE använda funktionerna ovan (showdivX) för att skriva saker på divvarna.
*/

function f1(){
    let promise = fetch("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=adjektiv");
    promise.then(response => response.text()).then(data => {
        showdiv3(data);
    })
    
    
}



/*
    2)  Skriv en function f2 som, när den anropas, skickar en förfrågan om ett verb.
        När resursen (ordet) har kommit ska det stå på showdiv2.
        Du MÅSTE använda funktionerna ovan (showdivX) för att skriva saker på divvarna.
*/

function f2(){
    let promise = fetch("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=verb");
    promise.then(response => response.text()).then(data => {
        showdiv2(data);
    })
}

/*
    3)  Skriv en function f3 som, när den anropas, skickar en förfrågan om ett substantiv och en annan om ett verb.
        Verbet ska visas på showdiv2 och substantivet på showdiv 3.
        Du MÅSTE använda funktionerna ovan (showdivX) för att skriva saker på divvarna.
*/

function f3(){
    let promise = fetch("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=substantiv");
    promise.then(response => response.text()).then(data => {
        showdiv3(data);
    })
}


/*
    4)  Skriv en function f4 som, när den anropas, skickar en förfrågan om ett substantiv, en annan om ett verb
        och en sista om ett adverb.
        När resurserna har kommit ska de visas på showdiv1 (substantiv), showdiv2 (verb) och showdiv3 (adverb).
        De MÅSTE alltid visas i ordning! Först substantivet, sedan verbet och sist adverbet.
        Du MÅSTE använda funktionerna ovan (showdivX) för att skriva saker på divvarna.
*/
function f4(){
    let promise = fetch("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=substantiv");
    promise.then(response => response.text()).then(data => {
        showdiv1(data);
        let promise2 = fetch("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=verb");
            promise2.then(response2 => response2.text()).then(data2 => {
            showdiv2(data2);
            let promise3 = fetch("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=adverb");
                promise3.then(response3 => response3.text()).then(data3 => {
                showdiv3(data3);
        
            })      
        })  
    })
}

f4()