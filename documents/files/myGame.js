var cardsContainer = document.getElementById("cardsContainerID");
var musicPlayer=document.getElementById("musicPlayer");
var audioPlayer=document.getElementById("audioPlayer");
var start ;
var cards;
var timer;
var scorePlayerOneId;
var wrongTrialOneID;
var scorePlayerTwoId;
var wrongTrialTwoID;
var playerOne;
var playerTwo;
var playersContainer = document.getElementById("playersID");
var records = document.getElementById("recordsID");
var conanImages =
    ["conanTheMan.jpeg", "conansGirl.jpg",
        "group.jpg", "conan.jfif",
        "conan1.jpg", "conan2.jpg",
        "conan3.jpg", "conan4.jpg"];
var Avengers =
    [
        "avengers1.jpg", "avengers2.jpg",
        "avengers3.jpg", "avengers4.jpg",
        "avengers5.jpg", "avengers6.jpg",
        "avengers7.jpg", "avengers8.jpg"
    ];
var deathNote = 
    [
        
        "deathnote1.jfif","deathnote2.jpeg",
        "deathnote3.jpg","deathnote4.jpg",
        "deathnote5.png","deathnote6.jfif",
        "deathnote7.jpeg","deathnote2.jpg"
    ];
var levelFlag =JSON.parse(localStorage.getItem("radiolevel"));
var ThemeFlag =localStorage.getItem("ThemeValue");
var pickedDifficulty=localStorage.getItem("difficultyLevel");
var pickedcolor=localStorage.getItem("pickedColor");
var hasFlipped = false;
var lockFlipping = false;
var firstCard, secondCard;
var TimerInverter;
var TimerCounter = 0;
var firstPlayerScore = 0;
var firstPlayerWrongTrials = 0;
var secondPlayerScore = 0;
var seecondPlayerWrongTrials = 0;
var MaximumScoreOnePlayer;
var MaximumMnsTime = 6;
var TimePerMns = 0;
var soloPlayer = JSON.parse(localStorage.getItem("soloPlayer"));
var isPlayerOneTurn = true;
var gameRunning = true;
var firstPlayerName = localStorage.getItem("firstPlayeName")||"UNKNOWN1";
var secondPlayerName = localStorage.getItem("secondplayername")||"UNKNOWN2";
var existedPlayerOne;
var existedPlayerTwo;
var startCounter = 3;
var startInterval;
var pausing ;
var winnerLeadedrBoard = document.getElementById("celebration")
var leaderBoardWinnerPlace = document.getElementById("winnernamescore");
var scoresTable = document.getElementById("scoresTable");
var newGameBoard = document.getElementById("newgameboardId");
var mainmenuBoard = document.getElementById("mainmenuboardId");
var GameOver = document.getElementById("GameOver");
var gameOverNewGamebtn=document.getElementById("gameOverNewGamebtn")
var gameOvermainmenubtn;
var hideElement=document.getElementById("hideElement");
var newgame = document.getElementById("newgame");
var pausemenu = document.getElementById("pausemenu");
var mainmenu = document.getElementById("mainmenu");

setPlayers();

function setPlayers() {
    pausing =JSON.parse( localStorage.getItem("pausingFlag"));
    if (soloPlayer) {
        playersContainer.innerHTML = `
      
    <div id='playerOneID' class='playerOne'>
    ${firstPlayerName}
  </div>
    `
        records.innerHTML = `
    <div id='scorePlayerOneID' class='scorePlayerOne'>
        score : 0
      </div>
      <div id='timerID' class='timer'>00:00</div>
      <div id='wrongTrialOneID' class='wrongTrialOne'>
        wrong trials : 0
      </div>
     
    `
    }
    else {
        playersContainer.innerHTML = `
    <div id='playerOneID' class='playerOne playerTurn'>
    ${firstPlayerName}
  </div>
  <div id='playerTwoID' class='playerTwo'>
  ${secondPlayerName}
  </div>
    `
        records.innerHTML = `
    <div id='scorePlayerOneID' class='scorePlayerOne playerTurn'>
    score : 0
  </div>
  <div id='wrongTrialOneID' class='wrongTrialOne playerTurn'>
    wrong trials : 0
  </div>
  <div id='timerID' class='timer'>00:00</div>

  <div id='scorePlayerTwoID' class='scorePlayerTwo'>
  score : 0
  </div>
  <div id='wrongTrialTwoID' class='wrongTrialTwo'>
  wrong trials : 0
  </div>
    `
        playerTwo = document.getElementById("playerTwoID");
        scorePlayerTwoId = document.getElementById('scorePlayerTwoID');
        wrongTrialTwoID = document.getElementById("wrongTrialTwoID");

    }
    timer = document.getElementById("timerID");
    playerOne = document.getElementById("playerOneID");
    scorePlayerOneId = document.getElementById('scorePlayerOneID');
    wrongTrialOneID = document.getElementById("wrongTrialOneID");
    start = document.getElementById("start");
     gameOvermainmenubtn=document.getElementById("gameOvermainmenubtn");
 gameOvermainmenubtn=document.getElementById("gameOvermainmenubtn");
     gameOverNewGamebtn=document.getElementById("gameOverNewGamebtn")
setCards();
shuffleCards();
settingTime();
startNumber();


};

