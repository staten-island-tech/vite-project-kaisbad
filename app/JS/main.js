import "../CSS/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { operators } from "../JS/product.js";

console.log(operators.includes("Defender"));
let cardHtml = "";

operators.forEach((operator) => {
  cardHtml += `<div class="card"><h2 class="header">${operator.name}</h2>
      <ul><li>${operator.gender}</li>
      <li>${operator.side}</li>
      <li>${operator.price}</li></ul>
      <img src="${operator.image}" class="card-img"></div>
      `;
});

function insertCard() {
  DOMSelectors.container.insertAdjacentHTML("afterbegin", cardHtml);
}
window.onload = insertCard();

/* const sortDefenders = console.log(
  operators.foreach((operator) =>
    operator.includes((operators.side = "Defender"))
  )
);

console.log(sortDefenders); */
