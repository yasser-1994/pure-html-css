const mybt = document.getElementById("btn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 800) {
    mybt.style.display = "block";
  } else {
    mybt.style.display = "none";
  }
  mybt.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});
// start skills ********************************
let skils = document.querySelector(".our-skills");
let span = document.querySelectorAll(".progress span");
window.addEventListener("scroll", () => {
  if (window.scrollY >= skils.offsetTop - 100) {
    span.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});
// start events *****************************
let countDownDate = new Date("Dec 30, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  let datNow = new Date().getTime();
  let dateDiff = countDownDate - datNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}, 1000);
// start stats ***********************************
let nums = document.querySelectorAll(".nums h3");
let section = document.querySelector(".stats");
let started = false;
window.addEventListener("scroll", () => {
  if (window.scrollY >= section.offsetTop - 100) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10 / goal);
}
startCount(nums);
