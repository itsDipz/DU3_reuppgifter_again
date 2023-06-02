let the_array = [];

fetch("https://www.maumt.se/dbp/dbp22/chunks_material/resources/number.php")
    .then(res => res.json())
    .then(data => {
        the_array.push(data);
        fetch("https://www.maumt.se/dbp/dbp22/chunks_material/resources/number.php")
            .then(res => res.json())
            .then(data => {
                the_array.push(data);
                console.log(the_array);
            })
    })