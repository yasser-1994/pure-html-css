const mybt = document.getElementById("btn");
window.onscroll = () => {
  if (window.pageYOffset >= 500) {
    mybt.style.display = "block";
  } else {
    mybt.style.display = "none";
  }
  mybt.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
};