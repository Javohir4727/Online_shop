const productsURL = "https://fakestoreapi.com/products";
const cartURL = "https://fakestoreapi.com/carts";
const userURL = "https://fakestoreapi.com/users";
const select = document.getElementById("select");
const res = document.getElementById("compasition_categories");

function getComposition() {
    fetch("https://fakestoreapi.com/products?limit=8")
    .then((res) => res.json())
    .then((data) => showProducts(data));
}

function showProducts(arr) {
    res.innerHTML = "";
    res.innerHTML = arr
    .map((item) => {
        const { title, price, image, category} =item
        return `
        <div class="compasition_category">
            <img src="${image}" alt="${title}">
            <p><span>${price}</span> <span>${price + 20}$</span> <span>-20$</span></p>
            <p>${title}</p>
        </div>
        `;
    })
    .join("");
} 
getComposition()
    
