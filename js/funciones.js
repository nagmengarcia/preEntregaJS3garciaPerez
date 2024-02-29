const productos = [
    {id:1, productName:"Camiseta Argentina 1994 Maradona", category:"Argentina", type:"camiseta", price:28000, image: '../imgs/seleccion-argentina/camisetas/camiseta-argentina-94-titular-maradona-frente.jpg' },
    {id:2, productName:"Camiseta Argentina Alternativa 2006 Messi", category:"Argentina", type:"camiseta", price:32000, image: '../imgs/seleccion-argentina/camisetas/camiseta-argentina-alternativa-2006-messi-frente.jpg'},
    {id:3, productName:"Camiseta Argentina Alternativa 1999 Ortega ", category:"Argentina", type:"camiseta", price:30000, image: '../imgs/seleccion-argentina/camisetas/camiseta-argentina-alternativa-1999-ortega-frente.jpg'},
    {id:4, productName:"Camiseta Argentina Alternativa 1994 Maradona ", category:"Argentina", type:"camiseta", price:29000, image: '../imgs/seleccion-argentina/camisetas/camiseta-argentina-94-alternativa-maradona-frente.jpg'},
    {id:5, productName:"Camiseta Argentina Alternativa 1986 Maradona ", category:"Argentina", type:"camiseta", price:32000, image: '../imgs/seleccion-argentina/camisetas/camiseta-argentina-86-alternativa-maradona-frente.jpg'},
    {id:6, productName:"Camiseta Argentina 1999 Batistuta", category:"Argentina", type:"camiseta", price:32000, image: '../imgs/seleccion-argentina/camisetas/camiseta-argentina-1999-batistuta-frente.jpg'},
    {id:7, productName:"Camiseta Argentina Alternativa 1999 Riquelme", category:"Argentina", type:"camiseta", price:21000, image: '../imgs/seleccion-argentina/camisetas/camiseta-argentina-alternativa-1999-riquelme-frente.jpg'},
    {id:8, productName:"Buzo Argentina entrenamiento Mundial USA 1994", category:"Argentina", type:"campera", price:36000, image: '../imgs/seleccion-argentina/buzos/buzo-entrenamiento-argentina-mundial-usa-1994.jpg'},
    {id:9, productName:"Short Argentina mundial México 1986 Maradona", category:"Argentina", type:"short", price:16700, image: '../imgs/seleccion-argentina/shorts/short-argentina-mudial-mexico-86-maradona.jpg'},
    {id:10, productName:"Short Argentina mundial USA 1994 Maradona", category:"Argentina", type:"short", price:15000, image: '../imgs/seleccion-argentina/shorts/short-argentina-mudial-usa-94-maradona.jpg'},
    {id:11, productName:"Piluso Huracán", category:"Nacional", type:"piluso", price:7000, image: '../imgs/futbol-argentino/pilusos/piluso-huracan.png'},
    {id:12, productName:"Piluso River", category:"Nacional", type:"piluso", price:7000, image: '../imgs/futbol-argentino/pilusos/piluso-river.png'},
    {id:13, productName:"Camiseta Napoli 1987 Maradona", category:"Internacional", type:"camiseta", price:28000, image: '../imgs/internacional/camisetas/napoli-campeon-buitoni-maradona-frente.jpg'},
    {id:14, productName:"Camiseta Fiorentina 1998 Batistuta", category:"Internacional", type:"camiseta", price:31000, image: '../imgs/internacional/camisetas/fiorentina-batistuta-nintendo-frente.jpg'}, 
    {id:15, productName:"Camiseta Borussia Dortmund 1988", category:"Internacional", type:"camiseta", price:26500, image: '../imgs/internacional/camisetas/borussia-dortmund-frente.jpg'},
    {id:16, productName:"Camiseta Juventus Alternativa 1997-98 Zidane", category:"Internacional", type:"camiseta", price:27000, image: '../imgs/internacional/camisetas/juventus-monje-zidane-frente.jpg'},
    {id:17, productName:"Camiseta Barcelona 2002-03 Riquelme", category:"Internacional", type:"camiseta", price:22000, image: '../imgs/internacional/camisetas/barcelona-riquelme-frente.jpg'},
    {id:18, productName:"Camiseta Sevilla 1992-93 Maradona", category:"Internacional", type:"camiseta", price:27000, image: '../imgs/internacional/camisetas/sevilla-maradona-frente.jpg'},
    {id:19, productName:"Camiseta Real Madrid 1998 Redondo", category:"Internacional", type:"camiseta", price:28000, image: '../imgs/internacional/camisetas/realmadrid-redondo-frente.jpg'},
    {id:20, productName:"Campera Alemania del Este DDR 1970", category:"Internacional", type:"campera", price:36000, image: '../imgs/internacional/camperas/campera-ddr-frente.png'},
    {id:21, productName:"Campera Dinamarca 1988", category:"Internacional", type:"campera", price:36000, image: '../imgs/internacional/camperas/campera-dinamarca-frente.png'},
    {id:22, productName:"Campera Holanda 1974", category:"Internacional", type:"campera", price:36000, image: '../imgs/internacional/camperas/campera-holanda-frente.png'},
    {id:23, productName:"Camiseta River Plate 1996-97", category:"Nacional", type:"camiseta", price:29000, image: '../imgs/futbol-argentino/camisetas/camiseta-river-tricampeon-96-97-escudos-frente.jpg'},
    {id:24, productName:"Camiseta Boca Juniors 1996 Maradona", category:"Nacional", type:"camiseta", price:23000, image: '../imgs/futbol-argentino/camisetas/camiseta-boca-juniors-1996-maradona-frente.jpg' },
    {id:25, productName:"Camiseta Boca Juniors 1991", category:"Nacional", type:"camiseta", price:19000,image: '../imgs/futbol-argentino/camisetas/camiseta-boca-juniors-1991-fiat-frente.jpg'},
    {id:26, productName:"Camiseta River Plate Alternativa 1986", category:"Nacional", type:"camiseta", price:27000, image: '../imgs/futbol-argentino/camisetas/camiseta-river-alternativa-1986-frente.jpg'},
    {id:27, productName:"Camiseta Independiente 1988 Bochini", category:"Nacional", type:"camiseta", price:29000, image: '../imgs/futbol-argentino/camisetas/camiseta-independiente-1988-bochini-frente.jpg'},
    {id:28, productName:"Camiseta Newell's 1993 Maradona", category:"Nacional", type:"camiseta", price:24500, image: '../imgs/futbol-argentino/camisetas/camiseta-newells-1993-maradona-frente.jpg'},
    {id:29, productName:"Camiseta Independiente 1997-98 Garnero", category:"Nacional", type:"camiseta", price:29000, image: '../imgs/futbol-argentino/camisetas/camiseta-independiente-97-98-diablitos-garnero-frente.jpg'},
    {id:30, productName:"Camiseta San Lorenzo 1989-90", category:"Nacional", type:"camiseta", price:29000, image: '../imgs/futbol-argentino/camisetas/camiseta-san-lorenzo-89-90-frente.jpg'},
    {id:31, productName:"Camiseta Aldosivi", category:"Nacional", type:"camiseta", price:22300, image: '../imgs/futbol-argentino/camisetas/camiseta-aldosivi-frente.jpg'},    
    {id:32, productName:"Camiseta Defensa y Justicia", category:"Nacional", type:"camiseta", price:22300, image: '../imgs/futbol-argentino/camisetas/camiseta-defensa-y-justicia-frente.jpg'},
    {id:33, productName:"Camiseta Platense", category:"Nacional", type:"camiseta", price:22300, image: '../imgs/futbol-argentino/camisetas/camiseta-platense-espalda.jpg'},    
    {id:34, productName:"Camiseta Ferro", category:"Nacional", type:"camiseta", price:22300, image: '../imgs/futbol-argentino/camisetas/camiseta-ferro-frente.jpg'},
    {id:35, productName:"Camiseta Alternativa River 1994", category:"Nacional", type:"camiseta", price:22300, image: '../imgs/futbol-argentino/camisetas/camiseta-river-alternativa-1994-frente.jpg'},
    {id:36, productName:"Camiseta Alternativa River 2006 Gallardo", category:"Nacional", type:"camiseta", price:22300, image: '../imgs/futbol-argentino/camisetas/camiseta-river-alternativa-2006-gallardo-espalda.jpg'},
];

