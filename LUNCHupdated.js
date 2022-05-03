const whatToDoForLunch = function(hungry, availableTime) {
   if (hungry !== true) {
     return ('I am not hungry! SPARE TIME!');
   }
    else if (hungry === true && availableTime > 20 ){
      return ('Grab a snack!')
    } else if (hungry === true && availableTime === ( >= 30 && <=20)) {
      return ('Cook something fast!');
    } else if (hungry === true && availableTime === < 30) {
      return ('Are you sure you have that much spare time?');
    };
  console.log(whatToDoForLunch);
  };

 


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);
