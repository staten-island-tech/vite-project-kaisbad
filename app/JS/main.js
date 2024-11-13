import "../CSS/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { operators } from "../JS/product.js";

function insertCard(operators) {
  clearCards();
  let cardHtml = "";
  operators.forEach((operator) => {
    cardHtml += `<div class="card"><h2 class="header">${operator.name}</h2>
        <ul><li>${operator.gender}</li>
        <li>${operator.side}</li>
        <li>${operator.price}</li></ul>
        <img src="${operator.image}" class="card-img"></div>
        `;
  });
  DOMSelectors.container.insertAdjacentHTML("afterbegin", cardHtml);
}

function clearCards() {
  DOMSelectors.container.innerHTML = "";
}

DOMSelectors.all.addEventListener("click", () => {
  clearCards();
  insertCard(operators);
});

DOMSelectors.atk.addEventListener("click", () => {
  const sortAttackers = operators.filter(
    (operator) => operator.side == "Attacker"
  );
  clearCards();
  insertCard(sortAttackers);
});
DOMSelectors.def.addEventListener("click", () => {
  const sortDefenders = operators.filter(
    (operator) => operator.side == "Defender"
  );
  clearCards();
  insertCard(sortDefenders);
});

DOMSelectors.male.addEventListener("click", () => {
  const sortMale = operators
    .map((operator) => (operator.gender == "Male" ? operator : null))
    .filter((operator) => operator != null);
  clearCards();
  insertCard(sortMale);
});

DOMSelectors.female.addEventListener("click", () => {
  const sortFemale = operators
    .map((operator) => (operator.gender == "Female" ? operator : null))
    .filter((operator) => operator != null);
  clearCards();
  insertCard(sortFemale);
});

function clearColors() {
  document.body.classList.remove("warm", "cool");
}

DOMSelectors.warm.addEventListener("click", () => {
  clearColors();
  document.body.classList.add("warm");
});

DOMSelectors.cool.addEventListener("click", () => {
  clearColors();
  document.body.classList.add("cool");
});

window.load = insertCard(operators);
