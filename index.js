let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let time = document.querySelector("span");

let sec = document.querySelector(".s");
let hou = document.querySelector(".h");
let min = document.querySelector(".m");

function format(time) {
  return time < 10 ? `0${time}` : time;
}

function Timer() {
  let validin = null;
  let s = 0;
  let m = 0;
  let h = 0;

  start.onclick = function () {
    if (validin === null) {
      validin = setInterval(() => {
        sec.innerHTML = format(s);
        min.innerHTML = format(m);
        hou.innerHTML = format(h);
        s++;
        if (s === 60) {
          s = 0;
          m++;
        }
        if (m === 60) {
          m = 0;
          h++;
        }
      }, 1000);
    }
  };

  stop.onclick = function () {
    clearInterval(validin);
    validin = null;
  };

  reset.onclick = function () {
    clearInterval(validin);
    validin = null;
    s = 0;
    m = 0;
    h = 0;
    sec.innerHTML = format(s);
    min.innerHTML = format(m);
    hou.innerHTML = format(h);
  };
}


Timer();



// setInterval(function () {
//   let red = Math.round(Math.random() * 255);
//   let blue = Math.round(Math.random() * 255);
//   let green = Math.round(Math.random() * 255);
//   document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
// }, 1000);