// funcion para guardar productos en LS
const productosLS = (e) => {
    localStorage.setItem("productos", JSON.stringify(e));
}

const obtenerProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

// guarde los prodcutos en la LS
productosLS(productos);

// Ahora quiero que al clickear en el menu me filtre por categorias.

// Paso 1 > asigno variables para los elementos que se clickearan

//basicamente toma un parametro que definira el id html de la variable x, el cual tiene un event handler que sobreescribe la categoria en localStorage
//en esta funcion, el idHTML debe ser === a category
const filtrarPorCategoria = (idHTML) => {
    
    let x = document.getElementById(idHTML);
    x.addEventListener("click", () => { 
        localStorage.setItem('categoria', idHTML)
    })  
};

// llamamos a la funcion
filtrarPorCategoria("Argentina")
filtrarPorCategoria("Internacional")
filtrarPorCategoria("Nacional")
filtrarPorCategoria("Todas")


const guardarCarritoLS = (i) => {
    localStorage.setItem('carrito', JSON.stringify(i));
}

const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}
// en este caso el idHTML sera igual al id de producto

let badgeCarrito = document.getElementById('cartIconBadge');

const renderSpanCarrito = () => {
    const carritoRecuperado = (obtenerCarritoLS()).length;
    badgeCarrito.innerText = carritoRecuperado;
    
};

renderSpanCarrito()

// creo un buscador de productos

const buscadorDeProducto = (e) => {
    const a = obtenerProductosLS();
    const b = a.find( i => i.id === Number(e));
    return b;
}
    
const agregarAlCarrito = (idHTML) => {
    
    let ids = document.getElementById(idHTML) || false;
    // tengo que hacer que al clickear ese id, me encuentre el producto que matchee con el idHTML, deberia parsear Number(idHTML), y en caso de que haya una coincidencia me pushee el elemento a carrito.
    // const encontrarProducto = prods.find(a => a.id === Number(idHTML));
    if(ids !== false){
        ids.addEventListener('click', () => {
            const carrito = obtenerCarritoLS()
            const productoEncontrado = buscadorDeProducto(idHTML);
            console.log(`Se agrego el item ${idHTML} al carrito`)
            carrito.push(productoEncontrado);
            guardarCarritoLS(carrito);
            renderSpanCarrito()
        })
    }
};

const obtenerCategoriaLS = () => {
   return localStorage.getItem('categoria') || "Todas"
}