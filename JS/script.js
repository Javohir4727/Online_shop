const productsURL = "https://fakestoreapi.com/products";
const cartURL = "https://fakestoreapi.com/carts";
const userURL = "https://fakestoreapi.com/users";
const res = document.getElementById("wrap_categories");
const res2 = document.getElementById("wrap_sells");
const loading = document.getElementById("loading");
const res3 = document.getElementById("wrap_discounts");

function getProducts() {
  fetch("https://fakestoreapi.com/products?limit=8")
    .then((res) => res.json())
    .then((data) => showProducts(data));
}

function showProducts(arr) {
  loading.classList.remove("loading");
  loading.classList.add("loaded");
  res.innerHTML = "";
  res.innerHTML = arr
    .map((item) => {
      const { title, image, price, category } = item;
      return `
        <div class="wrap_category" id="wrap_category">
            <img src="${image}" alt="${title}" />
            <h2>${title}</h2>
            <p>${category}</p>
            <p>${price}$</p>
          </div> 
          `;
    })
    .join("");
}
getProducts();

function getProducts2() {
  fetch("https://fakestoreapi.com/products?limit=4")
    .then((res2) => res2.json())
    .then((data) => sellsProducts(data));
}

function sellsProducts(arr2) {
  res2.innerHTML = "";
  res2.innerHTML = arr2
    .map((item2) => {
      const { price, image, title } = item2;
      return `
    <div class="wrap_sell">
    <img src="${image}" alt="${title}" />
    <p>${price} <span class="skidka">${(price + 20).toFixed(
        2
      )}</span><span class="skidka2">-20$</span></p>
    <p>${title}</p>
  </div>`;
    })
    .join("");
}
getProducts2();

function getProducts3() {
  fetch("https://fakestoreapi.com/products?limit=4")
    .then((res3) => res3.json())
    .then((data) => discountProducts(data));
}
function discountProducts(arr3) {
  res3.innerHTML = "";
  res3.innerHTML = arr3
    .map((item3) => {
      const { image, price, title } = item3;
      return `
    <div class="wrap_discount">
   <img src="${image}" alt="${title}" />
    <p>${price} <span class="skidka">${(price + 20).toFixed(
        2
      )}</span><span class="skidka2">-20$</span></p>
    <p>${title}</p>
          </div>
    `;
    })
    .join("");
}

getProducts3();
