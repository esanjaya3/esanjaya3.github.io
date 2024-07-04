function moveRandomEl(elm) {
  elm.style.position = "relative";
  elm.style.top = Math.floor(Math.random() * 70 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
