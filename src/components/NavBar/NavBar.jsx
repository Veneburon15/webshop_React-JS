import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <Link className='navigation' to="/">
          <h1><strong className='brand'>Èclat</strong></h1>
        </Link>
        <nav>
            <ul>
                <li> 
                    <NavLink className='navigation menu' to="/categoria/Cafe"> Café </NavLink>
                </li>
                <li>  
                    <NavLink className='navigation menu' to="/categoria/Helados"> Helados </NavLink>
                </li>
                <li>  
                    <NavLink className='navigation menu' to="/categoria/Postres"> Postres </NavLink>
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}
export default NavBar