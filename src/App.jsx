import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarritoProvider } from './context/CarritoContext'




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
            <Route path="*" element={<h2>Sitio en construcción, vuelva más tarde</h2>}  />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>

  )
}



//tenemos que checkear la funcionalidad del item detail

export default App