import {useState, createContext} from 'react'

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

//El valor inicial es un objeto, con la propiedad "carrito", "total" y "cantidad total"

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    //Provisoriamente, verficamos por consola
    console.log(carrito);

    //Agregamos algunos métodos a este componente para manipular el carrito de compras
    //Función para agregar productos al carrito, evitando duplicados
    const agregarProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id)
        if (!productoExistente) {
            setCarrito (prev => [...prev, {item, cantidad}]); 
            //Esta sintaxis se utiliza para crear un nuevo array, a partir del estado anterior del carrito y agregar un nuevo objeto que representa el nuevo producto
            setCantidadTotal (prev => prev + cantidad);
            //En este caso, le decimos que se acuerde de la cantidad de un producto que tenia, y le agregue la cantidad que le agrego el cliente
            setTotal (prev => prev + (item.precio * cantidad));
            //Aqui, calcula la nueva compra, usando el valor que tenía anteriormente
        } else {
            const carritoActualizado = carrito.map (prod => {
                if (prod.item.id === item.id) {
                    return {...prod, cantidad:prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            });
            setCarrito (carritoActualizado);
            setCantidadTotal (prev => prev + cantidad);
            setTotal (prev => prev + (item.precio * cantidad));
        }
    }

    //Función para eliminar producto
    //En este caso, si se tienen 10 muffins, se van a eliminar los 10, no de a uno
    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find (prod => prod.item.id === id);
        const carritoActualizado = carrito.filter (prod => prod.item.id !== id);

        setCarrito (carritoActualizado);
        setCantidadTotal (prev => prev - productoEliminado.cantidad);
        setTotal (prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    //Función para vaciar el carrito
    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return(
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito, total, cantidadTotal}}>
            {children}
        </CarritoContext.Provider>
    )
    //En el value enviamos el valor actual del carrito y los métodos a los componentes de mi apicación que los necesiten.
    //Usamos la propiedad especial "Children", para representar a todos aquellos componentes que puedan necestar el carrito y sus métodos
}