

const random_number_request = new Request("https://teaching.maumt.se/apis/random_number/");

function calculate() {
    document.querySelector("#sum").innerHTML = "Waiting ...";
    document.querySelector("#number1").innerHTML = "...";
    document.querySelector("#number2").innerHTML = "...";
    let promise1 = fetch(random_number_request);
    let promise2 = fetch(random_number_request);
    let array_of_promises = [promise1,promise2];
    let array_of_values = [];
    Promise.all(array_of_promises).then((responses) => {
        responses.forEach(response => {
            response.json().then(data => {
                array_of_values.push(data);
                if(array_of_values.length === 2){
                    
                    document.querySelector("#number1").innerHTML = array_of_values[0];
                    document.querySelector("#number2").innerHTML = array_of_values[1];
                    
                    document.querySelector("#sum").innerHTML = array_of_values[0] + array_of_values[1];
                }
            });
        })
    })
    
}

document.querySelector("button").addEventListener("click", calculate)
