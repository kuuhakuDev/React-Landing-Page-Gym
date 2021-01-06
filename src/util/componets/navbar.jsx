import * as React from "react"
import "../bootstrap/js/src/collapse"
import "../bootstrap/scss/bootstrap.scss"
//import { Link } from "gatsby"

function Navbar(){
    const menus = ["Home", "Servicios", "Contacto", "Acerca de..."];

    function Items(props) {
        const listItems = menus.map((m, index) =>
            <li className="nav-item" key={index}>
                <a className="nav-link" href="#">{m}</a>
            </li>
        )
        return (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {listItems}
            </ul>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Healthy living</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <Items/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;