function productRenderer() {
    const products = getProductsLS();
    const category = getCategoryType();
    const filteredProducts = category === 'all' ? products : products.filter(a => a.category === category);
    let content ="";

    for (const b of filteredProducts) {
        content += `<div class="col-md-4 product-card">
        <img src="${b.image}" alt="${b.productName}" class="img-fluid mx-auto">
        <h4>${b.productName}</h4> <br> <p>$${b.price}</p>
        <p><button class="add-to-cart" onclick="addToCart()">Agregar al carrito</button></p>
        </div>`;
    }

    document.getElementById("productos").innerHTML = content;
    
}

productRenderer();
renderCartIcon();

