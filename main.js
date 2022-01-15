
var container = document.getElementById("htmlid");
var singleplayername;
var secondplayernameid;
var leaderboardFirsPageName;
var leaderboardFirsPageScore;
var leaderboardSecondSinglPageName;
var leaderboardSecondSinglPageScore;
var leaderboardSecondMultiPageName;
var leaderboardSecondMultiPageScore;
var resumebtn;
function firstPage()
{
container.innerHTML=
`

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="icon" href="documents/Images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="documents/files/firstpage.css">
    <title>The Perfect Memory Game</title>
</head>
<body>
         <video playsinline autoplay muted loop id="myVideo">
        <source src="documents/video/Falling.webm" type="video/webm">
        
        Your browser does not support HTML5 video.
      </video>
      <audio  id="audioPlayer" src="documents/audio/DiscoTune.mp3"></audio>
      <audio loop id="musicPlayer" src="documents/audio/DiscoTune.mp3"></audio>
      
      
    <h2 class="animated">The Perfect</h1>
    <h1 id ="memorygameheader" class="animated">Memory Game</h1>
    <div class="container default">
        <div id="button1" class="btn" onclick="secondPageSingleplayer()"><a  href="#">Single Player</a></div>
        <div id="button2" class="btn" onclick="secondPageMultiplayer()"><a href="#">Multi Player</a></div>
        <!-- <div class="btn"><a href="#">Read more</a></div> -->
    </div>
    
    <div class="container container1">
      <div id ="menuIcon" class="btn btn1"><a style="color: rgb(0, 132, 255);"class="material-icons" href="#">menu_open</a></div>
      <div id ="leaderboardIcon" class="btn btn1 btn2 btn3"><a style="color: #d69e2e;" class="material-icons"href="#">emoji_events</a></div>
      <div id ="musicIcon" class="btn btn1 btn2"><a style="color: rgb(51, 255, 0);" class="material-icons"href="#">music_note</a></div>
      <div id ="soundIcon" class="btn btn1 btn2"><a style="color: rgb(255, 0, 0);" class="material-icons"href="#">volume_up</a></div>
  </div>
  <div id="menubody" class="menubody">
  <div id="menucontid" class="menucont">
    <div id="menucard" class="menucard">
      <h2 id ="cardHeader"> Magical Menu</h2>
      <div class="menucontent2">
        <h3>How To Play</h3>
        <p>- Choose two cards at a time and try to find identical cards.</p>
        <p>- If the two cards are identical then the two cards will be removed</p>
        <p>- If multi player is selected then each player has a turn to choose</p>
        <p>- The player wins if he found all cards at the shortest avilable time</p>
        <p>- If the two player spent identical time the score will determine the winner
        </p>
      </div>
      <div id="menucontentid"class="menucontent">
        
        <form action="">
          <div class="themescontainer">
            <label for="themes">Themes</label>
            <input checked type="radio" class="radio radiotheme" name="themes" id="themes1" value="conan">
            <input type="radio" class="radio radiotheme" name="themes" id="themes2" value="deathnote">
            <input type="radio" class="radio radiotheme" name="themes" id="themes3"value="avengers">
          </div>
          <div class="colorContainer">
            <label for="colors">color</label>
            <input type="color" class="colorstyling othermenu" name="colors" id="colors">
          </div>
          <div class="musicbar">
            <label for="musicslider">music</label>
            <input class="range ltpurple othermenu" type="range"min="0" max="1" step="0.1" value="0.5" name="musicslider" id="musicslider">
          </div>
          <div class="soundbar">
            <label for="soundslider">sound</label>
            <input class="range ltpurple othermenu" min="0" max="1" step="0.1" value="0.5"type="range" name="soundslider" id="soundslider">
          </div>
          
          <div class="diffcontainer">
            <label for="diff">Difficulty</label>
            <input  type="radio" class="radio radiodiff" name="diff" id="diff1"value="easy">
            <input checked type="radio" class="radio radiodiff" name="diff" id="diff2"value="medium">
            <input type="radio" class="radio radiodiff" name="diff" id="diff3" value="hard">
          </div>
          <a id ="cancel"class="returnbtn material-icons" href="#">cancel</a>
        </form>
        
      </div>
    </div>
  </div>
</div>
<div id="leaderbody" class="leaderbody">
<div id="leadercontid" class="leadercont">
    <div id="leadercard" class="leadercard">
        <h2 id="leaderHeader">LeaderBoard</h2>
        <div id="leadercontentid" class="leadercontent">
            <div>
                <table >
                    <tr class="tr">
                        <td>
                            <h1 class="head">NAME</h1>
                        </td>
                        <td>
                            <h1 class="head">SCORE</h1>
                        </td>
                        
                    </tr>
                    <tr class="tr2">
                        <td id="leaderboardFirsPageName">
                            <h1 id="demo" class="score">Ahmed</h1>
                            <h1 id="demo" class="score">ghg</h1>
                            <h1 id="demo" class="score"></h1>
                            <h1 id="demo" class="score"></h1>
                            <h1 id="demo" class="score"></h1>
                        </td>
                        <td id="leaderboardFirsPageScore">
                            <h1 id="demo1" class="score">50</h1>
                            <h1 id="demo1" class="score">56</h1>
                            <h1 id="demo" class="score"></h1>
                            <h1 id="demo" class="score"></h1>
                            <h1 id="demo" class="score"></h1>
                        </td>
                       
                    </tr>
                </table>
            </div>
            <a id="cancel2" class="returnbtn2 material-icons" href="#">cancel</a>
        </div>
    </div>
</div>
</div>
<div id="firstpagescriptcontainer">

</div>
</body>

`
var firstpagescript = document.getElementById("firstpagescriptcontainer");
var Script1 = document.createElement("script");
var Script2 = document.createElement("script");
var Script3 = document.createElement("script");
Script1.src = "documents/files/firstpage.js";
Script2.src = "documents/files/tilt.js";
Script3.src = "main.js";
firstpagescript.appendChild(Script1);
firstpagescript.appendChild(Script2);
firstpagescript.appendChild(Script3);
 leaderboardFirsPageName=document.getElementById("leaderboardFirsPageName");
 leaderboardFirsPageScore=document.getElementById("leaderboardFirsPageScore");
 addplayersLeaderBoard()

//other functions here
//other functions here
//other functions here
//other functions here
}
function secondPageSingleplayer()
{
  localStorage.setItem("soloPlayer",true);
    container.innerHTML=
    `
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="documents/Images/favicon.ico" type="image/x-icon">
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">  
    <link rel="stylesheet" href="documents/files/secondpage.css">
    <title>The perfect memory game</title>
</head>
<body>
  <span class="firstplayerspan singleplayerspan "style="left: auto;" >First Player Name</span>
  <div class="singleplayernamediv singlevisibilty">
    
    <input type="text" class="singleplayername" id="singleplayernameid">
    </div>


    <div class="openkeyboard"id="openkeyboardid" onclick="openKeyboard()"><a  class ="material-icons" href="#">keyboard</a></div>
    <div class="mousekeyboard" id="mousekeyboardid">
     <ul class="first">
        <li>
          <input  type="checkbox"  class="check" />
          <div class="letterdiv">A</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">B</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">C</div>
        </li>
        <li>
          <input  type="checkbox" class="check" />
          <div class="letterdiv">D</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">E</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">F</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">G</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">H</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">I</div>
        </li>
        <li>
            <input type="checkbox" class="check" />
            <div class="letterdiv">J</div>
          </li>
      
      
      
        <li>
          <input  type="checkbox" class="check" />
          <div class="letterdiv">K</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">L</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">M</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">N</div>
        </li>
    </ul>
        <ul class="second">
        <li>
            <input type="checkbox" class="check" />
            <div class="letterdiv material-icons">replay</div>
            </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">O</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">P</div>
        </li>
        <li>
          <input  type="checkbox" class="check" />
          <div class="letterdiv">Q</div>
        </li>
        <li>
          <input  type="checkbox" class="check" />
          <div class="letterdiv">R</div>
        </li>
        <li>
          <input  type="checkbox" class="check" />
          <div class="letterdiv">S</div>
        </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">T</div>
          </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">U</div>
          </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">V</div>
          </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">W</div>
          </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">X</div>
          </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">Y</div>
          </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">Z</div>
          </li>
          <li>
            <input type="checkbox" class="check" />
            <div class="letterdiv material-icons">keyboard_backspace</div>
            </li>
        <li>
      </ul> 
      </div>
      <div class="chooselevelsdiv">
        
        <input  type="radio" class="radio radiolevel " name="themes" id="level1" value="0">

        <input checked type="radio" class="radio radiolevel " name="themes" id="level2" value="1">

        <input type="radio" class="radio radiolevel " name="themes" id="level3"value="2">
        </div>
        <h2 id="chooselevelheaderid" class="chooselevelheader visible">Choose level</h2>
        <div class="levelsnames">
          <span class="level1name">Level 1</span>
          <span class="level2name">Level 2</span>
          <span class="level3name">Level 3</span>

        </div>
      <video playsinline autoplay muted loop id="myVideo">
        <source src="documents/video/Falling.webm" type="video/webm">
        <!-- <source src="galaxy.mp4" type="video/mp4"> -->
        Your browser does not support HTML5 video.
      </video>
      <audio  id="audioPlayer" src="documents/audio/DiscoTune.mp3"></audio>
      <audio loop id="musicPlayer" src="documents/audio/DiscoTune.mp3"></audio>
      
      
    <!-- <h2 class="animated">The Perfect</h1> 
    <h1 id ="memorygameheader" class="animated">Memory Game</h1> -->
     <div class="container default container2 ">
        
        <div id="button2" class="btn btnreturn" onclick="firstPage()"><a href="#">Return</a></div>
        <div id="button1" class="btn btnstart" onclick="gamePage()"><a href="#">Start Game</a></div> 
        <!-- <div class="btn"><a href="#">Read more</a></div> -->
    </div>


    
    <div class="container container1">
      <div id ="menuIcon" class="btn btn1"><a style="color: rgb(0, 132, 255);"class="material-icons" href="#">menu_open</a></div>
      <div id ="leaderboardIcon" class="btn btn1 btn2 btn3"><a style="color: #d69e2e;" class="material-icons"href="#">emoji_events</a></div>
      <div id ="musicIcon" class="btn btn1 btn2"><a style="color: rgb(51, 255, 0);" class="material-icons"href="#">music_note</a></div>
      <div id ="soundIcon" class="btn btn1 btn2"><a style="color: rgb(255, 0, 0);" class="material-icons"href="#">volume_up</a></div>
  </div>
  <div id="menubody" class="menubody">
    <div class="menucont">
      <div id="menucard" class="menucard">
        <h2 id ="cardHeader"> Magical Menu</h2>
        <div class="menucontent2">
          <h3>How To Play</h3>
          <p>- Choose two cards at a time and try to find identical cards.</p>
          <p>- If the two cards are identical then the two cards will be removed</p>
          <p>- If multi player is selected then each player has a turn to choose</p>
          <p>- The player wins if he found all cards at the shortest avilable time</p>
          <p>- If the two player spent identical time the score will determine the winner
          </p>
        </div>
        <div class="menucontent">
          
          <form action="">
            <div class="themescontainer">
              <label for="themes">Themes</label>
              <input checked type="radio" class="radio radiotheme" name="themes" id="themes1" value="conan">
              <input type="radio" class="radio radiotheme" name="themes" id="themes2" value="deathnote">
              <input type="radio" class="radio radiotheme" name="themes" id="themes3"value="avengers">

            </div>
            <div class="colorContainer">
              <label for="colors">color</label>
              <input type="color" class="colorstyling othermenu" name="colors" id="colors" value="magenta">
            </div>
            <div class="musicbar">
              <label for="musicslider">music</label>
              <input class="range ltpurple othermenu" type="range"min="0" max="1" step="0.1" value="0.5" name="musicslider" id="musicslider">
            </div>
            <div class="soundbar">
              <label for="soundslider">sound</label>
              <input class="range ltpurple othermenu" min="0" max="1" step="0.1" value="0.5"type="range" name="soundslider" id="soundslider">
            </div>
            <div class="diffcontainer">
              <label for="diff">Difficulty</label>
              <input  type="radio" class="radio radiodiff" name="diff" id="diff1"value="easy">
              <input checked type="radio" class="radio radiodiff" name="diff" id="diff2"value="medium">
              <input type="radio" class="radio radiodiff" name="diff" id="diff3" value="hard">
            </div>
            <a id ="cancel"class="returnbtn material-icons" href="#">cancel</a>
          </form>
          
        </div>
      </div>
    </div>
  </div>
  <div id="leaderbody" class="leaderbody">
  <div id="leadercontid" class="leadercont">
      <div id="leadercard" class="leadercard">
          <h2 id="leaderHeader">LeaderBoard</h2>
          <div id="leadercontentid" class="leadercontent">
              <div>
                  <table>
                      <tr class="tr">
                          <td>
                              <h1 class="head">NAME</h1>
                          </td>
                          <td>
                              <h1 class="head">SCORE</h1>
                          </td>
                          
                      </tr>
                      <tr class="tr2">
                          <td id="leaderboardSecondSinglPageName">
                              <h1 id="demo" class="score">Ahmed</h1>
                              <h1 id="demo" class="score">ghg</h1>
                              <h1 id="demo" class="score"></h1>
                              <h1 id="demo" class="score"></h1>
                              <h1 id="demo" class="score"></h1>
                          </td>
                          <td id="leaderboardSecondSinglPageScore">
                              <h1 id="demo1" class="score">50</h1>
                              <h1 id="demo1" class="score">56</h1>
                              <h1 id="demo" class="score"></h1>
                              <h1 id="demo" class="score"></h1>
                              <h1 id="demo" class="score"></h1>
                          </td>
                         
                      </tr>
                  </table>
              </div>
              <a id="cancel2" class="returnbtn2 material-icons" href="#">cancel</a>
          </div>
      </div>
  </div>
  </div>
    
<div id="firstpagescriptcontainer">

</div>
</body>

`
var firstpagescript = document.getElementById("firstpagescriptcontainer");
var Script1 = document.createElement("script");
var Script2 = document.createElement("script");
var Script3 = document.createElement("script");
Script1.src = "documents/files/secondpage.js";
Script2.src = "documents/files/tilt.js";
Script3.src = "main.js";
firstpagescript.appendChild(Script1);
firstpagescript.appendChild(Script2);
firstpagescript.appendChild(Script3);
singleplayername=document.getElementById("singleplayernameid");
leaderboardSecondSinglPageName=document.getElementById("leaderboardSecondSinglPageName");
leaderboardSecondSinglPageScore=document.getElementById("leaderboardSecondSinglPageScore");
addplayersLeaderBoardsecondpagesingl()
//other functions here
//other functions here
//other functions here
//other functions here
}
function secondPageMultiplayer()
{
  localStorage.setItem("soloPlayer",false);
    container.innerHTML=
    `
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="documents/Images/favicon.ico" type="image/x-icon">
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">  
    <link rel="stylesheet" href="documents/files/secondpage.css">
    <title>The perfect memory game</title>
</head>
<body>
  <span class="firstplayerspan singleplayerspan">First Player Name</span>
  <div class="singleplayernamediv ">
    
    <input type="text" class="singleplayername" id="singleplayernameid">
    </div>
  <span class="secondplayerspan">Second Player Name</span>
  <div class="secondplayernamediv">
    
    <input type="text" class="secondplayername" id="secondplayernameid">
    </div>
    <div class="openkeyboard"id="openkeyboardid" onclick="openKeyboard()"><a  class ="material-icons" href="#">keyboard</a></div>
    <div class="mousekeyboard" id="mousekeyboardid">
     <ul class="first">
        <li>
          <input  type="checkbox"  class="check" />
          <div class="letterdiv">A</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">B</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">C</div>
        </li>
        <li>
          <input  type="checkbox" class="check" />
          <div class="letterdiv">D</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">E</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">F</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">G</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">H</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">I</div>
        </li>
        <li>
            <input type="checkbox" class="check" />
            <div class="letterdiv">J</div>
          </li>
      
      
      
        <li>
          <input  type="checkbox" class="check" />
          <div class="letterdiv">K</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">L</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">M</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">N</div>
        </li>
    </ul>
        <ul class="second">
        <li>
            <input type="checkbox" class="check" />
            <div class="letterdiv material-icons">replay</div>
            </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">O</div>
        </li>
        <li>
          <input type="checkbox" class="check" />
          <div class="letterdiv">P</div>
        </li>
        <li>
          <input  type="checkbox" class="check" />
          <div class="letterdiv">Q</div>
        </li>
        <li>
          <input  type="checkbox" class="check" />
          <div class="letterdiv">R</div>
        </li>
        <li>
          <input  type="checkbox" class="check" />
          <div class="letterdiv">S</div>
        </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">T</div>
          </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">U</div>
          </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">V</div>
          </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">W</div>
          </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">X</div>
          </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">Y</div>
          </li>
        <li>
            <input  type="checkbox" class="check" />
            <div class="letterdiv">Z</div>
          </li>
          <li>
            <input type="checkbox" class="check" />
            <div class="letterdiv material-icons">keyboard_backspace</div>
            </li>
        <li>
      </ul> 
      </div>
      <div class="chooselevelsdiv">
        
        <input  type="radio" class="radio radiolevel " name="themes" id="level1" value="0">

        <input checked type="radio" class="radio radiolevel " name="themes" id="level2" value="1">

        <input type="radio" class="radio radiolevel " name="themes" id="level3"value="2">
        </div>
        <h2 id="chooselevelheaderid" class="chooselevelheader visible">Choose level</h2>
        <div class="levelsnames">
          <span class="level1name">Level 1</span>
          <span class="level2name">Level 2</span>
          <span class="level3name">Level 3</span>

        </div>
      <video playsinline autoplay muted loop id="myVideo">
        <source src="documents/video/Falling.webm" type="video/webm">
        <!-- <source src="galaxy.mp4" type="video/mp4"> -->
        Your browser does not support HTML5 video.
      </video>
      <audio  id="audioPlayer" src="documents/audio/DiscoTune.mp3"></audio>
      <audio loop id="musicPlayer" src="documents/audio/DiscoTune.mp3"></audio>
      
      
    <!-- <h2 class="animated">The Perfect</h1> 
    <h1 id ="memorygameheader" class="animated">Memory Game</h1> -->
     <div class="container default container2 ">
        
        <div id="button2" class="btn btnreturn" onclick="firstPage()"><a href="#">Return</a></div>
        <div id="button1" class="btn btnstart" onclick="gamePage()"><a href="#">Start Game</a></div> 
        <!-- <div class="btn"><a href="#">Read more</a></div> -->
    </div>


    
    <div class="container container1">
      <div id ="menuIcon" class="btn btn1"><a style="color: rgb(0, 132, 255);"class="material-icons" href="#">menu_open</a></div>
      <div id ="leaderboardIcon" class="btn btn1 btn2 btn3"><a style="color: #d69e2e;" class="material-icons"href="#">emoji_events</a></div>
      <div id ="musicIcon" class="btn btn1 btn2"><a style="color: rgb(51, 255, 0);" class="material-icons"href="#">music_note</a></div>
      <div id ="soundIcon" class="btn btn1 btn2"><a style="color: rgb(255, 0, 0);" class="material-icons"href="#">volume_up</a></div>
  </div>
  <div id="menubody" class="menubody">
    <div class="menucont">
      <div id="menucard" class="menucard">
        <h2 id ="cardHeader"> Magical Menu</h2>
        <div class="menucontent2">
          <h3>How To Play</h3>
          <p>- Choose two cards at a time and try to find identical cards.</p>
          <p>- If the two cards are identical then the two cards will be removed</p>
          <p>- If multi player is selected then each player has a turn to choose</p>
          <p>- The player wins if he found all cards at the shortest avilable time</p>
          <p>- If the two player spent identical time the score will determine the winner
          </p>
        </div>
        <div class="menucontent">
          
          <form action="">
            <div class="themescontainer">
              <label for="themes">Themes</label>
              <input checked type="radio" class="radio radiotheme" name="themes" id="themes1" value="conan">
              <input type="radio" class="radio radiotheme" name="themes" id="themes2" value="deathnote">
              <input type="radio" class="radio radiotheme" name="themes" id="themes3"value="avengers">
            </div>
            <div class="colorContainer">
              <label for="colors">color</label>
              <input type="color" class="colorstyling othermenu" name="colors" id="colors" value="magenta">
            </div>
            <div class="musicbar">
              <label for="musicslider">music</label>
              <input class="range ltpurple othermenu" type="range"min="0" max="1" step="0.1" value="0.5" name="musicslider" id="musicslider">
            </div>
            <div class="soundbar">
              <label for="soundslider">sound</label>
              <input class="range ltpurple othermenu" min="0" max="1" step="0.1" value="0.5"type="range" name="soundslider" id="soundslider">
            </div>
            <div class="diffcontainer">
              <label for="diff">Difficulty</label>
              <input  type="radio" class="radio radiodiff" name="diff" id="diff1"value="easy">
              <input checked type="radio" class="radio radiodiff" name="diff" id="diff2"value="medium">
              <input type="radio" class="radio radiodiff" name="diff" id="diff3" value="hard">
            </div>
            <a id ="cancel"class="returnbtn material-icons" href="#">cancel</a>
          </form>
          
        </div>
      </div>
    </div>
  </div>
  <div id="leaderbody" class="leaderbody">
  <div id="leadercontid" class="leadercont">
      <div id="leadercard" class="leadercard">
          <h2 id="leaderHeader">LeaderBoard</h2>
          <div id="leadercontentid" class="leadercontent">
              <div>
                  <table>
                      <tr class="tr">
                          <td>
                              <h1 class="head">NAME</h1>
                          </td>
                          <td>
                              <h1 class="head">SCORE</h1>
                          </td>
                          
                      </tr>
                      <tr class="tr2">
                          <td id="leaderboardSecondMultiPageName">
                              <h1 id="demo" class="score">Ahmed</h1>
                              <h1 id="demo" class="score">ghg</h1>
                              <h1 id="demo" class="score"></h1>
                              <h1 id="demo" class="score"></h1>
                              <h1 id="demo" class="score"></h1>
                          </td>
                          <td id="leaderboardSecondMultiPageScores">
                              <h1 id="demo1" class="score">50</h1>
                              <h1 id="demo1" class="score">56</h1>
                              <h1 id="demo" class="score"></h1>
                              <h1 id="demo" class="score"></h1>
                              <h1 id="demo" class="score"></h1>
                          </td>
                         
                      </tr>
                  </table>
              </div>
              <a id="cancel2" class="returnbtn2 material-icons" href="#">cancel</a>
          </div>
      </div>
  </div>
  </div>
    
<div id="firstpagescriptcontainer">

</div>
</body>

`
var firstpagescript = document.getElementById("firstpagescriptcontainer");
var Script1 = document.createElement("script");
var Script2 = document.createElement("script");
var Script3 = document.createElement("script");
Script1.src = "documents/files/secondpage.js";
Script2.src = "documents/files/tilt.js";
Script3.src = "main.js";
firstpagescript.appendChild(Script1);
firstpagescript.appendChild(Script2);
firstpagescript.appendChild(Script3);
singleplayername=document.getElementById("singleplayernameid");
secondplayernameid=document.getElementById("secondplayernameid");
 leaderboardSecondMultiPageName=document.getElementById("leaderboardSecondMultiPageName");
 leaderboardSecondMultiPageScore=document.getElementById("leaderboardSecondMultiPageScores");
 addplayersLeaderBoardsecondpagemulti()
//other functions here
//other functions here
//other functions here
//other functions here
}
function gamePage(){

  if(secondplayernameid!=null)
  {
    if(singleplayername.value&&secondplayernameid.value)
    {
      localStorage.setItem("firstPlayeName",singleplayername.value);
      localStorage.setItem("secondplayername",secondplayernameid.value);

    }
  }
  
  else if(singleplayername.value)
  {
    localStorage.setItem("firstPlayeName",singleplayername.value);
  }
  
    container.innerHTML=
    `
    
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="icon" href="documents/Images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="documents/files/style.css">
    <link rel="stylesheet" href="documents/files/pausemenu.css">
    <link rel="stylesheet" href="documents/files/lastpage.css">
    <title>The Perfect Memory Game</title>
</head>
<div id="hideElement" class="hide">

</div>
<video playsinline autoplay muted loop id="myVideo">
    <source src="documents/video/Falling.webm" type="video/webm">
    
    Your browser does not support HTML5 video.
  </video>
  <div id='GameContentID' class='GameContent'>
  <div id="start" class="start-class">
      
  </div>
 
  <div id="GameOver" class="GameOverContainer">
  <h1 id="GameOverHeader"></h1>
<button id="gameOverNewGamebtn" class="newgameboard gameoverNewGamebtn">NewGame</button>
<button id="gameOvermainmenubtn" onclick="firstPage()"  class="mainmenuboard gameovermainMenubtn">MainMenu</button>

</div>

    <div id="playersID" class="players">

 

    </div>
    <div id="recordsID" class="records">

     
    </div>
 


    <div id='cardsContainerID' class='cardsContainer'>



    </div>
 


  </div>
  <audio id="audioPlayer" src="documents/audio/DiscoTune.mp3"></audio>
  <audio loop id="musicPlayer" src="documents/audio/DiscoTune.mp3"></audio>
 
  <div class="container container1">
      <div id="menuIcon" class="btn btn1 "><a style="color: rgb(0, 132, 255);" class="material-icons" href="#">menu_open</a></div>
      <div id="musicIcon" class="btn btn1 btn2"><a style="color: rgb(51, 255, 0);" class="material-icons" href="#">music_note</a></div>
      <div id="soundIcon" class="btn btn1 btn2"><a style="color: rgb(255, 0, 0);" class="material-icons" href="#">volume_up</a></div>
  </div>
  <div id="pausemenu" class="pausemenu">
      <div class="pausecont">
          <div id="pausecard" class="pausecard">
              <h2 id="cardHeader1"> Pause Menu</h2>

              <div class="pausecontent">

                  <form action="">
                      <div class="resumecontainer">
                          <label id="resume"><a href="#">Resume</a></label>
                      </div>
                      <div class="newgame">
                          <label id="newgame"><a href="#">NewGame</a> </label>
                      </div>
                      <div class="musicbar1">
                          <label for="musicslider">music</label>
                          <input class="range ltpurple othermenu" type="range" min="0" max="1" step="0.1" value="0.5" name="musicslider" id="musicslider">
                      </div>
                      <div class="soundbar1">
                          <label for="soundslider">sound</label>
                          <input class="range ltpurple othermenu" min="0" max="1" step="0.1" value="0.5" type="range" name="soundslider" id="soundslider">
                      </div>
                      <div class="mainmenu" onclick="firstPage()">
                          <label id="mainmenu"><a href="#">MainMenu</a></label>
                      </div>
                      <a id="cancel1" class="returnbtn material-icons" href="#">cancel</a>
                  </form>

              </div>
          </div>
      </div>
  </div>
<div id="gamepagescriptcontainer">

</div>
<div id="celebration" class="celebration">

<div id="winner">
  <image id="winimg" src="documents/Images/win22.jfif" width="500px" height="220px"></image>
</div>
<div id="winnernamescore">
  Congratutulation Mina You Have Acheved 40 points
</div>
<div id="leader">
  <p><b>Leaderboard</b></p>
  <div id="playerlead">
    <table id="scoresTable">
     
       
    </table>
  </div>
</div>
<button id="newgameboardId" class="newgameboard"><b>New Game </b> </button>
<button id="mainmenuboardId" onclick="firstPage()" class="mainmenuboard"><b>Main Menu</b></button>
</div>
</body>
`
var gamepagescript = document.getElementById("gamepagescriptcontainer");
var Script1 = document.createElement("script");
var Script2 = document.createElement("script");
var Script3 = document.createElement("script");
var Script4 = document.createElement("script");
Script1.src = "documents/files/mygame.js";
Script2.src = "documents/files/tilt.js";
Script3.src = "main.js";
Script3.src = "documents/files/pausemenu.js";


gamepagescript.appendChild(Script1);
gamepagescript.appendChild(Script2);
gamepagescript.appendChild(Script3);
gamepagescript.appendChild(Script4);
//other functions here
//other functions here
//other functions here
//other functions here
var musicPlayer=document.getElementById("musicPlayer");
musicPlayer.setAttribute("src", "documents/audio/battleTheme.mp3");
musicPlayer.play();
}

