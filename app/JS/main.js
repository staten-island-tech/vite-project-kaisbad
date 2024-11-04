import "../CSS/style.css";
import "../JS/dom.js";
import { operators } from "../JS/product.js";

operators.forEach((character) => console.log(character));

const DOMSelectors = {
  container: document.querySelector(".container"),
};

function insertCard(i) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="header">${operators.name}</h2>
    <li>${operators.gender}</li>
    <li>${operators.side}</li>
    <li>${operators.price}</li></div>
    <img src="${operators.image}" class="card-img">`
  );
}

window.onload = insertCard();
