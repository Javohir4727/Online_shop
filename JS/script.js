const productsURL = 'https://fakestoreapi.com/products';
const cartURL = 'https://fakestoreapi.com/carts';
const userURL = 'https://fakestoreapi.com/users';
const res = document.getElementById("wrap_categories");

function getProducts() {
    fetch(productsURL)
    .then((res) => res.json())
    .then((data)=> showProducts(data));
}

function showProducts(arr){
    console.log(arr);
    res.innerHTML = "";
    res.innerHTML = arr
    .map((item) => {
        const { title, image} = item;
        return  `
        <div class="wrap_category" id="wrap_category">
            <img src="${image}" alt="${title}" />
            <h2>${title}</h2>
          </div> 
          `;

    })
    .join("")
}
getProducts();