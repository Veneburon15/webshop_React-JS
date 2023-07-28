const misProductos = [
    {id:"1", nombre: "Macaron", precio: 25, img:"../images/product/Macaron.jpeg", idCat: "Postres", stock: 10},
    {id:"2", nombre: "Spring Muffin", precio: 85, img:"../images/product/Spring-Muffin.jpeg", idCat: "Postres", stock: 10},    
    {id:"Postres", nombre: "Winter Muffin", precio: 85, img:"../images/product/Winter-Muffin.jpeg", idCat: "Postres", stock: 10},
    {id:"4", nombre: "Strawberry Muffin", precio: 85, img:"../images/product/Strawberry-Muffin.jpeg", idCat: "Postres", stock: 10},
    {id:"5", nombre: "Wild Muffin", precio: 85, img:"../images/product/Wild-Muffin.jpeg", idCat: "Postres", stock: 10},
    {id:"6", nombre: "Dark Muffin", precio: 85, img:"../images/product/Dark-Muffin.jpeg", idCat: "Postres", stock: 10},
    {id:"7", nombre: "Donut", precio: 80, img:"../images/product/Brownie-Bliss.jpeg", idCat: "Postres", stock: 10},
    {id:"8", nombre: "Oatmeal Dream", precio: 150, img:"../images/product/Donut.jpeg", idCat: "Postres", stock: 10},
    {id:"9", nombre: "Brownie Bliss", precio: 220, img:"../images/product/Oatmeal-Dream.jpeg", idCat: "Postres", stock: 10},
    {id:"10", nombre: "Chocolate Euphoria", precio: 200, img:"../images/product/Chocolate-Euphoria.jpeg", idCat: "Postres", stock: 10},
    {id:"11", nombre: "Coffee Kiss", precio: 160, img:"../images/product/Coffee-Kiss.jpeg", idCat: "Cafe", stock: 10},
    {id:"12", nombre: "Melted Temptation", precio: 150, img:"../images/product/Melted-Temptation.jpeg", idCat: "Cafe", stock: 10},
    {id:"13", nombre: "Kit-Kat Heaven", precio: 130, img:"../images/product/Kit-Kat_Heaven.jpeg", idCat: "Helados", stock: 10},
    {id:"14", nombre: "Cinnamon Infusion", precio: 120, img:"../images/product/Cinnamon-Infusion.jpeg", idCat: "Cafe", stock: 10},
    {id:"15", nombre: "Frosty Cannon", precio: 130, img:"../images/product/Frosty-Cannon.jpeg", idCat: "Helados", stock: 10},
    {id:"16", nombre: "Sugar Nightmare", precio: 220, img:"../images/product/Sugar-Nightmare.jpeg", idCat: "Helados", stock: 10},
    {id:"17", nombre: "Cookie Bloom", precio: 160, img:"../images/product/Cookie-Bloom.jpeg", idCat: "Helados", stock: 10},
    {id:"18", nombre: "Cherry Lover", precio: 155, img:"../images/product/Cherry-Lover.jpeg", idCat: "Helados", stock: 10},
    {id:"19", nombre: "FrozenBerry", precio: 110, img:"../images/product/FrozenBerry.jpeg", idCat: "Helados", stock: 10},
    {id:"20", nombre: "FrozenCacao", precio: 120, img:"../images/product/FrozenCacao.jpeg", idCat: "Helados", stock: 5},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}