// let small = document.getElementById("small");
// let aboutblok = document.getElementById("aboutblok");

// small.addEventListener("click", function () {
//   aboutblok.style.display = "none";
// });

// if ((small = style.display = "none"))
// function verdwijnBlok() {
//   let small = document.getElementById("small");
//   let aboutblok = document.getElementById("aboutblok");
//   aboutblok.style.visibility = "none";
// }
x = 0;
function verdwijnBlok() {
  const element = document.getElementById("aboutblok");
  const button = document.getElementById("small-form");
  if (element.style.display !== "none") {
    element.style.display = "none";
    button.style.display = "block";
  } else {
    element.style.display = "block";
  }
}