//checking the difficulty to set cards Number
function setCards() {
    cardsContainer.innerHTML = "";
    if (levelFlag == 0) {
        addCards(4);
        MaximumScoreOnePlayer = 40;
    }
    else if (levelFlag == 1) {
        addCards(6);
        cards.forEach(c => c.setAttribute("style", "width:calc(16% - 10px);"))
        MaximumScoreOnePlayer = 60;
    }
    else {
        addCards(8);
        cards.forEach(c => c.setAttribute("style", "width:calc(12% - 10px);"))
        MaximumScoreOnePlayer = 80;
    }
};
//shuffling between Cards
function shuffleCards() {
    cards.forEach(c => {
        var randomOrder = Math.floor(Math.random() * 8);
        c.style.order = randomOrder;
    })
};
//specifing Time
function settingTime()
{
    if (pickedDifficulty == "easy") {
        MaximumMnsTime = 4;
    }
    else if (pickedDifficulty == "medium") {
        MaximumMnsTime = 3;
    }
    else {
       
        MaximumMnsTime = 1;
    }   
}
//inserting html of card tags
function addCards(cardsNumber) {
    cardsContainer.innerHTML="";
    var imagesArray = checkTheme();
    for (var i = 0; i < cardsNumber; i++) {
        cardsContainer.innerHTML +=
            `<div class="cards" data-framework="card${i}">
        <img class="front-face" src="documents/Images/CardImages/${imagesArray[i]}" width="100%" height="100%">
        <div class="back-face"></div>
      </div>
      <div class="cards" data-framework="card${i}">
      <img class="front-face" src="documents/Images/CardImages/${imagesArray[i]}" width="100%" height="100%">
      <div class="back-face"></div>
    </div>
      `;
    }
    var backFaces=document.querySelectorAll(".back-face");
    console.log(backFaces);
    backFaces.forEach(bf=>bf.style.backgroundColor =pickedcolor);   
    cards = document.querySelectorAll('.cards');
    cards.forEach(c => c.addEventListener("click", flipFunc));

}
//checking theme method
function checkTheme() {
    if(ThemeFlag=="conan")
    {
        return conanImages;
    }
   else if(ThemeFlag=="deathnote")
    {
        return deathNote;
    }
    if(ThemeFlag=="avengers")
    {
        return Avengers;
    }
}


