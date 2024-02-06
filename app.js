
//     setInterval( () => {
//         let t = new Date();

//     hour = t.getHours();
//     min = t.getMinutes();
//     sec = t.getSeconds();
    
//     time.innerText = (`${hour} ${min} ${sec}`);
//     // console.log(time);
//     }, 1000);

const time = document.querySelector('h1'); // Selects the first <h1> element

let hour;  // for the hour
let min;  // for the minute
let sec;  // for the seconds

setInterval(() => {
    // Declare and initialize variables within the callback function
    let t = new Date();
    hour = t.getHours();
    min = t.getMinutes();
    sec = t.getSeconds();

    // Use string interpolation to concatenate strings and variables
    time.innerText = `${hour} ${min} ${sec}`;
}, 1000);