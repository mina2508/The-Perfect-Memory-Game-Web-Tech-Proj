var secondHeader=document.getElementById("memorygameheader");
var audioPlayer=document.getElementById("audioPlayer");
var singlePlayer=document.getElementById("button1");
var multiPlayer=document.getElementById("button2");
var menuIcon=document.getElementById("menuIcon");
var menubody=document.getElementById("menubody");
var chooselevelheader=document.getElementById("chooselevelheaderid");

var leaderIcon = document.getElementById("leaderboardIcon");
var leaderbody = document.getElementById("leaderbody");
var cancel2 = document.getElementById("cancel2");

var radio=document.querySelectorAll('.radio');


var menuitems=document.querySelectorAll('.othermenu');

var musicIcon=document.getElementById("musicIcon");
var soundIcon=document.getElementById("soundIcon");
var musicPlayer=document.getElementById("musicPlayer");
var menucard=document.getElementById("menucard");
var menucontainer=document.getElementById("menucontid");
var cardHeader=document.getElementById("cardHeader");
var cancel=document.getElementById("cancel");
var colors=document.getElementById("colors");

var soundslider=document.getElementById("soundslider");
var musicslider=document.getElementById("musicslider");

var themeradio=document.getElementsByName("themes");
var diffradio=document.getElementsByName("diff");

var radiotheme =document.querySelectorAll('.radiotheme');
var radiodiff =document.querySelectorAll('.radiodiff');

var checkboxes=document.querySelectorAll('.check');
var mousekeyboard=document.getElementById("mousekeyboardid");
var openkeyboard=document.getElementById("openkeyboardid");

var singleplayernameinput=document.getElementById("singleplayernameid");
var secondplayernameinput=document.getElementById("secondplayernameid");
var allkeysobj ={1:"KeyA",2:"KeyB",3:"KeyC",4:"KeyD",5:"KeyE",6:"KeyF",7:"KeyG",8:"KeyH",9:"KeyI",10:"KeyJ",11:"KeyK",12:"KeyL",13:"KeyM",14:"KeyN",15:"Escape",16:"KeyO",17:"KeyP",18:"KeyQ",19:"KeyR",
20:"KeyS",21:"KeyT",22:"KeyU",23:"KeyV",24:"KeyW",25:"KeyX",26:"KeyY",27:"KeyZ",28:"Backspace"}

console.log(audioPlayer.volume);
//
localStorage.setItem("pausingFlag",false);
localStorage.setItem("ThemeValue","conan");
localStorage.setItem("radiolevel",1);
localStorage.setItem("pickedColor","magenta")
localStorage.removeItem("firstPlayeName");
localStorage.removeItem("secondplayername")
//
//flags

var soundVolumeFlag=soundslider.value;
var musicVolumeFlag=musicslider.value;
var Pickedtheme="conan";
var difficulty="medium";
var color="magenta";
var focusflag;
var keyboardflag=false;
//flags

// Play audio function
async function playAudio() {   
  
    setTimeout(function () {      
        audioPlayer.play();
     }, 150)
} 

// Pause audio function
function pauseAudio() {     
   
    setTimeout(function () {      
        audioPlayer.pause();
     }, 150)
}
var click =()=>
{
    audioPlayer.setAttribute("src","documents/audio/Click.wav");
    
    playAudio();
}
var select =()=>
{
    audioPlayer.setAttribute("src","documents/audio/vgmenuselect.wav");
   
    playAudio();
}
var themevalue=()=>{
for (var i = 0; i < themeradio.length; i++) {
    if (themeradio[i].checked) {
        // insert code to use the checked value
        Pickedtheme=themeradio[i].value;
        break;
    }
    
}
localStorage.setItem("ThemeValue",Pickedtheme);
console.log("theme value is :",Pickedtheme);
}
var diffvalue=()=>{
    for (var i = 0 ;i < diffradio.length; i++) {
        if (diffradio[i].checked) {
            // insert code to use the checked value
            difficulty=diffradio[i].value;
            break;
        }
    }
    console.log("diff value is :",difficulty);
    console.log("diff value is :",difficulty);
    localStorage.setItem("difficultyLevel",difficulty);

    }
var fadeIn =()=>
{
    audioPlayer.setAttribute("src","documents/audio/qubodup-SpeedUp.FLAC");
    audioPlayer.volume=.5*soundVolumeFlag;
    playAudio();
}
var fadeOut =()=>
{
    audioPlayer.setAttribute("src","documents/audio/qubodup-SlowDown.FLAC");
    audioPlayer.volume=.5*soundVolumeFlag;
    playAudio();
}