//flipping action for cards
function flipFunc() {

    if (TimePerMns == MaximumMnsTime) return;
    if (lockFlipping) return;
    if (this === firstCard) return;

    this.classList.add('flip-class');
    if (!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
    }
    else {
        hasFlipped = false;
        secondCard = this;

        checkMatching();

    }
}
//check matching cards
function checkMatching() {
    if (firstCard.dataset.framework ===
        secondCard.dataset.framework) {
        firstCard.removeEventListener("click", flipFunc);
        secondCard.removeEventListener("click", flipFunc);
        if (soloPlayer) {
            firstPlayerScore += 10;
            if (firstPlayerScore == MaximumScoreOnePlayer) {
                clearInterval(TimerInverter);
                addingToLocalStorageSoloPlayer();
                showScores();
            }
            firstPlayerScoring();

        }
        else {
            isPlayerOneTurn = playerOne.classList.contains("playerTurn");
            addingScores()
            if ((firstPlayerScore+secondPlayerScore) == MaximumScoreOnePlayer) {
                clearInterval(TimerInverter);
                addingToLocalStorageMultiPlayer();          
               removingAllTurns();
               showScores(); 
            }
            else
            {
                setTimeout(changingPlayers, 250);
            }
        }

        resetCards();

    }
    else {
        lockFlipping = true;
        setTimeout(() => {
            firstCard.classList.remove('flip-class');
            secondCard.classList.remove('flip-class');
            if (soloPlayer) {
                firstPlayerWrongTrials += 1;
                insertFirstPlayerWrongTrial();

            }
            else {
                isPlayerOneTurn = playerOne.classList.contains("playerTurn");
                addingWrongTrials();
                setTimeout(changingPlayers, 250);

            }
            resetCards();
        }, 1000);

    }
}
function addingScores() {
    if (isPlayerOneTurn) {
        firstPlayerScore += 10;
        firstPlayerScoring();
    }
    else {
        secondPlayerScore += 10;
        secondPlayerScoring();
    }

}
function addingWrongTrials() {
    if (isPlayerOneTurn) {
        firstPlayerWrongTrials += 1;
        insertFirstPlayerWrongTrial();
    }
    else {
        seecondPlayerWrongTrials += 1;
        insertSecondPlayerWrongTriala();
    }
}
function changingPlayers() {
    if (isPlayerOneTurn) {

        playerOne.classList.remove("playerTurn");
        scorePlayerOneId.classList.remove("playerTurn");
        wrongTrialOneID.classList.remove("playerTurn");
        playerTwo.classList.add("playerTurn");
        scorePlayerTwoId.classList.add("playerTurn");
        wrongTrialTwoID.classList.add("playerTurn");
        isPlayerOneTurn = false;

    }
    else {

        playerTwo.classList.remove("playerTurn");
        scorePlayerTwoId.classList.remove("playerTurn");
        wrongTrialTwoID.classList.remove("playerTurn");
        playerOne.classList.add("playerTurn");
        scorePlayerOneId.classList.add("playerTurn");
        wrongTrialOneID.classList.add("playerTurn");
        isPlayerOneTurn = true;
    }
}
function removingAllTurns()
{
  
        playerOne.classList.remove("playerTurn");
        scorePlayerOneId.classList.remove("playerTurn");
        wrongTrialOneID.classList.remove("playerTurn");
  
        playerTwo.classList.remove("playerTurn");
        scorePlayerTwoId.classList.remove("playerTurn");
        wrongTrialTwoID.classList.remove("playerTurn");

   
}


//reset cards flags to default
function resetCards() {
    firstCard = null;
    secondCard = null;
    hasFlipped = false;
    lockFlipping = false;
}

function firstPlayerScoring() {
    if (firstPlayerScore == MaximumScoreOnePlayer) {
        clearInterval(TimerInverter);
    }

    scorePlayerOneId.innerHTML = `Score : ${firstPlayerScore}`
}
function secondPlayerScoring() {
    scorePlayerTwoId.innerHTML = `Score : ${secondPlayerScore}`
}
function insertFirstPlayerWrongTrial() {

    wrongTrialOneID.innerHTML = `WronTrials : ${firstPlayerWrongTrials}`
}
function insertSecondPlayerWrongTriala() {

    wrongTrialTwoID.innerHTML = `WronTrials : ${seecondPlayerWrongTrials}`
}

//shownig time
function calcTime() {
        TimerInverter = setInterval(() => {
            if(!pausing)
            {
                TimerCounter += 1;
    
                if (TimerCounter < 10) {
                    timer.innerHTML = `0${TimePerMns}:0${TimerCounter}`
                }
                else if (TimerCounter >= 10 && TimerCounter < 60) {
                    timer.innerHTML = `0${TimePerMns}:${TimerCounter}`
                }
                else if (TimerCounter >= 60) {
                    TimePerMns += TimerCounter / 60;
                    TimerCounter = 0;
                    timer.innerHTML = `0${TimePerMns}:00`
                }
                if (TimePerMns === MaximumMnsTime) {
                    clearInterval(TimerInverter);
                    lockFlipping = true;
                    WritingGameOver();

                }
            }
            
    
        }, 1000)
    
  
};


function startNumber() {
    var i = startCounter;
    start.innerText = `${i}`
    i--;

    startInterval = setInterval(() => {

        if (i == 0) {
            start.innerText = "GO";
            i--;
        }
        else if (i < 0) {
            clearInterval(startInterval);
            start.style.zIndex = 0;
            start.innerHTML = "";
            calcTime();
        }
        else {
            start.innerText = `${i}`
            i--;


        }
    }, 1000)


};



