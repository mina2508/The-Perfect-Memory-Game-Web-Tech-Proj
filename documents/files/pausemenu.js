var musicIcon = document.getElementById("musicIcon");
var soundIcon = document.getElementById("soundIcon");
var menuIcon = document.getElementById("menuIcon");
var pausemenu = document.getElementById("pausemenu");

var range = document.querySelectorAll('.radio');

var resume = document.getElementById("resume");
var newgame = document.getElementById("newgame");
var mainmenu = document.getElementById("mainmenu");

var cancel1 = document.getElementById("cancel1");

var soundslider = document.getElementById("soundslider");
var musicslider = document.getElementById("musicslider");
var musicPlayer = document.getElementById("musicPlayer");



console.log(audioPlayer.volume);
var soundVolumeFlag = soundslider.value;
var musicVolumeFlag = musicslider.value;
var click = () => {
    audioPlayer.setAttribute("src", "documents/audio/Click.wav");

    audioPlayer.play();
}



range.forEach(item => {
    item.addEventListener("mouseenter", () => {
        click();
    })
})
range.forEach(item => {
    item.addEventListener("mouseleave", () => {
        audioPlayer.pause();
    })
})

menuIcon.addEventListener("mouseenter", () => {
    click();
})
menuIcon.addEventListener("mouseleave", () => {
    audioPlayer.pause();
})
musicIcon.addEventListener("mouseenter", () => {
    click();
})
musicIcon.addEventListener("mouseleave", () => {
    audioPlayer.pause();
})
soundIcon.addEventListener("mouseenter", () => {
    click();
})
soundIcon.addEventListener("mouseleave", () => {
    audioPlayer.pause();
})
resume.addEventListener("mouseenter", () => {
    click();
})
resume.addEventListener("mouseleave", () => {
    audioPlayer.pause();
})
newgame.addEventListener("mouseenter", () => {
    click();
})
newgame.addEventListener("mouseleave", () => {
    audioPlayer.pause();
})
mainmenu.addEventListener("mouseenter", () => {
    click();
})
mainmenu.addEventListener("mouseleave", () => {
    audioPlayer.pause();
})
musicslider.addEventListener("mouseenter", () => {
    click();
})
musicslider.addEventListener("mouseleave", () => {
    audioPlayer.pause();
})
soundslider.addEventListener("mouseenter", () => {
    click();
})
soundslider.addEventListener("mouseleave", () => {
    audioPlayer.pause();
})
musicIcon.addEventListener("mousedown", () => {


    if (musicIcon.firstChild.innerHTML == "music_note") {

        musicPlayer.setAttribute("src", "DiscoTune.mp3");

        musicVolumeFlag = musicslider.value;
        musicPlayer.volume = musicVolumeFlag;
        musicIcon.firstChild.innerHTML = "music_off";
        musicPlayer.play();
    } else if (musicIcon.firstChild.innerHTML == "music_off") {
        musicIcon.firstChild.innerHTML = "music_note";
        musicPlayer.pause();
    }
})
soundIcon.addEventListener("mousedown", () => {
    if (soundIcon.firstChild.innerHTML == "volume_up") {
        soundslider.value = 0;

        audioPlayer.volume = 0;
        soundIcon.firstChild.innerHTML = "volume_mute";

    } else if (soundIcon.firstChild.innerHTML == "volume_mute") {

        soundslider.value = soundVolumeFlag;
        audioPlayer.volume = soundVolumeFlag;
        soundIcon.firstChild.innerHTML = "volume_up";

    }

});

soundslider.addEventListener("change", () => {
    if (soundslider.value == 0) {
        soundIcon.firstChild.innerHTML = "volume_mute";
    } else if (soundslider.value > 0) {
        soundIcon.firstChild.innerHTML = "volume_up";
    }
    soundVolumeFlag = soundslider.value;
    audioPlayer.volume = soundVolumeFlag;
})
musicslider.addEventListener("change", () => {
    if (musicslider.value == 0) {
        musicIcon.firstChild.innerHTML = "music_note";
    } else if (musicslider.value > 0) {
        musicIcon.firstChild.innerHTML = "music_off";
    }
    musicVolumeFlag = musicslider.value;
    musicPlayer.volume = musicVolumeFlag;
})
menuIcon.addEventListener("mouseup", () => {
    pausemenu.style.transform = "translateX(0px)";
    pausing=true;

    localStorage.setItem("pausingFlag",pausing);
})
cancel1.addEventListener("mouseup", () => {
    pausemenu.style.transform = "translateX(-1500px)";
    pausing=false;
    localStorage.setItem("pausingFlag",pausing);
})
resume.addEventListener("mouseup", () => {
    pausemenu.style.transform = "translateX(-1500px)";
    pausing=false;
    localStorage.setItem("pausingFlag",pausing);
})
