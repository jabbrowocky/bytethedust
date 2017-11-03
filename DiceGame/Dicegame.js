"use strict"

runGame()
//player information
function runGame() {
    let player1 = {
        teamName: "",        
        type: "",
        atBat: false,
        runnerFirst: false,
        runnerSecond: false,
        runnerThird: false,
        runs: 0
    };

    let player2 = {
        teamName: "",        
        type: "",
        atBat: false,
        runnerFirst: false,
        runnerSecond: false,
        runnerThird: false,
        runs: 0
    };
    
    let inning = {
        number: 1,
        half: "top",
        outs: 0
    };
    
    player1.teamName = getTeamName1();
    player2.teamName = getTeamName2();
  
    displayTeamName(player1 , player2);
    homeTeam(player1, player2);
    
    getWeather()
    getAttendance()
    console.log(player1);
    console.log(player2);
    
    atBat(player1, player2, inning);
    alert ("Let's Start the Game");
    // bottom half of 3rd inning happens
    // alert user when a hit or walk or strike out happens
    
    // innings rotate
    
    // if away team is winning after the end of the top of the last inning, don't play the bottom half LAST PRIORITY
    while (inning.number < 3 || (inning.number === 3 && inning.half !== "bottom")) {
    
                
        if (inning.outs === 3 && inning.half === "top"){
            inning.half = "bottom";
            inning.outs = 0;
            atBat(player1, player2, inning);
            alert("Bottom of the " + inning.number);
            alert("The score is " + player1.runs + " to " + player2.runs);
            
        }else if (inning.outs === 3 && inning.half === "bottom" ){
            inning.half = "top";
            inning.outs = 0;
            atBat(player1, player2, inning);
            inning.number+=1;
            alert ("Top of the " + inning.number);
            alert("The score is " + player1.runs + " to " + player2.runs);
            
     
        }
        // else if (inning.number === 1 && inning.half === "top" && outs === 0){
        //     atBat(player1, player2, inning);
        //     alert ("Let's Start the Game");
        // }
        if (player1.atBat === true){
            
            atBatSimulator(player1, inning);
        
        }else if (player2.atBat === true){
            
            atBatSimulator(player2, inning);
            
        }
        
       
        //base running
        
         
            
         
           

    }    
       
    if (player1.runs > player2.runs){
        alert (player1.teamName + " wins.");
    }else if( player2.runs > player1.runs) { 
        alert (player2.teamName + " wins.")
    } else {
        alert("Tie game!");
    }
              
}

//game parameters
function rollDice(numberOfSides){//<----general dice roll command
    let diceRoll = Math.floor(Math.random()*numberOfSides)+1;
    return diceRoll
}

function atBatSimulator(player, inning){
    //track batter count *Balls/strikes*
    
    let pitchCount = [0,0];
    let balls = pitchCount[0];
    let strikes = pitchCount[1];
    let gotHit = false;
    
    alert("Beginning at bat");
    while(pitchCount[0] < 4 && pitchCount[1] < 3 && gotHit === false){   
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
                gotHit = true;
                hitSimulator(player, inning); // which player
                
                break;
            case 5:
                pitchCount[1]+=1;
                break;
            case 6:
                gotHit = true;
                hitSimulator(player, inning); // which player
                break;
            case 7:
                pitchCount[1]+=1;
                break;
            case 8:               
                gotHit = true;
                hitSimulator(player, inning); //which player
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
                pitchCount[1]+=1
                break;
            case 15:
                pitchCount[1]+=1;
                break;
            case 16:
                gotHit = true;
                hitSimulator(player , inning); // which player
                break;
            case 17:
                pitchCount[1]+=1;
                break;
            case 18:               
                pitchCount[0]+=1;
                break; 
            case 19:
                pitchCount[0]+=1;
                break;
            case 20: 
                gotHit = true;
                hitSimulator(player, inning);
                break;
        }
        
        
    }
   
     
    if (pitchCount[0] === 4){
        if (player.runnerFirst === true && player.runnerSecond === true && player.runnerThird === true){
            player.runs += 1;
            alert(player.teamName + " has scored");
        }else if ((player.runnerFirst === true && player.runnerSecond === true) || (player.runnerFirst === true && player.runnerThird === true)){
            player.runnerSecond = true;
            player.runnerThird = true;
        }else if (player.runnerThird === true){
            player.runnerFirst = true;
        }else if (player.runnerSecond === true && player.runnerThird === true){
            player.runnerFirst = true
        }else{
            player.runnerFirst=true;
        }
    
    }else if (pitchCount[1] === 3){
        inning.outs+=1;
        alert (player.teamName + " has struck out!")
    }
}

