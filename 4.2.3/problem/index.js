
/*

Webbresursen https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=X
är ett random ord (ganska få ord att välja mellan) av typen X, där X kan vara:
  adjektiv. Då får man ett ord som: "fina", "sura", etc.
  adverb. Då får man ett ord som: "fort", "säkert", etc
  omstandighet. Då får man ett ord som: "på gatan", "hemma", etc.
  pronom. Då får man ett ord som: "de", "mina", "dina", etc.
  substantiv. Då får man ett ord som: "hundar", "katter", etc
  verb. Då får man ett ord som: "gick", "vandrade", etc

Resursen är av typen "text".

*/

function showdiv1 (a) { document.querySelector("#showdiv1").textContent = a; }
function getdiv1 (a) { return document.querySelector("#showdiv1").textContent; }

/*
    1)  När användaren klickar på knappen "Ny Sats" ska du, med hjälp av webbresurserna ovan
        skriva en sats i showdiv1. Satsen ska alltid bestå av:
        substantiv + verb + adverb
        i den ordningen.

        Du får endast interagera med showdiv1 via funktionerna showdiv1 och getdiv1 ovan.
        Du måste fixa CSS själv.
*/

function create_sats(){
  fetch("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=substantiv")
  .then(response1 => response1.text())
  .then(data1 => {
      showdiv1(data1);
      fetch("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=verb")
      .then(response2 => response2.text())
      .then(data2 => {
          let previous_text1 = getdiv1();
          showdiv1(previous_text1 + " " + data2)
          fetch("https://maumt.se/dbp/dbp22/chunks_material/resources/one_word.php?kind=adverb")
          .then(response3 => response3.text())
          .then(data3 => {
              let previous_text2 = getdiv1();
              showdiv1(previous_text2 + " " + data3)
          })
      })
  })
}

document.querySelector("button").addEventListener("click", create_sats)