'use strict'; // to force browswer enforce stricter rules

// Global Variables

var importantData = {
  so: 'important'
};

// Function Statements, class Statements
var SomeFancyFunction = function(){
  // Here we get fancy
}

var someFancyClass = class(){
  //Create a fancy class
}

var someOldSchoolClass = function(){
  // Create some old school class
}





// Down to business, call function that we defined

var myFancyClass = new someFancyClass();
var myOldSchoolClass = new someOldSchoolClass();

someFancyFunction(importantData) 

someWorkHorseFunction(); // Hoisting 

// Function Expression 
function someWorkHorseFunction(){
  // And here we get down to work.. 
}