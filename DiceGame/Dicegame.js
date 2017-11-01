"use strict"
runGame()
//player information
function runGame() {
    let player1 = {
        teamName: "",
        runs: "",
        type: ""
    };

    let player2 = {
        teamName: "",
        runs: "",
        type: ""
    };
    
    player1.teamName = getTeamName1();
    player2.teamName = getTeamName2();
    
    displayTeamName(player1 , player2);
    homeTeam(player1, player2);
    
}

//game parameters
function rollDice(numberOfSides){//<----general dice roll command
    let diceRoll = Math.ceil(Math.random()*numberOfSides);
    return diceRoll
}

function homeTeam(player1, player2){
    alert("Let's figure out who's the home team.");
    
    let homeTeam = rollDice(8);
        if ( homeTeam % 2 === 0 ){
            player1.type = "Home Team";
            
            player2.type = "Away Team";
            
            alert(player1.teamName + " is the " + player1.type);
        }else{
            player1.type = "Away Team";
            
            player2.type = "Home Team";
            
            alert(player2.teamName + " is the " + player2.type);
        }
}
//team properties
function getTeamName1() {
    return prompt("Player 1 please enter the name of your team:");
}
function getTeamName2() {
    return prompt("Player 2 please enter the name of your team:");
}

function displayTeamName(firstplayer , secondplayer) {
    alert(firstplayer.teamName + " vs " + secondplayer.teamName);
}


