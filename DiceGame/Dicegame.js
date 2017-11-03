"use strict"
runGame()
//player information
function runGame() {
    let player1 = {
        teamName: "",
        runs: "",
        type: "",
        atBat: false
    };

    let player2 = {
        teamName: "",
        runs: "",
        type: "",
        atBat: false
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
    let numberOfInnings = 2;
    let outs = 0;

    
    for (let i = 1; i <= numberOfInnings * 2; i++) {
    
        
        if (outs === 3 && inning.half === "top"){
            inning.half = "bottom";
            outs = 0;
            atBat(player1, player2, inning);
            alert("Bottom of the " + inning.number);
            
        }else if (outs === 3 && inning.half === "bottom" ){
            inning.half = "top";
            outs = 0;
            atBat(player1, player2, inning);
            inning.number+=1;
            alert ("Top of the " + inning.number);
            
     
        }else if (inning.number === 1 && inning.half === "top"){
            atBat(player1, player2, inning);
            alert ("Let's Start the Game");
        
        }       
       
        let numberOfBases = 0;
        let onFirst = false;
        let onSecond = false;
        let onThird = false;
        
        while (outs < 3){  
            if (player1.atBat === true){
                numberOfBases = atBatSimulator(player1);
            }else if (player2.atbat === true){
                numberOfBases = atBatSimulator(player2);
            }
        }   

    }    
       
     // end of game stuff   
        
      //base runners    
    
    
      
}

//game parameters
function rollDice(numberOfSides){//<----general dice roll command
    let diceRoll = Math.floor(Math.random()*numberOfSides)+1;
    return diceRoll
}

function atBatSimulator(player){
    //track batter count *Balls/strikes*
    
    let pitchCount = [0,0];
    let balls = pitchCount[0];
    let strikes = pitchCount[1];
    
    alert("Beginning at bat");
    while(pitchCount[0] < 4 || pitchCount[1] < 3){   
        switch(rollDice(20)){
            case  1:
                pitchCount[0]+=1;
                break;
            case 2:
                pitchCount[1]+=1;
                break;
            case 3:
                pitchCount[0]+=1;
                break;
            case 4:
                return hitSimulator(player); // which player
                break;
            case 5:
                pitchCount[1]+=1;
                break;
            case 6:
                return hitSimulator(player); // which player
                break;
            case 7:
                pitchCount[1]+=1;
                break;
            case 8:               
                return hitSimulator(player); //which player
                break; 
            case 9:
                pitchCount[0]+=1;
                break;
            case 10: 
                pitchCount[1]+=1;
                break;
            case  11:
                pitchCount[0]+=1;
                break;
            case 12:
                pitchCount[1]+=1;
                break;
            case 13:
                pitchCount[0]+=1;
                break;
            case 14:
                return hitSimulator(player); // which player
                break;
            case 15:
                pitchCount[1]+=1;
                break;
            case 16:
                return hitSimulator(player); // which player
                break;
            case 17:
                pitchCount[1]+=1;
                break;
            case 18:               
                return hitSimulator(player); //which player
                break; 
            case 19:
                pitchCount[0]+=1;
                break;
            case 20: 
                pitchCount[1]+=1;
                break;
        }
        
        
    }
    if (pitchCount[0] === 4){
        return 1;
    }else{
        return 0;
    }
}
// function scoreTracker(){
    // //populates player1/player2 runs property
// }
function hitSimulator(player){
   
    
        switch (rollDice(4)){
            case 1:
                return 1
                break;
            case 2:
                return 2;
                break;
            case 3:
                return 3;
                break;
            case 4:
                return 4;
                break;
        } 
        
}
function atBat (player1, player2, inning){
    
    if ((player1.type === "Away Team" && inning.half === "top") || (player1.type === "Home Team" && inning.half === "bottom")){
        player1.atBat = true;
        player2.atBat = false;
        
    }else{
        player1.atBat = false;
        player2.atBat = true;
        
    }
}


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

