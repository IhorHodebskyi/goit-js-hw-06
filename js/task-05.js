const refs = {
  input: document.querySelector("#name-input"),
  nemalabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", nameImputChange);

function nameImputChange(event) {
  refs.nemalabel.textContent = event.currentTarget.value;
}
