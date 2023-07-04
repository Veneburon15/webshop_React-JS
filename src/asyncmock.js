// //Se crea un array con los productos y una función que retornará una promesa
// const misProductos = [
//     { id: "1", nombre: "Yerba", precio: 500, img: "../img/yerba.jpg", idCat: "2" },
//     { id: "2", nombre: "Fideos", precio: 200, img: "../img/fideos.jpg", idCat: "2" },
//     { id: "3", nombre: "Arroz", precio: 180, img: "../img/arroz.jpg", idCat: "3" },
//     { id: "4", nombre: "Aceite", precio: 900, img: "../img/aceite.jpg", idCat: "3" },
// ]

const misProductos = [
    {id:"1", nombre: "Macaron", precio: 25, img:"../images/product/Macaron.jpeg", idCat: "Postres"},
    {id:"2", nombre: "Spring Muffin", precio: 85, img:"../images/product/Spring-Muffin.jpeg", idCat: "Postres"},    
    {id:"Postres", nombre: "Winter Muffin", precio: 85, img:"../images/product/Winter-Muffin.jpeg", idCat: "Postres"},
    {id:"4", nombre: "Strawberry Muffin", precio: 85, img:"../images/product/Strawberry-Muffin.jpeg", idCat: "Postres"},
    {id:"5", nombre: "Wild Muffin", precio: 85, img:"../images/product/Wild-Muffin.jpeg", idCat: "Postres"},
    {id:"6", nombre: "Dark Muffin", precio: 85, img:"../images/product/Dark-Muffin.jpeg", idCat: "Postres"},
    {id:"7", nombre: "Donut", precio: 80, img:"../images/product/Brownie-Bliss.jpeg", idCat: "Postres"},
    {id:"8", nombre: "Oatmeal Dream", precio: 150, img:"../images/product/Donut.jpeg", idCat: "Postres"},
    {id:"9", nombre: "Brownie Bliss", precio: 220, img:"../images/product/Oatmeal-Dream.jpeg", idCat: "Postres"},
    {id:"10", nombre: "Chocolate Euphoria", precio: 200, img:"../images/product/Chocolate-Euphoria.jpeg", idCat: "Postres"},
    {id:"11", nombre: "Coffee Kiss", precio: 160, img:"../images/product/Coffee-Kiss.jpeg", idCat: "Cafe"},
    {id:"12", nombre: "Melted Temptation", precio: 150, img:"../images/product/Melted-Temptation.jpeg", idCat: "Cafe"},
    {id:"13", nombre: "Kit-Kat Heaven", precio: 130, img:"../images/product/Kit-Kat_Heaven.jpeg", idCat: "Helados"},
    {id:"14", nombre: "Cinnamon Infusion", precio: 120, img:"../images/product/Cinnamon-Infusion.jpeg", idCat: "Cafe"},
    {id:"15", nombre: "Frosty Cannon", precio: 130, img:"../images/product/Frosty-Cannon.jpeg", idCat: "Helados"},
    {id:"16", nombre: "Sugar Nightmare", precio: 220, img:"../images/product/Sugar-Nightmare.jpeg", idCat: "Helados"},
    {id:"17", nombre: "Cookie Bloom", precio: 160, img:"../images/product/Cookie-Bloom.jpeg", idCat: "Helados"},
    {id:"18", nombre: "Cherry Lover", precio: 155, img:"../images/product/Cherry-Lover.jpeg", idCat: "Helados"},
    {id:"19", nombre: "FrozenBerry", precio: 110, img:"../images/product/FrozenBerry.jpeg", idCat: "Helados"},
    {id:"20", nombre: "FrozenCacao", precio: 120, img:"../images/product/FrozenCacao.jpeg", idCat: "Helados"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


//Creamos una nueva función similar a la anterior pero qu enos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}


//Creamos una función que retora un array de una determinada categoría de producto: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}





