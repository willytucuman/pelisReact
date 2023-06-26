import { Outlet,NavLink } from "react-router-dom";
const Layout = () =>{
    return (
        <div>
            <nav>
                <li><NavLink className={({isActive}) => isActive ? "active-green" : null} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "active-green" : null} to="/about">About</NavLink></li>
                {/* <li><NavLink className={({isActive}) => isActive ? "active-green" : null} to="/pelis">Pelis</NavLink></li> */}
                <li><NavLink className={({isActive}) => isActive ? "active-green" : null} to="/populares">Populares</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "active-green" : null} to="/estrenos">Estrenos</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "active-green" : null} to="/registro">Registro</NavLink></li>

            </nav>
            <hr />
            <Outlet/> {/*Este outlet renderizara cada una de las paginas*/}
        </div>
    )
}
export default Layout;