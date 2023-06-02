let number_dom = document.createElement("div");

fetch("https://www.maumt.se/dbp/dbp22/chunks_material/resources/number.php")
    .then(res => res.json())
    .then(data => number_dom.innerHTML = data);

document.body.appendChild(number_dom);
