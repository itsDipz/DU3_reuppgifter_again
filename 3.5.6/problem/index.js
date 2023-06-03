/*

Resource URL: https://maumt.se/dbp/dbp22/chunks_material/resources/random_status.php

Possible response status codes from server:
200, 400, 404, 405, 418, 500

Find info about meaning of different codes:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

*/

function fetch_info_about_request(){
    let promise = fetch("https://maumt.se/dbp/dbp22/chunks_material/resources/random_status.php");
    promise.then(res => {
        document.querySelector("#code").innerHTML = res.status;
        document.querySelector("#text").innerHTML = res.statusText;
    })
}

fetch_info_about_request()