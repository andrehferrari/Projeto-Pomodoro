"use strict"
var audio = document.querySelector('audio')
var minutes = 24;
var seconds = 60;
var countdown;

var preventSpeedStimer = false;

function start(){
    if(!preventSpeedStimer){
        preventSpeedStimer = true;
        countdown = setInterval(timer, 1000);
    };
};

function pause(){
    preventSpeedStimer = false;
    clearInterval(countdown);
};

function restart(){
    preventSpeedStimer = false;
    clearInterval(countdown);
    minutes = 24;
    seconds = 60;
    document.getElementById('counter').innerText = '25:00';
};

function timer() {
    seconds--;
    if(seconds == 0){
        minutes--;
        seconds = 59;

        if(minutes < 0){
            tocaAudio()
            breakTime()
            return;
        };
    };
    var format = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('counter').innerText = format;
};

function breakTime(){
    document.getElementById('counter').innerText = '05:00';
    minutes = 4;
    seconds = 59;
    setTimeout(() => {
        tocaAudio()
        restart()
    }, 5000)
}

function tocaAudio(){
    audio.play()
    setTimeout(() => {
        audio.pause()
    }, 3000)
}