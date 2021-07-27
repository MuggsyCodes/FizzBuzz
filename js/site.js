
//get the values from the UI on the page
//starts or controller function 
function getValues(){
    //get values from the page 
    //define block scoped variable
    let first_number = document.getElementById("start_value").value;
    let last_number = document.getElementById("end_value").value;

    //parse into integers
    first_number = parseInt(first_number);
    last_number = parseInt(last_number);
    //alert("The start value: " + first_number);

    //Validate input with a Boolean check
    //call generateNumbers

    if(Number.isInteger(first_number) && Number.isInteger(last_number)){
        let numbers = generateNumbers(first_number, last_number);
        //call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("You must enter integers");
    }

}

//generate numbers from start val to end value
//logic functions 
function generateNumbers(start_val, end_val){
    //add 1 to start value (new value) and append to array
    // add 1 to new value and append to array
    // continue to add one to new value until new value equals end value
    //stop when new value > end value
    let numbers = []; // it's a list - zero based index - 

    for(let i = start_val; i <= end_val; i++){
        //this will execute in a loop until i equals end val
        numbers.push(i)
    }
    //returns array of ints
    return numbers
}

//display the even numbers in bold
//display or view function
//pass in an array
function displayNumbers(numbers){
    //input is array of ints
    //create single table row with table data entry of either a word or the int value

    let fb_rows = "";
    var i;
    var number;
    for (i=1; i <= numbers.length; i++){
    //console.log(i);
    if (i%3 ==0 && i%5 ==0) {
        number = "FizzBuzz";
        fb_rows += `<tr><td>${number}</td></tr>`;
        //console.log("FizzBuzz")
    }

    else if (i % 3 == 0) {
        number = "Fizz";
        fb_rows += `<div class="col">${number}</div>`;
        //fb_rows += `<tr><td>${number}</td></tr>`;
    }
    else if (i%5 == 0){
        number = "Buzz";
        fb_rows += `<div class="col">${number}</div>`;
        //fb_rows += `<tr><td>${number}</td></tr>`;
    }
    else {
        number = i;
        fb_rows += `<div class="col">${number}</div>`;
        //fb_rows += `<tr><td>${number}</td></tr>`;  }
        }
    // end for loop
    document.getElementById("results").innerHTML = fb_rows;
}