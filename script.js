"use strict"

var minutes = 0;
var seconds = 2;
var countdown;

var preventSpeedStimer = false;

function start(){
    if(!preventSpeedStimer){
        preventSpeedStimer = true;
        countdown = setInterval(timer, 1000)
    }
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
    document.getElementById('counter').innerText = '25:00'
};

function timer() {
    seconds--;
    if(seconds == 0){
        minutes--;
        seconds = 60;

        if(minutes < 0){
            alert('The timer is over !!!')
            return restart();
        };
    };
    var format = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('counter').innerText = format;
};