var menufadein =()=>
{
    audioPlayer.setAttribute("src","documents/audio/FX241.WAV");
    audioPlayer.volume=.5*soundVolumeFlag;
    playAudio();
}
var openKeyboard=()=>
{
    mousekeyboard.transform="translateY(0px);";
}
if (secondHeader!=null){
secondHeader.addEventListener("mouseenter",()=>
{
    audioPlayer.setAttribute("src","documents/audio/Knife.FLAC");
audioPlayer.volume=.2*soundVolumeFlag;
    playAudio();
    
})
secondHeader.addEventListener("mouseleave",()=>
{
    pauseAudio();
    audioPlayer.volume=soundVolumeFlag;
})
}
if (singlePlayer!=null){
singlePlayer.addEventListener("mouseenter",()=>
{
    click();
})}
// singlePlayer.addEventListener("mouseleave",()=>
// {
//     pauseAudio();
// })
if (multiPlayer!=null){
multiPlayer.addEventListener("mouseenter",()=>
{
    click();
})}
// multiPlayer.addEventListener("mouseleave",()=>
// {
//     pauseAudio();
// })
radio.forEach(item => {
    item.addEventListener("mouseenter",()=>{click();})
    item.addEventListener("mouseup",()=>{select();})

})
radio.forEach(item => {
    item.addEventListener("mouseleave",()=>
{
    pauseAudio();
})})
radiotheme.forEach(item => {
    item.addEventListener("change",()=>{themevalue();})

})

radiodiff.forEach(item => {
    item.addEventListener("change",()=>{diffvalue();})
})
menuitems.forEach(item => {
    item.addEventListener("mouseenter",()=>
{
    click();
})})
menuitems.forEach(item => {
    item.addEventListener("mouseleave",()=>
{
    pauseAudio();
})})
menuIcon.addEventListener("mouseenter",()=>
{
    click();
})
// menuIcon.addEventListener("mouseleave",()=>
// {
//     pauseAudio();
// })
musicIcon.addEventListener("mouseenter",()=>
{
    click();
})
// musicIcon.addEventListener("mouseleave",()=>
// {
//     pauseAudio();
// })
soundIcon.addEventListener("mouseenter",()=>
{
    click();
})
menucard.addEventListener("mouseenter",()=>
{
    menufadein();
})
// soundIcon.addEventListener("mouseleave",()=>
// {
//     pauseAudio();
// })
musicIcon.addEventListener("mousedown",()=>
{
    
    
    if(musicIcon.firstChild.innerHTML=="music_note"){
        
    musicPlayer.setAttribute("src","documents/audio/DiscoTune.mp3");
    if(musicVolumeFlag!=0){
    musicVolumeFlag=musicslider.value;
    musicPlayer.volume = musicVolumeFlag;
    }
    else{
        musicslider.value =.5;
        musicVolumeFlag=musicslider.value;
        musicPlayer.volume = musicVolumeFlag;
    }
    musicIcon.firstChild.innerHTML="music_off";
    musicPlayer.play();
    }
    else if(musicIcon.firstChild.innerHTML=="music_off"){
        musicIcon.firstChild.innerHTML="music_note";
        musicPlayer.pause();
    }
})
soundIcon.addEventListener("mousedown",()=>
{
    if(soundIcon.firstChild.innerHTML=="volume_up"){
        soundVolumeFlag=0;
        soundslider.value =soundVolumeFlag;
        
        audioPlayer.volume=soundVolumeFlag;
        soundIcon.firstChild.innerHTML="volume_mute";
        
    }
    else if(soundIcon.firstChild.innerHTML=="volume_mute"){
        if(soundVolumeFlag!=0){
        soundslider.value=soundVolumeFlag;
        audioPlayer.volume=soundVolumeFlag;
        }
        else
        {   
            soundVolumeFlag=.5;
            soundslider.value=soundVolumeFlag;
            audioPlayer.volume=soundVolumeFlag;
        }
        soundIcon.firstChild.innerHTML="volume_up";
        
    }
    
});
soundslider.addEventListener("change",()=>{
    if(soundslider.value==0)
    {
        soundIcon.firstChild.innerHTML="volume_mute";
    }
    else if(soundslider.value>0)
    {
        soundIcon.firstChild.innerHTML="volume_up";
    }
    soundVolumeFlag=soundslider.value;
    audioPlayer.volume=soundVolumeFlag;
})
musicslider.addEventListener("change",()=>{
    if(musicslider.value==0)
    {
        musicIcon.firstChild.innerHTML="music_note";
    }
    else if(musicslider.value>0)
    {
        musicIcon.firstChild.innerHTML="music_off";
    }
    musicVolumeFlag=musicslider.value;
    musicPlayer.volume=musicVolumeFlag;
    musicPlayer.play();
})
colors.addEventListener("change",()=>
{
    color=colors.value;
    console.log(color);
    localStorage.setItem("pickedColor",color);
})
menuIcon.addEventListener("mouseup",()=>
{
    menubody.style.transform="translateX(0px)";
    fadeIn();
})
cancel.addEventListener("mouseup",()=>
{
    menubody.style.transform="translateX(-1500px)";
    fadeOut();
})

