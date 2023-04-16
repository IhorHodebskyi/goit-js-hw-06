const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemElementOption = (options) =>
  options.map((option) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = option;
    console.log(itemEl);
    return itemEl;
  });
const listEl = document.querySelector("ul#ingredients");
listEl.append(...itemElementOption(ingredients));
