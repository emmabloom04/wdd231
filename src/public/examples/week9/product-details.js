import { getDentalProducts } from "./product-list.js"

async function showProduct(id) {
    let products = await getDentalProducts();
    let product = products.find(p => p.id === id);
    if (!product) {
        console.error("Product " + id + " was not found.");
        return;
    }

    document.querySelector("section").innerHTML = 
    `
        <h2>${product.name}</h2>
        <p><img src="${product.imageUrl}" alt="${product.name}"></p>
        <p>${product.description}</p>
        <p><span class="price">$${product.price}</span></p>
    `
}

const overlayContainer = document.querySelector('.overlay-container');
const signUpButton = document.querySelector('.signup-button');

function dismissOverlay() {
    overlayContainer.classList.add("hide-overlay");
    overlayContainer.setAttribute("aria-hidden", "true");
}

signUpButton.addEventListener('click', () => {
    const signUpEmail = document.querySelector('#sign-up-email').value;
    if (signUpEmail){
        dismissOverlay();
    }
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        dismissOverlay();
    }
});


overlayContainer.addEventListener('click', (event) => {
    
    if (event.target === overlayContainer) {
        dismissOverlay();
    }
});

const paramsString = window.location.search
const params = new URLSearchParams(paramsString);
const id = params.get('id');
showProduct(parseInt(id))