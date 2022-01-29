let follow = document.querySelector("#address");

let booked = document.querySelector("#booking");

let view = document.querySelector("#view_more");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul");

follow.addEventListener("click", function () {
  document.querySelector("#follow_twitter").innerText = "WE'LL FOLLOW BACK";
});

booked.addEventListener("click", function () {
  document.querySelector("#book_button").innerText = "Without Further Ado";
});

view.addEventListener("click", function () {
  document.querySelector("#view_button").innerText = "AWESOME!!!";
});

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll("a");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
