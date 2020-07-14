import React, { Component } from 'react'
import MusikaLogo from '../../Images/musika.png';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MUSIKA</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item active mr-4">
                                    <a className="nav-link" href="#">FAQ</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Create Account</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-sm btn-info rounded-pill pr-5 pl-5 text-white" href="#">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar