const home = document.body.querySelector("#navHome");
const navChangeButton = document.body.querySelector("#navChange");

navChangeButton.addEventListener("click", () => home.classList.toggle("changed"))

