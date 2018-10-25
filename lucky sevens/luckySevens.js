function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}



function play() {

   // Validate bet amount
   var bet = document.forms["luckySeven"]["bet"].value;
   if (bet <= 0) {
     alert("Bet must be larger than 0.");
     return false;
   }

   // Display hidden table, msg, and fill starting amount
   document.getElementById("startingBet").innerHTML = "$" + bet;
   document.getElementById("again").style.display = "inline";
   document.getElementById("results").style.display = "table";
   document.getElementById("submitButton").innerHTML = "<h4>Play Again<h4>";

   // Initiate variables to track values
   var money = bet.valueOf();
   var max_money = bet.valueOf();
   var rolls = 0;
   var max_rolls = 0;

   // Loop construct that plays the game
   while (money > 0) {
     if ((rollDice() + rollDice()) == 7) {
       money = parseFloat(money) + 4;
     }
     else {
       money = parseFloat(money) - 1;
     }
     rolls++;
     if (money > max_money) {
       max_money = money;
       console.log(max_money);
       max_rolls = rolls;
       console.log(max_rolls);
     }
   }

   // Fill table with results
   document.getElementById("rolls").innerHTML = rolls;
   document.getElementById("maxMoney").innerHTML = "$" + max_money;
   document.getElementById("maxRolls").innerHTML = max_rolls;
   console.log("Done");
   return false;
}