function showScores() {

    //audio winning
    musicPlayer.setAttribute("src","documents/audio/win.mp3");
    musicPlayer.loop=false;
    musicPlayer.play();
    if (soloPlayer) {
        leaderBoardWinnerPlace.innerText = ` ${firstPlayerName} 
        You Have Acheved ${firstPlayerScore} points `

    }
    else {
        if (firstPlayerScore > secondPlayerScore) {
            leaderBoardWinnerPlace.innerText = ` ${firstPlayerName} 
            You Have Acheved ${firstPlayerScore} points `
        }
        else {
            leaderBoardWinnerPlace.innerText = ` ${secondPlayerName} 
            You Have Acheved ${secondPlayerScore} points `
        }
    }
    winnerLeadedrBoard.style.top = "7%";
    hideElement.style.top="10%";
    hideElement.style.zIndex="100";
    insertPlayerIntobOard();

}
function insertPlayerIntobOard() {
    var counter = 0;
    for (var elem in localStorage) {
       if(elem!="difficultyLevel"&&
        elem!="ThemeValue"&&elem!="pickedColor"&&
        elem!="radiolevel"&&elem!="firstPlayeName"&&elem!="secondplayername"
        &&elem!="soloPlayer"&&elem!="pausingFlag") 
        {
            if (localStorage.getItem(elem) != null) {
                counter++;
                scoresTable.innerHTML += ` <tr>
                <td>${elem}</td>
                <td>${localStorage.getItem(elem)}</td>
              </tr>`
            }
           

        }

    } if (counter == 0) {
        scoresTable.innerHTML += ` <tr>
        <td>No Players Yet</td>
       
      </tr>`
    }


}
newGameBoard.addEventListener("click", () => {
    winnerLeadedrBoard.style.top = "100%"
    hideElement.style.top="100%";
    resettingGame();

})



function addingToLocalStorageSoloPlayer() {
    console.log("adding");

    console.log("realadding");
    existedPlayerOne = localStorage.getItem(firstPlayerName);
    if (existedPlayerOne === null) {
        localStorage.setItem(firstPlayerName, firstPlayerScore);
    }
    else {
        if (existedPlayerOne < firstPlayerScore) {
            localStorage.setItem(firstPlayerName, firstPlayerScore);
        }
    }

}
function addingToLocalStorageMultiPlayer() {
    addingToLocalStorageSoloPlayer();
    existedPlayerTwo = localStorage.getItem(secondPlayerName);
    if (existedPlayerTwo === null) {
        localStorage.setItem(secondPlayerName, secondPlayerScore);
    }
    else {
        if (existedPlayerTwo < firstPlayerScore) {
            localStorage.setItem(secondPlayerName, secondPlayerScore);
        }
    }

}

function WritingGameOver() {
    musicPlayer.setAttribute("src","documents/audio/gameOver.wav");
    musicPlayer.loop=false;
    musicPlayer.play();
   //audio losing game
    var  GameOverHeader =document.getElementById("GameOverHeader");
      var i = 1;
      var arr = ["G", "a", "m", "e", " ", "O", "v", "e", "r"];
      GameOver.style.top = "20%"
      GameOverHeader.innerText = `${arr[0]}`;
  
      var OverInterval = setInterval(() => {
          GameOverHeader.innerText += `${arr[i]}`;
          i++;
          if (i == arr.length) {
              clearInterval(OverInterval);
          }
  
      }
          , 300)}
  

          gameOverNewGamebtn.addEventListener("click",()=>{
            GameOver.style.top = "100%"
            resettingGame();})
        
   




      

function resettingGame() {
    clearInterval(TimerInverter);
    clearInterval(startInterval);
    firstPlayerScore = 0;
    firstPlayerWrongTrials = 0;
    TimerCounter = 0;
    TimePerMns = 0;
    resetCards();
    start.style.zIndex = "20";
    setPlayers();
    pausing = false;

    if (!soloPlayer) {
        secondPlayerScore = 0;
        seecondPlayerWrongTrials = 0;

    }

}
newgame.addEventListener("click",()=>{

    pausemenu.style.transform = "translateX(-1500px)";
    localStorage.setItem("pausingFlag",false);
    resettingGame() 
})



mainmenu.addEventListener("click",()=>{
    clearInterval(TimerInverter);
    clearInterval(startInterval);

})
mainmenuBoard.addEventListener("click", () => {
    winnerLeadedrBoard.style.top = "100%"
    clearInterval(TimerInverter);
    clearInterval(startInterval);
});
gameOvermainmenubtn.addEventListener("click",()=>{
    GameOver.style.top = "100%"
    clearInterval(TimerInverter);
    clearInterval(startInterval);
    
})