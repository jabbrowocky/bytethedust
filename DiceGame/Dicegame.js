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
    let inning = {
        number: 1,
        half: "top"
    };
    
    player1.teamName = getTeamName1();
    player2.teamName = getTeamName2();
    
    displayTeamName(player1 , player2);
    homeTeam(player1, player2);
    console.log(player1);
    console.log(player2);
    
    
    let outs = 0;
        if (outs === 3){
            inning.half = "bottom";
            outs = 0;
            alert ("Bottom of the " + inning.number);
        }else if (outs === 3 && inning.half === "bottom" ){
            inning.half = "top";
            outs = 0;
            inning.number+=1
            alert ("Top of the " + inning.number);
     
        }else if (inning.number === 1 && inning.half === "top"){
            alert ("Let's Start the Game");
        }
       
        console.log(inning);
    let playerAtBat = ""        
    let baseRunnerFirst = 0;
    let baseRunerSecond = 0;
    let baseRunnerThird = 0;
    
    
    
}

//game parameters
function rollDice(numberOfSides){//<----general dice roll command
    let diceRoll = Math.floor(Math.random()*numberOfSides)+1;
    return diceRoll
}

// function atBatSimulator(){
    // //track batter count *Balls/strikes*
    // let pitchCount = [];
    // let balls = pitchCount[0];
    // let strikes = pitchCount[1];
   
    // alert("beginning at bat");
    // while(pitchCount[0] < 4 || pitchCount[1] < 3 || ){   
        // switch(rollDice(10)){
            // case  1:
                // pitchCount[0]+=1;
                // break;
            // case 2:
                // pitchCount[1]+=1;
                // break;
            // case 3:
                // pitchCount[0]+=1;
                // break;
            // case 4:
                // pitchCount[0]+=1;
                // break;
            // case 5:
                // pitchCount[1]+=1;
                // break;
            // case 6:
                
            // case 7:
            // case 8:
            // case 9:
            // case 10:
            // }
        // if (pitchCount[0] === 4){
            // let baseRunnerFirst = 1;
            // return baseRunnerFirst;
        // }else if (pitchCount[1] === 3){
            // let outs += 1;
            // return outs;
        // }
    // }
// }
// function scoreTracker(){
    // //populates player1/player2 runs property
// }
// function hitSimulator(){
    // let singleHit = baseRunnerFirst;
    // let doubleHit = baseRunnerSecond;
    // let tripleHit = baseRunnerThird;
    // let homeRun = playerAtBat.runs++
        
        // switch (contact){
            // case 1:
                // singleHit;
                // break;
            // case 2:
                // doubleHit;
                // break;
            // case 3
                // tripleHit;
                // break;
            // case 4
                // homeRun;
        // } 
    // return  contact;  
// }
// function atBat (player1, player 2){
    // switch (player.type === "Home")
// }


// //team properties
function getTeamName1() {
    return prompt("Player 1 please enter the name of your team:");
}
function getTeamName2() {
    return prompt("Player 2 please enter the name of your team:");
}

function displayTeamName(firstplayer , secondplayer) {
    alert(firstplayer.teamName + " vs " + secondplayer.teamName);
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

