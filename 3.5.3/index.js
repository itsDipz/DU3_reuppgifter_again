const rqst = new Request("https://www.maumt.se/dbp/dbp22/chunks_material/resources/yes_no.php");

fetch(rqst).then(res => res.text()).then(yes_or_no_data => {
    if (yes_or_no_data === "yes") {
        document.body.style.backgroundColor = "green";
    }
    else {
        document.body.style.backgroundColor = "red";

    }
})
