let button = document.querySelector("button");

button.addEventListener("click", () => {
    fetch("https://www.maumt.se/dbp/dbp22/chunks_material/resources/number.php")
        .then(res => res.json()).then(data => {
            document.querySelector("#display").innerHTML = data;
        })
})