function hitSimulator(player, inning){
   
    
        switch (rollDice(6)){
            case 1:
                if (player.runnerFirst === true && player.runnerSecond === true && player.runnerThird === true){
                    player.runs += 1;
                    alert(player.teamName + " has scored");
                    break;
                }else if ((player.runnerFirst === true && player.runnerSecond === true) || (player.runnerFirst === true && player.runnerThird === true)){
                    player.runnerSecond = true;
                    player.runnerThird = true;
                    break;
                }else if (player.runnerSecond === true && player.runnerThird === true){
                    player.runnerFirst = true;
                }else if (player.runnerThird === true){
                    player.runnerFirst = true;
                }else{
                    player.runnerFirst=true;
                }
                alert ("it's a single");               
                break;
            case 2:
                inning.outs += 1;
                alert (player.teamName + " has fly-balled out.")
                break;
            case 3:  //triple
                if (player.runnerFirst === true) {
                    player.runs++;
                }
                if (player.runnerSecond === true) {
                    player.runs++;
                }
                if (player.runnerThird === true) {
                    player.runs++;
                }              

                player.runnerFirst = false;
                player.runnerSecond = false;
                player.runnerThird = true;
                alert ("it's a triple");
                break;
            case 4:
                if (player.runnerFirst === true) {
                    player.runs++;
                }
                if (player.runnerSecond === true) {
                    player.runs++;
                }
                if (player.runnerThird === true) {
                    player.runs++;
                }
                
                player.runnerFirst = false;
                player.runnerSecond = false;
                player.runnerThird = false;
                player.runs += 1; //homerun
                alert(player.teamName + " smashed one out of the park.");
                break;
            case 5:
                inning.outs += 1;
                alert (player.teamName + " has grounded out.");
                break;
            case 6:
                if (player.runnerFirst === true && player.runnerSecond === true && player.runnerThird === true ){
                    player.runs ++;
                    player.runnerFirst = false;
                    alert ("A baserunner scored on a double");
                    break;
                }else if ((player.runnerFirst === true && player.runnerSecond === true)||(player.runnerFirst === true && player.runnerThird === true)){
                    player.runs++;                    
                    player.runnerFirst = false;
                    alert ("A baserunner scored on a double");
                    break;
                }else if (player.runnerSecond === true && player.runnerThird === true){
                    player.runs++;
                    alert ("A baserunner scored on a double")
                    break;
                }else if (player.runnerThird === true){
                    player.runnerSecond === true;
                    alert("it's a double!");
                }else{
                    player.runnerSecond === true;
                    alert("it's a double!");
                }
                
                
                
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
function getWeather (){
    switch (rollDice(4)){
        case 1:
            alert("The weather is sunny! it's a gorgeous day for baseball.");
            break;
        case 2:
            alert("It's raining buckets out there, good thing the stadium has a roof!");
            break;
        case 3:
            alert("It must be 100 degrees out there, today's gonna' be a scorcher.");
            break;
        case 4:
            alert("Someone call John Snow, because it's so cold winter MUST be coming.");
            break;
    }
}
function getAttendance(){
    switch (rollDice(10)){
        case 1:
            alert ("Today's attendance is 120,000");
            break;
        case 2:
            alert ("Today's attendance is 125,125");
            break;
        case 3:
            alert ("Today's attendance is 99,876");
            break;
        case 4:
            alert ("Today's attendance is 117,000");
            break;
        case 5:
            alert ("Today's attendance is 78,000");
            break;
        case 6:
            alert ("Today's attendance is 100,000");
            break;
        case 7:
             alert ("Today's attendance is 112,287");
            break;
        case 8:
             alert ("Today's attendance is 109,000");
            break;
        case 9:
             alert ("Today's attendance is 158,058");
            break;
        case 10:
             alert ("Today's attendance is 106,000");
            break;
    
    }
}
