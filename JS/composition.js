const productsURL = "https://fakestoreapi.com/products";
const productCategory = "https://fakestoreapi.com/products/category/";
const res = document.getElementById("compasition_categories");
const loading = document.getElementById("loading");

function changeCategories(elem) {
    getProducts(productCategory + elem.value)
}
function getProducts(url){
   fetch(url)
   .then((res) => res.json())
   .then((data) => showProducts(data)) 
}
function getComposition() {
  fetch("https://fakestoreapi.com/products?limit=8")
    .then((res) => res.json())
    .then((data) => showProducts(data));
}

function showProducts(arr) {
    loading.classList.remove("loading");
    loading.classList.add("loaded")
  res.innerHTML = "";
  res.innerHTML = arr
    .map((item) => {
      const { title, price, image, category } = item;
      return `
        <div class="compasition_category">
            <img src="${image}" alt="${title}">
            <p><span>${price}$</span> <span class="skidka">${(
        price + 20
      ).toFixed(2)}$</span> <span class="skidka2">-20$</span></p>
            <p>${title}</p>
            <p>${category}</p>
            <button class="Add_button">Add to cart</button>
        </div>
        `;
    })
    .join("");
}
getComposition();
getProducts(productsURL)