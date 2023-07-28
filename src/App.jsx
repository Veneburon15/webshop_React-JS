import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarritoProvider } from './context/CarritoContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer/> } />
            <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
            <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<h2>Sitio en construcción, vuelva más tarde</h2>}  />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>

  )
}


//Clase 10, hicimos ediciones en el código del ItemDetail y del Contador
//Minuto 1:29:46 clase 14 firebase II, proceso de prueba y validaciones de los datos
//El detalles de cada producto (que ahora es un lorem), tiene que estar acargado en la base de datos y se tiene que cambiar ese texto simulado
//Despues del 1:35:00 clase 14, salen dudas e ideas
//Agregar todos los productos al inventario


export default App