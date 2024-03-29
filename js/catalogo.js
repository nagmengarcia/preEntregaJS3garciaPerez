function renderProductos(){
    const producto = obtenerProductosLS();
    const categoria = obtenerCategoriaLS();
    const filtro = categoria === "Todas" ? producto : producto.filter( a =>  a.category === categoria )
    
    let mensaje = "";

    for (const e of filtro) {  
        mensaje +=  `<div class="col-md-4 product-card">
        <img src="${e.image}" alt="${e.productName}" class="img-fluid mx-auto">
        <h4>${e.productName}</h4> <br> <p>$${e.price}</p>
        <p><button class="addToCart" id="${e.id}">Agregar al carrito</button></p>
        </div>`;
    }
    
    document.getElementById("productos").innerHTML = mensaje;
}





renderSpanCarrito()
renderProductos()

for (let i = 1; i <= (obtenerProductosLS()).length; i++){
    agregarAlCarrito(i.toString())
};


