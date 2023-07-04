import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <Link to="/">
          <h1>Èclat</h1>
        </Link>
        <nav>
            <ul>
                <li> 
                    <NavLink to="/categoria/Cafe"> Café </NavLink>
                </li>
                <li>  
                    <NavLink to="/categoria/Helados"> Helados </NavLink>
                </li>
                <li>  
                    <NavLink to="/categoria/Postres"> Postres </NavLink>
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}
export default NavBar