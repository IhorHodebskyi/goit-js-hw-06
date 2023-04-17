const buttonChangeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const body = document.querySelector("body");
buttonChangeColor.addEventListener("click", () => {
  body.style.backgroundColor = textColor.textContent = getRandomHexColor();
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
