import facker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const productName = facker.commerce.productName();
  products += `<div>${productName}</div>`;
}

// console.log(products);

const root = document.getElementById("dev-products");
root.innerHTML = products;
