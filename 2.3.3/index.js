
function do_this(number){
    for (let i = 0; i < number; i++) {
        let number_dom = document.createElement("div");
        number_dom.classList.add("box");
        number_dom.innerHTML = i;
        document.querySelector("body").appendChild(number_dom);   
    }
} 

fetch("https://www.maumt.se/dbp/dbp22/chunks_material/resources/number.php")
  .then(r => r.json())
  .then(do_this);

