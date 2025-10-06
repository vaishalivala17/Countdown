let countdown = document.getElementById("countdown"); 
let timing = 120;

let displayTime = () => {
    let min = Math.floor(timing / 60); // 120/60 = 02
    let sec = timing % 60; // 120 % 60 = 00
    countdown.innerHTML = ` ${min.toString().padStart(2,"0")} : ${sec.toString().padStart(2,"0")}`;
}
displayTime();

let timer = setInterval(() => {
    timing--; 
    displayTime();

    if (timing === 0) {
        clearInterval(timer);
        countdown.innerHTML = "Time's up...";
    }
}, 1000);


