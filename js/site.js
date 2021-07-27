
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
        //let fbArray = fizzBuzz(numbers);
        //write the data to the page 
        //let fbArray = anotherFizz(3,5);
        let fbArray = FizzBuzzC(3,5);
        displayValues(fbArray)

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

function fizzBuzz(numbers){
    //input is array of ints
    //create single table row with table data entry of either a word or the int value

    var i;
    var fbArrayVal = [];
    for (i=1; i <= numbers.length; i++){
    	if (i%3 ==0 && i%5 ==0) {
          fbArrayVal.push("FizzBuzz");
       }
        else if (i % 3 == 0) {
            fbArrayVal.push("Fizz");
            }
        else if (i%5 == 0){
            fbArrayVal.push("Buzz");
        }
        else {
            fbArrayVal.push(i);
    
        }
    }
    // end for loop
    return fbArrayVal;
    
}


function anotherFizz(FizzValue, BuzzValue){
    
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {

        Fizz = i % FizzValue == 0; // reset to true if modulo is 0
        Buzz = i % BuzzValue == 0;

      switch (true) {
          case Fizz && Buzz: {
              returnArray.push("FizzBuzz");
              break;
          }
          case Fizz: {
              returnArray.push("Fizz");
              break;
          }
          case Buzz: {
              returnArray.push("Buzz");
              break;
          }
          //if none of this happens 
          default: {
              returnArray.push(i);
              break;
          }
      }
        
    }

    return returnArray
}

function FizzBuzzC(FizzValue, BuzzValue){
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {

        //using ternary ? operator
        //Note: an empty string evaluates to false
        //Note: a variable with any value evaluates to true
        let value = ((i % FizzValue == 0 ? 'Fizz': '') + (i % BuzzValue == 0 ? 'Buzz': '') || i );
        returnArray.push(value);
        
    }

    return returnArray;
}

// use the HTML Table thing
function displayValues(fbArray){

    //get the table body element from the page
        //<tbody id="results">
            //inner HTML stuff goes here
        //</tbody>
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    // add all the rows to the table
    // loop over the array and display it
    for (let index = 0; index < fbArray.length; index+=5){
        //copying the template into memory in order to modify 
        let tableRow = document.importNode(templateRow.content, true);

        //grab all the td tags / values
        let rowCols = tableRow.querySelectorAll("td"); //an HTML fragment ??

        //assign a class based on the value of the array - if it's a number, there's no associated class, so no change
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index]; //this is the stored value, number, fizz, buzz or fizzbuzz

        rowCols[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];

        rowCols[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];

        tableBody.appendChild(tableRow);

    }


}
