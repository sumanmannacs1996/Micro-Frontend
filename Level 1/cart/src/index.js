import facker from "faker";

const cartText = `<div>You have ${facker.random.number()} items in yout cart.</div>`;

const root = document.getElementById("dev-cart");
root.innerHTML = cartText;
