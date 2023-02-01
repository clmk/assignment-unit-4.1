console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log(hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test

console.log(helloName());

// 3. Function to add two numbers together & return the result
let firstNumber = 2;
let secondNumber = 3;
let thirdNumber = 1;

function addNumbers() {
  return firstNumber + secondNumber;
}

  // return firstNumber + secondNumber;
  console.log(addNumbers());


// 4. Function to multiply three numbers & return the result
function multNumbers(){
  return firstNumber * secondNumber * thirdNumber;
}
console.log(multNumbers());

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('The Number 3 is positive or over zero:' , isPositive(3) );
console.log('The Number 0 is positive or over zero:' , isPositive(0) );
console.log('The Number -3 is positive or over zero:' , isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function lastItem (listOfItems) {
  return listOfItems.length ? listOfItems[listOfItems.length - 1] : undefined;
};
console.log(lastItem(['1','2','3','4','5','6','7']));
console.log(lastItem(''));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, fruits ){
  for(let fruit of fruits) {
    console.log( value, fruit);
    if(value === fruit) {
      console.log('Found a Match');
      return true;
    } else {
        console.log('Does not Match');
    }
  }
      return false;
}
console.log('Is Orange here?', find( 'Orange', ['Orange','Strawbery','Peach','Lemon','Tomaote']));
console.log('Is Banana here?', find( 'Banana', ['Orange','Strawbery','Peach','Lemon','Tomaote']));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
