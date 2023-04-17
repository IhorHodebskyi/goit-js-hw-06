const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEl.addEventListener("mousemove", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});


