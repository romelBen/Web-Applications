/*
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("What is your age?");

fullName = firstName + " " + lastName;

console.log("Your full name is, " + fullName + "and your age is " + age);


var age = prompt("Please enter your age here: ");

var alive = 365 * age;

alert("You have lived " + alive + " days.");
console.log("You have lived " + alive + " days.");
*/

/* Stacking Arrays */
var friends = ["Aneki", "Quell", "Clarity", "Sleepy", "Roghar", "DM Crimson"];

var team1 = new Array();
var team2 = new Array();

for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1
        team1.push(friends[i]);
    } else {
        // otherwise add them to team 2
        team2.push(friends[i]);
    }
}

