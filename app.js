let head1 = document.querySelector("h2");
let head2 = document.querySelector("h3");
let btn = document.querySelectorAll(".btn");
let level = 1;
let gameip = [];
let userip = [];
let st = false;
document.addEventListener("click", () => {
  if (!st) {
    head1.innerText = "GAME STARTED";
    head2.innerText = "LEVEL 1";
    st = true;
    gamest();
  }
});
btn.forEach((box) => {
  box.addEventListener("click", () => {
    changecolor(box);
    userip.push(box.getAttribute("id"));
    match();
  });
});
async function changecolor(box) {
  box.classList.toggle("green");
  setTimeout(function () {
    box.classList.toggle("green");
  }, 1000);
}
function make() {
  for (let i = 0; i < level; ++i) {
    let idx = Math.floor(Math.random() * 4);
    gameip.push(btn[idx].classList[1]);
    setTimeout(function () {
      changecolor(btn[idx]);
    }, 1000 * (i + 1));
  }
}
function gamest() {
  make();
}
function match() {
  let idx = userip.length - 1;
  if (userip[idx] != gameip[idx] || userip.length > gameip.length) {
    finish();
  } else if (gameip.length == userip.length) {
    levelup();
  }
}
function finish() {
  head1.innerText = "end";
  head2.innerText = "Score:- " + level;
  setTimeout(function () {
    head1.innerText = "Welcome";
    head2.innerText = "Click any were to start the game";
    st = false;
    level = 1;
    gameip = [];
    userip = [];
  }, 1000);
}
function levelup() {
  level++;
  head1.innerText = "Level up";
  head2.innerText = "LEVEL" + level;
  make();
}
