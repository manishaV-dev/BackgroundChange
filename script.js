"use strict";

const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach(function (btn) {
  console.log(btn); // show all button
  btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target); // when click it give that button

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    } else {
      body.style.backgroundColor = "#f9fafb";
    }
  });
});
