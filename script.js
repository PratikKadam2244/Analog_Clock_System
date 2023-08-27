const sec = document.getElementById('sec');
const min = document.getElementById('min');
const hour = document.getElementById('hour');

function clockTick(){
    const date =new Date();
    const seconds =date.getSeconds()/60;
    const minutes =(seconds + date.getMinutes())/ 60;
    const hours =(minutes + date.getHours())/ 12; 

    rotateClockHand(sec, seconds);
    rotateClockHand(min, minutes);
    rotateClockHand(hour, hours);
}

function rotateClockHand(element, rotation)
{
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick, 1000);