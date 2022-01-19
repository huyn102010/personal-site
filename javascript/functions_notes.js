'use strict';


//SCREAMCASE   : constant
//SCREAMING_SNAKE_CASE: constant
//TitleCase : classes
//camelCase : functions
// ---
// snake_case: variables (values)




// Demonstrate functions as value; do not use func() when passed in as argument
function doSomeThing(func,data){
  func(data);
}





// Closure
function doSomethingLater(data){
  return function(){
    return 'I have some data: '+ data;
  }
};

var myNewLaterFunction = doSomeThingLater('Hank offer sleep lessons for cheap');
myNewLaterFunction() // shoudl return I have some data: Hank offer sleep lessons for cheap



//More closure example
function makeAdder(num){
  return function(x){
    return x + num;
  }
};
var addTwo = makeAdder(2);
addTwo(7) // shoudl return 9;



function returnSomething(data){
  // Pure function ALWAYS return something
  // and have no side effects
  return data
};

