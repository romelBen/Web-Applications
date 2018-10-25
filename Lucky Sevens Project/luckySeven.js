/* Hide results initially to prevent results from showing */
function hideResults() {
    document.getElementById("results").style.display = "none";
} 

/* Initialize game where user inputs amount of money and designate variables */
function game() {
    var startingBet = document.getElementById("betInput").value;
    var bet = startingBet;
    var betsArray = [];

/* A message will appear if they input a negative number */
    if(bet <= 0) {
        alert("Please enter a number greater than $0.00.")
    }


/* If the bet is greater than 0 it continues. Now if both dice do not equal 7 */
/* then $1.00 is subtracted. However if 7 is rolled, they receive $4.00! */
/* After this occurs, the results are pushed into an array to tally the results */    
    while (bet > 0) {
        /* Game begins by creating the initial bet and both dice being rounded down (.floor) */
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var diceRoll = dice1 + dice2;

        if(diceRoll != 7) {
            bet -= 1
        } else {
            bet += 4
        }
        betsArray.push(bet)
    }

    var rollCounter = betsArray.length;
    var highestAmount = Math.max.apply(Math, betsArray);
    var highestPosition = betsArray.indexOf(highestAmount);
    var rollsFromHighest = rollCounter - highestPosition;


/* Results are displayed showing Starting Bet, Total rolls, Highest Amount, and Roll Count at Highest */
    function showResults() {
    document.getElementById("results").style.display = "inline";
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("resultsBet").innerHTML = "$" + startingBet +".00";
    document.getElementById("resultsRollCounter").innerHTML = rollCounter;
    document.getElementById("resultsHighestHeld").innerHTML = "$" + highestAmount + ".00";
    document.getElementById("resultsRollsFromHighest").innerHTML = rollsFromHighest;
    };

    showResults();
}
