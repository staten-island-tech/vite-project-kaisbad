import "../CSS/style.css";
import { operators } from "../JS/product.js";

operators.forEach((character) => console.log(character));

function insertCard(card, img) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="header">${card}</h2><img src="${img}" class="card-img"><button class="deletebtn" type="button">delete</button></div>`
  );
}

window.onload = insertCard;
