
/*

Varje gång vi ber om resursen med URL:et https://maumt.se/dbp/dbp22/chunks_material/resources/color_distribution.php
får vi (random) ett av dessa CSS-färgnamn: limegreen, lightcoral, aqua eller hotpink.

Det som är lurigt är att vi får vissa färgnamn oftare än andra. Övningen går ut på att lista ut hur ofta
vi får varje namn. Med andra ord, om vi ber om resursen 100 gånger, hur många av dessa kommer vi att få limegreen,
hur många lightcoral, etc? Vi ska skriva ett program som ger oss lite insikter i detta.

Varje gång vi klickar på knappen "Check Distribution" ska vi skicka 50 förfrågningar till servern. Allteftersom
förfrågningarna kommer tillbaka till oss så uppdaterar vi "färglådorna". Se video.

Hur du vill ha tips på hur detta kan lösas, se längst ner i denna fil.

(Använd papper och penna för att bilda er en idé om hur detta kan lösas innan ni börjar koda)

*/

function show_done_text(){
  let green_dom_counter = parseInt(document.querySelector(".limegreen").innerHTML);
  let lightcoral_counter = parseInt(document.querySelector(".lightcoral").innerHTML);
  let hotpink_counter = parseInt(document.querySelector(".hotpink").innerHTML);
  let aqua_counter = parseInt(document.querySelector(".aqua").innerHTML);
  document.querySelector(".feedback").innerHTML = "Receiving resources ...";
  
  if(green_dom_counter + lightcoral_counter + hotpink_counter + aqua_counter === 50){
    document.querySelector(".feedback").innerHTML = "Done.";
  }
}
function init_fetch_all_colors(){
  let parent_element = document.querySelector(".distribution");
  parent_element.innerHTML = "";
  document.querySelector(".feedback").innerHTML = "Receiving resources ...";
  let array_of_all_color_doms = [];
  for (let index = 0; index < 50; index++) {
    fetch("https://maumt.se/dbp/dbp22/chunks_material/resources/color_distribution.php")
    .then(res => res.text())
    .then(data => {
      switch (data) {
        case "limegreen":
          if(document.querySelector(".limegreen") === null || document.querySelector(".limegreen") === undefined)
          {
            let limegreen_dom = document.createElement("div");
            array_of_all_color_doms.push(limegreen_dom);
            limegreen_dom.classList.add("limegreen");
            limegreen_dom.classList.add("color_column");
            limegreen_dom.innerHTML = 1;
            limegreen_dom.style.backgroundColor = "limegreen";
            parent_element.appendChild(limegreen_dom);
            calculate_width(array_of_all_color_doms);
            show_done_text()
          }
          else{
            let limegreen_dom = document.querySelector(".limegreen");
            let limegreen_dom_counter = parseInt(limegreen_dom.innerHTML);
            limegreen_dom_counter += 1;
            limegreen_dom.innerHTML = "";
            limegreen_dom.innerHTML = limegreen_dom_counter;
            parent_element.appendChild(limegreen_dom);
            calculate_width(array_of_all_color_doms);
            show_done_text()
          }
         break;

        case "lightcoral":
          if(document.querySelector(".lightcoral") === null || document.querySelector(".lightcoral") === undefined)
          {
            let lightcoral_dom = document.createElement("div");
            array_of_all_color_doms.push(lightcoral_dom);
            lightcoral_dom.classList.add("lightcoral");
            lightcoral_dom.classList.add("color_column");
            lightcoral_dom.innerHTML = 1;
            lightcoral_dom.style.backgroundColor = "lightcoral";
            parent_element.appendChild(lightcoral_dom);
            calculate_width(array_of_all_color_doms);
            show_done_text()
          }
          else{
            let lightcoral_dom = document.querySelector(".lightcoral");
            let lightcoral_dom_counter = parseInt(lightcoral_dom.innerHTML);
            lightcoral_dom_counter += 1;
            lightcoral_dom.innerHTML = "";
            lightcoral_dom.innerHTML = lightcoral_dom_counter
            calculate_width(array_of_all_color_doms);
            show_done_text()
          }
         break;

        case "hotpink":
          if(document.querySelector(".hotpink") === null || document.querySelector(".hotpink") === undefined)
          {
            let hotpink_dom = document.createElement("div");
            array_of_all_color_doms.push(hotpink_dom);
            hotpink_dom.classList.add("hotpink");
            hotpink_dom.classList.add("color_column");
            hotpink_dom.innerHTML = 1;
            hotpink_dom.style.backgroundColor = "hotpink";
            parent_element.appendChild(hotpink_dom);
            calculate_width(array_of_all_color_doms);
            show_done_text()
          }
          else{
            let hotpink_dom = document.querySelector(".hotpink");
            let hotpink_dom_counter = parseInt(hotpink_dom.innerHTML);
            hotpink_dom_counter += 1;
            hotpink_dom.innerHTML = "";
            hotpink_dom.innerHTML = hotpink_dom_counter
            calculate_width(array_of_all_color_doms);
            show_done_text()
          }
         break;

        case "aqua":
          if(document.querySelector(".aqua") === null || document.querySelector(".aqua") === undefined)
          {
            let aqua_dom = document.createElement("div");
            array_of_all_color_doms.push(aqua_dom);
            aqua_dom.classList.add("aqua");
            aqua_dom.classList.add("color_column");
            aqua_dom.innerHTML = 1;
            aqua_dom.style.backgroundColor = "aqua";
            parent_element.appendChild(aqua_dom);
            calculate_width(array_of_all_color_doms);
            show_done_text()
          }
          else{
            let aqua_dom = document.querySelector(".aqua");
            let aqua_dom_counter = parseInt(aqua_dom.innerHTML);
            aqua_dom_counter += 1;
            aqua_dom.innerHTML = "";
            aqua_dom.innerHTML = aqua_dom_counter;
            calculate_width(array_of_all_color_doms);
            show_done_text()
          }
         break;

        default:
        break;
      }
    })
  }
}
document.querySelector("button").addEventListener("click",init_fetch_all_colors)

function calculate_width(all_color_doms){
  let total = 0;
  all_color_doms.forEach(color_dom => {
      total += parseInt(color_dom.innerHTML); 
  });
  
  all_color_doms.forEach(color_dom => {
    let color_dom_procentage_of_total = (parseInt(color_dom.innerHTML) / total) * 100;
    color_dom.style.width = `${color_dom_procentage_of_total}%`;
  })
  
    
}




































/*

Ta dessa steg:

1)  Koda funktionen get_distribution som skickar 50 förfrågningar om webbresursen ovan. 
    När get_distribution anropas så skapar den en array av objekt som denna:
        [
          {
            color: "limegreen",
            count: X_LG (där X_LG är antalet gånger vi har fått limegreen från webbresursen)
          },
          {
            color: "lightcoral",
            count: X_LC (där X_LC är antalet gånger vi har fått lightcoral från webbresursen)
          },
          etc.
        ]

    När en förfrågning har besvarats ska arrayen ovan uppdateras. Ni måste lägga till 1 till nyckeln count i rätt array-element.
    Efter uppdateringen ska callback_update (se nedan) anropas med arrayen som parameter.
    Börja med att callback_update bara loggar arrayen.

2)  När du har fått delen ovan att funka ska du ändra callback_update så att den visar innehållet i den grafiskt (färglådorna)
    istället för att bara logga arrayen.

3)  Fixa så att texten i feedback uppdateras på ett korrekt sätt.
    Samma sak vad gäller att knappen ska vara disabled under tiden vi väntar på alla förfrågningar.
    Se video.

*/



