
const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories:${categoriesList.length}`);
categoriesList.forEach((elem) => {
  console.log(`Category:${elem.firstElementChild.textContent}`);
  console.log(`Elemnts:${elem.lastElementChild.querySelectorAll("li").length}`)
});

