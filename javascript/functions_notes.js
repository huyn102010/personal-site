'use strict';

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




function returnSomething(data){
  // Pure function ALWAYS return something
  // and have no side effects
  return data
};

