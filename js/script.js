let follow = document.querySelector("#address");

let booked = document.querySelector("#booking");

let view = document.querySelector("#view_more");

follow.addEventListener("click", function () {
  document.querySelector("#follow_twitter").innerText = "WE'LL FOLLOW BACK";
});

booked.addEventListener("click", function () {
  document.querySelector("#book_button").innerText = "Without Further Ado";
});

view.addEventListener("click", function () {
  document.querySelector("#view_button").innerText = "AWESOME!!!";
});