function addplayersLeaderBoard()
{
  leaderboardFirsPageName.innerHTML="";
  leaderboardFirsPageScore.innerHTML="";
    for (var elem in localStorage) {
       if(elem!="difficultyLevel"&&
        elem!="ThemeValue"&&elem!="pickedColor"&&
        elem!="radiolevel"&&elem!="firstPlayeName"&&elem!="secondplayername"
        &&elem!="soloPlayer"&&elem!="pausingFlag") 
        {
            if (localStorage.getItem(elem) != null) {
              console.log("elem");
                leaderboardFirsPageName.innerHTML+=`<h1 class="score">${elem}</h1>`
                leaderboardFirsPageScore.innerHTML+=`<h1  class="score">${localStorage.getItem(elem)}</h1>`
            }
        }
    } 
}
function addplayersLeaderBoardsecondpagesingl()
{
  leaderboardSecondSinglPageName.innerHTML="";
  leaderboardSecondSinglPageScore.innerHTML="";
    for (var elem in localStorage) {
       if(elem!="difficultyLevel"&&
        elem!="ThemeValue"&&elem!="pickedColor"&&
        elem!="radiolevel"&&elem!="firstPlayeName"&&elem!="secondplayername"
        &&elem!="soloPlayer"&&elem!="pausingFlag") 
        {
            if (localStorage.getItem(elem) != null) {
              console.log("elem");
              leaderboardSecondSinglPageName.innerHTML+=`<h1 class="score">${elem}</h1>`
              leaderboardSecondSinglPageScore.innerHTML+=`<h1  class="score">${localStorage.getItem(elem)}</h1>`
            }
        }
    } 
}
function addplayersLeaderBoardsecondpagemulti()
{
  leaderboardSecondMultiPageName.innerHTML="";
  leaderboardSecondMultiPageScore.innerHTML="";
    for (var elem in localStorage) {
       if(elem!="difficultyLevel"&&
        elem!="ThemeValue"&&elem!="pickedColor"&&
        elem!="radiolevel"&&elem!="firstPlayeName"&&elem!="secondplayername"
        &&elem!="soloPlayer"&&elem!="pausingFlag") 
        {
            if (localStorage.getItem(elem) != null) {
              console.log("elem");
              leaderboardSecondMultiPageName.innerHTML+=`<h1 class="score">${elem}</h1>`
              leaderboardSecondMultiPageScore.innerHTML+=`<h1  class="score">${localStorage.getItem(elem)}</h1>`
            }
        }
    } 
}

var removeChilds=(parent)=>
{
    while(parent.lastChild)
    {
        parent.removeChild(parent.lastChild);
    }
}
function clear()
{
    removeChilds(container);
}



