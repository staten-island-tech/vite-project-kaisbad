import "../CSS/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { operators } from "../JS/product.js";

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
  DOMSelectors.container.insertAdjacentHTML("beforeend", cardHtml);
}
//document.querySelector.container.cardHtml = "";
window.onload = insertCard();
