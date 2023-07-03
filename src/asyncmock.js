//Se crea un array con los productos y una función que retornará una promesa
const misProductos = [
    {id:1, nombre: "Macaron", precio: 25, img:"../images/product/Macaron.jpeg"},
    {id:2, nombre: "Spring Muffin", precio: 85, img:"../images/product/.jpeg"},    
    {id:3, nombre: "Winter Muffin", precio: 85, img:"../images/product/.jpeg"},
    {id:4, nombre: "Strawberry Muffin", precio: 85, img:"../images/product/.jpeg"},
    {id:5, nombre: "Wild Muffin", precio: 85, img:"../images/product/.jpeg"},
    {id:6, nombre: "Dark Muffin", precio: 85, img:"../images/product/.jpeg"},
    {id:7, nombre: "Donut", precio: 80, img:"../images/product/.jpeg"},
    {id:8, nombre: "Oatmeal Dream", precio: 150, img:"../images/product/.jpeg"},
    {id:9, nombre: "Brownie Bliss", precio: 220, img:"../images/product/.jpeg"},
    {id:10, nombre: "Chocolate Euphoria", precio: 200, img:"../images/product/.jpeg"},
    {id:11, nombre: "Coffee Kiss", precio: 160, img:"../images/product/.jpeg"},
    {id:12, nombre: "Melted Temptation", precio: 150, img:"../images/product/.jpeg"},
    {id:13, nombre: "Kit-Kat Heaven", precio: 130, img:"../images/product/.jpeg"},
    {id:14, nombre: "Cinnamon Infusion", precio: 120, img:"../images/product/.jpeg"},
    {id:15, nombre: "Frosty Cannon", precio: 130, img:"../images/product/.jpeg"},
    {id:16, nombre: "Sugar Nightmare", precio: 220, img:"../images/product/.jpeg"},
    {id:17, nombre: "Cookie Bloom", precio: 160, img:"../images/product/.jpeg"},
    {id:18, nombre: "Cherry Lover", precio: 155, img:"../images/product/.jpeg"},
    {id:19, nombre: "FrozenBerry", precio: 110, img:"../images/product/.jpeg"},
    {id:20, nombre: "FrozenCacao", precio: 120, img:"../images/product/.jpeg"},
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(misProductos);
        }, 2000)
    })
}