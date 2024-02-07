
const time = document.querySelector('h1'); // Selects the first <h1> element
const container = document.querySelector('.container');
const alarmContainer = document.querySelector('.alarm-container');
// variables below are for the alarm values gotten from the input tags, the alarm audio variable is also below

let alarmTime;
let alarmValues = document.querySelectorAll('input');
const almAudio = new Audio ('./file/audio.mp3');

// button's for setting alarm, starting a stop watch and setting a timer

let btn = document.querySelectorAll('.btn');
console.log(btn);

// setting alarm variables 
// alm is alarm for short

let almHour = document.getElementById('hour');
let almMin = document.getElementById('min');
let almampm = document.getElementById('ampm');
console.log(almMin);

let hour;  // for the hour
let min;  // for the minute
let sec;  // for the seconds
let ampm = 'AM'; // for AM and PM


setInterval(() => {
    // Declare and initialize variables within the callback function
    let t = new Date();
    hour = t.getHours();
    min = t.getMinutes();
    sec = t.getSeconds();

    // The if statement below converts the hour value from 24hours to 12 hour clock

    let ampm = hour >= 12 ? 'PM' : 'AM';
    
    // Use string interpolation to concatenate strings and variables
    time.innerText = `${hour}:${min}:${sec} ${ampm}`;

     
    if(alarmTime == `${hour}:${min} ${ampm}`) {
        almAudio.play();
        almAudio.loop = true;
    }
    // console.log(alarmTime);
}, 1000);


const setAlarm = () => {
    // getting the hours, minutes, seconds and ampm from input tag value
    let time = `${alarmValues[0].value}:${alarmValues[1].value} ${alarmValues[2].value}`;
    alarmTime = time;
}

const clearAlarm = () => {
    alarmTime = '';
    almAudio.pause();
}

btn.forEach(btn => btn.addEventListener('click', function () {
    if(btn.classList.contains('set-alarm')) {
      btn.innerText = 'close alarm';
    if(container.style.height == '480px') {
        container.style.height = '320px';
        btn.innerText = 'Set Alarm';
        alarmContainer.style.display = 'none';
    } else {
      container.style.height = '480px';
      alarmContainer.style.display = 'flex';
    }
    } else if (btn.classList.contains('stop-watch')) {
    alert('stop-watch');
    } else if (btn.classList.contains('set-timer')) {
    alert('set-timer');
    }
}));

// Clear and Set alarm button
const setAlarmBtn = document.getElementById('set-alarm');
const clearAlarmBtn = document.getElementById('clear-alarm');

 setAlarmBtn.onclick = () => {
    setAlarm();
 }
 clearAlarmBtn.onclick = () => {
    clearAlarm();
 }
