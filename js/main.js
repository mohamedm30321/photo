let dad = document.querySelector(".dad_div");
let div = document.querySelectorAll(".dad_div div");
let img = document.querySelectorAll(".dad_div div img");

let b = document.querySelector(".body");

b.style.backgroundImage = `url(../image/photo1.jpg)`;

div.forEach(function (child, index, arr) {
  child.addEventListener("click", function () {
    dad.appendChild(child);
    img.forEach(function (ch, ind, a) {
      if (index == ind) {
        b.style.backgroundImage = `url(../${ch.attributes[0].value})`;
      }
    });
  });
});
