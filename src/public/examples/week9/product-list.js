export async function getDentalProducts() {
  let response = await fetch("./dental.json");
  if (response.ok) {
    let myproducts = await response.json();
    if (myproducts) {
      return myproducts;
    } else {
      console.error("Cannot get response: Server returned no data");
    }
  } else {
    console.error("Cannot get response: Server return " + response.status);
  }
}

async function showProducts() {
  let myproducts = await getDentalProducts();
  if (myproducts) {
    document.getElementById("product-list").innerHTML = "";
    myproducts.forEach((product) => {
      let productLink = document.createElement("li");
      productLink.innerHTML = `<a href="product-details.html?id=${product.id}">${product.name}</a>`;
      document.getElementById("product-list").appendChild(productLink);
    });
  }
}
showProducts();
