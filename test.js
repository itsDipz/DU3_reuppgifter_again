let test_arr = [1,2,3,4];

let new_arr = test_arr.map(each_element => {
    if(each_element === 2 || each_element === 4){
        return each_element + 2;
    }
})

console.log(new_arr);