// document.addEventListener("keyup",(e)=>{
//     if(e.code=="Enter")
//     {
//         // menubody.style.transform="translateX(0px)"
//         // console.log(menubody.style.transform);
//         secondplayernameinput.focus();
//     }
// })
if(singleplayernameinput!=null)
{
    singleplayernameinput.addEventListener("keydown",(e)=>{
        for (var i = 0; i <  Object.keys(allkeysobj).length; i++) {

        if(e.code==allkeysobj[Object.keys(allkeysobj)[i]])
        {
            if (checkboxes[i].getAttribute("checked")=="false"||checkboxes[i].getAttribute("checked")==null)
            {
                checkboxes[i].setAttribute("checked","true");
            }
            else{checkboxes[i].removeAttribute("checked");}
            if (i==14) {
                singleplayernameinput.value="";
                for (var index = 0; index < checkboxes.length; index++) {
                    checkboxes[index].removeAttribute("checked");
                    checkboxes[index].checked=false;
                }
            }
        }   
    }
    })
}
if(secondplayernameinput!=null)
{
    secondplayernameinput.addEventListener("keydown",(e)=>{
        for (var i = 0; i <  Object.keys(allkeysobj).length; i++) {

        if(e.code==allkeysobj[Object.keys(allkeysobj)[i]])
        {
            if (checkboxes[i].getAttribute("checked")=="false"||checkboxes[i].getAttribute("checked")==null)
            {
                checkboxes[i].setAttribute("checked","true");
            }
            else{checkboxes[i].removeAttribute("checked");}
            if (i==14) {
                singleplayernameinput.value="";
                for (var index = 0; index < checkboxes.length; index++) {
                    checkboxes[index].removeAttribute("checked");
                    checkboxes[index].checked=false;
                }
            }
        }   
    }
    })
}

checkboxes.forEach(item => {
    item.addEventListener("mousedown",()=>
{
    if (item.nextElementSibling.innerHTML=="replay")
    {
        if(focusflag=="single"){
        singleplayernameinput.value="";
        
        }
        else if(focusflag=="second")
        {secondplayernameinput.value="";
        
        }
        else
        for (var inx = 0; inx < checkboxes.length; inx++) {
            console.log("inside");
            checkboxes[inx].checked=false;
        }
    }
    else if(item.nextElementSibling.innerHTML=="keyboard_backspace")
    {
        if(focusflag=="single")
        {
        singleplayernameinput.value=singleplayernameinput.value.slice(0,-1);
        
        }
        else if(focusflag=="second")
        {
            secondplayernameinput.value=secondplayernameinput.value.slice(0,-1);
        }
    
    }
    else {
        if (focusflag=="single") 
        {
            singleplayernameinput.value+=item.nextElementSibling.innerHTML;
            
        }
        else if(focusflag=="second")
        {
            secondplayernameinput.value+=item.nextElementSibling.innerHTML;
            
        }
    
    }
secondplayernameinput.focus();
})})
if(singleplayernameinput!=null){
singleplayernameinput.addEventListener("click",()=>{focusflag="single"});}
if(secondplayernameinput!=null){
secondplayernameinput.addEventListener("click",()=>{focusflag="second"});}
if(openkeyboard!=null){
openkeyboard.addEventListener("mousedown",()=>{
    
    if (!keyboardflag){
    mousekeyboard.classList.remove("mousekeyboard");
    chooselevelheader.classList.remove("visible");
    keyboardflag=true;
    }
    else{
        mousekeyboard.classList.add("mousekeyboard");
        chooselevelheader.classList.add("visible");
        keyboardflag=false;
        }
});}

leaderIcon.addEventListener("mouseup", () => {
    leaderbody.style.transform = "translateX(0px)";
    fadeIn();
})
cancel2.addEventListener("mouseup", () => {
    leaderbody.style.transform = "translateX(15000px)";
    fadeOut();
})
leaderIcon.addEventListener("mouseenter", () => {
    click();
})