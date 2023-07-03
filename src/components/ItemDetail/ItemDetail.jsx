import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium error, minus culpa velit quae corrupti laborum dolores labore autem illo eaque quo harum, ex unde voluptate dicta amet quos? Delectus ullam expedita nostrum provident eos vel beatae consequuntur dicta mollitia consequatur modi obcaecati facilis cumque pariatur cum neque, asperiores deserunt perspiciatis vero corrupti voluptatibus accusantium tenetur magnam culpa. Maiores numquam minima aliquam molestias nemo voluptatem blanditiis aut sunt explicabo! Quos obcaecati excepturi illum perferendis aspernatur minus sunt provident odit!
        </p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail