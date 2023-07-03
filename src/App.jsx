import Contador from './components/contador/Contador'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


const App = () => {
  return (
    <>
      <NavBar/>
      <h1 className='text-center m-2'>Èclat</h1>
      <ItemListContainer greeting={"Mis productos"}/>
      {/* <Contador stock={10} inicial={1}/> */}
    </>
  )
}

export default App
