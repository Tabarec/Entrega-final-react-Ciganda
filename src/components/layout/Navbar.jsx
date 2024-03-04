import { Link, Outlet } from "react-router-dom";
import CartWidget from "../common/CartWidget"
import "./NavBar.css"


export const Navbar = ()=>{
    return (
        <>
        <div className= "containerNavbar">
        <Link to="/" style={{ color: "beige" }}>
          Inicio
        </Link>
        
        <ul className="categories">
          <Link to="/">Todo</Link>
          <Link to="/category/celulares">Celulares</Link>
          <Link to="/category/laptops">Laptops</Link>
          <Link to="/category/auriculares">Auriculares</Link>
        </ul> 
            <CartWidget />
        </div>
        <Outlet />
        </>
    )
}
