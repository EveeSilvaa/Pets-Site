// Dados dos produtos (podem ser obtidos de uma API real)
const products = [
    {
        name: "Aerodynamic Bronze Watch",
        price: "$179.50",
        img: "path/to/image1.jpg",
    },
    {
        name: "Fantastic Plastic Clock",
        price: "$305.49",
        img: "path/to/image2.jpg",
    },
    {
        name: "Fantastic Marble Shoes",
        price: "$66.17",
        img: "path/to/image3.jpg",
    },
    {
        name: "Rustic Marble Car",
        price: "$899.41",
        img: "path/to/image4.jpg",
    },
    // Adicione mais produtos conforme necessário
];

function loadProducts() {
    const productList = document.getElementById("product-list");
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <p class="product-name">${product.name}</p>
            <p class="price">${product.price}</p>
        `;

        productList.appendChild(productCard);
    });
}

// Chame a função ao carregar a página
window.onload = loadProducts;
