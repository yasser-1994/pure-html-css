const mybt = document.getElementById("btn");
window.onscroll = () => {
  if (window.pageYOffset >= 800) {
    mybt.style.display = "block";
  } else {
    mybt.style.display = "none";
  }
  mybt.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
};

let skils = document.querySelector(".our-skills");
let span = document.querySelectorAll(".progress span");
window.onscroll = function () {
  if (window.scrollY >= skils.offsetTop - 100) {
    span.forEach((span)=>{
     span.style.width = span.dataset.width;
    })
  }
};
