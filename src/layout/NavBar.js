import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Gallery</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" datatarget="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/gallery">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" datatoggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}
export default NavBar