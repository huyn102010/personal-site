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
  // is num a number?
  var forcedNumber = +num
  if(typeof(forcedNumber)!=='number' || isNaN(forcedNumber)){
    console.log('num must be a number', num);
    return; // exit the function when return nothing
  }
  return function(x){
    forcedX = +x
    if(typeof(forcedX)!=='number' || isNaN(forcedX)){
      console.log('x must be a number; you wrote "' + x +  '"')
      return;
    }
    return forcedX + forcedNum;
  }
};
var addTwo = makeAdder(2);
addTwo(7) // shoudl return 9;



function returnSomething(data){
  // Pure function ALWAYS return something
  // and have no side effects
  return data
};

