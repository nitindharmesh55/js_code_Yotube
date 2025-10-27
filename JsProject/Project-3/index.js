const URL = "https://fakestoreapi.com/products";
const ProductContainer = document.getElementById("ProductContianer"); 
console.log(ProductContainer);
// check HTML ID
let Products = [];
const searchInput = document.getElementById("searchInput");

const FetchData = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
       Products = data;
        Render(data);  
        console.log(data);
               // render all products
    } catch (error) {
        console.log("Error", error);
    }
}

FetchData();

const GenerateProduct = (product) => {
    return `<div class="product_card">
        <div class="imageContainer">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="content">
            <h2>${product.title}</h2>
            <p>${product.description.split(" ").slice(0,20).join(" ")}...</p>
            <button class="price">$${product.price}</button>
        </div>
    </div>`;
}

const Render = (Products) => {
    let html = "";
    for (let i = 0; i < Products.length; i++) {
        html += GenerateProduct(Products[i]);
    }
    ProductContainer.innerHTML = html;
}


const handlle = () =>{
    const searchText = searchInput.value.toLowerCase().trim();
    const filtered = Products.filter(product => product.title.toLowerCase().includes(searchText)|| product.description.toLowerCase().includes(searchText));

    Render(filtered);
}

searchInput.addEventListener("keyup", handlle);
