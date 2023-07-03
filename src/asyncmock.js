//Se crea un array con los productos y una función que retornará una promesa
const misProductos = [
    {id:"1", nombre: "Macaron", precio: 25, img:"../images/product/Macaron.jpeg", idCat: "3"},
    {id:"2", nombre: "Spring Muffin", precio: 85, img:"../images/product/.jpeg", idCat: "3"},    
    {id:"3", nombre: "Winter Muffin", precio: 85, img:"../images/product/.jpeg", idCat: "3"},
    {id:"4", nombre: "Strawberry Muffin", precio: 85, img:"../images/product/.jpeg", idCat: "3"},
    {id:"5", nombre: "Wild Muffin", precio: 85, img:"../images/product/.jpeg", idCat: "3"},
    {id:"6", nombre: "Dark Muffin", precio: 85, img:"../images/product/.jpeg", idCat: "3"},
    {id:"7", nombre: "Donut", precio: 80, img:"../images/product/.jpeg", idCat: "3"},
    {id:"8", nombre: "Oatmeal Dream", precio: 150, img:"../images/product/.jpeg", idCat: "3"},
    {id:"9", nombre: "Brownie Bliss", precio: 220, img:"../images/product/.jpeg", idCat: "3"},
    {id:"10", nombre: "Chocolate Euphoria", precio: 200, img:"../images/product/.jpeg", idCat: "3"},
    {id:"11", nombre: "Coffee Kiss", precio: 160, img:"../images/product/.jpeg", idCat: "1"},
    {id:"12", nombre: "Melted Temptation", precio: 150, img:"../images/product/.jpeg", idCat: "1"},
    {id:"13", nombre: "Kit-Kat Heaven", precio: 130, img:"../images/product/.jpeg", idCat: "1"},
    {id:"14", nombre: "Cinnamon Infusion", precio: 120, img:"../images/product/.jpeg", idCat: "1"},
    {id:"15", nombre: "Frosty Cannon", precio: 130, img:"../images/product/.jpeg", idCat: "2"},
    {id:"16", nombre: "Sugar Nightmare", precio: 220, img:"../images/product/.jpeg", idCat: "2"},
    {id:"17", nombre: "Cookie Bloom", precio: 160, img:"../images/product/.jpeg", idCat: "2"},
    {id:"18", nombre: "Cherry Lover", precio: 155, img:"../images/product/.jpeg", idCat: "2"},
    {id:"19", nombre: "FrozenBerry", precio: 110, img:"../images/product/.jpeg", idCat: "2"},
    {id:"20", nombre: "FrozenCacao", precio: 120, img:"../images/product/.jpeg", idCat: "2"},
]

//Array de productos
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(misProductos);
        }, 2000)
    })
}

//Obtener un sólo producto
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() =>{
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto)
        }, 2000)
    })
}

//Búsqueda de categoría
export const getProductoPorCategoria = (idCategoria)  => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}


// export const getProductos = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(misProductos);
//         }, 100)
//     })
// }


// //Creamos una nueva función similar a la anterior pero qu enos retorne un solo item: 

// export const getUnProducto = (id) => {
//     return new Promise(resolve => {
//         setTimeout( () => {
//             const producto = misProductos.find(prod=> prod.id === id);
//             resolve(producto);
//         }, 100)
//     })
// }


// //Creamos una función que retora un array de una determinada categoría de producto: 

// export const getProductosPorCategoria = (idCategoria) => {
//     return new Promise ( resolve => {
//         setTimeout( () => {
//             const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
//             resolve(productosCategoria);
//         }, 100 )
//     })
// }