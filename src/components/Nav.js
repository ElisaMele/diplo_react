import { Link } from "react-router-dom"

const Nav = (props) => {

    return (
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/rooms">ROOMS</Link></li>
                <li><Link to="/gallery">GALLERY</Link></li>
                <li><Link to="/contact">CONTACTO</Link></li>
            </ul>
        </nav>

    )
}

export default Nav;