import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3 className='text-center'> Nombre: {nombre} </h3>
        <p>Precio:{precio} </p>
        <p>ID: {id} </p>
        <p>Stock: {stock} </p>
        <Link className='btnProducto text-center' to={`/item/${id}`} > Ver Detalles </Link>
    </div>
  )
}

export default Item